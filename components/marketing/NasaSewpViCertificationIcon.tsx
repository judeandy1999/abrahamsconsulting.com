"use client";

import Image from "next/image";
import { Award, Landmark, Network, ShieldCheck, Store, Target, Users } from "lucide-react";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { NASA_SEWP_VI_CERTIFICATION_LOGOS } from "../../src/content/nasa-sewp-vi";
import { pillarIconProps } from "./pillarIconProps";

type CertificationIconName = NasaSewpViPageContent["certifications"]["items"][number]["icon"];

type NasaSewpViCertificationIconProps = {
  name: CertificationIconName;
  label: string;
};

export function NasaSewpViCertificationIcon({ name, label }: NasaSewpViCertificationIconProps) {
  switch (name) {
    case "nasa-sewp-vi":
      return (
        <Image
          src={NASA_SEWP_VI_CERTIFICATION_LOGOS.nasa}
          alt={label}
          width={40}
          height={40}
          className="sewp-vi-certifications__cert-logo"
        />
      );
    case "small-business":
      return <Store {...pillarIconProps} />;
    case "iso-9001":
      return (
        <Image
          src={NASA_SEWP_VI_CERTIFICATION_LOGOS.iso9001}
          alt={label}
          width={40}
          height={40}
          className="sewp-vi-certifications__cert-logo"
        />
      );
    case "itil":
      return <Award {...pillarIconProps} />;
    case "omnia-partners":
      return <Target {...pillarIconProps} />;
    case "mwbe":
      return <Users {...pillarIconProps} />;
    case "maryland-mbe":
      return (
        <Image
          src={NASA_SEWP_VI_CERTIFICATION_LOGOS.marylandMbe}
          alt={label}
          width={40}
          height={40}
          className="sewp-vi-certifications__cert-logo"
        />
      );
    case "maryland-sbr":
      return (
        <Image
          src={NASA_SEWP_VI_CERTIFICATION_LOGOS.marylandSbr}
          alt={label}
          width={40}
          height={40}
          className="sewp-vi-certifications__cert-logo"
        />
      );
    case "sam-gov":
      return <Landmark {...pillarIconProps} />;
    case "ariba-network":
      return <Network {...pillarIconProps} />;
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}
