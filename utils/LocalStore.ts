"use server";
import { cookies } from "next/headers";
export async function setLocalStorageItem(key: string, value: string) {
  const setCookies = await cookies();
  return setCookies.set(key, value);
}
export async function getLocalStorageItem(key: string) {
  try {
    if (typeof window !== "undefined" && typeof key === "string") {
      const setCookies = await cookies();
      const setCookie = setCookies.get(key);
      return setCookie;
    } else {
      console.error("Invalid key or localStorage not available");
      return null;
    }
  } catch (error) {
    console.error("Error accessing localStorage", error);
    return null;
  }
}
