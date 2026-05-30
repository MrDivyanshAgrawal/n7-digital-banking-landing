"use client";

import { Button } from "../ui/Button";
import { CheckItem } from "../ui/CheckItem";
import { BrandWatermark } from "../ui/CtaWatermark";
import { LearnMoreLink } from "../ui/InsightCard";
import { LaptopMockup } from "../ui/LaptopMockup";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";

const leftFeatures = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
];

const rightFeatures = [
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

export default function DashboardPreview() {
  return (
    <section className="relative overflow-x-clip bg-[#070A13]">
      <BrandWatermark label="CB7" variant="section" />

      <div className="relative py-16 lg:py-28">
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
          <Reveal variant="fadeLeft" className="relative z-10">
            <h2 className="max-w-lg text-[32px] font-bold leading-[1.15] tracking-[-0.01em] text-white sm:text-[38px] lg:text-[42px]">
              A complete cloud-based core banking.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#8899A8]">
              Faster time to market with our cloud-based core banking services
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button variant="primary" size="md">
                Request Demo
              </Button>
              <LearnMoreLink />
            </div>
          </Reveal>

          <div className="relative z-10 flex w-full min-w-0 justify-center overflow-hidden lg:justify-end lg:-mr-[calc(max(0px,(100vw-80rem)/2+2rem))] lg:overflow-visible">
            <LaptopMockup
              src="/images/aml-laptop.svg"
              alt="AML Dashboard in laptop mockup"
              bleed="right"
              visiblePortion={0.75}
            />
          </div>
        </div>
      </div>

      <div className="relative pb-16 pt-4 lg:pb-28 lg:pt-0">
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
          <div className="relative order-2 flex w-full min-w-0 justify-center overflow-hidden lg:order-1 lg:justify-start lg:-ml-[calc(max(0px,(100vw-80rem)/2+2rem))] lg:overflow-visible">
            <LaptopMockup
              src="/images/ckyc-laptop.svg"
              alt="CKYC Dashboard in laptop mockup"
              bleed="left"
              visiblePortion={0.75}
            />
          </div>

          <Reveal variant="fadeRight" className="relative order-1 lg:order-2">
            <h2 className="max-w-xl text-[28px] font-bold leading-[1.2] tracking-[-0.01em] text-white sm:text-[34px] lg:text-[38px]">
              Run a more efficient, flexible, and digitally connected corebanking
              system
            </h2>
            <p className="mt-8 text-base font-semibold text-white">
              What you will get:
            </p>
            <div className="mt-5 grid grid-cols-1 items-stretch gap-x-10 sm:grid-cols-2 lg:gap-x-12">
              <Stagger className="flex flex-col gap-[18px] sm:h-full sm:justify-between sm:gap-0" as="ul">
                {leftFeatures.map((feature) => (
                  <StaggerItem key={feature} as="li">
                    <CheckItem bare dark>{feature}</CheckItem>
                  </StaggerItem>
                ))}
              </Stagger>
              <Stagger className="flex flex-col gap-[18px]" as="ul">
                {rightFeatures.map((feature) => (
                  <StaggerItem key={feature} as="li">
                    <CheckItem bare dark>{feature}</CheckItem>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
