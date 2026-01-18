"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Search = () => {
  const pathname = usePathname();
  let searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleChange = (e) => {
    let params = new URLSearchParams(searchParams);
    if (e.target.value == "") {
      params.delete("name");
    } else {
      params.set("name", e.target.value);
    }
    replace(`${pathname}?${params}`);
  };

  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search users by name, email, or phone..."
        className="w-full bg-[#151C2D] text-gray-300 rounded-lg py-3 px-4 pl-12 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Search;
