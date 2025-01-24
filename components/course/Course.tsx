import React from "react";
import CourseDetails from "./CourseDetails";

const Course: React.FC = () => {
  return (
    <div className="bangla lg:my-6 my-2 bg-gradient-to-r from-gray-800 via-indigo-800 to-purple-900 dark:from-gray-700 dark:via-gray-900 dark:to-black text-white rounded-lg shadow-xl max-w-6xl mx-auto p-6 space-y-6">
      <h2 className="text-5xl  font-bold text-center py-3 my-2 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
        আপনি কি শুদ্ধ করে কোরআন শিখতে চান?
      </h2>

      <div className="flex justify-center">
        <button className=" text-lg px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold rounded-lg shadow-xl transition-all duration-300">
          ভর্তি হোন
        </button>
      </div>
      <CourseDetails />
    </div>
  );
};

export default Course;
