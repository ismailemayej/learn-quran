import React from "react";
import Image from "next/image";
import aboutMe from "../../public/ismaileMe.png";
import ButtonA from "../../components/button";

const Instructor: React.FC = () => {
  return (
    <section className="bangla my-6 py-16 px-6 rounded-md md:px-12 lg:px-24 bg-gradient-to-r from-gray-100 via-gray-200 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white shadow-xl dark:shadow-none">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left Content */}
        <div className="flex-grow text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">আমার সম্পর্কে</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            আমি মোঃ ইসমাইল হোসেন। পবিত্র কোরআন সহিহভাবে তেলোয়াত শিখানোর জন্যে
            বহুদিন ধরে প্রচেষ্টা চালিয়ে যাচ্ছি। আমি আরবি বিশ্ববিদ্যালয় থেকে
            মাস্টার্স শেষ করেছি এবং পবিত্র কোরআন শিখানোর জন্যে আমার ৪ বছরের
            অভিজ্ঞতা রয়েছে। কোরআন শিখানো আমার জীবনের অন্যতম মহৎ কাজ, এবং আমি
            সবসময় চেষ্টা করি যেন শিক্ষার্থীরা সঠিকভাবে কোরআন শিখতে পারে।
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            আমার কাজের মাধ্যমে আমি চাই, প্রতিটি শিক্ষার্থী পবিত্র কোরআনকে
            সঠিকভাবে তেলোয়াত করে, এবং তাদের জীবনে ইসলামের সৌন্দর্য তুলে ধরতে
            সাহায্য করতে। আমি বিশ্বাস করি, যে কেউ যদি মনযোগ দিয়ে কোরআন শিখতে
            চায়, তবে তারা নিশ্চয়ই সাফল্য অর্জন করবে। আমি সর্বদা চেষ্টা করি
            শিক্ষার্থীদের সঠিক পথ প্রদর্শন করতে এবং তাদের উন্নতির জন্যে সাহায্য
            করতে।
          </p>
          <div className="flex justify-center items-center lg:justify-start gap-4">
            <ButtonA className="px-5 py-2" link="/">
              আমার কোর্স দেখুন
            </ButtonA>
            <ButtonA className="px-5 py-2" link="/contact">
              যোগাযোগ করুন
            </ButtonA>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <Image
            alt="Instructor"
            className="rounded-lg shadow-xl dark:shadow-none object-cover"
            height={500}
            priority={true} // Ensure priority loading for LCP optimization
            src={aboutMe}
            width={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Instructor;
