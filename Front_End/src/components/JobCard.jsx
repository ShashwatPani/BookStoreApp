// JobCard.js

import React from 'react';
import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card card-side bg-base-100 shadow-xl">
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
