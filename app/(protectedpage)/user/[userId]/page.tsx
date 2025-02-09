import { apiClient } from "@/app/api/baseUrl/BaseUrl";
import React from "react";
import UserDetailsPage from "./details";

interface UserDetailsProps {
  params: {
    userId: string;
  };
}

const UserDetails = async ({ params }: UserDetailsProps) => {
  try {
    const response = await apiClient.get(`/api/users?email=${params.userId}`, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
    const { user } = response.data;
    return <UserDetailsPage userInfo={user} />;
  } catch (error) {
    console.error("Error fetching user details:", error);
    return (
      <div>
        <h1>Details Page</h1>
        <p>Failed to load user details.</p>
      </div>
    );
  }
};

export default UserDetails;
