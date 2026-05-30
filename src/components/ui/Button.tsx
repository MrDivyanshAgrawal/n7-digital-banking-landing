import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-[10px] font-medium uppercase tracking-[0.08em] transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-brand-blue/50 disabled:pointer-events-none disabled:opacity-50",
          {
            "btn-gradient text-white shadow-lg shadow-brand-blue/20 hover:brightness-110":
              variant === "primary",
            "bg-white text-background shadow-md hover:bg-brand-lightGray":
              variant === "secondary",
            "border border-white bg-transparent text-white hover:bg-white/5":
              variant === "outline",
            "bg-transparent text-white hover:bg-white/5": variant === "ghost",
            "px-4 py-2 text-xs": size === "sm",
            "px-6 py-2.5 text-xs": size === "md",
            "px-8 py-3 text-sm": size === "lg",
          },
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
