import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CheckItemProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  /** Render without outer li — for use inside motion.li */
  bare?: boolean;
}

export function CheckItem({ children, className, dark = false, bare = false }: CheckItemProps) {
  const content = (
    <>
      <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#0099FF]">
        <Check className="h-3 w-3 text-white" strokeWidth={3} />
      </span>
      <span
        className={cn(
          "text-sm leading-relaxed sm:text-[15px]",
          dark ? "text-[#C8D4E0]" : "text-slate-700",
        )}
      >
        {children}
      </span>
    </>
  );

  if (bare) {
    return (
      <div className={cn("flex items-start gap-3", className)}>
        {content}
      </div>
    );
  }

  return (
    <li className={cn("flex items-start gap-3", className)}>
      {content}
    </li>
  );
}
