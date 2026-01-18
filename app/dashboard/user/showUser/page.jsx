import React from "react";
import { User, Users, Edit, Trash2, CheckCircle, XCircle } from "lucide-react";
import { getData } from "@/app/backend/data/userData";
import { deleteData } from "@/app/backend/actions/userActions";
import Button from "@/app/components/Button";

// Mock user data - you'll replace this with your actual data
const mockUsers = [
  {
    id: 1,
    username: "john_doe",
    email: "john@example.com",
    password: "••••••••",
    phone: "+1 (555) 123-4567",
    role: "Admin",
    status: "Active",
    comments: "System administrator with full access",
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    username: "jane_smith",
    email: "jane@example.com",
    password: "••••••••",
    phone: "+1 (555) 987-6543",
    role: "User",
    status: "Active",
    comments: "Regular user account",
    createdAt: "2024-01-10",
  },
  {
    id: 3,
    username: "bob_wilson",
    email: "bob@example.com",
    password: "••••••••",
    phone: "+1 (555) 456-7890",
    role: "User",
    status: "Inactive",
    comments: "Account temporarily suspended",
    createdAt: "2024-01-05",
  },
  {
    id: 4,
    username: "alice_jones",
    email: "alice@example.com",
    password: "••••••••",
    phone: "+1 (555) 789-0123",
    role: "Admin",
    status: "Active",
    comments: "Marketing department admin",
    createdAt: "2024-01-01",
  },
];

const totalUsers = mockUsers?.length || 0;

const UsersTable = async () => {
  let users = await getData();

  return (
    <div className="p-5 bg-[#192237] rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#151C2D] rounded-lg">
            <Users className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Users Management</h2>
            <p className="text-gray-400">Manage all registered users</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-white">{totalUsers}</p>
          <p className="text-gray-400">Total Users</p>
        </div>
      </div>

      {/* Search and Stats Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Search users by name, email, or phone..."
              className="w-full bg-[#151C2D] text-gray-300 rounded-lg py-3 px-4 pl-12 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <User className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-[#151C2D] px-4 py-3 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-white font-semibold">
                {mockUsers.filter((u) => u.status === "Active").length}
              </span>
              <span className="text-gray-400">Active</span>
            </div>
          </div>
          <div className="bg-[#151C2D] px-4 py-3 rounded-lg">
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-white font-semibold">
                {mockUsers.filter((u) => u.status === "Inactive").length}
              </span>
              <span className="text-gray-400">Inactive</span>
            </div>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto rounded-lg border border-gray-800">
        <table className="w-full">
          <thead className="bg-[#151C2D]">
            <tr>
              <th className="py-4 px-6 text-left text-gray-300 font-semibold">
                User
              </th>
              <th className="py-4 px-6 text-left text-gray-300 font-semibold">
                Contact
              </th>
              <th className="py-4 px-6 text-left text-gray-300 font-semibold">
                Role
              </th>
              <th className="py-4 px-6 text-left text-gray-300 font-semibold">
                Status
              </th>
              <th className="py-4 px-6 text-left text-gray-300 font-semibold">
                Joined
              </th>
              <th className="py-4 px-6 text-left text-gray-300 font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {users?.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-[#151C2D]/50 cursor-pointer transition-colors duration-200"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <User className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        {user.username}
                      </p>
                      <p className="text-sm text-gray-400">{user.comments}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div>
                    <p className="text-white">{user.email}</p>
                    <p className="text-sm text-gray-400">{user.phone}</p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      user.role === "Admin"
                        ? "bg-purple-500/20 text-purple-300"
                        : "bg-blue-500/20 text-blue-300"
                    }`}
                  >
                    {user.role == 1 ? "Admin" : "User"}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                      user.status == "1"
                        ? "bg-green-500/20 text-green-300"
                        : "bg-red-500/20 text-red-300"
                    }`}
                  >
                    {user.status == 1 ? (
                      <CheckCircle className="w-3 h-3" />
                    ) : (
                      <XCircle className="w-3 h-3" />
                    )}
                    {user.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-300">
                  {String(user.createdAt).slice(0, 15)}
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <button className="p-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <form action={deleteData}>
                      <input type="hidden" name="id" value={user?._id} />
                      {/* <button className="p-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button> */}
                      <Button
                        className=""
                        content={
                          <Trash2 className="w-4 h-4 cursor-pointer hover:scale-110 transition" />
                        }
                        bg={"bg-red-500/30"}
                        // loadingBg={"bg-red-500/80"}
                        loadingText={"..."}
                      />
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-gray-400">
          Showing <span className="text-white font-semibold">1</span> to{" "}
          <span className="text-white font-semibold">{mockUsers.length}</span>{" "}
          of{" "}
          <span className="text-white font-semibold">{mockUsers.length}</span>{" "}
          users
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-[#151C2D] text-gray-300 rounded-lg hover:bg-gray-800 transition-colors">
            Previous
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            1
          </button>
          <button className="px-4 py-2 bg-[#151C2D] text-gray-300 rounded-lg hover:bg-gray-800 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
