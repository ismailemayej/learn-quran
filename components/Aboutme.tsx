import React from "react";
import NextLink from "next/link";
import me from "./../public/ismaileMe.png";
import Image from "next/image";
import ButtonA from "./button";

const AboutMe = () => {
  return (
    <section className="bangla my-6 py-16 px-6 rounded-md md:px-12 lg:px-24 bg-gradient-to-r from-gray-100 via-gray-200 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white shadow-xl dark:shadow-none">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left Image (Hidden on Mobile) */}
        <div className=" flex-shrink-0 w-full lg:w-1/2">
          <Image
            alt="About us"
            className="rounded-lg shadow-xl dark:shadow-none object-cover"
            height={300} // Adjust height
            priority={true} // Ensure priority loading for LCP optimization
            src={me}
            width={400}
          />
        </div>
        {/* Right Content */}
        <div className="flex-grow text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">ইনিস্ট্রাক্টর</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 line-clamp-6 ">
            আমি মোঃ ইসমাইল হোসেন । আমি আপনাদের পবিত্র আল-কুরআন শিখানোর জন্য এই
            ওয়েবসাইট তৈরি করেছি। আমাদের এই ওয়েবসাইটে আপনি পবিত্র আল-কুরআন শিখতে
            পারবেন সহজে ও সৌন্দর্যে। আমাদের এই ওয়েবসাইটে আপনি পবিত্র আল-কুরআন
            শিখতে পারবেন সহজে ও সৌন্দর্যে। আমাদের এই ওয়েবসাইটে আপনি পবিত্র
            আল-কুরআন শিখতে পারবেন।
          </p>
          <ButtonA className="px-5 py-2" link="/about">
            আরও জানুন
          </ButtonA>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
