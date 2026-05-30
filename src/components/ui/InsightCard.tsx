"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { InsightSymbolGrid } from "./InsightSymbolGrid";
import { PartnerLogo } from "./PartnerLogo";

interface InsightCardProps {
  title?: string;
  author?: string;
  date?: string;
  company?: string;
  companyLogo?: string;
  featured?: boolean;
  showSymbol?: boolean;
  large?: boolean;
  dimmed?: boolean;
  className?: string;
}

export function InsightCard({
  title = "How to transition from a traditional to a digital bank",
  author = "David Grohl",
  date = "17/08/24",
  company,
  companyLogo,
  featured = false,
  showSymbol = false,
  large = false,
  dimmed = false,
  className = "",
}: InsightCardProps) {
  const hasMeta = Boolean(company || author || date);

  return (
    <motion.article
      whileHover={{ y: -3, transition: { duration: 0.25 } }}
      className={cn(
        "flex rounded-[18px] bg-[#01141B] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(0,180,253,0.08)]",
        featured ? "min-h-0 flex-col lg:min-h-[318px] lg:flex-row" : "min-h-[280px] flex-col sm:min-h-[318px]",
        dimmed && "opacity-30",
        className,
      )}
    >
      {showSymbol && featured && (
        <InsightSymbolGrid className="h-[140px] w-full max-w-none overflow-hidden rounded-t-[8px] sm:h-[180px] lg:h-auto lg:w-[38%] lg:min-w-[140px] lg:max-w-[295px] lg:rounded-l-[8px] lg:rounded-tr-none" />
      )}

      <div
        className={cn(
          "flex flex-1 flex-col justify-between",
          featured && showSymbol ? "px-6 py-8 sm:px-8 sm:py-10" : "p-8 sm:p-10",
        )}
      >
        <div>
          <p className="text-xs uppercase tracking-wide text-[#2490BB]/80">
            getting started
          </p>
          <h3
            className={cn(
              "mt-3 font-normal leading-[1.2] text-[#E9F4F9]",
              large
                ? "text-[28px] sm:text-[32px] lg:text-[43px]"
                : "text-[22px] sm:text-[27px]",
            )}
          >
            {title}
          </h3>

          {hasMeta && (
            <div className="mt-5 flex min-h-[32px] items-center overflow-visible">
              {company ? (
                <PartnerLogo name={company} />
              ) : (
                <p className="text-sm text-[#64A8C4]/80">
                  {author && <span>{author}</span>}
                  {date && <span className={author ? "ml-3.5" : ""}>{date}</span>}
                </p>
              )}
            </div>
          )}
        </div>

        <Link
          href="#"
          className={cn(
            "mt-8 flex w-full items-center justify-center rounded-[10px] border border-[#E9F4F9]/50 px-6 py-2.5 text-xs uppercase tracking-wide text-[#E9F4F9]/50 transition-colors hover:border-[#E9F4F9]/70 hover:text-[#E9F4F9]/70",
            !featured && "mt-auto",
          )}
        >
          read more
        </Link>
      </div>
    </motion.article>
  );
}

export function LearnMoreLink({
  href = "#",
  className = "",
}: {
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex flex-col items-start gap-0.5 text-sm uppercase tracking-wide text-[#00B4FD]",
        className,
      )}
    >
      <span className="flex items-center gap-1.5 font-medium">
        learn more
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
      <span
        className="block h-px w-1/2 bg-current transition-all duration-300 ease-out group-hover:w-full"
        aria-hidden
      />
    </Link>
  );
}
