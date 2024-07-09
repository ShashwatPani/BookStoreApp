import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import { useForm } from 'react-hook-form';
import axios from "axios";
import toast from 'react-hot-toast';

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
  
    await axios.post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('Signup successful!');
          // Optionally, reset form fields or redirect to another page
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        }
      })
      .catch((err) => {
        if(err.response){
          console.error(err);
          toast.error("Error:" + err.response.data.message);
        }
      });
  };

  // Listen for changes in localStorage to navigate after login
  useEffect(() => {
    const authUser = JSON.parse(localStorage.getItem("Users"));
    if (authUser && authUser.user) {
      navigate(from, { replace: true });
    }
  }, [navigate, from]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-[600px]">
        <div className="modal-box bg-white dark:bg-gray-800 rounded-lg p-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">
              ✕
            </Link>

            <h3 className="font-bold text-lg text-black dark:text-white">Signup</h3>
            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-black dark:text-white">
                  Fullname
                  {errors.fullname && <span className="text-red-500"> *</span>}
                </label>
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-700 dark:text-white"
                  {...register('fullname', { required: 'Fullname is required' })}
                />
                {errors.fullname && <span className="text-red-500">{errors.fullname.message}</span>}
              </div>
              <div>
                <label className="block text-black dark:text-white">
                  Email
                  {errors.email && <span className="text-red-500"> *</span>}
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-700 dark:text-white"
                  {...register('email', { required: 'Email is required' })}
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              </div>
              <div>
                <label className="block text-black dark:text-white">
                  Password
                  {errors.password && <span className="text-red-500"> *</span>}
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-700 dark:text-white"
                  {...register('password', { required: 'Password is required' })}
                />
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200"
              >
                Signup
              </button>
            </div>
          </form>
          <p className="mt-4 text-black dark:text-white text-md">
            Already registered?{' '}
            <button
              className="underline text-pink-500 cursor-pointer"
              onClick={() => document.getElementById('my_modal_3').showModal()} // Replace with your modal ID
            >
              Login
            </button>
          </p>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Signup;
