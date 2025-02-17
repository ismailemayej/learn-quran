import React from "react";
import { apiClient } from "@/app/api/baseUrl/BaseUrl";
import UserDetailsPage from "./details";

const UserDetails = async ({ params }: any) => {
  console.log("id:::::::::::::mmm", params);
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
        <p>Failed to load user details.</p>
      </div>
    );
  }
};
export default UserDetails;
