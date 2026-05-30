"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { scaleIn, viewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

export const LAPTOP_WIDTH = 792;
export const LAPTOP_HEIGHT = 462;

interface LaptopMockupProps {
  src: string;
  alt: string;
  className?: string;
  bleed?: "left" | "right" | "none";
  /** Fraction of full-size laptop visible (0.75 = three quarters). */
  visiblePortion?: number;
  width?: number;
  height?: number;
}

export function LaptopMockup({
  src,
  alt,
  className,
  bleed = "none",
  visiblePortion = 0.75,
  width = LAPTOP_WIDTH,
  height = LAPTOP_HEIGHT,
}: LaptopMockupProps) {
  const clipWidth = Math.round(width * visiblePortion);
  const imageScale = width / clipWidth;

  const motionProps = {
    variants: scaleIn,
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport,
  };

  if (bleed === "none" && visiblePortion >= 1) {
    return (
      <motion.div
        {...motionProps}
        className={cn(
          "relative mx-auto w-full max-w-[calc(100vw-3rem)] lg:max-w-[792px]",
          className,
        )}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="block h-auto w-full"
          sizes="(max-width: 1024px) 100vw, 792px"
          draggable={false}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      {...motionProps}
      className={cn(
        "relative mx-auto aspect-[594/462] w-full max-w-[calc(100vw-3rem)] overflow-hidden lg:max-w-[594px]",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-y-0 w-full",
          bleed === "left" ? "right-0 left-auto" : "left-0",
        )}
        style={{ width: `${imageScale * 100}%` }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="block h-full w-full object-cover object-left-top"
          sizes="(max-width: 1024px) 100vw, 792px"
          draggable={false}
        />
      </div>
    </motion.div>
  );
}
