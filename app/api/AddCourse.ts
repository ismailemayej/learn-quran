import { apiClient } from "./baseUrl/BaseUrl";

export const addCourse = async (courseData: any) => {
  try {
    const response = await apiClient.post("/api/courses", courseData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
