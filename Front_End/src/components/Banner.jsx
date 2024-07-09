import React from "react";
import BannerImg from "../../src/Library.jpg";

function Banner() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 dark:bg-slate-900 dark:text-white">
        <div className="order-2 md:order-1 md:w-1/2 mt-12 md:mt-32 dark:bg-slate-900 dark:text-white">
          <div className="space-y-12 dark:bg-slate-900 dark:text-white">
            <h1 className="text-4xl font-bold dark:bg-slate-900 dark:text-white">
              Hello and welcome everyone to learn something
              <span className="text-pink-500"> new everyday!!!!</span>
            </h1>
            <p className="text-xl">
              We are excited to welcome everyone old and new equally to our happy working place. Hope we can serve you to the fullest of our extent. Our team is dedicated to providing exceptional service and support to ensure your experience with us is nothing short of extraordinary. We value each and every one of our customers and are committed to building lasting relationships based on trust and satisfaction. Serving our customers is our utmost priority. We as a group take pride in providing our customers with the best possible service.
            </p>
            <p className="mt-4 text-lg">
              Join us today and start your journey towards learning and growth!
            </p>
          </div>
        </div>
        <div className="dark:bg-slate-900 order-1 w-full md:w-1/2 relative">
          <img src={BannerImg} className="w-full h-auto" alt="Banner" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
