import React from "react";
import { Link } from "react-router-dom";
import { PiLineVertical } from "react-icons/pi";

const Navbar = () => {
  // const pathName = useLocation()
  return (
    <div className="border-b-2 border sticky top-0 left-0 w-full bg-white">
      <nav className="flex items-center justify-between   p-5 container mx-auto ">
        <div className="flex items-center gap-10">
          <div className="text-blue-800 font-semibold text-2xl cursor-pointer">
            JOB_PORTAL
          </div>
          <div className="flex gap-5">
            <div className="">Home</div>
            <div className="">Company Review</div>
            <div className="">Salary guide</div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <Link to={"/signin"}>SignIn</Link>
          <div>
            <PiLineVertical />
          </div>
          <Link to={"/signup"}>Employers / Post Job</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
