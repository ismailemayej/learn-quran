"use client";
import "@/styles/globals.css";
import React from "react";
import quran from "../../public/quran.gif";
import { HeroText } from "./HeroText";

const HeroSection: React.FC = () => {
  const text = "LEARN QURAN WITH US";
  return (
    <div className="relative w-full lg:h-screen h-full rounded-lg bg-white text-white flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${quran.src})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-0 rounded-lg align-middle">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-white text-center">
            Welcome to
          </h1>
          <div className=" bg-slate-100 px-5 py-2 rounded-lg">
            <h1 className="text-4xl font-bold text-white text-center">
              <HeroText text={text} />
            </h1>
          </div>
          <p className="text-lg text-white text-center">
            A modern and sleek Quran reader রুহুল কুরআন
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
