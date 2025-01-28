"use client";
import { Input } from "@heroui/react";
import React, { createRef, useEffect } from "react";
import login from "../../../public/Login-bro.svg";
import Image from "next/image";
import Link from "next/link";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { loginUser } from "@/components/DataAction/DataHandle";
import { useRouter } from "next/navigation";
import { SetCookies } from "@/utils/Cookies";
export const Token = "accessToken";

const SignIn = () => {
  const router = useRouter();
  const ref = createRef<HTMLFormElement>();
  const [state, fromAction] = useFormState(loginUser, null);

  useEffect(() => {
    if (state && state.success) {
      SetCookies("accessToken", state?.token);
      toast.success("Successfully signed in");
      ref.current?.reset();
      router.push("/");
    } else if (state) {
      toast.error(state?.message);
    }
  }, [state, ref, router]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid lg:grid-cols-2 gap-10 bg-white rounded-xl shadow-xl overflow-hidden min-w-5xl">
        {/* Left Side (Image) */}
        <div className="hidden lg:flex justify-center items-center bg-gradient-to-br from-green-200 to-green-500">
          <Image
            src={login}
            alt="Login image"
            className="w-full h-auto"
            height={400}
            width={400}
          />
        </div>

        {/* Right Side (Form) */}
        <div className="p-8 flex flex-col justify-center w-full bg-gradient-to-br from-white via-gray-50 to-green-100">
          <h2 className="text-3xl lg:text-4xl font-bold text-green-600 text-center mb-6">
            Log In
          </h2>
          <form ref={ref} action={fromAction} className="space-y-6">
            <Input
              name="email"
              type="email"
              className="text-black outline-none bg-gradient-to-br from-gray-50 to-white border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 rounded-lg"
              variant="bordered"
              label="Email"
            />
            <Input
              name="password"
              type="password"
              className="text-black outline-none bg-gradient-to-br from-gray-50 to-white border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 rounded-lg"
              variant="bordered"
              label="Password"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 focus:ring focus:ring-green-300"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <span className="text-gray-600">Not a user? </span>
            <Link
              href="/registration"
              className="text-green-700 font-semibold hover:text-green-500"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
