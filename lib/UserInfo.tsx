import { userInformation } from "@/components/DataAction/DataHandle";
export const UserInfo = async () => {
  const user = await userInformation();
  return user;
};
