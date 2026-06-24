"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import Link from "next/link";

export type FooterContactIconName = "location" | "mail" | "phone";

type FooterContactIconProps = {
  name: FooterContactIconName;
};

export function FooterContactIcon({ name }: FooterContactIconProps) {
  const className = "site-footer__contact-mui-icon";

  switch (name) {
    case "location":
      return <LocationOnIcon className={className} fontSize="small" aria-hidden />;
    case "mail":
      return <EmailIcon className={className} fontSize="small" aria-hidden />;
    case "phone":
      return <PhoneIcon className={className} fontSize="small" aria-hidden />;
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}

type FooterContactCtaProps = {
  href: string;
  label: string;
};

export function FooterContactCta({ href, label }: FooterContactCtaProps) {
  return (
    <Link href={href} className="site-footer__cta">
      <span className="site-footer__cta-icon" aria-hidden="true">
        <KeyboardDoubleArrowRightIcon className="site-footer__cta-mui-icon" fontSize="small" />
      </span>
      <span>{label}</span>
      <span className="site-footer__cta-arrow" aria-hidden="true">
        <ArrowForwardIcon className="site-footer__cta-mui-icon" fontSize="small" />
      </span>
    </Link>
  );
}
