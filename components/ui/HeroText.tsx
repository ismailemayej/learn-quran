"use client";
import React from "react";

import { motion } from "motion/react";

export function HeroText({ text }: { text: string }) {
  const colors = [
    "rgb(217, 235, 19)", // Bright Yellow-Green
    "rgb(239, 240, 231)", // Soft Off-White
    "rgb(42, 169, 210)", // Sky Blue
    "rgb(255, 204, 102)", // Warm Amber
    "rgb(186, 104, 200)", // Light Purple
    "rgb(102, 187, 106)", // Mint Green
    "rgb(255, 112, 67)", // Coral Orange
    "rgb(255, 245, 157)", // Pale Yellow
    "rgb(77, 182, 172)", // Turquoise
    "rgb(156, 204, 101)", // Lime Green
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}
