import React from "react";
import NextLink from "next/link";
import ButtonA from "./button";

const About = () => {
  return (
    <section className=" my-6 py-16 px-6 rounded-md md:px-12 lg:px-24 bg-gradient-to-r from-gray-800 via-gray-900 to-black dark:from-gray-700 dark:via-gray-800 dark:to-black text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left Content */}
        <div className="flex-grow text-center lg:text-left">
          <p>Welcome to</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            Discover the journey that has brought us here. Learn about our
            mission, vision, and the passion that drives everything we do.
            Together, we're building a brighter future.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <ButtonA className="px-5 py-2" link="/about">
              Learn More
            </ButtonA>
            <NextLink href="/contact">
              <button className="bg-gray-700 text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg hover:bg-gray-600 transition-all">
                Contact Us
              </button>
            </NextLink>
          </div>
        </div>

        {/* Right Image (Hidden on Mobile) */}
        <div className="hidden lg:block flex-shrink-0 w-full lg:w-1/2">
          <img
            src="/about-hero-image.jpg"
            alt="About us"
            className="rounded-lg shadow-lg object-cover w-full h-64 lg:h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
