import React from "react";
import clsx from "clsx";

interface TitleTextProps {
  text: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  align?: "left" | "center" | "right";
  gradient?: boolean; // Enable gradient effect
  color?: string; // Default color
  className?: string;
}

const TitleText: React.FC<TitleTextProps> = ({
  text,
  size = "xl",
  align = "left",
  gradient = false,
  color = "text-gray-900 dark:text-white",
  className = "",
}) => {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
  };

  return (
    <h1
      className={clsx(
        sizeClasses[size],
        `text-${align}`,
        gradient
          ? "bangla  uppercase bg-gradient-to-r from-blue-900 via-purple-500 to-pink-100 bg-clip-text text-transparent"
          : color,
        "font-bold leading-tight",
        className
      )}
    >
      {text}
    </h1>
  );
};

export default TitleText;
