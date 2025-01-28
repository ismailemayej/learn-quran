import React from "react";
import HeroSection from "./Hero";
import About from "./About";
import { Ourservices } from "./ui/services/Ourservices";
import { Testimonials } from "./Testimonials";
import { Blogs } from "./Blogs";
import Course from "@/components/course/Course";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Ourservices />
      <Course />
      <Testimonials />
      <Blogs />
    </div>
  );
};

export default Home;
