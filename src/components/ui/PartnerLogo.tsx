import { cn } from "@/lib/utils";
import {
  ArtVenueIcon,
  KontrastrIcon,
  ShellsIcon,
  SmartFinderIcon,
  WavesMarathonIcon,
  ZoomerrIcon,
} from "./PartnerIcons";
import type { ReactNode } from "react";

const BRANDS: Record<
  string,
  {
    label: string;
    icon: ReactNode;
  }
> = {
  SHELLS: {
    label: "SHELLS",
    icon: <ShellsIcon />,
  },
  SmartFinder: {
    label: "SmartFinder",
    icon: <SmartFinderIcon />,
  },
  Zoomerr: {
    label: "Zoomerr",
    icon: <ZoomerrIcon />,
  },
  ArtVenue: {
    label: "ArtVenue",
    icon: <ArtVenueIcon />,
  },
  kontrastr: {
    label: "kontrastr",
    icon: <KontrastrIcon />,
  },
  WAVESMARATHON: {
    label: "WAVESMARATHON",
    icon: <WavesMarathonIcon />,
  },
};

interface PartnerLogoProps {
  name: string;
  className?: string;
}

/** SVG icon + real text label (Trusted By row). */
export function PartnerBrand({ name, className }: PartnerLogoProps) {
  const brand = BRANDS[name];
  if (!brand) {
    return (
      <span className={cn("text-sm font-bold text-[#586E84]", className)}>
        {name}
      </span>
    );
  }

  return (
    <div
      className={cn(
        "flex shrink-0 items-center gap-2.5 text-[#586E84]",
        className,
      )}
      aria-label={brand.label}
    >
      {brand.icon}
      <span className="whitespace-nowrap text-sm font-bold leading-none tracking-[0.01em]">
        {brand.label}
      </span>
    </div>
  );
}

/** Same component — used in Insight cards, etc. */
export function PartnerLogo({ name, className }: PartnerLogoProps) {
  return <PartnerBrand name={name} className={className} />;
}

export const TRUSTED_PARTNERS = [
  "SHELLS",
  "SmartFinder",
  "Zoomerr",
  "ArtVenue",
  "kontrastr",
  "WAVESMARATHON",
] as const;
