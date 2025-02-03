"use client";
import React, { useEffect, useState } from "react";
import { User } from "@/types";
import { approveUser, GetAllUsers } from "@/components/DataAction/DataHandle";
import { useRouter } from "next/router";

const AllUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const router = useRouter();
  // Fetch all users on component mount
  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await GetAllUsers();
        console.log("All users:", data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
        router.push("/login");
      }
    };
    getUsers();
  }, [router]);

  // Handle user approval
  const handleApprove = async (userId: string) => {
    try {
      const updatedUser = await approveUser(userId);
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === updatedUser._id ? updatedUser : user
        )
      );
    } catch (error) {
      console.error("Error approving user:", error);
    }
  };

  return (
    <div className="p-4">
      <h4>All Users</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.isApproved ? (
                  <span className="badge bg-success">Approved</span>
                ) : (
                  <span className="badge bg-warning">Pending</span>
                )}
              </td>
              <td>
                {!user.isApproved && (
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleApprove(user._id)}
                  >
                    Approve
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
