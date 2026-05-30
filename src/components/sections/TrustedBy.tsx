"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";
import { PartnerBrand, TRUSTED_PARTNERS } from "../ui/PartnerLogo";

export default function TrustedBy() {
  return (
    <div className="mt-16 overflow-hidden border-t border-white/[0.06] pt-8 sm:mt-20 sm:pt-10 lg:mt-24 lg:pt-12 lg:overflow-visible">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="text-base font-medium text-[#8899A8]"
      >
        Trusted By:
      </motion.p>

      <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-5 sm:gap-x-12 lg:gap-x-14 xl:gap-x-16">
        {TRUSTED_PARTNERS.map((name, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.07 }}
          >
            <PartnerBrand name={name} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
