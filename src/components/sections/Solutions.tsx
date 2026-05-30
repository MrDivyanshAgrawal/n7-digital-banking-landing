"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem, viewport } from "@/lib/motion";
import { Button } from "../ui/Button";
import { LearnMoreLink } from "../ui/InsightCard";
import { Reveal } from "../ui/Reveal";

const solutions = [
  {
    icon: "/images/solutions/cb7.png",
    title: "Core Banking CB7",
    desc: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
  },
  {
    icon: "/images/solutions/n7.png",
    title: "Digital Banking N7",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
  },
  {
    icon: "/images/solutions/open-banking.png",
    title: "Open Banking",
    desc: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
  },
  {
    icon: "/images/solutions/nbfc.png",
    badge: "NBFC",
    title: "Loan Origination System",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
  },
  {
    icon: "/images/solutions/nbfc.png",
    badge: "NBFC",
    title: "Loan Management System",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
  },
];

function SolutionCard({
  icon,
  badge,
  title,
  desc,
}: {
  icon: string;
  badge?: string;
  title: string;
  desc: string;
}) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="flex flex-col"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <Image
          src={icon}
          alt=""
          width={48}
          height={48}
          className="h-12 w-12 shrink-0 object-contain opacity-90 transition-transform duration-300 group-hover:scale-105"
          aria-hidden
        />
        {badge && (
          <span className="pt-1 text-xs font-medium uppercase tracking-wider text-gray-500">
            {badge}
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">{desc}</p>
      <div className="mt-5">
        <LearnMoreLink />
      </div>
    </motion.article>
  );
}

export default function Solutions() {
  return (
    <section id="solutions" className="relative overflow-hidden bg-background py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute -bottom-20 right-0 h-[480px] w-[480px] rounded-full bg-brand-blue/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-20">
        <Reveal variant="fadeLeft">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
            All of our solutions are tailor-made to your needs
          </h2>
          <Button variant="outline" size="md" className="mt-8">
            Request Demo
          </Button>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2"
        >
          {solutions.map((item) => (
            <SolutionCard key={item.title} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
