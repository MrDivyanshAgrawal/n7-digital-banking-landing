"use client";

import { CheckItem } from "../ui/CheckItem";
import { PhoneMockup } from "../ui/PhoneMockup";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";

const legacyItems = [
  "Adaptive & Intelligent API monetization",
  "Ambient User Experience",
  "Cloud-native With lower TCO",
];

const branchlessItems = [
  "Branchless & Paperless Banking",
  "Digital Transformation Capability",
  "Optimized, Adoptable and Scalable",
];

export default function MobileFeatures() {
  return (
    <div className="relative pt-16 sm:pt-20 lg:pt-28">
      <div className="relative mx-auto max-w-7xl space-y-16 px-6 sm:space-y-20 lg:space-y-28 lg:px-8">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <Reveal variant="fadeLeft">
            <h2 className="text-3xl font-bold text-slate-900">
              No legacy IT systems
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Our Digital Banking solution and multilayered approach help
              financial institutions take advantage of digital transformation by
              ensuring customer trust and regulatory compliance.
            </p>
            <Stagger className="mt-8 space-y-3" as="ul">
              {legacyItems.map((item) => (
                <StaggerItem key={item} as="li">
                  <CheckItem bare>{item}</CheckItem>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          <div className="flex justify-center">
            <PhoneMockup
              src="/images/phone-analytics.png"
              alt="N7 app analytics and spending overview"
            />
          </div>
        </div>

        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 flex justify-center lg:order-1">
            <PhoneMockup
              src="/images/phone-profile.png"
              alt="N7 app profile settings screen"
            />
          </div>

          <Reveal variant="fadeRight" className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-slate-900">
              No traditional branches
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Our Digital Banking out-of-the-box helps you to accelerate
              innovation while reducing risks and optimising operational costs for
              a seamless branchless experience.
            </p>
            <Stagger className="mt-8 space-y-3" as="ul">
              {branchlessItems.map((item) => (
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
