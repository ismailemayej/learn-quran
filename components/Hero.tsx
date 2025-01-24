"use client";
import React, { useState, useEffect } from "react";
import "@/styles/globals.css";
import Image from "next/image";
import quran from "../public/quran.gif";

const HeroSection: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);

  // Auto-slide between sections
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br bangla  from-blue-900 via-indigo-800 to-purple-900 text-white w-full min-h-screen flex items-center justify-center rounded-xl overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-transparent rounded-xl"></div>
        <Image
          src={quran}
          alt="Quran Background"
          layout="fill"
          objectFit="cover"
          className="opacity-70 rounded-xl"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
        {/* Sliding Text */}
        <div className="relative w-full max-w-4xl h-40 overflow-hidden">
          {/* Section 1 */}
          <div
            className={`absolute w-full transition-transform duration-1000 ease-in-out ${
              currentSection === 0 ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="space-y-6 py-3">
              <h1 className="text-4xl pt-2.5 md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-yellow-400 rounded-lg shadow-lg">
                আল-কুরআন শিখুন সহজে ও সৌন্দর্যে
              </h1>
              <p className="text-lg md:text-2xl font-light text-gray-300 rounded-md shadow-md">
                আল-কুরআন পবিত্র ইসলামিক বই। এটি প্রতিটি মুসলিমের জীবনে অত্যন্ত
                গুরুত্বপূর্ণ। আল-কুরআন শিখুন সহজে ও সৌন্দর্যে।
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div
            className={`absolute w-full transition-transform duration-1000 ease-in-out ${
              currentSection === 1 ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <div className="space-y-6 py-3">
              <h1 className="text-4xl pt-2.5 md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-yellow-400 rounded-lg shadow-lg">
                خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
              </h1>
              <p className="text-lg md:text-2xl font-light text-gray-300 rounded-md shadow-md">
                তোমাদের মধ্যে সে ব্যক্তি উত্তম, যে নিজে কুরআন শিক্ষা গ্রহণ করে
                এবং অপরকে শিক্ষা দেয়।
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div
            className={`absolute w-full transition-transform duration-1000 ease-in-out ${
              currentSection === 2 ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <div className="space-y-6 py-3">
              <h1 className="text-4xl pt-2.5 md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400 rounded-lg shadow-lg">
                تعلم القرآن باللغة العربية
              </h1>
              <p className="text-lg md:text-2xl font-light text-gray-300 rounded-md shadow-md">
                আল-কুরআন আরবি ভাষায় অধ্যয়ন করুন এবং এর সৌন্দর্য ও অর্থ অনুধাবন
                করুন। এটি ইসলামের মূল।
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div
            className={`absolute w-full transition-transform duration-1000 ease-in-out ${
              currentSection === 3 ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <div className="space-y-6 py-3">
              <h1 className="text-4xl pt-2.5 md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg shadow-lg">
                ইসলামিক হাদিস থেকে শিক্ষাগ্রহণ
              </h1>
              <p className="text-lg md:text-2xl font-light text-gray-300 rounded-md shadow-md">
                ইসলামিক হাদিসের মাধ্যমে কুরআনের ব্যাখ্যা এবং বাস্তব জীবনের
                দিকনির্দেশনা শিখুন।
              </p>
            </div>
          </div>
        </div>

        {/* Fixed Buttons */}
        <div className="mt-10 space-x-4">
          <button className="px-6 py-3 bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white font-semibold rounded-full shadow-md transition duration-300 ease-in-out">
            Start Learning
          </button>
          <button className="px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-full shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">
            Explore More
          </button>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-tr from-yellow-400 to-pink-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-green-500 to-blue-400 rounded-full blur-2xl opacity-40"></div>
    </div>
  );
};

export default HeroSection;
