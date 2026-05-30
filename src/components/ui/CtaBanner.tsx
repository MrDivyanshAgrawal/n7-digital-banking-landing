"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";
import { Button } from "../ui/Button";
import { BrandWatermark } from "./CtaWatermark";

interface CtaBannerProps {
  label?: string;
  className?: string;
}

export function CtaBanner({ label = "CB7", className = "" }: CtaBannerProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={`relative min-h-[220px] overflow-hidden rounded-[1.75rem] border border-brand-blue/15 bg-[#0A1018] px-5 py-10 sm:min-h-[240px] sm:rounded-[2rem] sm:px-8 sm:py-12 lg:min-h-[260px] lg:px-14 lg:py-16 ${className}`}
    >
      <BrandWatermark label={label} variant="cta" />

      <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-12">
        <div className="max-w-2xl">
          <h2 className="text-[1.75rem] font-bold leading-[1.2] tracking-[-0.01em] text-white sm:text-3xl lg:text-[2.125rem]">
            Take the full advantage of going paper-less now.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#8899A8] sm:text-base">
            {label} helps your financial institution improve the client
            experience, automate and optimize procedures, simplify banking
            operations
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:gap-5">
          <Button variant="outline" size="md" className="w-full sm:w-auto lg:min-w-[148px]">
            Contact Us
          </Button>
          <Button variant="primary" size="md" className="w-full sm:w-auto lg:min-w-[168px]">
            Request Demo
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
