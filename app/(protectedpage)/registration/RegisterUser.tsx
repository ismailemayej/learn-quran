"use client";
import { Input, Select, SelectItem } from "@heroui/react";
import React, { createRef, useEffect, useState } from "react";
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
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (state && state.success) {
      toast.success("Successfully signed up");
      router.push("/login");
      ref.current?.reset();
    } else if (state?.message) {
      toast.error(state.message);
    }
  }, [state, ref, router]);

  interface RegistrationFormData {
    name: string;
    education: string;
    phone: string;
    email: string;
    password: string;
    gender: string;
    year: string;
    current_status: string;
  }

  interface FormErrors {
    name?: string;
    education?: string;
    phone?: string;
    email?: string;
    password?: string;
    gender?: string;
    year?: string;
    current_status?: string;
    qualification?: string;
  }

  const validateForm = (formData: RegistrationFormData): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = "সম্পূর্ণ নাম প্রয়োজন";
    if (!formData.education) newErrors.education = "শিক্ষার রুট নির্বাচন করুন";
    if (!formData.current_status)
      newErrors.current_status = "বর্তমান অবস্থা নির্বাচন করুন";
    if (!formData.phone) {
      newErrors.phone = "মোবাইল নাম্বার প্রয়োজন";
    } else if (!/^\d{11,}$/.test(formData.phone)) {
      newErrors.phone = "মোবাইল নাম্বার কমপক্ষে ১১ ডিজিট";
    }
    if (!formData.email) newErrors.email = "ইমেইল প্রয়োজন";
    if (!formData.password) newErrors.password = "পাসওয়ার্ড প্রয়োজন";
    if (!formData.gender) newErrors.gender = "লিঙ্গ নির্বাচন করুন";
    if (!formData.year) newErrors.year = "বয়স প্রয়োজন";
    return newErrors;
  };

  interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = (e: HandleSubmitEvent): void => {
    e.preventDefault();
    if (!ref.current) return;
    const formData = Object.fromEntries(
      new FormData(ref.current)
    ) as unknown as RegistrationFormData;
    const validationErrors = validateForm(formData);
    console.log("validationErrors", formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value as string);
    });
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
            <div className="lg:grid grid-cols-2 gap-2">
              <span>
                <Input
                  name="name"
                  className="mt-2"
                  label="সম্পূর্ণ নাম"
                  type="text"
                  errorMessage={errors.name}
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </span>
              <span>
                <Select
                  label="শিক্ষার রুট"
                  className="w-full mt-2"
                  name="education"
                  errorMessage={errors.education}
                >
                  <SelectItem key="madrasha">মাদ্রাসা</SelectItem>
                  <SelectItem key="school">স্কুল</SelectItem>
                </Select>
                {errors.education && (
                  <p className="text-red-500">{errors.education}</p>
                )}
              </span>
              <span>
                <Select
                  label="বর্তমান অবস্থা"
                  name="current_status"
                  className="w-full mt-2"
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
                {errors.current_status && (
                  <p className="text-red-500">{errors.current_status}</p>
                )}
              </span>
              <span>
                <Select
                  label="শিক্ষাগত যোগ্যতা"
                  name="qualification"
                  className="w-full mt-2"
                  errorMessage={errors.education}
                >
                  {education.map((edu) => (
                    <SelectItem key={edu.key}>{edu.label}</SelectItem>
                  ))}
                </Select>
                {errors.qualification && (
                  <p className="text-red-500"> {errors.qualification} </p>
                )}
              </span>

              <div className="flex gap-2 lg:gap-2 justify-center items-center mt-2">
                <Input
                  label="বয়স"
                  className="lg:w-[50%]"
                  name="year"
                  type="number"
                  errorMessage={errors.year}
                />

                <Select
                  label="লিঙ্গ"
                  name="gender"
                  className="mx-auto lg:w-[50%]"
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
                <Input
                  className="mt-2"
                  name="phone"
                  type="text"
                  label="মোবাইল নাম্বার"
                  errorMessage={errors.phone}
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </span>
              <span>
                <Input
                  className="mt-2"
                  name="email"
                  type="email"
                  label="ইমেইল"
                  errorMessage={errors.email}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </span>
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
