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
  role?: Role;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = await GetCookies("accessToken");

  // 🔹 If user is already logged in, prevent access to login/register
  if (accessToken && AuthRoutes.includes(pathname)) {
    try {
      const decodedData = jwtDecode<DecodedToken>(accessToken);
      const role = decodedData?.role;

      if (!role) {
        return NextResponse.redirect(new URL("/", request.url)); // Redirect to home if role is missing
      }

      const redirectPath = role === "admin" ? "/dashboard/admin" : "/dashboard";
      return NextResponse.redirect(new URL(redirectPath, request.url));
    } catch (error) {
      console.error("Invalid token:", error);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // 🔹 If no token & public route (login/register), allow access
  if (!accessToken) {
    return AuthRoutes.includes(pathname)
      ? NextResponse.next()
      : NextResponse.redirect(new URL("/login", request.url));
  }

  let decodedData: DecodedToken | null = null;

  try {
    decodedData = jwtDecode<DecodedToken>(accessToken);
  } catch (error) {
    console.error("Invalid token:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const role = decodedData?.role;

  if (!role) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  console.log("User Role:", role);

  // 🔹 Role-based route protection
  const allowedRoutes = roleBasedPrivateRoutes[role];
  if (!allowedRoutes?.includes(pathname)) {
    return NextResponse.redirect(
      new URL(role === "admin" ? "/dashboard/admin" : "/dashboard", request.url)
    );
  }

  return NextResponse.next();
}

// 🔹 Middleware will be applied to these routes
export const config = {
  matcher: ["/login", "/register", "/dashboard", "/dashboard/admin"],
};
