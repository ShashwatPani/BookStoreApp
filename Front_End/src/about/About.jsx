import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <Navbar />
      <div className="dark:bg-slate-900 dark:text-white min-h-screen">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">About Us</h1>
            <p className="mt-12 dark:bg-slate-900 dark:text-white text-lg leading-relaxed">
              Welcome to our Book Store! We are passionate about providing a wide range of books to cater to all kinds of readers. Our mission is to foster a love for reading and learning in our community. Whether you are looking for the latest bestsellers, classic literature, or academic resources, we have something for everyone.
              <br /><br />
              Our vision is to create a space where book lovers can discover, connect, and share their passion for reading. We believe in the transformative power of books and strive to make them accessible to everyone.
              <br /><br />
              Join us on a journey of discovery and let us help you find your next great read. Thank you for being a part of our story!
            </p>
            <Link to="/">
              <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-700 duration-300">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
