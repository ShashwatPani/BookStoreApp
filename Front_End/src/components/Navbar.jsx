import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Login from "../../src/components/Login";
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import { useAuth } from '../context/AuthProvider';
import Logout from '../../src/components/Logout';

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const element = document.documentElement;
  const location = useLocation();
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    if (location.state?.openLoginDialog) {
      document.getElementById("my_modal_3").showModal();
    }
  }, [location]);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    <li key="home">
      <Link to="/">Home</Link>
    </li>,
    <li key="course">
      <Link to="/course">Course</Link>
    </li>,
    <li key="contact">
      <Link to="/contact">Contact</Link>
    </li>,
    <li key="about">
      <Link to="/about">About</Link>
    </li>,
    <li key="jobs">
      <Link to="/jobs">Jobs</Link>
    </li>,
    <li key="theme-toggle">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="focus:outline-none"
      >
        {theme === "dark" ? <SunIcon className="h-5 w-5 text-yellow-500" /> : <MoonIcon className="h-5 w-5 text-gray-900" />}
      </button>
    </li>,
  ];

  return (
    <div className={`w-full fixed top-0 left-0 right-0 z-50 ${sticky ? 'shadow-md bg-base-200 dark:bg-slate-600 dark:text-white' : 'dark:bg-slate-900 dark:text-white'}`}>
      <div className={`navbar max-w-screen-2xl mx-auto md:px-20 px-4`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 dark:bg-slate-800 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navItems}
            </ul>
          </div>
          <a className="text-2xl font-bold cursor-pointer">Book Store</a>
        </div>
        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          {
            authUser?<Logout/>:
            <div>
            <a
              className="bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </a>
            <Login />
          </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar;
