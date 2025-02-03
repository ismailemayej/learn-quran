import { apiClient } from "./baseUrl/BaseUrl";

export async function loginUser(pre: FormData, fromData: FormData) {
  try {
    const formattedData = Object.fromEntries(fromData);
    const response = await apiClient.post("/api/auth/login", formattedData);
    return response.data;
  } catch (error) {
    throw error;
  }
}
