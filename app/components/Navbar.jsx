import React from "react";
import { FaBell, FaChair, FaGlobe } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-[90%] mx-auto my-5 text-white  bg-[#192237] p-4 rounded-md flex justify-between ">
      <h2 className="text-xl">Dashboard</h2>
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search.."
          className="bg-[#192237] p-2 rounded-md"
        />
        <FaBell />
        <FaGlobe />
        <FaChair />
      </div>
    </div>
  );
};

export default Navbar;
