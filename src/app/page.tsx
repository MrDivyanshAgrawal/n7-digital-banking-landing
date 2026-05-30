import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Solutions from "@/components/sections/Solutions";
import DashboardPreview from "@/components/sections/DashboardPreview";
import DarkCTA from "@/components/sections/DarkCTA";
import Marquee from "@/components/layout/Marquee";
import DigitalBanking from "@/components/sections/DigitalBanking";
import MobileFeatures from "@/components/sections/MobileFeatures";
import CTA from "@/components/sections/CTA";
import Insights from "@/components/sections/Insights";
import CaseStudies from "@/components/sections/CaseStudies";
import Image from "next/image";
import { BrandWatermark } from "@/components/ui/CtaWatermark";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-w-0">
        <Hero />
        <Solutions />
        <DashboardPreview />
        <DarkCTA />
        <Marquee />
        <section className="relative overflow-hidden bg-light-section">
          <BrandWatermark label="N7" variant="light" />
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/images/symbols/bg-curves.png"
              alt=""
              fill
              className="object-cover object-center opacity-[0.28]"
              aria-hidden
            />
          </div>
          <DigitalBanking />
          <MobileFeatures />
          <CTA />
        </section>
        <Insights />
        <CaseStudies />
      </main>
      <Footer />
    </>
  );
}
