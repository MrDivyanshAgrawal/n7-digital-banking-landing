import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const Card = ({
  className,
  hoverEffect = true,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/5 bg-brand-darkGray/60 p-6 backdrop-blur-sm transition-all duration-300",
        {
          "hover:-translate-y-1 hover:border-white/10 hover:bg-brand-darkGray/80 hover:shadow-2xl hover:shadow-brand-blue/5":
            hoverEffect,
        },
        className,
      )}
      {...props}
    />
  );
};
