"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Search = () => {
  const pathname = usePathname();
  let searchParams = useSearchParams();

  //   change the link

  const { replace } = useRouter();

  let params = new URLSearchParams(searchParams);

  params.set("name", "thisisatest");
  replace(`${pathname}?q=${params}`);

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
