import { apiClient } from "./baseUrl/BaseUrl";

export const approveUser = async (userId: string) => {
  try {
    const response = await apiClient.put(`/api/users/approve/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
