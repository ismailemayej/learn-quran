import React from "react";
import HeroSection from "./Hero";
import About from "./About";
import { Ourservices } from "./ui/services/Ourservices";
import { Testimonials } from "./Testimonials";
import { Blogs } from "./Blogs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Ourservices />
      <Testimonials />
      <Blogs />
    </div>
  );
};

export default Home;
