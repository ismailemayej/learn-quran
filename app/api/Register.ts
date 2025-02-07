import { apiClient } from "./baseUrl/BaseUrl";

export async function signUpUser(pre: FormData, fromData: FormData) {
  try {
    const formattedData = Object.fromEntries(fromData.entries());
    formattedData.approve = "false";
    const response = await apiClient.post(
      "/api/auth/register",
      JSON.stringify(formattedData),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Signup error:", error);

      return {
        success: false,
        message:
          (error as any).response?.data?.message ||
          "Signup failed. Please try again!",
      };
    } else {
      console.error("Unexpected error:", error);

      return {
        success: false,
        message: "Signup failed. Please try again!",
      };
    }
  }
}
