import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can handle the form submission here, such as sending the data to your server
  };

  return (
    <>
      <Navbar />
      <div className="dark:bg-slate-900 dark:text-white min-h-screen">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="mt-16 md:mt-19 items-center justify-center text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="mt-12 dark:bg-slate-900 dark:text-white text-lg leading-relaxed">
              If you have any complaints, you can reach out to us by filling the form below.
            </p>
            <br/>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4 max-w-md mx-auto text-left">
              <div>
                <label className="block text-black dark:text-white">
                  Name
                  {errors.name && <span className="text-red-500"> *</span>}
                </label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-700 dark:text-white"
                  {...register('name', { required: true })}
                />
                {errors.name && <span className="text-red-500">This field is required</span>}
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
                  {...register('email', { required: true })}
                />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
              <div>
                <label className="block text-black dark:text-white">
                  Message
                  {errors.message && <span className="text-red-500"> *</span>}
                </label>
                <textarea 
                  placeholder="Enter your message" 
                  className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-700 dark:text-white"
                  {...register('message', { required: true })}
                ></textarea>
                {errors.message && <span className="text-red-500">This field is required</span>}
              </div>
              <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-700 duration-300">
                Send Message
              </button>
            </form>
            <br/>
            <p className="mt-12 dark:bg-slate-900 dark:text-white text-lg leading-relaxed">
              We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us. Here are the ways you can get in touch with us:
              <br /><br />
              <strong>Email:</strong> <a href="mailto:info@bookstore.com" className="text-pink-500">info@bookstore.com</a>
              <br /><br />
              <strong>Phone:</strong> <a href="tel:+1234567890" className="text-pink-500">+123 456 7890</a>
              <br /><br />
              <strong>Address:</strong>
              <br />
              123 Book Street,
              <br />
              Reading City, RC 12345
              <br /><br />
              You can also follow us on our social media channels to stay updated with the latest news and offers:
              <br /><br />
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-pink-500">Facebook</a> | 
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-pink-500"> Twitter</a> | 
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500"> Instagram</a> |
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-pink-500"> YouTube</a>
            </p>
            <Link to="/">
              <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                Back to Home
              </button>
            </Link>
            <br/>
          </div>
        </div>
      </div>
      <br/>
      <Footer />
    </>
  );
}

export default Contact;
