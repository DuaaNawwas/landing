"use client";

import { FC, memo } from "react";

interface ButtonProps {
  children: React.ReactNode;
  size?: "sm" | "lg";
}

const Button: FC<ButtonProps> = ({ children, size = "lg" }) => {
  const sizes = {
    sm: "px-5 py-2 text-sm",
    lg: "px-8 py-3 text-lg",
  };

  const sizeClass = sizes[size];

  return (
    <button
      className={`${sizeClass} bg-gradient-to-r from-amber-300 to-amber-400 text-gray-900/80 rounded-xl ring-1 ring-purple-300  font-bold transition shadow hover:shadow-lg`}
    >
      {children}
    </button>
  );
};

export default memo(Button);
