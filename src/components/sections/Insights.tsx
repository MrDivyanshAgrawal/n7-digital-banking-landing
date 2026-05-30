"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { InsightCard } from "../ui/InsightCard";
import { ViewAllLink } from "../ui/ViewAllLink";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";

export default function Insights() {
  return (
    <section id="insights" className="relative overflow-hidden bg-[#000D12] py-16 sm:py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute left-0 top-1/2 h-[557px] w-[557px] -translate-y-1/2 rounded-full blur-[100px]"
        style={{
          background:
            "linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[463px_1fr] lg:gap-16">
          <Reveal variant="fadeLeft">
            <h2 className="max-w-[463px] text-[26px] font-normal leading-[1.2] tracking-[-0.01em] text-[#E9F4F9] sm:text-[32px] lg:text-[37px]">
              Get yourself up-to-speed on all the things happening in fintech
            </h2>
            <Button
              variant="outline"
              size="md"
              className="mt-8 w-full min-w-0 border-[#E9F4F9] px-8 py-[15px] text-[15px] uppercase tracking-wide text-[#E9F4F9] sm:mt-10 sm:w-auto lg:mt-12 lg:min-w-[190px] lg:px-[59px]"
            >
              insights
            </Button>
          </Reveal>

          <Stagger className="space-y-[29px]">
            <StaggerItem>
              <InsightCard featured showSymbol />
            </StaggerItem>

            <StaggerItem>
              <div className="grid grid-cols-1 gap-[29px] md:grid-cols-2">
                <InsightCard />
                <InsightCard />
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex justify-center pt-2 sm:justify-end">
                <ViewAllLink />
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
