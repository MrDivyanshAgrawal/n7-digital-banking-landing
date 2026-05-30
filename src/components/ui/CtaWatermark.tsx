import { cn } from "@/lib/utils";

interface BrandWatermarkProps {
  label: string;
  variant?: "cta" | "section" | "light";
  className?: string;
}

export function BrandWatermark({
  label,
  variant = "cta",
  className,
}: BrandWatermarkProps) {
  if (variant === "section" || variant === "light") {
    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden",
          className,
        )}
        aria-hidden
      >
        <span
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-black leading-[0.82] tracking-[-0.04em] text-transparent"
          style={{
            fontSize:
              variant === "light"
                ? "clamp(180px, 30vw, 520px)"
                : "clamp(200px, 32vw, 560px)",
            WebkitTextStroke:
              variant === "light"
                ? "1px rgba(46, 120, 255, 0.22)"
                : "1px rgba(46, 120, 255, 0.2)",
          }}
        >
          {label}
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-y-0 right-0 flex items-center overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <span
        className="translate-x-[6%] select-none font-black leading-[0.82] tracking-[-0.04em] text-transparent opacity-50 sm:opacity-70 lg:opacity-100"
        style={{
          fontSize: "clamp(140px, 22vw, 300px)",
          WebkitTextStroke: "1px rgba(46, 120, 255, 0.22)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

/** @deprecated Use BrandWatermark */
export function CtaWatermark({ label }: { label: string }) {
  return <BrandWatermark label={label} variant="cta" />;
}
