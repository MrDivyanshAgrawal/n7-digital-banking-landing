import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "dark" | "light" | "neon";
}

export const Badge = ({
  className,
  variant = "dark",
  ...props
}: BadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex max-w-fit items-center rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors duration-300",
        {
          "border-white/10 bg-brand-darkGray/80 text-brand-blue backdrop-blur-md":
            variant === "dark",
          "border-brand-blue/20 bg-brand-blue/10 text-brand-blue":
            variant === "neon",
          "border-slate-200 bg-brand-lightGray text-slate-800":
            variant === "light",
        },
        className,
      )}
      {...props}
    />
  );
};
