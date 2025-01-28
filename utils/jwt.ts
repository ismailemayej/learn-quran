import { jwtDecode } from "jwt-decode";
export const decodedDataByJwt = (token: string) => {
  return jwtDecode(token);
};
