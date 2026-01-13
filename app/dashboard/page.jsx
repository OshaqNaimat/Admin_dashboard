import React from "react";
import Card from "../components/Card";
import Table from "../components/Table";
import Charts from "../components/Charts";

const page = () => {
  return (
    <div className="grid grid-cols-5 px-5 gap-3">
      <div className="col-span-4">
        <Card />
        <Table />
        <Charts />
      </div>

      <div className="col-span-1 text-white image-bg p-4">
        <div className="flex text-white  gap-4">
          🔥<h4 className="text-xl font-bold">Available Now</h4>
        </div>
        <p className="font-semibold">Lorem ipsum dolor sit amet.</p>
        <p className="text-gray-400 font-bold">
          Lorem, ipsum dolor.Lorem, ipsum dolor.
        </p>
        <button className="w-full p-3 bg-purple-500 rounded-md mt-2">
          Available Now
        </button>
      </div>
    </div>
  );
};

export default page;
