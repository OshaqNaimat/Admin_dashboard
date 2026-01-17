import React from "react";
import { FaUser } from "react-icons/fa";
import { sidebarData } from "../data/sidebarData";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <div className="min-h-screen col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 bg-[#192237] xl:col-span-2 p-5">
        <div className="flex gap-4">
          <div className="h-10 flex justify-center items-center w-10 rounded-full bg-gray-300">
            <FaUser />
          </div>
          <div className="text-white">
            <h3 className="font-bold">Username</h3>
            <p className="text-gray-500">Role</p>
          </div>
        </div>

        <ul className="flex flex-col gap-3">
          {sidebarData.map((item, index) => {
            return (
              <li className="text-gray-300 font-semibold" key={index}>
                {item.name}

                <ul className="flex ms-4 flex-col gap-3">
                  {item.list.map((item2, index2) => {
                    return (
                      <Link
                        href={item2.path}
                        className="text-gray-300 py-3 hover:bg-gray-900 px-3 flex gap-3 items-center font-semibold"
                        key={index2}
                      >
                        {item2.icon} {item2.name}
                      </Link>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
