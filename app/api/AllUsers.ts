import { apiClient } from "./baseUrl/BaseUrl";

export const GetAllUsers = async () => {
  try {
    const response = await apiClient.get("/api/users", {
      headers: {
        "Cache-Control": "no-store",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
