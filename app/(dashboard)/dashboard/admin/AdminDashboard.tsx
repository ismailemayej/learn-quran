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

  // Render logic to handle loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  // Render the user list
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 px-4">
      {users.map((user) => (
        <div key={user._id}>
          <Allusers user={user} />
        </div>
      ))}
    </div>
  );
}
