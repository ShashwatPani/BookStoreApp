import React, { useState } from 'react';
import Cards from "./Cards";
import list from "../../src/list.json";
import { Link } from "react-router-dom";

function Course() {
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle changes in the search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the list based on search term
  const filteredList = list.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-screen">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here :)</span>
          </h1>
          <p className="mt-12 dark:bg-slate-900 dark:text-white">
            <span className="text-red-500">Explore</span> our diverse range{" "}
            <span className="text-blue-500"></span>of courses tailored to suit
            all your learning needs.{" "}
            <span className="text-red-500"> Whether</span> you're looking to
            enhance your skills, delve into new subjects, or simply satisfy your
            curiosity, we have something for everyone.{" "}
            <span className="text-red-500">
              {" "}
              Join us on a journey of knowledge and personal growth!{" "}
            </span>
            Learn from industry experts, gain practical experience, and connect
            with a community of passionate learners.
            <span className="font-semibold">Your path to success starts here.</span>
          </p>
          
        </div>

        {/* Search Bar */}
        <div className="mt-6 mb-4 flex justify-left">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search courses..."
            className="px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {filteredList.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
        
        {/* Centered Back Button */}
        <div className="flex justify-center mt-6">
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <br/>
      </div>
    </div>
  );
}

export default Course;
