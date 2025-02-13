"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { useTheme } from "next-themes";
import clsx from "clsx";

export default function CourseDetails() {
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
        <AccordionItem
          className={clsx(
            "rounded-md transition-colors",
            isDarkTheme ? "text-gray-300 " : "text-gray-900 bg-white"
          )}
          key="1"
          aria-label="Accordion 1"
          title="কোরআন শিখতে কি ধরনের প্রস্তুতি প্রয়োজন?"
        >
          <p className="text-lg">
            কোরআন শিখতে প্রথমে আধ্যাত্মিক প্রস্তুতি প্রয়োজন। এছাড়াও শুদ্ধভাবে
            উচ্চারণ (তাজউইদ) শেখা, নিয়মিত অধ্যয়ন এবং অধ্যবসায়ের জন্য মনোযোগী
            হওয়া দরকার।
          </p>
        </AccordionItem>
        <AccordionItem
          className={clsx(
            "rounded-md transition-colors",
            isDarkTheme ? "text-gray-300 " : "text-gray-900 bg-white"
          )}
          key="2"
          aria-label="Accordion 2"
          title="কোরআন শিক্ষা শুরু করার উপযুক্ত বয়স কত?"
        >
          <p className="text-lg">
            কোরআন শিক্ষা শুরু করার জন্য কোনো নির্দিষ্ট বয়স নেই। যে কোনো বয়সে
            কোরআন শেখা শুরু করা যেতে পারে, তবে শিশুদের জন্য তাজউইদসহ শুদ্ধভাবে
            শিখে বড়রা আরও কার্যকর হতে পারেন।
          </p>
        </AccordionItem>
        <AccordionItem
          className={clsx(
            "rounded-md transition-colors",
            isDarkTheme ? "text-gray-300 " : "text-gray-900 bg-white"
          )}
          key="3"
          aria-label="Accordion 3"
          title="কোরআন শেখার জন্য কি কোনো বিশেষ কোর্সের প্রয়োজন?"
        >
          <p className="text-lg">
            হ্যাঁ, শুদ্ধভাবে কোরআন শিক্ষা লাভের জন্য তাজউইদ এবং আছান পড়ার কোর্স
            নিতে পারেন। তবে, এটি ব্যক্তিগত ইচ্ছা ও সময়ের ওপর নির্ভরশীল।
          </p>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
