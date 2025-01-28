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
      color="primary"
      className={`${className} my-3 w-full`} // Adding className here properly
      disabled={pending}
      type="submit"
    >
      {pending ? <Spinner /> : children}
    </Button>
  );
}
