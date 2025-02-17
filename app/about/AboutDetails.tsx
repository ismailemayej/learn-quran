import React from "react";
import Image from "next/image";

const AboutDetails: React.FC = () => {
  return (
    <section className="bangla my-6 py-16 px-6 rounded-md md:px-12 lg:px-24 bg-gradient-to-r from-gray-100 via-gray-200 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white shadow-xl dark:shadow-none">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left Content */}
        <div className="flex-grow text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            আমাদের সম্পর্কে
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            আমাদের এই ওয়েবসাইটটি সহজে এবং সুন্দরভাবে পবিত্র আল-কুরআন শেখানোর
            একটি অনলাইন ভিত্তিক প্ল্যাটফর্ম। আমরা বিশ্বাস করি যে, কুরআন শিক্ষার
            মাধ্যমে মানুষের জীবনে ইতিবাচক পরিবর্তন আনা সম্ভব।
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            এই কোর্সটি চালু করার পেছনে আমাদের মূল উদ্দেশ্য হলো দ্বীনের খেদমত করা
            এবং কুরআন শিক্ষাকে সহজলভ্য করা। যারা বিভিন্ন ব্যস্ততার কারণে সরাসরি
            মাদরাসায় গিয়ে কুরআন শিখতে পারেন না, তাদের জন্য এটি একটি দারুণ
            সুযোগ। এখানে আপনি ঘরে বসেই আধুনিক প্রযুক্তির সহায়তায় পবিত্র
            আল-কুরআন শিখতে পারবেন।
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            আমাদের এই উদ্যোগটি শুরু হয়েছে একটি গভীর চিন্তা থেকে—কিভাবে কুরআনের
            আলো সবার জীবনে পৌঁছে দেওয়া যায়। আমাদের কোর্সে আপনি কুরআন
            তিলাওয়াতের পাশাপাশি সঠিক উচ্চারণ (তাজবীদ) এবং অর্থ বুঝে শিখতে
            পারবেন।
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            আপনারা যারা কুরআন শিখতে আগ্রহী, তাদের জন্য আমাদের দরজা সর্বদা খোলা।
            আসুন, আমরা একসাথে কুরআনের শিক্ষায় নিজেদের সমৃদ্ধ করি এবং আল্লাহর
            রহমত লাভ করি।
          </p>
          <p className="text-lg md:text-xl font-semibold text-teal-600 dark:text-teal-400 text-center lg:text-left">
            আল কুরআনের আলো ছড়িয়ে দিন আপনার জীবনে।
          </p>
        </div>

        {/* Right Image (Responsive) */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <Image
            alt="About us"
            className="rounded-lg shadow-xl dark:shadow-none object-cover"
            height={500}
            priority={true} // Ensure priority loading for LCP optimization
            src="/about-hero-image.jpg"
            width={500}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
