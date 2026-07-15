import Image from "next/image";
import Link from "next/link";
import { Award, Landmark, ShieldCheck } from "lucide-react";
import type { CertificationsPageContent as CertificationsPageContentType } from "../../src/content/schema";
import { ContactUsIcon } from "./ContactUsIcon";
import { PILLAR_ICON_STROKE_WIDTH } from "./pillarIconProps";

type CertificationsPageContentProps = {
  content: CertificationsPageContentType;
};

type CertLogo = NonNullable<CertificationsPageContentType["sections"][number]["items"]>[number];

const sectionIconProps = {
  className: "certifications-page__glyph",
  strokeWidth: PILLAR_ICON_STROKE_WIDTH,
  absoluteStrokeWidth: true,
  "aria-hidden": true as const
};

function SectionIcon({ name }: { name: "industry" | "government" | "cta" }) {
  switch (name) {
    case "industry":
      return <Award {...sectionIconProps} />;
    case "government":
      return <Landmark {...sectionIconProps} />;
    case "cta":
      return <ShieldCheck {...sectionIconProps} />;
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}

function LogoGrid({ items }: { items: CertLogo[] }) {
  return (
    <ul className="certifications-page__logo-grid">
      {items.map((item) => {
        const image = (
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            width={180}
            height={120}
            className="certifications-page__logo-image"
          />
        );

        return (
          <li key={item.id} className="certifications-page__logo-item">
            {item.href ? (
              <a href={item.href} className="certifications-page__logo-link" target="_blank" rel="noopener noreferrer">
                {image}
              </a>
            ) : (
              image
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function CertificationsPageContent({ content }: CertificationsPageContentProps) {
  return (
    <div className="certifications-page">
      <section className="certifications-page__hero" aria-labelledby="certifications-hero-heading">
        <div className="certifications-page__hero-overlay" aria-hidden="true" />
        <div className="certifications-page__hero-inner">
          <h1 id="certifications-hero-heading" className="certifications-page__hero-title">
            {content.hero.title}
          </h1>
          <p className="certifications-page__hero-description">{content.hero.description}</p>
        </div>
      </section>

      <div className="certifications-page__body">
        {content.sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="certifications-page__card"
            aria-labelledby={`${section.id}-heading`}
          >
            <header className="certifications-page__card-header">
              <span className="certifications-page__card-icon" aria-hidden="true">
                <SectionIcon name={section.icon} />
              </span>
              <h2 id={`${section.id}-heading`} className="certifications-page__card-title">
                {section.title}
              </h2>
            </header>

            {section.items?.length ? <LogoGrid items={section.items} /> : null}

            {section.groups?.map((group) => (
              <div key={group.id} className="certifications-page__group">
                <h3 className="certifications-page__group-title">{group.title}</h3>
                <LogoGrid items={group.items} />
              </div>
            ))}
          </section>
        ))}
      </div>

      <section className="certifications-page__cta" aria-labelledby="certifications-cta-heading">
        <div className="certifications-page__cta-inner">
          <div className="certifications-page__cta-copy">
            <span className="certifications-page__cta-icon" aria-hidden="true">
              <SectionIcon name="cta" />
            </span>
            <div>
              <h2 id="certifications-cta-heading" className="certifications-page__cta-title">
                {content.cta.title}
              </h2>
              <p className="certifications-page__cta-description">{content.cta.description}</p>
            </div>
          </div>
          <Link href={content.cta.href} className="btn btn--primary certifications-page__cta-button">
            <ContactUsIcon name="mail" className="certifications-page__cta-button-icon" />
            {content.cta.buttonLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
