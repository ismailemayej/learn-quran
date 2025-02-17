"use client";

import React, { useEffect, useState } from "react";
import { GetAllUsers } from "@/app/api/AllUsers";
import Allusers from "@/components/Allusers";
import { userInformation } from "@/app/api/UserInformation";

interface UserType {
  _id: string;
  email: string;
  fullName: string;
  phone: number;
  course: string;
  isApprove: boolean;
}

export default function UserList() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Fetch users from the backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const { user } = await userInformation();
        setCurrentUser(user);
        const response = await GetAllUsers();
        if (response && Array.isArray(response?.users)) {
          setUsers(response.users);
        } else {
          throw new Error("Invalid data received from API.");
        }
      } catch (err: any) {
        console.error("Error fetching users:", err);
        setError(err.message || "Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Filter users by mobile number
  const filteredUsers = users.filter((user) =>
    user.phone.toString().includes(searchQuery)
  );

  // Function to highlight matching numbers
  const highlightMatch = (phone: number) => {
    const phoneStr = phone.toString();
    if (!searchQuery) return phoneStr; // No search query, return normal phone
    const regex = new RegExp(`(${searchQuery})`, "gi");
    return phoneStr.replace(regex, `${searchQuery}`);
  };

  // Render logic to handle loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="px-4">
      {/* Search Box */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by phone number..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full lg:w-[50%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* User List */}
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user._id}
              className={`p-4 border rounded-lg ${
                searchQuery && user.phone.toString().includes(searchQuery)
                  ? "border-yellow-400 bg-slate-100 "
                  : "border-gray-300"
              }`}
            >
              <Allusers user={{ ...user, phone: highlightMatch(user.phone) }} />
            </div>
          ))
        ) : (
          <div className="text-gray-500 col-span-full text-center">
            No users found.
          </div>
        )}
      </div>
    </div>
  );
}
