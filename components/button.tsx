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
      className={`bg-[#fea621] px-4 py-1 rounded-br-2xl rounded-tl-2xl ${className}`}
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
