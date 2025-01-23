"use client";
import React from "react";
import "@/styles/globals.css";
import quran from "../public/quran.gif";
import { HeroText } from "./ui/HeroText";

const HeroSection: React.FC = () => {
  const text = "LEARN QURAN WITH US";

  return (
    <div className="dark:bg-black bg-white w-full">
      <div className="relative mb-2 w-full lg:h-screen h-52 flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl">
        <div
          className="absolute inset-0 rounded-2xl bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url(${quran.src})`,
          }}
        ></div>

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <div className="bg-[#00000080]  px-4 py-1 bg- rounded-xl">
            <h1 className="text-lg lg:text-3xl font-extrabold shadow-2xl  shadow-white">
              <HeroText text={text} />
            </h1>
          </div>
          <p className="text-sm lg:text-lg text-white mt-4">
            A modern and sleek Quran reader রুহুল কুরআন
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
