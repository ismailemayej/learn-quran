import { updateUser } from "./UpdateUser";
export const ApproveUser = async (id: string) => {
  const result = await updateUser(id, {
    approve: true,
  });
  console.log(result);
};
