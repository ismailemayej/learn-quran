"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";

export function Background() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      ></motion.div>
    </AuroraBackground>
  );
}
