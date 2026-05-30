"use client";

import { motion } from "framer-motion";
import { heroItem, heroStagger } from "@/lib/motion";
import { Button } from "../ui/Button";
import HeroVisual from "./HeroVisual";
import TrustedBy from "./TrustedBy";

export default function Hero() {
  return (
    <section className="relative bg-[#000D12] pb-12 pt-32 sm:pb-16 sm:pt-36 lg:pt-40">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute right-[2%] top-[20%] h-[220px] w-[220px] rounded-full blur-[50px] sm:right-[4%] sm:top-[22%] sm:h-[300px] sm:w-[300px] lg:right-[6%] lg:top-[25%] lg:h-[398px] lg:w-[398px]"
        style={{
          background:
            "linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.h1
              variants={heroItem}
              className="max-w-[608px] text-[2rem] font-medium leading-[1.2] tracking-[-0.01em] text-[#E9F4F9] sm:text-[2.75rem] lg:text-[67px]"
            >
              The new foundation of modern banking
            </motion.h1>
            <motion.p
              variants={heroItem}
              className="mt-4 max-w-[356px] text-base leading-[1.3] text-[#E9F4F9]/80 lg:mt-4"
            >
              We drive innovation and growth, provide seamless customer
              experience and operational excellence.
            </motion.p>
            <motion.div
              variants={heroItem}
              className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5 lg:mt-[52px]"
            >
              <Button variant="primary" size="lg" className="w-full min-w-0 px-8 sm:w-auto sm:min-w-[180px]">
                Request Demo
              </Button>
              <Button variant="outline" size="lg" className="w-full min-w-0 px-8 sm:w-auto sm:min-w-[180px]">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 48, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center overflow-hidden lg:justify-end lg:overflow-visible"
          >
            <HeroVisual />
          </motion.div>
        </div>

        <TrustedBy />
      </div>
    </section>
  );
}
