import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../src/list.json";
import Cards from "./Cards"; // Adjust the path if necessary
import axios from "axios";

function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async() => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((data) => data.category === "Free");
        setBook(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  },[]);

  const [searchTerm, setSearchTerm] = useState('');


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Function to handle changes in the search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Books</h1>
        <p>These are all the free books we have on offer...</p>
      </div>
      <div className="mt-6 mb-4 flex justify-left">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search free books..."
          className="px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
        />
      </div>
      <div>
        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
