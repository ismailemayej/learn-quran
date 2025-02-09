"use client";
import { Input, Select, SelectItem } from "@heroui/react";
import React, { createRef, useEffect, useState } from "react";
import login from "../../../public/Login-bro.svg";
import Image from "next/image";
import Link from "next/link";
import { useFormState } from "react-dom";
import SubmitButton from "@/components/SubmitButtom";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { UserInfo } from "@/types";
import { signUpUser } from "@/app/api/Register";

export const education = [
  { key: "ওয়ান - ফাইভ", label: "ওয়ান - ফাইভ" },
  { key: "সিক্স-নাইন", label: "সিক্স-নাইন" },
  { key: "এস,এস,সি/দাখিল", label: "এস,এস,সি/দাখিল" },
  { key: "এইস,এস,সি/আলিম", label: "এইস,এস,সি/আলিম" },
  { key: "ডিগ্রি/ফাযিল", label: "ডিগ্রি/ফাযিল" },
  { key: "অনার্স", label: "অনার্স" },
  { key: "মাস্টার্স", label: "মাস্টার্স" },
];
export const gender = [
  { key: "ছেলে", label: "ছেলে" },
  { key: "মেয়ে", label: "মেয়ে" },
  { key: "অন্যান্য", label: "অন্যান্য" },
];
const Registration = () => {
  const router = useRouter();
  const ref = createRef<HTMLFormElement>();
  const [state, fromAction] = useFormState(signUpUser, null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [student, setStudent] = useState<string>("");
  useEffect(() => {
    if (state) {
      if (state.success === true) {
        toast.success(state.message || "Successfully signed up");
        router.push("/login");
        if (ref.current) {
          ref.current.reset();
        }
      } else if (state.success === false && state.message) {
        toast.error(state.message); // Show error if message exists
      }
    }
  }, [state, ref, router]);

  interface FormErrors {
    fullName?: string;
    education?: string;
    currentStatus?: string;
    courseName?: string;
    phone?: string;
    email?: string;
    password?: string;
    gender?: string;
    year?: string;
    batch?: string;
    qualification?: string;
    maritalstatus?: string;
  }

  const validateForm = (formData: UserInfo): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.fullName) newErrors.fullName = "সম্পূর্ণ নাম প্রয়োজন";
    if (!formData.education) newErrors.education = "শিক্ষার রুট নির্বাচন করুন";
    if (!formData.currentStatus)
      newErrors.currentStatus = " বৈবাহিক অবস্থা নির্বাচন করুন";
    if (!formData.maritalstatus)
      newErrors.maritalstatus = "বর্তমান অবস্থা নির্বাচন করুন";
    if (!formData.phone) {
      newErrors.phone = "মোবাইল নাম্বার প্রয়োজন";
    } else if (!/^\d{11,}$/.test(formData.phone)) {
      newErrors.phone = "মোবাইল নাম্বার কমপক্ষে ১১ ডিজিট";
    }
    if (!formData.email) newErrors.email = "ইমেইল প্রয়োজন";
    if (!formData.courseName) newErrors.courseName = "কোর্সের নাম দিন";
    if (!formData.password) newErrors.password = "পাসওয়ার্ড প্রয়োজন";
    if (!formData.gender) newErrors.gender = "লিঙ্গ নির্বাচন করুন";
    if (!formData.year) {
      newErrors.year = "বয়স প্রয়োজন";
    } else if (!/^\d{1,2}$/.test(formData.year)) {
      newErrors.year = "বয়স সর্বোচ্চ ২ ডিজিট হতে পারে";
    }
    return newErrors;
  };
  interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> {}
  const handleSubmit = (e: HandleSubmitEvent): void => {
    e.preventDefault();
    if (!ref.current) return;

    const formData = Object.fromEntries(
      new FormData(ref.current)
    ) as unknown as UserInfo;

    // Generate a random 3-digit ID
    const randomId = Math.floor(100 + Math.random() * 900);

    // Add the random ID to the form data (e.g., as a `userId` field)
    formData.studentId = `student-${randomId}`;

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value as string);
    });

    console.log("Form data with random ID:", formData);
    fromAction(formDataObj);
  };

  return (
    <div className="bangla">
      <h2 className="text-3xl lg:text-4xl font-bold text-green-600 text-center mb-6">
        ভর্তি ফরম
      </h2>

      <div className="border border-orange-300 grid lg:grid-cols-2 gap-5 rounded-xl shadow-xl overflow-hidden">
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
        <div className="px-5 flex gap-2 flex-col justify-start py-3 w-full">
          <p className="text-blue-500 text-lg">
            আপনার সঠিক তথ্য দিয়ে নিচের ফরমটি পূরণ করুন।
          </p>
          <form ref={ref} onSubmit={handleSubmit}>
            <div className="flex gap-2">
              <Select
                label="কোর্সের নাম"
                name="courseName"
                className="w-full mt-2 bangla"
              >
                <SelectItem key="সহজ কুরআন শিক্ষা">সহজ কুরআন শিক্ষা</SelectItem>
              </Select>
              {errors.currentStatus && (
                <p className="text-red-500">{errors.courseName}</p>
              )}
              {/* Education Field */}

              <Select
                label="শিক্ষার রুট"
                className="w-full mt-2 bangla"
                name="education"
                errorMessage={errors.education}
              >
                <SelectItem key="মাদ্রাসা">মাদ্রাসা</SelectItem>
                <SelectItem key="স্কুল">স্কুল</SelectItem>
              </Select>
              {errors.education && (
                <p className="text-red-500">{errors.education}</p>
              )}
            </div>
            {/* Full Name Field */}
            <div className="lg:grid grid-cols-2 gap-2">
              <span>
                <Input
                  name="fullName"
                  className="mt-2"
                  label="নিজের সম্পূর্ণ নাম"
                  type="text"
                  errorMessage={errors.fullName}
                />
                {errors.fullName && (
                  <p className="text-red-500">{errors.fullName}</p>
                )}
              </span>
              {/* Phone Field */}
              <span>
                <Input
                  className="mt-2 bangla"
                  name="phone"
                  type="number"
                  label="মোবাইল নাম্বার"
                  errorMessage={errors.phone}
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </span>
              {/* role */}
              <Input
                name="role"
                defaultValue="user"
                type="text"
                className="hidden"
              />

              <Input
                name="batch"
                defaultValue="01"
                type="text"
                className="hidden"
              />

              {/* Current Status Field */}
              <span>
                <Select
                  label="বর্তমান অবস্থা"
                  name="currentStatus"
                  className="w-full mt-2 bangla"
                >
                  <SelectItem key="ছোট বেলায় শিখেছি এখন ভুলে গেছি।">
                    ছোট বেলায় শিখেছি এখন ভুলে গেছি।
                  </SelectItem>
                  <SelectItem key="কখনো কোন শিক্ষকের কাছে পড়ি নি।">
                    কখনো কোন শিক্ষকের কাছে পড়ি নি।
                  </SelectItem>
                  <SelectItem key="পড়তে পারি ,কিন্তু শুদ্ধ করে পড়তে পারিনা।">
                    পড়তে পারি ,কিন্তু শুদ্ধ করে পড়তে পারিনা।
                  </SelectItem>
                </Select>
                {errors.currentStatus && (
                  <p className="text-red-500">{errors.currentStatus}</p>
                )}
              </span>

              {/* Qualification Field */}
              <span>
                <Select
                  label="শিক্ষাগত যোগ্যতা"
                  name="qualification"
                  className="w-full mt-2 bangla"
                  errorMessage={errors.education}
                >
                  {education.map((edu) => (
                    <SelectItem className="bangla" key={edu.key}>
                      {edu.label}
                    </SelectItem>
                  ))}
                </Select>
                {errors.qualification && (
                  <p className="text-red-500"> {errors.qualification} </p>
                )}
              </span>

              {/* Age and Gender Fields */}
              <div className="flex gap-2 lg:gap-2 justify-center items-center mt-2">
                <Input
                  label="বয়স"
                  className="lg:w-[50%] bangla"
                  name="year"
                  type="number"
                  errorMessage={errors.year}
                />

                <Select
                  label="লিঙ্গ"
                  name="gender"
                  className="mx-auto lg:w-[50%] bangla"
                >
                  {gender.map((gen) => (
                    <SelectItem key={gen.key}>{gen.label}</SelectItem>
                  ))}
                </Select>
                {(errors.year || errors.gender) && (
                  <p className="text-red-500">{errors.year || errors.gender}</p>
                )}
              </div>
              <span>
                <Select
                  label="বৈবাহিক অবস্থা"
                  name="maritalstatus"
                  className="w-full mt-2 bangla"
                >
                  <SelectItem key="বিবাহিত">বিবাহিত</SelectItem>
                  <SelectItem key="অবিবাহিত">অবিবাহিত</SelectItem>
                </Select>
                {errors.maritalstatus && (
                  <p className="text-red-500">{errors.maritalstatus}</p>
                )}
              </span>
              {/* Email Field */}
              <span>
                <Input
                  className="mt-2 bangla"
                  name="email"
                  type="email"
                  label="ইমেইল"
                  errorMessage={errors.email}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </span>

              {/* Password Field */}
              <span>
                <Input
                  className="mt-2"
                  name="password"
                  type="password"
                  label="পাসওয়ার্ড"
                  errorMessage={errors.password}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password}</p>
                )}
              </span>
            </div>

            {/* Submit Button */}
            <div className="mx-auto w-full mt-2">
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
