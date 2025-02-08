import React, { useState } from "react";
import NextLink from "next/link";
import { User } from "@heroui/react";
import { updateUser } from "@/app/api/UpdateUser";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

const Allusers = ({ user }: any) => {
  const router = useRouter();
  const [approve, setApprove] = useState(user.approve);
  const [role, setRole] = useState(user.role);

  // Handle approval toggle
  const handleApproveToggle = async (id: string) => {
    try {
      const updatedData = { ...user, approve: !approve };
      await updateUser(updatedData, id);
      router.refresh();
      setApprove(!approve);

      if (!approve) {
        toast.success("User approved successfully");
      } else {
        toast.error("User disapproved successfully");
      }
    } catch (error) {
      toast.error("An error occurred while updating the approval status");
    }
  };
  // Handle role toggle (user to admin and vice versa)
  const handleRoleToggle = async (id: string) => {
    try {
      const updatedRole = role === "user" ? "admin" : "user"; // Toggle role
      const updatedData = { ...user, role: updatedRole };
      await updateUser(updatedData, id);
      setRole(updatedRole); // Update state
      toast.success(`Role changed to ${updatedRole}`);
    } catch (error) {
      toast.error("An error occurred while updating the user role");
    }
  };

  return (
    <div className="border rounded-lg py-2 px-1 shadow-lg bangla">
      <NextLink href={`/user/${user?.email}`}>
        <div className="flex gap-1 justify-between px-1">
          <User
            className="text-left"
            avatarProps={{
              src: "https://avatars.githubusercontent.com/u/30373425?v=4",
            }}
            description={
              <span className="text-sm text-gray-600">
                {user.course} <br /> {user.phone}
              </span>
            }
            name={user.fullName}
          />
          {role === "admin" ? "Admin" : "User"}
        </div>
      </NextLink>

      <div className="flex gap-2 mt-2">
        <button
          className={`border rounded-xl px-2 text-white hover:bg-opacity-90 ${
            approve
              ? "bg-green-500 hover:bg-green-600"
              : "bg-red-500 hover:bg-red-600"
          }`}
          onClick={() => handleApproveToggle(user._id)}
        >
          {approve ? <Eye /> : <EyeOff />}
        </button>

        {/* Role Toggle Button */}
        <button
          className={`border rounded-xl px-2 text-white hover:bg-opacity-90 ${
            role === "admin"
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-500 hover:bg-gray-600"
          }`}
          onClick={() => handleRoleToggle(user._id)}
        >
          {role === "admin" ? "User" : "Admin"}
        </button>
      </div>
    </div>
  );
};

export default Allusers;
