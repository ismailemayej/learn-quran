import { User } from "@/types";
import { UserInfoByCookie } from "@/utils/Cookies";
import { decodedDataByJwt } from "@/utils/jwt";
import { apiClient } from "./baseUrl/BaseUrl";
export async function userInformation(): Promise<User | null> {
  try {
    const AccessToken = await UserInfoByCookie("accessToken");
    if (AccessToken) {
      const decodedData = decodedDataByJwt(AccessToken) as User;
      console.log("decoded code:::::", decodedData.email);
      const response = await apiClient.get(
        `/api/users?email=${decodedData?.email}`,
        {
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
}
