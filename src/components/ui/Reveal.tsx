"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import {
  fadeDown,
  fadeLeft,
  fadeRight,
  fadeUp,
  scaleIn,
  staggerContainer,
  staggerItem,
  viewport,
} from "@/lib/motion";
import type { ReactNode } from "react";

const variantMap = {
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  scaleIn,
} as const;

type RevealVariant = keyof typeof variantMap;

type RevealProps = HTMLMotionProps<"div"> & {
  variant?: RevealVariant;
  delay?: number;
};

export function Reveal({
  variant = "fadeUp",
  delay = 0,
  children,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variantMap[variant]}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul";
}) {
  const Component = as === "ul" ? motion.ul : motion.div;

  return (
    <Component
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const Component = as === "li" ? motion.li : motion.div;

  return (
    <Component className={className} variants={staggerItem}>
      {children}
    </Component>
  );
}
