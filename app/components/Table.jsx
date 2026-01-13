import React from "react";

const Table = () => {
  return (
    <div className="p-4 w-[90%] mx-auto my-3 rounded-md text-white bg-[#192237] rounded-5">
      <h2>Latest Transaction</h2>
      <table className="w-full mt-10">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Status</th>
            <th className="text-left">Date</th>
            <th className="text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {[
            ...Array(5).map((_, index) => {
              return (
                <tr className="hover:bg-gray-900 cursor-pointer">
                  <td className="p-3">Sara</td>
                  <td className="p-3">Active</td>
                  <td className="p-3">24th Jan 2026</td>
                  <td className="p-3">$1000</td>
                </tr>
              );
            }),
          ]}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
