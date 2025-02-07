import { userInformation } from "@/app/api/UserInformation";
import UserDashboard from "./UserDashboard";

export default async function DashboardPage() {
  const { user } = await userInformation();
  return (
    <div>
      <UserDashboard userinfo={user} />
    </div>
  );
}
