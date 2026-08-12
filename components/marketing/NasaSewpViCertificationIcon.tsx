"use client";

import Image from "next/image";
import { Store, Users } from "lucide-react";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { NASA_SEWP_VI_CERTIFICATION_LOGOS } from "../../src/content/nasa-sewp-vi";
import { pillarIconProps } from "./pillarIconProps";

type CertificationIconName = NasaSewpViPageContent["certifications"]["items"][number]["icon"];

type NasaSewpViCertificationIconProps = {
  name: CertificationIconName;
};

export function NasaSewpViCertificationIcon({ name }: NasaSewpViCertificationIconProps) {
  switch (name) {
    case "nasa-sewp-vi":
      return (
        <Image
          src={NASA_SEWP_VI_CERTIFICATION_LOGOS.nasa}
          alt=""
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
          alt=""
          width={40}
          height={40}
          className="sewp-vi-certifications__cert-logo"
        />
      );
    case "itil":
      return (
        <Image
          src={NASA_SEWP_VI_CERTIFICATION_LOGOS.itil}
          alt=""
          width={115}
          height={36}
          className="sewp-vi-certifications__cert-logo sewp-vi-certifications__cert-logo--itil"
        />
      );
    case "omnia-partners":
      return (
        <Image
          src={NASA_SEWP_VI_CERTIFICATION_LOGOS.omniaPartners}
          alt=""
          width={140}
          height={36}
          className="sewp-vi-certifications__cert-logo sewp-vi-certifications__cert-logo--omnia"
        />
      );
    case "mwbe":
      return <Users {...pillarIconProps} />;
    case "dbe":
      return (
        <Image
          src={NASA_SEWP_VI_CERTIFICATION_LOGOS.dbe}
          alt=""
          width={48}
          height={48}
          className="sewp-vi-certifications__cert-logo"
        />
      );
    case "maryland-mbe":
      return (
        <Image
          src={NASA_SEWP_VI_CERTIFICATION_LOGOS.marylandMbe}
          alt=""
          width={40}
          height={40}
          className="sewp-vi-certifications__cert-logo"
        />
      );
    case "maryland-sbr":
      return (
        <Image
          src={NASA_SEWP_VI_CERTIFICATION_LOGOS.marylandSbr}
          alt=""
          width={40}
          height={40}
          className="sewp-vi-certifications__cert-logo"
        />
      );
    case "sam-gov":
      return (
        <Image
          src={NASA_SEWP_VI_CERTIFICATION_LOGOS.samGov}
          alt=""
          width={120}
          height={36}
          className="sewp-vi-certifications__cert-logo sewp-vi-certifications__cert-logo--sam"
        />
      );
    case "ariba-network":
      return (
        <Image
          src={NASA_SEWP_VI_CERTIFICATION_LOGOS.aribaNetwork}
          alt=""
          width={120}
          height={36}
          className="sewp-vi-certifications__cert-logo sewp-vi-certifications__cert-logo--ariba"
        />
      );
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}
