"use server";
import { authOptions } from "@/lib/authOptions";
import { UserInfoByCookie } from "@/utils/Cookies";
import { decodedDataByJwt } from "@/utils/jwt";
import { getServerSession } from "next-auth/next";
interface User {
  email: string;
  name: string;
  image?: string;
}
// for User Register
export async function signUpUser(pre: FormData, fromData: FormData) {
  try {
    const formattedData = JSON.stringify(Object.fromEntries(fromData));
    const res = await fetch(`${process.env.BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: formattedData,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
// for User Login
export async function loginUser(pre: FormData, fromData: FormData) {
  try {
    const formattedData = JSON.stringify(Object.fromEntries(fromData));
    const res = await fetch(`${process.env.BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: formattedData,
    });
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}
//  post mehtod
export const Post = async (data: any, name: any) => {
  const res = await fetch(`${process.env.BASE_URL}/${name}`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
//  Get mehtod
export const Get = async (name: any, querydata: any) => {
  const res = await fetch(`${process.env.BASE_URL}/${name}?${querydata}`, {
    cache: "no-store",
  });
  return res.json();
};
//  Update mehtod
export const Update = async (data: any, name: any, id: any) => {
  const res = await fetch(`${process.env.BASE_URL}/${name}/${id}`, {
    cache: "no-store",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res.json();
};
//Delete mehtod
export const Delete = async (name: any, id: any) => {
  const res = await fetch(`${process.env.BASE_URL}/${name}/${id}`, {
    cache: "no-store",
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 30 },
  });
  if (!res.ok) {
    const errorDetails = await res.text();
    throw new Error(`Network response was not ok: ${errorDetails}`);
  }
  return res.json();
};
// _________________________
export async function userInformation(): Promise<User | null> {
  try {
    const AccessToken = await UserInfoByCookie("accessToken");
    if (AccessToken) {
      const decodedData = decodedDataByJwt(AccessToken) as User;
      const user = await Get("users", `email=${decodedData?.email}`);
      return user;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
}
// get user information
export const UserInfo = async () => {
  const session = await getServerSession(authOptions);
  return session?.user;
};
