export const dynamic = "force-dynamic";
import { userInformation } from "@/app/api/UserInformation";
import UserDashboard from "./UserDashboard";

export default async function DashboardPage() {
  const { user } = await userInformation();
  if (!user?._id || !user) {
    return <div>No user information available.</div>;
  }
  return (
    <div>
      <UserDashboard userInfo={user} />
    </div>
  );
}
