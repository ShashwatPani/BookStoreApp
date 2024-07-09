// JobCard.js

import React from 'react';
import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div className="mt-2 my-2 p-1 ">
      <div className="card card-side bg-base-100 rounded-lg shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white p-4">
        <div className="card-body">
          <h2 className="card-title">{job.position}</h2>
          <p>{job.description}</p>
          <div className="card-actions justify-end">
            <Link to="/apply" className="btn btn-primary">Apply Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
