"use client";
import { Input } from "@heroui/react";
import React, { useEffect } from "react";
import login from "../../../public/Login-bro.svg";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { SetCookies } from "@/utils/Cookies";
import { loginUser } from "@/app/api/Login";

export const Token = "accessToken";

const SignIn = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      // Convert the input data to FormData
      const formData = new FormData();
      Object.keys(data).forEach((key) => formData.append(key, data[key]));

      // Make the API call to log in the user
      const response = await loginUser(data, formData);

      if (response?.success) {
        SetCookies("accessToken", response.token);
        toast.success(response.message || "Login successful!");
        reset();
        router.push("/dashboard");
      } else {
        // General login failure
        toast.error(response.message || "Failed to log in. Please try again.");
      }
    } catch (error) {
      // Handle unexpected errors
      const errorMessage =
        (error as any)?.response?.data?.message ||
        "An unexpected error occurred. Please try again.";
      console.error("Error during login:", error);
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex items-center justify-center bangla">
      <div className="border border-green-300 text-center align-middle lg:max-w-5xl grid lg:grid-cols-2 gap-10 bg-white rounded-xl shadow-xl overflow-hidden">
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
            একাউন্ট থাকলে লগইন করুন
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div>
              <Input
                {...register("email", {
                  required: "ইমেইল দেয়া আবশ্যক",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "সঠিক ইমেইল প্রদান করুন",
                  },
                })}
                className="mt-2"
                name="email"
                type="email"
                label="ইমেইল"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message as string}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <Input
                {...register("password", {
                  required: "পাসওয়ার্ড দেয়া আবশ্যক",
                  minLength: {
                    value: 6,
                    message: "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে",
                  },
                })}
                className="mt-2"
                name="password"
                type="password"
                label="পাসওয়ার্ড"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message as string}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 focus:ring focus:ring-green-300"
              >
                প্রবেশ করুন
              </button>
            </div>
          </form>

          {/* Registration Link */}
          <div className="mt-6 text-center">
            <span className="text-gray-600">
              আমাদের কোর্সে ভর্তি না থাকলে প্রবেশ করতে পারবেন না। ভর্তি হতে
              ক্লিক করুন।{" "}
            </span>
            <Link
              href="/registration"
              className="text-green-700 font-semibold hover:text-green-500"
            >
              ভর্তি ফরম
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
