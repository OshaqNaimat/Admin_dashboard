import React from "react";
import { FaUser } from "react-icons/fa";

const Card = () => {
  return (
    <div className="grid mx-auto gap-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <div className="p-5 w-full bg-[#192237] text-gray-300 rounded-md shadow">
        <div className="felx gap-3 items-center">
          <FaUser />
          <h4 className="text-xl">Total Users</h4>
        </div>
        <h4 className="font-semibold">10,400</h4>
      </div>
      <div className="p-5 w-full bg-[#192237] text-gray-300 rounded-md shadow">
        <div className="felx gap-3 items-center">
          <FaUser />
          <h4 className="text-xl">Total Users</h4>
        </div>
        <h4 className="font-semibold">10,400</h4>
      </div>
      <div className="p-5 w-full bg-[#192237] text-gray-300 rounded-md shadow">
        <div className="felx gap-3 items-center">
          <FaUser />
          <h4 className="text-xl">Total Users</h4>
        </div>
        <h4 className="font-semibold">10,400</h4>
      </div>
    </div>
  );
};

export default Card;
