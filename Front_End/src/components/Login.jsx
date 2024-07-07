import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg text-black dark:text-white">Login</h3>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <label className="block text-black dark:text-white">
                Email
                {errors.email && <span className="text-red-500"> *</span>}
              </label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-700 dark:text-white"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            {/* Password */}
            <div className="mt-4 space-y-2">
              <label className="block text-black dark:text-white">
                Password
                {errors.password && <span className="text-red-500"> *</span>}
              </label>
              <input 
                type="password" 
                placeholder="Enter your password" 
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-700 dark:text-white"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-red-500">This field is required</span>}
            </div>
            {/* Button and Link */}
            <div className="flex justify-between items-center mt-4">
              <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>Not Registered? {" "}
                <Link 
                  to="/signup"
                  className="underline text-pink-500 font-semibold cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form> {/* Closing the form tag here */}
        </div>
      </dialog>
    </div>
  );
}

export default Login;
