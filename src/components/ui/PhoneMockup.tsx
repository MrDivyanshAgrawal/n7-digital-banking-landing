"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { scaleIn, viewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
}

/** Phone frame + screen image — 390×844 viewport. */
export function PhoneMockup({ src, alt, className }: PhoneMockupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={scaleIn}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={cn(
        "mx-auto w-[min(260px,100%)] rounded-[2.5rem] border-[8px] border-slate-900 bg-slate-900 p-2 shadow-[0_24px_48px_rgba(15,23,42,0.18)] transition-shadow duration-300 hover:shadow-[0_32px_56px_rgba(15,23,42,0.22)] sm:w-[280px]",
        className,
      )}
    >
      <div className="relative aspect-[390/844] w-full overflow-hidden rounded-[1.8rem] bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 260px, 280px"
          draggable={false}
        />
      </div>
    </motion.div>
  );
}
