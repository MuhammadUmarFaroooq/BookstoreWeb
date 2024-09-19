import React, { useState, useEffect } from "react";
import Cards from "./Cards";

import axios from "axios";

function Freebook() {

  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book/getbooks");

        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="w-full container mx-auto md:px-20 px-4 py-6">
        <div className="text-center mb-6">
          <h1 className="font-semibold text-2xl md:text-3xl pb-2">Free Offered Courses</h1>
          <p className="text-gray-700 dark:text-gray-300">
            Discover our range of free courses designed to help you learn and grow. Explore topics ranging from programming to design and more!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Freebook;
