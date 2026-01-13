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

      <div className="col-span-1 image-bg"></div>
    </div>
  );
};

export default page;
