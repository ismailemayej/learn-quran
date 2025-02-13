import ButtonA from "@/components/button";
import React from "react";

const ContactDetails: React.FC = () => {
  return (
    <section className="bangla my-6 py-16 px-6 rounded-md md:px-12 lg:px-24 bg-gradient-to-r from-gray-100 via-gray-200 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white shadow-xl dark:shadow-none">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left Form */}
        <div className="flex-grow text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            আমাদের সাথে যোগাযোগ করুন
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            আপনি যদি কোনো প্রশ্ন বা পরামর্শ দিতে চান, আমাদের সাথে যোগাযোগ করুন।
            আমরা আপনার সাহায্য করতে প্রস্তুত। নিচে আমাদের যোগাযোগের মাধ্যমগুলি
            দেওয়া হল।
          </p>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 dark:text-gray-300 font-semibold"
              >
                আপনার নাম
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 mt-2 border rounded-md text-gray-700 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="আপনার নাম লিখুন"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-300 font-semibold"
              >
                আপনার ইমেইল
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 mt-2 border rounded-md text-gray-700 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="আপনার ইমেইল লিখুন"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 dark:text-gray-300 font-semibold"
              >
                বার্তা
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 mt-2 border rounded-md text-gray-700 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="আপনার বার্তা লিখুন"
                required
              />
            </div>
            <div className="flex justify-center lg:justify-start">
              <ButtonA className="px-5 py-3" link="/contact">
                পাঠিয়ে দিন
              </ButtonA>
            </div>
          </form>
        </div>

        {/* Right Contact Information */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">যোগাযোগের তথ্য</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">ঠিকানা:</h3>
              <p className="text-gray-700 dark:text-gray-300">
                ইস্ট হানসা, ফরিদগঞ্জ, চাঁদপুর, বাংলাদেশ
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">ফোন:</h3>
              <p className="text-gray-700 dark:text-gray-300">
                +8801858226967 (WhatsApp)
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">ইমেইল:</h3>
              <p className="text-gray-700 dark:text-gray-300">
                ismaile535@gmail.com
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">সামাজিক যোগাযোগ মাধ্যম:</h3>
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="https://www.linkedin.com/in/ismaile535/"
                    className="text-teal-500 hover:text-teal-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ismailemayej"
                    className="text-teal-500 hover:text-teal-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://ismaile-web-developer.vercel.app"
                    className="text-teal-500 hover:text-teal-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
