"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { accessibleExternalLinkLabel, accessibleExternalPdfLinkLabel, withPdfLinkLabel } from "../../lib/accessibility/accessible-external-label";
import { NasaSewpViCategoryAIcon } from "./NasaSewpViCategoryAIcon";
import { IconArrowRight } from "./NavIcons";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViCapabilitiesVehiclesSectionProps = {
  capabilities: NasaSewpViPageContent["categoryACapabilities"];
  vehicles: NasaSewpViPageContent["contractVehicles"];
  view?: "all" | "capabilities" | "vehicles";
  embedded?: boolean;
};

type CapabilityItem = NasaSewpViPageContent["categoryACapabilities"]["items"][number];

const CAPABILITY_COLUMN_SPLIT = 5;

function CapabilityColumn({ items }: { items: CapabilityItem[] }) {
  return (
    <ul className="sewp-vi-cap-veh__capability-column">
      {items.map((item) => (
        <li key={item.id} className="sewp-vi-cap-veh__capability-item">
          <span className="sewp-vi-cap-veh__capability-icon" aria-hidden="true">
            <NasaSewpViCategoryAIcon name={item.icon} />
          </span>
          <div className="sewp-vi-cap-veh__capability-copy">
            <h3 className="sewp-vi-cap-veh__capability-title">{item.title}</h3>
            <p className="sewp-vi-cap-veh__capability-desc">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function VehicleCard({ item }: { item: NasaSewpViPageContent["contractVehicles"]["items"][number] }) {
  const isPdf = Boolean(item.href?.toLowerCase().endsWith(".pdf"));
  const baseLabel = `${item.title}${item.badge ? ` (${item.badge})` : ""}. ${item.description}`;
  const vehicleLabel = isPdf ? withPdfLinkLabel(baseLabel) : baseLabel;
  const isExternal = Boolean(item.href?.startsWith("http"));
  const linkAriaLabel = isExternal
    ? isPdf
      ? accessibleExternalPdfLinkLabel(baseLabel)
      : accessibleExternalLinkLabel(baseLabel)
    : vehicleLabel;

  const content = (
    <>
      <span className="sewp-vi-cap-veh__vehicle-logo-wrap">
        <Image
          src={item.logoSrc}
          alt=""
          width={88}
          height={88}
          className="sewp-vi-cap-veh__vehicle-logo"
        />
      </span>
      <span className="sewp-vi-cap-veh__vehicle-copy">
        <span className="sewp-vi-cap-veh__vehicle-title">
          {item.title}
          {isPdf ? <span className="sewp-vi-cap-veh__vehicle-file-type"> (PDF)</span> : null}
        </span>
        {item.badge ? <span className="sewp-vi-cap-veh__vehicle-badge">{item.badge}</span> : null}
        <span className="sewp-vi-cap-veh__vehicle-desc">{item.description}</span>
      </span>
      <span className="sewp-vi-cap-veh__vehicle-action" aria-hidden="true">
        <IconArrowRight className="sewp-vi-cap-veh__vehicle-arrow" />
      </span>
    </>
  );

  if (item.href) {
    if (isExternal) {
      return (
        <a
          href={item.href}
          className="sewp-vi-cap-veh__vehicle-card sewp-vi-cap-veh__vehicle-card--link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={linkAriaLabel}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={item.href}
        className="sewp-vi-cap-veh__vehicle-card sewp-vi-cap-veh__vehicle-card--link"
        aria-label={linkAriaLabel}
      >
        {content}
      </Link>
    );
  }

  return <div className="sewp-vi-cap-veh__vehicle-card">{content}</div>;
}

export function NasaSewpViCapabilitiesVehiclesSection({
  capabilities,
  vehicles,
  view = "all",
  embedded = false
}: NasaSewpViCapabilitiesVehiclesSectionProps) {
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();
  const leftCapabilities = capabilities.items.slice(0, CAPABILITY_COLUMN_SPLIT);
  const rightCapabilities = capabilities.items.slice(CAPABILITY_COLUMN_SPLIT);
  const showCapabilities = view === "all" || view === "capabilities";
  const showVehicles = view === "all" || view === "vehicles";

  return (
    <div className={`sewp-vi-cap-veh${embedded ? " sewp-vi-cap-veh--embedded" : ""}`}>
      <motion.div
        className="sewp-vi-cap-veh__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {showCapabilities ? (
          <motion.section
            className="sewp-vi-cap-veh__capabilities"
            aria-labelledby={embedded ? undefined : "sewp-vi-category-a-heading"}
            aria-label={embedded ? capabilities.title : undefined}
            variants={itemVariants}
            transition={itemTransition}
          >
            {embedded ? (
              <p className="sewp-vi-cap-veh__description">{capabilities.description}</p>
            ) : (
              <header className="sewp-vi-cap-veh__header">
                <h2 id="sewp-vi-category-a-heading" className="sewp-vi-cap-veh__title">
                  <span className="sewp-vi-cap-veh__eyebrow">{capabilities.eyebrow}</span>
                  <span className="sewp-vi-cap-veh__title-text">{capabilities.title}</span>
                </h2>
                <p className="sewp-vi-cap-veh__description">{capabilities.description}</p>
              </header>
            )}

            <div className="sewp-vi-cap-veh__capability-columns">
              <CapabilityColumn items={leftCapabilities} />
              <CapabilityColumn items={rightCapabilities} />
            </div>
          </motion.section>
        ) : null}

        {showVehicles ? (
          <motion.section
            className="sewp-vi-cap-veh__vehicles"
            aria-labelledby={embedded ? undefined : "sewp-vi-vehicles-heading"}
            aria-label={embedded ? vehicles.title : undefined}
            variants={itemVariants}
            transition={itemTransition}
          >
            {embedded ? (
              <p className="sewp-vi-cap-veh__description">{vehicles.description}</p>
            ) : (
              <header className="sewp-vi-cap-veh__header">
                <h2 id="sewp-vi-vehicles-heading" className="sewp-vi-cap-veh__title">
                  <span className="sewp-vi-cap-veh__eyebrow">{vehicles.eyebrow}</span>
                  <span className="sewp-vi-cap-veh__title-text">{vehicles.title}</span>
                </h2>
                <p className="sewp-vi-cap-veh__description">{vehicles.description}</p>
              </header>
            )}

            <ul className="sewp-vi-cap-veh__vehicle-list">
              {vehicles.items.map((item) => (
                <li key={item.id} className="sewp-vi-cap-veh__vehicle-item">
                  <VehicleCard item={item} />
                </li>
              ))}
            </ul>
          </motion.section>
        ) : null}
      </motion.div>
    </div>
  );
}
