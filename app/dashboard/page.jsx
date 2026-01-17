import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Table from "../components/Table";
import Charts from "../components/Charts";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-5  gap-3">
        <div className="col-span-4">
          <Card />
          <Table />
          <Charts />
        </div>

        {/* image section */}
        <div
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.5)),url(https://files.idyllic.app/files/static/2413680?width=256&optimizer=image)",
            height: "max-content",
          }}
          className="col-span-1 p-4 text-white image-bg"
        >
          <div className="flex gap-4 text-white">
            🔥
            <h4 className="text-xl font-bold">Available Now</h4>
          </div>
          <p className="font-bold">Lorem ipsum dolor sit amet.</p>

          <p className="text-gray-400 font-bold">
            Lorem, ipsum dolor.Lorem, ipsum dolor.
          </p>
          <p className="text-gray-400 font-bold">
            Lorem, ipsum dolor.Lorem, ipsum dolor.
          </p>

          <button className="w-full p-2 mt-2 bg-purple-500 rounded-md">
            Available Now
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
