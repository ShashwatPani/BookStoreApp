import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <Navbar />
      <div className="dark:bg-slate-900 dark:text-white min-h-screen flex flex-col justify-between">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="mt-16 md:mt-19 items-center justify-center text-center flex-grow">
            <div className="max-w-screen max-h-screen">
              <h1 className="text-2xl md:text-4xl font-bold mb-4">About Us</h1>
              <p className="mt-6 dark:bg-slate-900 dark:text-white text-lg leading-relaxed">
                Welcome to our Book Store! We are passionate about providing a wide range of books to cater to all kinds of readers. Our mission is to foster a love for reading and learning in our community. Whether you are looking for the latest bestsellers, classic literature, or academic resources, we have something for everyone.
                Our vision is to create a space where book lovers can discover, connect, and share their passion for reading. We believe in the transformative power of books and strive to make them accessible to everyone.
                Join us on a journey of discovery and let us help you find your next great read. Thank you for being a part of our story! 
                <br/><br/>In our bookstore, you'll find not only books but also a community of readers who are as passionate about books as you are. We curate our collection to inspire and educate, aiming to enrich lives through the joy of reading. Whether you're exploring new genres or revisiting old favorites, we're here to guide you on your literary journey.
                Beyond books, we host events and discussions to foster dialogue and connection among readers. Our goal is to create a welcoming environment where everyone feels valued and inspired. Join us in celebrating the written word and discovering new perspectives together.
                <br /><br />
                We are committed to sustainability and ethical practices, ensuring that our books are sourced responsibly and contribute positively to the environment. By choosing our bookstore, you support our efforts to make a meaningful impact in our community and beyond.
              </p>
              <p className="mt-6 dark:bg-slate-900 dark:text-white text-lg leading-relaxed">
                At our bookstore, we believe that books have the power to change lives. Whether you're seeking knowledge, entertainment, or inspiration, we're dedicated to helping you find the perfect book for every occasion. Our knowledgeable staff is here to provide personalized recommendations and assist you in exploring our diverse selection.
                
                We strive to create a welcoming space where everyone feels encouraged to explore and expand their literary horizons. From children's books to rare collectibles, our carefully curated collection reflects our passion for storytelling and our commitment to fostering a love of reading in all ages.
                <br/><br/>
                Thank you for choosing our bookstore as your destination for literary discovery. Whether you're a lifelong reader or just beginning your journey, we look forward to being a part of your reading adventures. Visit us today and let's embark on a new chapter together!
              </p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link to="/">
              <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
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
