import React from "react";
import { IoMdPerson } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="bg-[#192237]  min-h-screen col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
      <div className="flex text-white  items-center p-5 gap-2 hover:scale-95 hover:bg-gray-900 rounded-md duration-100 transition cursor-pointer">
        <IoMdPerson className="w-10 h-10 rounded-full bg-gray-500 p-3" />
        <div className="flex flex-col">
          <p className="font-bold text-md">Username</p>
          <span className="text-gray-300 font-light">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
