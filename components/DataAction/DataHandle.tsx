"use server";
import { authOptions } from "@/lib/authOptions";
import { GetCookies } from "@/utils/Cookies";
import { decodedDataByJwt } from "@/utils/jwt";
import { getServerSession } from "next-auth/next";

interface User {
  email: string;
  name: string;
  image?: string;
}

// Register User
export async function signUpUser(pre: FormData, fromData: FormData) {
  try {
    const formattedData = JSON.stringify(Object.fromEntries(fromData));
    console.log("FormData:::::::", formattedData);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: formattedData,
      }
    );
    console.log("Response:::::::", res);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

// Login User
export async function loginUser(pre: FormData, fromData: FormData) {
  try {
    const formattedData = JSON.stringify(Object.fromEntries(fromData));
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formattedData,
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

// Get Courses
export const getCourses = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/courses`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Add Course
export const addCourse = async (courseData: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Get Users (Admin)
export const GetAllUsers = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Approve User (Admin)
export const approveUser = async (userId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/approve/${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Get User Information
export async function userInformation(): Promise<User | null> {
  try {
    const AccessToken = await GetCookies("accessToken");
    if (AccessToken) {
      const decodedData = decodedDataByJwt(AccessToken) as User;
      const user = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users?email=${decodedData?.email}`,
        {
          cache: "no-store",
        }
      );
      return user.json();
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
}

// Get Session User Information
export const UserInfo = async () => {
  const session = await getServerSession(authOptions);
  return session?.user;
};
