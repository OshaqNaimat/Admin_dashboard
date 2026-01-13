import React from "react";
import { IoMdPerson } from "react-icons/io";
import sidebarData from "../data/SidebarData";

const Sidebar = () => {
  return (
    <div className="bg-[#192237] sticky left-0 h-[90vh]  overflow-y-scroll min-h-screen col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
      <div className="flex text-white  items-center p-5 gap-2 hover:scale-95 hover:bg-gray-900 rounded-md duration-100 transition cursor-pointer">
        <IoMdPerson className="w-10 h-10 rounded-full bg-gray-500 p-3" />
        <div className="flex flex-col">
          <p className="font-bold text-md">Username</p>
          <span className="text-gray-300 font-light">Admin</span>
        </div>
      </div>

      <ul className="flex flex-col gap-3">
        {sidebarData.map((item, index) => {
          return (
            <li className="text-gray-500 font-semibold" key={index}>
              {item.section}
              <ul>
                {item.Lists.map((item, index) => {
                  return (
                    <li
                      className="text-white items-center gap-2 ms-5 my-2 hover:bg-gray-900 p-2 rounded-md cursor-pointer hover:scale-95 duration-100 transition font-semibold flex"
                      key={index}
                    >
                      {item.icon}
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
