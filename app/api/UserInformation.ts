import { User } from "@/types";
import { GetCookies } from "@/utils/Cookies";
import { decodedDataByJwt } from "@/utils/jwt";
import { apiClient } from "./baseUrl/BaseUrl";

interface UserResponse {
  success: boolean;
  user: User | null;
  message?: string;
}

export async function userInformation(): Promise<UserResponse> {
  try {
    // Get the access token
    const accessToken = await GetCookies("accessToken");
    if (!accessToken) {
      return {
        success: false,
        user: null,
        message: "Access token is missing or invalid.",
      };
    }

    // Decode the token to get user information
    const decodedData = decodedDataByJwt(accessToken) as Partial<User>;
    if (!decodedData?.email) {
      return {
        success: false,
        user: null,
        message: "Invalid token: email not found in decoded data.",
      };
    }

    // Make API request to fetch user details
    const response = await apiClient.get(
      `/api/users?email=${decodedData.email}`,
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error("Error fetching user information:", error.message || error);
    return {
      success: false,
      user: null,
      message: "An error occurred while fetching user information.",
    };
  }
}
