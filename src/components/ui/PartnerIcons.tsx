import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

export function ShellsIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={cn("h-5 w-5 shrink-0", className)}
      aria-hidden
    >
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="10" cy="10" r="4.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="10" cy="10" r="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 2.5V17.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function SmartFinderIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={cn("h-5 w-5 shrink-0", className)}
      aria-hidden
    >
      <path
        d="M10 2.5L16.5 6.5V13.5L10 17.5L3.5 13.5V6.5L10 2.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M10 7.5L12.5 10L10 12.5L7.5 10L10 7.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ZoomerrIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={cn("h-5 w-5 shrink-0", className)}
      aria-hidden
    >
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M11.5 5.5L8 10H10.5L8.5 14.5L12 10H9.5L11.5 5.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ArtVenueIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={cn("h-5 w-5 shrink-0", className)}
      aria-hidden
    >
      <rect
        x="3.5"
        y="3.5"
        width="13"
        height="13"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M7 15L13 5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M9.5 15L15.5 5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function KontrastrIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={cn("h-5 w-5 shrink-0", className)}
      aria-hidden
    >
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 2.5A7.5 7.5 0 0 0 10 17.5V2.5Z" fill="currentColor" />
    </svg>
  );
}

export function WavesMarathonIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={cn("h-5 w-5 shrink-0", className)}
      aria-hidden
    >
      <rect x="4" y="11" width="2" height="6" rx="0.5" fill="currentColor" />
      <rect x="7.5" y="8" width="2" height="9" rx="0.5" fill="currentColor" />
      <rect x="11" y="5" width="2" height="12" rx="0.5" fill="currentColor" />
      <rect x="14.5" y="9" width="2" height="8" rx="0.5" fill="currentColor" />
    </svg>
  );
}
