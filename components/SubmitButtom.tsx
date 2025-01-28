"use client";
import { Button, Spinner } from "@heroui/react";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  children: ReactNode;
  className?: string;
}

export default function SubmitButton({
  children,
  className,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      className={`${className} w-full bg-gradient-to-r from-green-400 to-green-600 text-white py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 focus:ring focus:ring-green-300`} // Adding className here properly
      disabled={pending}
      type="submit"
    >
      {pending ? <Spinner /> : children}
    </Button>
  );
}
