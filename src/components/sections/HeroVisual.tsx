"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/** Rectangle.png / Figma Frame 114 export */
const WIDTH = 610;
const HEIGHT = 380;

/** Baked-in tilt of the Figma composite; counter-rotate at rest for a straight card */
const REST_ROTATE_Z = -5.5;
const HOVER_ROTATE_Z = 0;

export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(pointerY, [0, 1], [4, -4]), {
    stiffness: 280,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-6, 6]), {
    stiffness: 280,
    damping: 24,
  });
  const rotateZ = useSpring(REST_ROTATE_Z, { stiffness: 200, damping: 22 });
  const scale = useSpring(1, { stiffness: 260, damping: 26 });

  useEffect(() => {
    rotateZ.set(hovered ? HOVER_ROTATE_Z : REST_ROTATE_Z);
    scale.set(hovered ? 1.015 : 1);
  }, [hovered, rotateZ, scale]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;

    pointerX.set((event.clientX - bounds.left) / bounds.width);
    pointerY.set((event.clientY - bounds.top) / bounds.height);
    setHovered(true);
  };

  const handlePointerLeave = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
    setHovered(false);
  };

  return (
    <div
      ref={ref}
      className="relative w-full max-w-[610px] overflow-hidden py-2 lg:overflow-visible"
      style={{ perspective: "1200px" }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div
        className="relative w-full will-change-transform"
        style={{
          rotateX,
          rotateY,
          rotateZ,
          scale,
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
        }}
      >
        <Image
          src="/images/hero-rectangle-tilted.png"
          alt="Banking professional with N7 balance dashboard and recent activity overlays"
          width={WIDTH}
          height={HEIGHT}
          priority
          className="h-auto w-full select-none drop-shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
          draggable={false}
        />
      </motion.div>
    </div>
  );
}
