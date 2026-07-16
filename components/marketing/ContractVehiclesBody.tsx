"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { ContractsPageContent } from "../../src/content/schema";
import { accessibleExternalLinkLabel } from "../../lib/accessibility/accessible-external-label";
import { IconArrowRight } from "./NavIcons";
import { useMarketingMotionConfig } from "./marketing-motion";

type ContractVehiclesBodyProps = {
  content: ContractsPageContent;
};

type PrimaryVehicle = ContractsPageContent["primaryVehicles"]["items"][number];
type LineCard = ContractsPageContent["gsaLineCards"]["items"][number];

function isExternalHref(href: string): boolean {
  return href.startsWith("http") || href.endsWith(".pdf") || href.endsWith(".csv");
}

function PrimaryVehicleCard({ item }: { item: PrimaryVehicle }) {
  const vehicleLabel = `${item.title}${item.badge ? ` (${item.badge})` : ""}. ${item.description}`;
  const href = item.href;
  const external = href ? isExternalHref(href) : false;
  const ariaLabel = href && external ? accessibleExternalLinkLabel(vehicleLabel) : vehicleLabel;

  const content = (
    <>
      <span className="contract-vehicles__vehicle-logo-wrap">
        <Image
          src={item.logoSrc}
          alt={item.logoAlt}
          width={88}
          height={88}
          className="contract-vehicles__vehicle-logo"
        />
      </span>
      <span className="contract-vehicles__vehicle-copy">
        <span className="contract-vehicles__vehicle-title">{item.title}</span>
        {item.badge ? <span className="contract-vehicles__vehicle-badge">{item.badge}</span> : null}
        <span className="contract-vehicles__vehicle-desc">{item.description}</span>
        {item.ctaLabel ? <span className="contract-vehicles__vehicle-cta">{item.ctaLabel}</span> : null}
      </span>
      <span className="contract-vehicles__vehicle-action" aria-hidden="true">
        <IconArrowRight className="contract-vehicles__vehicle-arrow" />
      </span>
    </>
  );

  if (!href) {
    return <div className="contract-vehicles__vehicle-card">{content}</div>;
  }

  if (external) {
    return (
      <a
        href={href}
        className="contract-vehicles__vehicle-card contract-vehicles__vehicle-card--link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="contract-vehicles__vehicle-card contract-vehicles__vehicle-card--link" aria-label={ariaLabel}>
      {content}
    </Link>
  );
}

function GsaLineCard({ item }: { item: LineCard }) {
  const cardLabel = item.description ? `${item.title}. ${item.description}` : item.title;
  const href = item.href;
  const external = href ? isExternalHref(href) : false;
  const ariaLabel = href && external ? accessibleExternalLinkLabel(cardLabel) : cardLabel;

  const body = (
    <>
      <span className="contract-vehicles__line-card-badges">
        <Image
          src={item.badgeSrc}
          alt={item.badgeAlt}
          width={72}
          height={72}
          className="contract-vehicles__line-card-gsa"
        />
        <Image
          src={item.partnerLogoSrc}
          alt={item.partnerLogoAlt}
          width={120}
          height={56}
          className="contract-vehicles__line-card-partner"
        />
      </span>
      <span className="contract-vehicles__line-card-copy">
        <span className="contract-vehicles__line-card-title">{item.title}</span>
        {item.description ? <span className="contract-vehicles__line-card-desc">{item.description}</span> : null}
      </span>
      {item.comingSoon || !href ? (
        <span className="contract-vehicles__line-card-cta contract-vehicles__line-card-cta--soon">{item.ctaLabel}</span>
      ) : (
        <span className="contract-vehicles__line-card-cta">
          {item.ctaLabel}
          <IconArrowRight className="contract-vehicles__line-card-arrow" aria-hidden="true" />
        </span>
      )}
    </>
  );

  if (item.comingSoon || !href) {
    return (
      <div className="contract-vehicles__line-card contract-vehicles__line-card--soon" aria-label={`${cardLabel} Coming soon`}>
        {body}
      </div>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        className="contract-vehicles__line-card contract-vehicles__line-card--link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {body}
      </a>
    );
  }

  return (
    <Link href={href} className="contract-vehicles__line-card contract-vehicles__line-card--link" aria-label={ariaLabel}>
      {body}
    </Link>
  );
}

export function ContractVehiclesBody({ content }: ContractVehiclesBodyProps) {
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();

  return (
    <div className="contract-vehicles">
      <motion.section
        className="contract-vehicles__primary"
        aria-labelledby="contract-vehicles-primary-heading"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div className="contract-vehicles__inner" variants={itemVariants} transition={itemTransition}>
          <header className="contract-vehicles__header">
            <p className="contract-vehicles__eyebrow">{content.primaryVehicles.eyebrow}</p>
            <h2 id="contract-vehicles-primary-heading" className="contract-vehicles__title">
              {content.primaryVehicles.title}
            </h2>
            <p className="contract-vehicles__description">{content.primaryVehicles.description}</p>
          </header>

          <ul className="contract-vehicles__vehicle-list">
            {content.primaryVehicles.items.map((item) => (
              <li key={item.id} className="contract-vehicles__vehicle-item">
                <PrimaryVehicleCard item={item} />
              </li>
            ))}
          </ul>

          <ul className="contract-vehicles__line-card-grid contract-vehicles__line-card-grid--merged">
            {content.gsaLineCards.items.map((item) => (
              <li key={item.id}>
                <GsaLineCard item={item} />
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.section>

      <motion.section
        className="contract-vehicles__cta"
        aria-labelledby="contract-vehicles-cta-heading"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div className="contract-vehicles__cta-inner" variants={itemVariants} transition={itemTransition}>
          <h2 id="contract-vehicles-cta-heading" className="contract-vehicles__cta-title">
            {content.cta.title}
          </h2>
          <p className="contract-vehicles__cta-description">{content.cta.description}</p>
          <div className="contract-vehicles__cta-actions">
            <Link href={content.cta.servicesHref} className="btn btn--secondary">
              {content.cta.servicesLabel}
            </Link>
            <Link href={content.cta.consultationHref} className="btn btn--primary">
              {content.cta.consultationLabel}
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
