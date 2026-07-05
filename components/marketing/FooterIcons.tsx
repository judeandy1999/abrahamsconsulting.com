import { ArrowRight, Mail, MapPin, Phone, ChevronsRight } from "lucide-react";
import Link from "next/link";
import { pillarIconProps } from "./pillarIconProps";

export type FooterContactIconName = "location" | "mail" | "phone";

type FooterContactIconProps = {
  name: FooterContactIconName;
};

export function FooterContactIcon({ name }: FooterContactIconProps) {
  const props = { ...pillarIconProps, className: "site-footer__contact-mui-icon" };

  switch (name) {
    case "location":
      return <MapPin {...props} />;
    case "mail":
      return <Mail {...props} />;
    case "phone":
      return <Phone {...props} />;
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
  const iconProps = { ...pillarIconProps, className: "site-footer__cta-mui-icon" };

  return (
    <Link href={href} className="site-footer__cta">
      <span className="site-footer__cta-icon" aria-hidden="true">
        <ChevronsRight {...iconProps} />
      </span>
      <span>{label}</span>
      <span className="site-footer__cta-arrow" aria-hidden="true">
        <ArrowRight {...iconProps} />
      </span>
    </Link>
  );
}
