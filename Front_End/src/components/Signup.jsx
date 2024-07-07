import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';
import { useForm } from 'react-hook-form';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Replace with your actual signup logic
  };

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
                  Username
                  {errors.username && <span className="text-red-500"> *</span>}
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-700 dark:text-white"
                  {...register('username', { required: 'Username is required' })}
                />
                {errors.username && <span className="text-red-500">{errors.username.message}</span>}
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
