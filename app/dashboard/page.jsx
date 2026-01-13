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

      <div className="col-span-1">
        <img
          width={"100%"}
          src="https://www.shutterstock.com/image-photo/spaceman-spacesuit-flight-outer-space-600nw-2556675931.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default page;
