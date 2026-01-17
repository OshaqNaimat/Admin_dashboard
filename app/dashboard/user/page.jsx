import { addData } from "@/app/backend/actions/userActions";
import { addUser } from "@/app/backend/actions/userActions";
import Button from "@/app/components/Button";
import React from "react";

const page = () => {
  return (
    <>
      <form action={addData} className="p-5 bg-[#192237]">
        <div className="flex mb-3 gap-3">
          <input
            name="username"
            type="text"
            className="bg-[#151C2D] w-full outline-0 p-3 placeholder:text-gray-400 text-gray-400"
            placeholder="Username"
          />
          <input
            name="email"
            type="email"
            className="bg-[#151C2D] w-full outline-0 p-3 placeholder:text-gray-400 text-gray-400"
            placeholder="Email"
          />
        </div>
        <div className="flex mb-3 gap-3">
          <input
            name="password"
            type="password"
            className="bg-[#151C2D] w-full outline-0 p-3 placeholder:text-gray-400 text-gray-400"
            placeholder="Password"
          />
          <input
            name="phone"
            type="text"
            className="bg-[#151C2D] w-full outline-0 p-3 placeholder:text-gray-400 text-gray-400"
            placeholder="Phone"
          />
        </div>
        <div className="flex mb-3 gap-3">
          <select
            name="role"
            id=""
            className="bg-[#151C2D] w-full outline-0 p-3 placeholder:text-gray-400 text-gray-400"
          >
            <option selected disabled>
              Select Role
            </option>
            <option value="1">Admin</option>
            <option value="0">User</option>
          </select>
          <select
            name="status"
            id=""
            className="bg-[#151C2D] w-full outline-0 p-3 placeholder:text-gray-400 text-gray-400"
          >
            <option selected disabled>
              Select Status
            </option>
            <option value="1">Active</option>
            <option value="0">Inactive</option>
          </select>
        </div>
        <textarea
          rows={5}
          placeholder="Comments..."
          className="bg-[#151C2D] w-full outline-0 p-3 placeholder:text-gray-400 text-gray-400"
          name="comments"
          id=""
        ></textarea>

        <Button
          bg="bg-green-500"
          loadingBg={"bg-gray-500"}
          content={"Add user"}
          loadingText={"Adding..."}
        />
      </form>
    </>
  );
};

export default page;
