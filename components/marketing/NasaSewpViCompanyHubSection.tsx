"use client";

import { motion } from "framer-motion";
import { useId, useState, type KeyboardEvent } from "react";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { NasaSewpViCapabilitiesVehiclesSection } from "./NasaSewpViCapabilitiesVehiclesSection";
import { NasaSewpViCertificationsSection } from "./NasaSewpViCertificationsSection";
import { NasaSewpViCompanyInformationSection } from "./NasaSewpViCompanyInformationSection";
import { NasaSewpViCoreCompetenciesSection } from "./NasaSewpViCoreCompetenciesSection";
import { NasaSewpViWhyChooseSection } from "./NasaSewpViWhyChooseSection";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViCompanyHubSectionProps = {
  aboutCompany: NasaSewpViPageContent["aboutCompany"];
  whyChoose: NasaSewpViPageContent["whyChoose"];
  coreCompetencies: NasaSewpViPageContent["coreCompetencies"];
  categoryACapabilities: NasaSewpViPageContent["categoryACapabilities"];
  contractVehicles: NasaSewpViPageContent["contractVehicles"];
  companyInformation: NasaSewpViPageContent["companyInformation"];
  certifications: NasaSewpViPageContent["certifications"];
};

type TabId =
  | "why-choose"
  | "core-competencies"
  | "category-a"
  | "contract-vehicles"
  | "company-information"
  | "certifications";

type TabDefinition = {
  id: TabId;
  label: string;
};

const TABS: TabDefinition[] = [
  { id: "why-choose", label: "Why Abrahams Consulting" },
  { id: "core-competencies", label: "Core Competencies" },
  { id: "category-a", label: "Category A Capabilities" },
  { id: "contract-vehicles", label: "Contract Vehicles" },
  { id: "company-information", label: "Company Information" },
  { id: "certifications", label: "Certifications & Contract Status" }
];

export function NasaSewpViCompanyHubSection({
  aboutCompany,
  whyChoose,
  coreCompetencies,
  categoryACapabilities,
  contractVehicles,
  companyInformation,
  certifications
}: NasaSewpViCompanyHubSectionProps) {
  const baseId = useId();
  const [activeTab, setActiveTab] = useState<TabId>("why-choose");
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();
  const activeIndex = TABS.findIndex((tab) => tab.id === activeTab);

  function focusTabAt(index: number) {
    const next = TABS[(index + TABS.length) % TABS.length];
    setActiveTab(next.id);
    document.getElementById(`${baseId}-tab-${next.id}`)?.focus();
  }

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      focusTabAt(index + 1);
      return;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      focusTabAt(index - 1);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      focusTabAt(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      focusTabAt(TABS.length - 1);
    }
  }

  return (
    <section className="sewp-vi-company-hub" aria-labelledby="sewp-vi-company-hub-heading">
      <motion.div
        className="sewp-vi-company-hub__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.header className="sewp-vi-company-hub__header" variants={itemVariants} transition={itemTransition}>
          <h2 id="sewp-vi-company-hub-heading" className="sewp-vi-company-hub__title">
            {aboutCompany.title}
          </h2>
          {aboutCompany.paragraphs.map((paragraph) => (
            <p key={paragraph} className="sewp-vi-company-hub__intro">
              {paragraph}
            </p>
          ))}
        </motion.header>

        <motion.div variants={itemVariants} transition={itemTransition}>
          <div
            className="sewp-vi-company-hub__tablist"
            role="tablist"
            aria-label="About Abrahams Consulting"
          >
            {TABS.map((tab, index) => {
              const isActive = tab.id === activeTab;

              return (
                <button
                  key={tab.id}
                  id={`${baseId}-tab-${tab.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${baseId}-panel-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  className={`sewp-vi-company-hub__tab${isActive ? " sewp-vi-company-hub__tab--active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                  onKeyDown={(event) => onTabKeyDown(event, index)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div
            id={`${baseId}-panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${activeTab}`}
            className="sewp-vi-company-hub__panel"
          >
            {activeTab === "why-choose" ? <NasaSewpViWhyChooseSection section={whyChoose} embedded /> : null}

            {activeTab === "core-competencies" ? (
              <NasaSewpViCoreCompetenciesSection section={coreCompetencies} embedded />
            ) : null}

            {activeTab === "category-a" ? (
              <NasaSewpViCapabilitiesVehiclesSection
                capabilities={categoryACapabilities}
                vehicles={contractVehicles}
                view="capabilities"
                embedded
              />
            ) : null}

            {activeTab === "contract-vehicles" ? (
              <NasaSewpViCapabilitiesVehiclesSection
                capabilities={categoryACapabilities}
                vehicles={contractVehicles}
                view="vehicles"
                embedded
              />
            ) : null}

            {activeTab === "company-information" ? (
              <NasaSewpViCompanyInformationSection section={companyInformation} embedded />
            ) : null}

            {activeTab === "certifications" ? (
              <NasaSewpViCertificationsSection section={certifications} embedded />
            ) : null}
          </div>
        </motion.div>

        <p className="sewp-vi-company-hub__caption">
          Showing {TABS[activeIndex]?.label ?? "company details"} for Abrahams Consulting LLC
        </p>
      </motion.div>
    </section>
  );
}
