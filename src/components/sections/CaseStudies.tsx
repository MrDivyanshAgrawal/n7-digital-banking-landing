"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CtaBanner } from "../ui/CtaBanner";
import { InsightCard } from "../ui/InsightCard";
import { Reveal } from "../ui/Reveal";
import { ViewAllLink } from "../ui/ViewAllLink";
import { cn } from "@/lib/utils";

const cases = [
  {
    title: "How we help brand reach out to more people",
    company: "Zoomerr",
  },
  {
    title: "How to transition from a traditional to a digital bank",
    company: "SHELLS",
  },
  {
    title: "Scaling digital banking across multiple regions",
    company: "ArtVenue",
  },
];

const CARD_OFFSET = 168;
const CARD_Y_OFFSET = 33;

function CarouselArrow({
  direction,
  onClick,
  label,
}: {
  direction: "left" | "right";
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#00B4FD] text-[#00B4FD] transition-all duration-300 hover:scale-105 hover:bg-[#00B4FD]/10 active:scale-95"
    >
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        aria-hidden
      >
        <circle cx="10.5" cy="10.5" r="9.5" stroke="currentColor" strokeWidth="1.2" />
        <path
          d={direction === "left" ? "M12 7L8 10.5L12 14" : "M9 7L13 10.5L9 14"}
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function getCardPosition(index: number, current: number, total: number) {
  const diff = (index - current + total) % total;
  if (diff === 0) return "center";
  if (diff === 1) return "right";
  return "left";
}

export default function CaseStudies() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((index) => (index === 0 ? cases.length - 1 : index - 1));
  const next = () =>
    setCurrent((index) => (index === cases.length - 1 ? 0 : index + 1));

  return (
    <section className="relative bg-[#000D12] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal variant="fadeUp">
          <h2 className="mb-12 text-center text-[28px] font-normal leading-[1.2] tracking-[-0.01em] text-[#E9F4F9] sm:text-[36px] md:text-[44px] lg:text-[53px]">
            Our Case Studies
          </h2>
        </Reveal>

        <div className="relative mx-auto w-full max-w-[1240px]">
          {/* Fixed center stage — cards animate around this anchor */}
          <div className="relative min-h-[320px] sm:min-h-[380px] lg:min-h-[438px]">
            <div className="pointer-events-none absolute left-1/2 top-0 h-full w-full max-w-[1015px] -translate-x-1/2">
              {cases.map((item, index) => {
                const position = getCardPosition(index, current, cases.length);
                const isCenter = position === "center";

                return (
                  <motion.div
                    key={item.title}
                    initial={false}
                    animate={{
                      opacity: isCenter ? 1 : 0.35,
                      scale: isCenter ? 1 : 0.9,
                      x:
                        position === "center"
                          ? 0
                          : position === "left"
                            ? -CARD_OFFSET
                            : CARD_OFFSET,
                      y: isCenter ? 0 : CARD_Y_OFFSET,
                    }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      "absolute inset-x-0 top-0 w-full",
                      isCenter ? "z-20" : "z-10 hidden lg:block",
                    )}
                    style={{ pointerEvents: isCenter ? "auto" : "none" }}
                  >
                    <InsightCard
                      featured
                      showSymbol
                      large
                      title={item.title}
                      company={item.company}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative mt-10 flex items-center justify-center gap-8">
            <CarouselArrow direction="left" onClick={prev} label="Previous case study" />

            <div className="flex items-center gap-2">
              {cases.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to case study ${index + 1}`}
                  className={
                    index === current
                      ? "h-3 w-[38px] rounded-full bg-[#0B4B63]"
                      : "h-3 w-3 rounded-full border border-[#0B4B63]"
                  }
                />
              ))}
            </div>

            <CarouselArrow direction="right" onClick={next} label="Next case study" />
          </div>

          <div className="mt-6 flex justify-center sm:justify-end">
            <ViewAllLink label="view all" />
          </div>
        </div>

        {/* Continuous CB7 CTA card below carousel */}
        <div className="mt-16 lg:mt-20">
          <CtaBanner label="CB7" />
        </div>
      </div>
    </section>
  );
}
