"use client";

import { CtaBanner } from "../ui/CtaBanner";

export default function CTA() {
  return (
    <div className="relative px-6 pb-16 pt-16 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-28">
      <div className="relative mx-auto max-w-7xl lg:px-2">
        <CtaBanner label="N7" />
      </div>
    </div>
  );
}
