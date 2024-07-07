import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Apply() {
  const colleges = [
    "Harvard University",
    "Stanford University",
    "Massachusetts Institute of Technology",
    "California Institute of Technology",
    "University of Oxford",
    "University of Cambridge",
    "Princeton University",
    "Yale University",
    "University of Chicago",
    "Columbia University",
    "Indian Institute of Technology Bombay",
    "Indian Institute of Technology Delhi",
    "Indian Institute of Technology Madras",
    "Indian Institute of Technology Kanpur",
    "Indian Institute of Technology Kharagpur",
    "Indian Institute of Technology Roorkee",
    "Indian Institute of Technology Guwahati",
    "Indian Institute of Technology Hyderabad",
    "Indian Institute of Technology Indore",
    "Indian Institute of Technology BHU (Varanasi)",
    "Indian Institute of Technology Gandhinagar",
    "Indian Institute of Technology Jodhpur",
    "Indian Institute of Technology Patna",
    "Indian Institute of Technology Ropar",
    "Indian Institute of Technology Mandi",
    "Indian Institute of Technology (ISM) Dhanbad",
    "Indian Institute of Technology Bhilai",
    "Indian Institute of Technology Goa",
    "Indian Institute of Technology Jammu",
    "Indian Institute of Technology Palakkad",
    "Indian Institute of Technology Tirupati"
  ];

  const ethnicities = [
    "Asian",
    "Black or African American",
    "Hispanic or Latino",
    "Native American or Alaska Native",
    "Native Hawaiian or Other Pacific Islander",
    "White",
    "Other",
    "Prefer not to say"
  ];

  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
    // Implement your form submission logic here (e.g., API call)
  };

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    // Update formData state
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 mt-20">
        <h1 className="text-2xl font-bold mb-4">Job Application Form</h1>
        {submitted ? (
          <div className="text-center p-4 bg-green-100 border-t border-b border-green-500 text-green-700">
            Your application is submitted. Thank you for showing interest in working with us.
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="max-w-[75%]">
              <label className="block text-sm font-medium" htmlFor="name">
                Name
                {errors.name && <span className="text-red-500"> *</span>}
              </label>
              <input
                type="text"
                id="name"
                className={`mt-1 block w-full border rounded-md p-2 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                onChange={handleChange}
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </div>
            <div className="max-w-[75%]">
              <label className="block text-sm font-medium" htmlFor="primaryEducation">
                Primary Education (10th)
                {errors.primaryEducation && <span className="text-red-500"> *</span>}
              </label>
              <input
                type="text"
                id="primaryEducation"
                className={`mt-1 block w-full border rounded-md p-2 ${errors.primaryEducation ? 'border-red-500' : 'border-gray-300'}`}
                onChange={handleChange}
                {...register('primaryEducation', { required: 'Primary Education is required' })}
              />
              {errors.primaryEducation && <span className="text-red-500">{errors.primaryEducation.message}</span>}
            </div>
            <div className="max-w-[75%]">
              <label className="block text-sm font-medium" htmlFor="secondaryEducation">
                Secondary Education (12th)
                {errors.secondaryEducation && <span className="text-red-500"> *</span>}
              </label>
              <input
                type="text"
                id="secondaryEducation"
                className={`mt-1 block w-full border rounded-md p-2 ${errors.secondaryEducation ? 'border-red-500' : 'border-gray-300'}`}
                onChange={handleChange}
                {...register('secondaryEducation', { required: 'Secondary Education is required' })}
              />
              {errors.secondaryEducation && <span className="text-red-500">{errors.secondaryEducation.message}</span>}
            </div>
            <div className="max-w-[75%]">
              <label className="block text-sm font-medium" htmlFor="college">
                College
                {errors.college && <span className="text-red-500"> *</span>}
              </label>
              <select
                id="college"
                className={`mt-1 block w-full border rounded-md p-2 ${errors.college ? 'border-red-500' : 'border-gray-300'}`}
                onChange={handleChange}
                {...register('college', { required: 'College is required' })}
              >
                <option value="">Select College</option>
                {colleges.map((college, index) => (
                  <option key={index} value={college}>{college}</option>
                ))}
              </select>
              {errors.college && <span className="text-red-500">{errors.college.message}</span>}
            </div>
            <div className="max-w-[75%]">
              <label className="block text-sm font-medium" htmlFor="gender">
                Gender
                {errors.gender && <span className="text-red-500"> *</span>}
              </label>
              <select
                id="gender"
                className={`mt-1 block w-full border rounded-md p-2 ${errors.gender ? 'border-red-500' : 'border-gray-300'}`}
                onChange={handleChange}
                {...register('gender', { required: 'Gender is required' })}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
              {errors.gender && <span className="text-red-500">{errors.gender.message}</span>}
            </div>
            <div className="max-w-[75%]">
              <label className="block text-sm font-medium" htmlFor="ethnicity">
                Ethnicity
                {errors.ethnicity && <span className="text-red-500"> *</span>}
              </label>
              <select
                id="ethnicity"
                className={`mt-1 block w-full border rounded-md p-2 ${errors.ethnicity ? 'border-red-500' : 'border-gray-300'}`}
                onChange={handleChange}
                {...register('ethnicity', { required: 'Ethnicity is required' })}
              >
                <option value="">Select Ethnicity</option>
                {ethnicities.map((ethnicity, index) => (
                  <option key={index} value={ethnicity}>{ethnicity}</option>
                ))}
              </select>
              {errors.ethnicity && <span className="text-red-500">{errors.ethnicity.message}</span>}
            </div>
            <div className="max-w-[75%]">
              <label className="block text-sm font-medium" htmlFor="workedWithUs">
                Have you ever worked with us?
                {errors.workedWithUs && <span className="text-red-500"> *</span>}
              </label>
              <select
                id="workedWithUs"
                className={`mt-1 block w-full border rounded-md p-2 ${errors.workedWithUs ? 'border-red-500' : 'border-gray-300'}`}
                onChange={handleChange}
                {...register('workedWithUs', { required: 'This field is required' })}
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {errors.workedWithUs && <span className="text-red-500">{errors.workedWithUs.message}</span>}
            </div>
            <div className="max-w-[75%]">
              <label className="block text-sm font-medium" htmlFor="referral">
                How are you applying (Referral)?
              </label>
              <input
                type="text"
                id="referral"
                className={`mt-1 block w-full border rounded-md p-2 ${errors.referral ? 'border-red-500' : 'border-gray-300'}`}
                onChange={handleChange}
                {...register('referral')}
              />
            </div>
            <div className="max-w-[75%]">
              <label className="block text-sm font-medium" htmlFor="resume">
                Attach Resume
              </label>
              <input
                type="file"
                id="resume"
                className={`mt-1 block w-full border rounded-md p-2 ${errors.resume ? 'border-red-500' : 'border-gray-300'}`}
                onChange={handleChange}
                {...register('resume')}
              />
              {errors.resume && <span className="text-red-500">{errors.resume.message}</span>}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit Application
            </button>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Apply;
