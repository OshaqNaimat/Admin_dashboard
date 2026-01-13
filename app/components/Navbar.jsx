import React from "react";
import { FaBell, FaChair, FaGlobe } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="">
      <div className="w-[90%] h-10 mx-auto my-5 text-white  bg-[#192237] p-7 rounded-md flex justify-between items-center ">
        <h2 className="text-xl">Dashboard</h2>
        <div className="flex justify-between items-center gap-3">
          <input
            type="text"
            placeholder="Search.."
            className=" p-2 rounded-md bg-gray-600 outline-0"
          />
          <FaBell className="hover:scale-95 cursor-pointer transition" />
          <FaGlobe className="hover:scale-95 cursor-pointer transition" />
          <FaChair className="hover:scale-95 cursor-pointer transition" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
