"use server";
import { cookies } from "next/headers";
// set Cookies
export const SetCookies = async (key: string, value: string) => {
  const cookieStore = await cookies();
  return cookieStore.set(key, value);
};
// user information
export const GetCookies = async (key: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(key)?.value;
};
// LogOut
export const RemoveCookie = async (key: string) => {
  const cookieStore = await cookies();
  const haveCookie = cookieStore.get(key);
  if (haveCookie) {
    return cookieStore.delete(key);
  } else {
    console.log("there is no cookies");
  }
};
