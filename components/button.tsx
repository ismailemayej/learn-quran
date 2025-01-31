import React from "react";
import NextLink from "next/link";

interface ButtonAProps {
  children: React.ReactNode;
  link?: string;
  className?: string; // New prop for extra classes
}

const ButtonA: React.FC<ButtonAProps> = ({ children, link, className }) => {
  const buttonContent = (
    <button
      className={`text-lg px-8 py-3 bg-gradient-to-r from-teal-400 to-blue-400 dark:from-teal-500 dark:to-blue-600 hover:from-teal-500 hover:to-blue-500 dark:hover:from-teal-600 dark:hover:to-blue-700 text-white font-semibold rounded-lg shadow-xl transition-all duration-300 rounded-br-3xl rounded-tl-3xl ${className}`}
    >
      {children}
    </button>
  );

  return link ? (
    <NextLink href={link}>{buttonContent}</NextLink>
  ) : (
    buttonContent
  );
};

export default ButtonA;
