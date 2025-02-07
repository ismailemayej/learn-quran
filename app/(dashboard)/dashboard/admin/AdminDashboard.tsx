"use client";
import React, { useEffect, useState } from "react";
import { User } from "@heroui/react";
import { GetAllUsers } from "@/app/api/AllUsers";
import { updateUser } from "@/app/api/UpdateUser";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
interface UserType {
  _id: string;
  fullName: string;
  phone: number;
  course: string;
  isApprove: boolean;
}
const initialUsers: UserType[] = [
  {
    _id: "1",
    fullName: "Md Ismail Hossain",
    phone: 18000000000,
    course: "Learn Quran",
    isApprove: true,
  },
  {
    _id: "2",
    fullName: "Tariq Aziz",
    phone: 17000000000,
    course: "Python",
    isApprove: false,
  },
  {
    _id: "3",
    fullName: "Ayesha Akter",
    phone: 16000000000,
    course: "Tafsir Quran",
    isApprove: true,
  },
  {
    _id: "4",
    fullName: "Rahim Uddin",
    phone: 15000000000,
    course: "Hefzul Quran",
    isApprove: false,
  },
];

export default function UserList() {
  const router = useRouter();
  const [users, setUsers] = useState<UserType[]>(initialUsers);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [approve, setApprove] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await GetAllUsers();
        if (response && Array.isArray(response?.users)) {
          setUsers(response.users);
        } else {
          throw new Error("Invalid data received from API.");
        }
      } catch (err: any) {
        console.error("Error fetching users:", err);
        setError(err.message || "Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  const handleApproveToggle = async (id: any) => {
    try {
      const updatedData = { approve: !approve };
      await updateUser(updatedData, id);
      router.refresh();
      setApprove(!approve);
      toast.success("Status request changed successfully");
      // fetchData();
    } catch (error) {
      toast.error("An error occurred while updating the approval status");
    }
  };

  // Render logic to handle loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 px-2">
      {users.map((user) => (
        <div
          key={user._id}
          className={`border rounded-lg p-4 ${
            user.isApprove
              ? "border-gold bg-yellow-100"
              : "border-gray-300 bg-white"
          }`}
        >
          <User
            className="text-left"
            avatarProps={{
              src: "https://avatars.githubusercontent.com/u/30373425?v=4",
            }}
            description={
              <span className="text-sm text-gray-600">
                📚 {user.course} <br /> 📞 {user.phone}
              </span>
            }
            name={user.fullName}
          />

          <button
            onClick={() => handleApproveToggle(user._id)}
            className={`mt-2 w-full py-2 flex items-center justify-center gap-2 rounded-lg text-white ${
              user.isApprove
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {user.isApprove ? <>Disapprove</> : <>Approve</>}
          </button>
        </div>
      ))}
    </div>
  );
}
