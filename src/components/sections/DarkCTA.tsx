"use client";

import { CtaBanner } from "../ui/CtaBanner";

export default function DarkCTA() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <CtaBanner label="CB7" />
      </div>
    </section>
  );
}
