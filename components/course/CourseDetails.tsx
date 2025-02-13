"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { useTheme } from "next-themes";
import clsx from "clsx";

export default function CourseDetails() {
  const questionsAndAnswers = [
    {
      question: "১. কোরআন শিখতে কত সময় লাগবে?",
      answer:
        "কোরআন শিখতে সময়কাল অনেক কিছুই নির্ভর করে ব্যক্তির উপযোগিতা এবং অধ্যবসায়ের ওপর। কিছু শিক্ষার্থী এক বছরের মধ্যে পুরো কোরআন শিখতে পারেন, কিন্তু অধিকাংশ সময় প্রায় ২-৩ বছর সময় লাগে। তবে নিয়মিত অধ্যায়ন এবং মনোযোগী প্রচেষ্টা দিয়ে শিখতে পারবেন।",
    },
    {
      question: "২. কোরআন পড়ার সঠিক নিয়ম কী?",
      answer:
        "কোরআন সঠিকভাবে পড়ার জন্য তাজওয়িদ শাস্ত্র অনুসরণ করা জরুরি। এর মধ্যে সঠিক উচ্চারণ এবং ধ্বনি সহ আয়াত পড়া হয়, যা মুসলিমদের জন্য অত্যন্ত গুরুত্বপূর্ণ। আপনাদের সঠিক তেলোয়াত শেখানোর জন্য আমি সাহায্য করতে প্রস্তুত।",
    },
    {
      question: "৩. কোরআন শিখতে কতদিন সময় দিতে হবে প্রতিদিন?",
      answer:
        "আপনার শেখার গতি এবং সময়ের প্রতি গুরুত্ব দেওয়ার ওপর নির্ভর করে। সাধারণত প্রতিদিন ৩০ মিনিট থেকে ১ ঘণ্টা পড়ালেখা করলে ভাল ফলাফল পাওয়া যায়। তবে আপনি যে সময়টা দিতে পারেন, তা নিশ্চিত করুন যেন নিয়মিত প্র্যাকটিস করতে পারেন।",
    },
    {
      question: "৪. কোরআন শিখতে কি কোনো বিশেষ প্রস্তুতি প্রয়োজন?",
      answer:
        "কোরআন শিখতে আগ্রহ এবং মনোযোগী মনোভাব সবচেয়ে গুরুত্বপূর্ণ। আপনি যদি সঠিক মনোভাব নিয়ে কোরআন শিখতে শুরু করেন, তবে কোনো বিশেষ প্রস্তুতির প্রয়োজন নেই। তবে, তাজওয়িদ এবং নিয়মিত অধ্যায়ন সঠিক শেখার জন্য অপরিহার্য।",
    },
    {
      question: "৫. কোরআন শিখতে কি কোনো বয়সের সীমা রয়েছে?",
      answer:
        "কোরআন শেখার কোনো বয়সের সীমা নেই। আপনি যে বয়সেই কোরআন শিখতে শুরু করুন, তাতে কোনো সমস্যা নেই। যত দ্রুত শুরু করবেন, তত দ্রুত শিখতে পারবেন। শিখতে আগ্রহী হলে যে কোনো বয়সেই কোরআন শেখা সম্ভব।",
    },
  ];

  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <div
      className={clsx(
        "lg:p-4 rounded-lg transition-colors",
        isDarkTheme ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-900"
      )}
    >
      <h1 className="text-xl ml-2 font-semibold mb-4">যেভাবে সাজিয়েছি</h1>
      <Accordion
        className={clsx(
          "bangla",
          isDarkTheme ? "text-gray-300" : "text-gray-800"
        )}
        variant="bordered"
      >
        {questionsAndAnswers.map((qa, index) => (
          <AccordionItem
            className={clsx(
              "rounded-md transition-colors",
              isDarkTheme ? "text-gray-300" : "text-gray-900"
            )}
            key={index} // Using index as the key for list items
            aria-label={`Accordion ${index + 1}`}
            title={qa.question}
          >
            <p className="text-lg">{qa.answer}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
