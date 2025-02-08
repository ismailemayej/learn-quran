import { JwtPayload, jwtDecode } from "jwt-decode";
import { NextRequest, NextResponse } from "next/server";
import { GetCookies } from "./utils/Cookies";

const AuthRoutes = ["/login", "/register"];
const roleBasedPrivateRoutes = {
  user: ["/dashboard"],
  admin: ["/dashboard/admin", "/dashboard"],
};
type Role = keyof typeof roleBasedPrivateRoutes;

interface DecodedToken extends JwtPayload {
  role: Role;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = await GetCookies("accessToken");

  // If accessToken exists and the user accesses /login or /register, redirect to respective dashboard
  if (accessToken && AuthRoutes.includes(pathname)) {
    const decodedData = jwtDecode<DecodedToken>(accessToken);
    const role = decodedData?.role;

    if (role === "admin") {
      return NextResponse.redirect(new URL("/dashboard/admin", request.url));
    } else if (role === "user") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  // If no token and the route is public (login/register), allow access
  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  let decodedData: DecodedToken | null = null;

  try {
    // Decode the token
    decodedData = jwtDecode<DecodedToken>(accessToken);
  } catch (error) {
    console.error("Invalid token", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const role = decodedData?.role;
  console.log("role:", role);

  if (role && roleBasedPrivateRoutes[role]) {
    const allowedRoutes = roleBasedPrivateRoutes[role];

    // Check if the pathname matches any allowed route for the role
    if (
      allowedRoutes.some((route) =>
        typeof route === "string"
          ? pathname === route // Exact match for string routes
          : (route as RegExp).test(pathname)
      )
    ) {
      return NextResponse.next();
    } else {
      // Redirect users to their default dashboard based on their role
      if (role === "admin") {
        return NextResponse.redirect(new URL("/dashboard/admin", request.url));
      } else if (role === "user") {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
    }
  }

  // Redirect unauthorized access to "/login"
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/admin"], // Match these routes
};
