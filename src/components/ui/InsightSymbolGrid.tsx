import Image from "next/image";
import { cn } from "@/lib/utils";

interface InsightSymbolGridProps {
  className?: string;
}

export function InsightSymbolGrid({ className }: InsightSymbolGridProps) {
  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center bg-[#07193C]",
        className,
      )}
    >
      <Image
        src="/images/symbols/insight-symbol-grid.png"
        alt=""
        width={257}
        height={218}
        className="h-auto w-[60%] max-w-[180px] object-contain py-4 sm:w-[70%] sm:max-w-[200px] lg:w-[78%] lg:max-w-[220px] lg:py-8"
        aria-hidden
      />
    </div>
  );
}
