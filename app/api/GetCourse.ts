import { apiClient } from "./baseUrl/BaseUrl";

export const getCourses = async () => {
  try {
    const response = await apiClient.get("/api/courses", {
      headers: {
        "Cache-Control": "no-store",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
