import React from "react";
import CourseDetails from "./CourseDetails";
import NextLink from "next/link";

const Course: React.FC = () => {
  return (
    <div className="bangla lg:my-6 my-2 bg-gradient-to-r from-gray-100 via-gray-200 to-white dark:from-gray-800 dark:via-indigo-800 dark:to-purple-900 text-gray-900 dark:text-white rounded-lg shadow-xl mx-auto p-3 space-y-6">
      <h2 className="lg:text-5xl  text-3xl font-bold text-center py-3 my-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-500">
        আপনি কি শুদ্ধ করে কোরআন শিখতে চান?
      </h2>

      <div className="flex justify-center">
        <NextLink href="/registration">
          <button className="text-lg px-8 py-3 bg-gradient-to-r from-teal-400 to-blue-400 dark:from-teal-500 dark:to-blue-600 hover:from-teal-500 hover:to-blue-500 dark:hover:from-teal-600 dark:hover:to-blue-700 text-white font-semibold rounded-lg shadow-xl transition-all duration-300">
            ভর্তি হোন
          </button>
        </NextLink>
      </div>
      <CourseDetails />
    </div>
  );
};

export default Course;
