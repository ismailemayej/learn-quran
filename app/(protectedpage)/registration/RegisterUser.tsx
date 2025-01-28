"use client";
import { Input, Select, SelectItem } from "@heroui/react";
import React, { createRef, useEffect } from "react";
import { DatePicker } from "@heroui/date-picker";
import login from "../../../public/Login-bro.svg";
import Image from "next/image";
import Link from "next/link";
import { useFormState } from "react-dom";
import { signUpUser } from "@/components/DataAction/DataHandle";
import SubmitButton from "@/components/SubmitButtom";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const education = [
  { key: "one-five", label: "ওয়ান - ফাইভ" },
  { key: "six-nine", label: "সিক্স-নাইন" },
  { key: "ssc/dhakil", label: "এস,এস,সি/দাখিল" },
  { key: "hsc/alim", label: "এইস,এস,সি/আলিম" },
  { key: "digree/fazil", label: "ডিগ্রি/ফাযিল" },
  { key: "hons", label: "অনার্স" },
  { key: "masters", label: "মাস্টার্স" },
];
export const gender = [
  { key: "Male", label: "Male" },
  { key: "Female", label: "Female" },
  { key: "Other", label: "Other" },
];

const Registration = () => {
  const router = useRouter();
  const ref = createRef<HTMLFormElement>();
  const [state, fromAction] = useFormState(signUpUser, null);

  useEffect(() => {
    if (state && state.success) {
      toast.success("Successfully signed up");
      router.push("/login");
      ref.current?.reset();
    } else {
      toast.error(state?.message);
    }
  }, [state, ref, router]);

  return (
    <div className="bangla">
      <h2 className="text-3xl lg:text-4xl font-bold text-green-600 text-center mb-6">
        ভর্তি ফরম
      </h2>

      <div className="border border-orange-300 grid lg:grid-cols-2 gap-5  rounded-xl shadow-xl overflow-hidden">
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
        <div className="px-5 flex gap-2 flex-col justify-start py-3 w-full ">
          <form ref={ref} action={fromAction}>
            <div className="lg:grid grid-cols-2 gap-2">
              <Input
                name="name"
                className=" mt-2"
                label="সম্পূর্ণ নাম"
                type="text"
              />
              <Select
                label="শিক্ষার রুট"
                className="w-full  mt-2"
                name="education"
              >
                <SelectItem key="madrasha">মাদ্রাসা</SelectItem>
                <SelectItem key="school">স্কুল</SelectItem>
              </Select>
              <Select
                label="বর্তমান অবস্থা"
                name="education"
                className="w-full  mt-2"
              >
                <SelectItem key="reson-1">
                  ছোট বেলায় শিখেছি এখন ভুলে গেছি।
                </SelectItem>
                <SelectItem key="reson-2">
                  কখনো কোন শিক্ষকের কাছে পড়ি নি।
                </SelectItem>
                <SelectItem key="reson-3">
                  পড়তে পারি ,কিন্তু শুদ্ধ করে পড়তে পারিনা।
                </SelectItem>
              </Select>
              <Select
                label="শিক্ষাগত যোগ্যতা"
                name="education"
                className="w-full mt-2"
              >
                {education.map((edu) => (
                  <SelectItem key={edu.key}>{edu.label}</SelectItem>
                ))}
              </Select>

              <div className="flex gap-2 lg:gap-2 justify-center items-center mt-2">
                <Input
                  label="বয়স"
                  className=" lg:w-[50%]"
                  name="Year"
                  type="number"
                />
                <Select label="লিঙ্গ" className=" mx-auto lg:w-[50%]">
                  {gender.map((gen) => (
                    <SelectItem key={gen.key}>{gen.label}</SelectItem>
                  ))}
                </Select>
              </div>
              <Input
                className=" mt-2"
                name="phone"
                type="text"
                label="মোবাইল নাম্বার"
              />
              <Input
                className=" mt-2"
                name="email"
                type="email"
                label="ইমেইল"
              />
              <Input
                className="mt-2"
                name="password"
                type="password"
                label="পাসওয়ার্ড"
              />
            </div>
            <div className="mx-auto w-full">
              <SubmitButton>ফরম জমা করুন</SubmitButton>
            </div>
          </form>
          <div className="mt-6 text-center">
            <span className="dark:text-gray-200 mx-2">
              আপনি কি আমাদের শিক্ষার্থী ?
            </span>
            <Link
              href="/login"
              className="text-green-400 font-semibold hover:text-green-500"
            >
              লগইন করুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
