import React, { useEffect } from "react";

import { HiMapPin } from "react-icons/hi2";
import JobSection from "./JobSection";
import { FaSearch } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  // const navigate = useNavigate()
  // useEffect(() => {
  //   if (!sessionStorage.getItem("email")) {
  //     navigate("/signin");
  //   }
  // }, [navigate]);

  return (
    <div className="container mx-auto p-4 ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-2 mt-5 border max-w-3xl mx-auto mb-10 shadow-md border-gray-500 rounded-lg">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <span className="text-xl">
            <IoSearchSharp   />
          </span>
          <input
            type="text"
            placeholder="Job title, company"
            className="outline-none w-full md:w-auto"
          />
        </div>

        <div className="hidden md:block">|</div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <span className="text-xl">
            <HiMapPin />
          </span>
          <input
            type="text"
            placeholder='City, state, zip code, or "remote"'
            className="outline-none w-full md:w-auto"
          />
        </div>

        <button className="bg-blue-800 text-white font-semibold px-4 py-2 rounded w-full md:w-auto">
          Find Jobs
        </button>
      </div>

      <JobSection />
    </div>
  );
};

export default Home;
