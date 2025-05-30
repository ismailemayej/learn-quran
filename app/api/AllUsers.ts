import { apiClient } from "./baseUrl/BaseUrl";

export const GetAllUsers = async () => {
  try {
    const response = await apiClient.get("/api/users/all", {
      headers: {
        "Cache-Control": "no-store",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
