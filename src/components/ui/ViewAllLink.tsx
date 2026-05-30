import Link from "next/link";
import { cn } from "@/lib/utils";

interface ViewAllLinkProps {
  href?: string;
  label?: string;
  className?: string;
}

export function ViewAllLink({
  href = "#",
  label = "read all insights",
  className,
}: ViewAllLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex flex-col items-end gap-0.5 text-sm uppercase tracking-wide text-[#00B4FD]",
        className,
      )}
    >
      <span className="flex items-center gap-1.5 font-medium">
        {label}
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          aria-hidden
          className="transition-transform group-hover:translate-x-0.5"
        >
          <path
            d="M1 7.5H12M12 7.5L7.5 3M12 7.5L7.5 12"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </span>
      <span className="h-px w-8 bg-[#00B4FD]" />
    </Link>
  );
}
