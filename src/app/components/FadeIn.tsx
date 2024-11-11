"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const FadeIn = ({ children, className, delay = 0 }: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={cn(
        "opacity-0 transition-all duration-700 ease-in-out",
        isVisible && "opacity-100",
        className
      )}
    >
      {children}
    </div>
  );
};

export default FadeIn;
