import { cn } from "@/lib/utils";
import React from "react";

const Button = ({
  children,
  className,
  type = "button",
  disabled = false,
}: {
  children: string;
  className?: string;
  type?: "button" | "reset" | "submit" | undefined;
  disabled?: boolean;
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "px-10 py-3 rounded-[10px] font-bold bg-orange-400 focus-visible:ring-green-500/50 focus:outline-none focus-visible:ring",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
