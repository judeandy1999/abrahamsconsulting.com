import Image from "next/image";
import Link from "next/link";
import { NASA_SEWP_VI_MWBE_SEALS } from "../../src/content/nasa-sewp-vi";
import { NasaSewpViCertificationIcon } from "./NasaSewpViCertificationIcon";

type NasaSewpViMwbeCertCardProps = {
  label: string;
};

export function NasaSewpViMwbeCertCard({ label }: NasaSewpViMwbeCertCardProps) {
  return (
    <Link
      href="/certifications"
      className="sewp-vi-certifications__card sewp-vi-certifications__card--mwbe"
      aria-label={`${label} — view state and local certifications`}
    >
      <span className="sewp-vi-certifications__icon" aria-hidden="true">
        <NasaSewpViCertificationIcon name="mwbe" />
      </span>
      <span className="sewp-vi-certifications__label">{label}</span>

      <div className="sewp-vi-certifications__mwbe-modal" aria-hidden="true">
        <p className="sewp-vi-certifications__mwbe-modal-title">State & Local Certifications</p>
        <ul className="sewp-vi-certifications__mwbe-seals">
          {NASA_SEWP_VI_MWBE_SEALS.map((seal) => (
            <li key={seal.id} className="sewp-vi-certifications__mwbe-seal">
              <Image
                src={seal.imageSrc}
                alt=""
                width={120}
                height={120}
                className="sewp-vi-certifications__mwbe-seal-image"
              />
              <span className="sewp-vi-certifications__mwbe-seal-name">{seal.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
