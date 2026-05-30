import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const offices = [
  {
    city: "London",
    address:
      "Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.",
  },
  {
    city: "Dubai",
    address:
      "Linktia Infosystems Ltd – CB7, Jumeirah Business Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates",
  },
  {
    city: "London",
    address:
      "Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India",
  },
];

const linkGroups = [
  {
    title: "Solutions",
    links: [
      "Core Banking CB7",
      "Digital Banking N7",
      "Open Banking",
      "Loan Origination System",
      "Loan Management System",
      "Digital Transformation",
    ],
  },
  {
    title: "N7 Banking",
    links: [
      "About Us",
      "Solutions",
      "Contact",
      "Company",
      "Careers",
      "Insights",
      "Core Team",
      "Brand Center",
    ],
  },
  {
    title: "Our Socials",
    links: ["LinkedIn", "X"],
  },
];

function FooterLink({ label }: { label: string }) {
  return (
    <Link
      href="#"
      className="group flex items-center gap-3 py-1 text-sm leading-snug text-[#94A3B8] transition-colors hover:text-[#E9F4F9]"
    >
      <span className="min-w-0 flex-1">{label}</span>
      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#00B4FD] transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#000B14] pb-10 pt-16 lg:pb-12 lg:pt-20">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[280px] w-[80%] -translate-x-1/2 rounded-full opacity-40 blur-[100px]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0, 180, 253, 0.15) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal variant="fadeUp">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(220px,380px)_1fr] lg:gap-16 xl:gap-20">
          <div className="flex items-start lg:pt-1">
            <span className="text-[5rem] font-black leading-[0.82] tracking-tight text-gradient-logo sm:text-[7rem] md:text-[9rem] lg:text-[14rem] xl:text-[16rem]">
              N7
            </span>
          </div>

          <div className="space-y-10 lg:space-y-[72px]">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 xl:gap-x-14">
              {offices.map((office, index) => (
                <div key={`${office.city}-${index}`} className="min-w-0">
                  <h4 className="text-base font-semibold text-white">{office.city}</h4>
                  <p className="mt-3 text-sm leading-[1.55] text-[#94A3B8]">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 xl:gap-x-14">
              {linkGroups.map((group) => (
                <div key={group.title} className="min-w-0">
                  <h4 className="text-base font-semibold text-white">{group.title}</h4>
                  <ul className="mt-4 space-y-2.5">
                    {group.links.map((link) => (
                      <li key={link}>
                        <FooterLink label={link} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-4 max-w-[34rem] text-left text-xs leading-relaxed text-[#64748B]">
              Copyright © {new Date().getFullYear()} by Linktia Infosystems Limited
              — [CB7 and N7 as Commercial Brand] — [Registered under the Companies
              Act 2006 in England and Wales | Number of Incorporation 13100992]
            </p>
          </div>
        </div>
        </Reveal>
      </div>
    </footer>
  );
}
