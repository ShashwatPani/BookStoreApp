import React from 'react';
import Navbar from '../components/Navbar';
import JobPage from '../components/JobPage';
import Footer from '../components/Footer';

function Jobbs() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <JobPage />
      </div>
      <Footer />
    </>
  );
}

export default Jobbs;
