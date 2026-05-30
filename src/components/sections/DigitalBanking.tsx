"use client";

import { Button } from "../ui/Button";
import { CheckItem } from "../ui/CheckItem";
import { LearnMoreLink } from "../ui/InsightCard";
import { PhoneMockup } from "../ui/PhoneMockup";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";

const complianceItems = [
  "Pre-integrated Security System",
  "Fully Compliant With Regulatory Requirement",
  "Digitally Connected Core",
];

export default function DigitalBanking() {
  return (
    <div className="relative pt-16 sm:pt-20 lg:pt-28">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal variant="fadeLeft" className="min-w-0 lg:col-span-4">
            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Digital banking out-of-the-box
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              N7 helps your financial institution improve the client experience,
              automate and optimize procedures
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="md">
                Request Demo
              </Button>
              <LearnMoreLink className="text-brand-blue" />
            </div>
          </Reveal>

          <div className="flex min-w-0 justify-center lg:col-span-4">
            <PhoneMockup
              src="/images/phone-toni-home.png"
              alt="N7 mobile banking app home screen"
            />
          </div>

          <Reveal variant="fadeRight" delay={0.1} className="min-w-0 lg:col-span-4">
            <h3 className="text-lg font-bold text-slate-900">
              Fully compliant with regulatory requirement
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              The governance of risk management with regulations is achieved by
              our risk management framework that is fully integrated to work with
              digital bank&apos;s operational-risk protocols and procedures.
            </p>
            <Stagger className="mt-6 space-y-3" as="ul">
              {complianceItems.map((item) => (
                <StaggerItem key={item} as="li">
                  <CheckItem bare>{item}</CheckItem>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
