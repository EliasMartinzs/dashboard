import { cn } from "@/lib/utils";
import React from "react";

interface FormSucessProps {
  message: string | undefined;
  icon: React.ReactNode;
  style: string;
}

export function FormState({ message, icon, style }: FormSucessProps) {
  return (
    <div
      className={cn(
        "w-full py-2 px-0 text-sm text-white text-center flex-center font-bold rounded-md",
        style
      )}
    >
      {icon} {message}
    </div>
  );
}
