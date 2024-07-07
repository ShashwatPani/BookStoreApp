import React, { useState } from 'react';
import JobCard from './JobCard'; // Import your JobCard component
import jobList from "../../src/jobList.json"; // Replace with the path to your joblist JSON file
import { Link } from "react-router-dom";

function JobPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filtering jobList based on searchQuery
  const filteredJobs = jobList.filter((job) =>
    job.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-screen">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            Explore Our Job Openings
            <span className="text-pink-500"> Here :)</span>
          </h1>
          <p className="mt-12 text-base dark:text-gray-300">
            <span className="text-red-500">Browse</span> our current job openings.{" "}
            <span className="text-red-500">
              {" "}
              Find your next career opportunity with us!{" "}
            </span>
            Discover roles ranging from bookstore management to digital marketing and more.
            <span className="font-semibold">
              {" "}
              Join our team and grow with us.
            </span>
          </p>
        </div>

        {/* Search bar */}
        <div className="mt-6 mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search jobs..."
            className="w-half px-3 py-2 border rounded-md dark:bg-slate-800 dark:text-white"
          />
        </div>

        {/* Displaying filtered or all jobs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <div className="mt-6">
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <br /> {/* Line break for visual separation */}
      </div>
    </div>
  );
}

export default JobPage;
