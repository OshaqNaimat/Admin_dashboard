"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Search = () => {
  const pathname = usePathname();

  return (
    <div>
      <input
        type="text"
        placeholder="Search users by name, email, or phone..."
        className="w-full bg-[#151C2D] text-gray-300 rounded-lg py-3 px-4 pl-12 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Search;
