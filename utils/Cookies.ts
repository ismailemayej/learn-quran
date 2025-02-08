"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Set Cookie
export const SetCookies = async (
  key: string,
  value: string,
  options: { maxAge?: number; path?: string } = {}
) => {
  const cookieStore = await cookies();
  cookieStore.set(key, value, {
    path: options.path || "/", // Default path is the root
    maxAge: options.maxAge || 3600, // Default expiry is 1 hour
  });
};

// Get Cookie
export const GetCookies = async (key: string): Promise<string | null> => {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(key)?.value;
  return cookieValue || null;
};

// Remove Cookie and Redirect to /login
export const RemoveCookie = async (key: string) => {
  const cookieStore = await cookies();
  const existingCookie = cookieStore.get(key);

  if (existingCookie) {
    cookieStore.set(key, "", {
      path: "/", // Ensure the same path is used as when the cookie was set
      maxAge: 0, // Set the maxAge to 0 to delete the cookie
    });

    // Redirect to /login after removing the cookie
    redirect("/login");
  } else {
    console.log(`No cookie found with key: ${key}`);
    // Redirect to /login even if the cookie doesn't exist
    redirect("/login");
  }
};
