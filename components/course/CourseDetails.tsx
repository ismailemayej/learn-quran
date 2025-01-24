"use client";
import { Accordion, AccordionItem } from "@heroui/react";

export default function CourseDetails() {
  return (
    <div>
      <h1 className="text-xl ml-2 text-white"> যা যা থাকছে এই কোর্সে </h1>
      <Accordion className="bangla text-white" variant="bordered">
        <AccordionItem
          className="text-white"
          key="1"
          aria-label="Accordion 1"
          title="কোরআন শিখতে কি ধরনের প্রস্তুতি প্রয়োজন?"
        >
          কোরআন শিখতে প্রথমে আধ্যাত্মিক প্রস্তুতি প্রয়োজন। এছাড়াও শুদ্ধভাবে
          উচ্চারণ (তাজউইদ) শেখা, নিয়মিত অধ্যয়ন এবং অধ্যবসায়ের জন্য মনোযোগী হওয়া
          দরকার।
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="কোরআন শিক্ষা শুরু করার উপযুক্ত বয়স কত?"
        >
          কোরআন শিক্ষা শুরু করার জন্য কোনো নির্দিষ্ট বয়স নেই। যে কোনো বয়সে কোরআন
          শেখা শুরু করা যেতে পারে, তবে শিশুদের জন্য তাজউইদসহ শুদ্ধভাবে শিখে বড়রা
          আরও কার্যকর হতে পারেন।
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="কোরআন শেখার জন্য কি কোনো বিশেষ কোর্সের প্রয়োজন?"
        >
          হ্যাঁ, শুদ্ধভাবে কোরআন শিক্ষা লাভের জন্য তাজউইদ এবং আছান পড়ার কোর্স
          নিতে পারেন। তবে, এটি ব্যক্তিগত ইচ্ছা ও সময়ের ওপর নির্ভরশীল।
        </AccordionItem>
      </Accordion>
    </div>
  );
}
