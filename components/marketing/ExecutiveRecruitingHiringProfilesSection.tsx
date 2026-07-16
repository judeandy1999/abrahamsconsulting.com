"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import type { ExecutiveRecruitingPageContent } from "../../src/content/schema";
import { ExecutiveRecruitingHiringProfileIcon } from "./ExecutiveRecruitingHiringProfileIcon";
import { IconArrowRight } from "./NavIcons";

type ExecutiveRecruitingHiringProfilesSectionProps = {
  section: ExecutiveRecruitingPageContent["hiringProfilesSection"];
};

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ExecutiveRecruitingHiringProfilesSection({ section }: ExecutiveRecruitingHiringProfilesSectionProps) {
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProfile = section.profiles[activeIndex];

  const panelTransition = reduceMotion ? { duration: 0 } : { duration: 0.35, ease: easeOut };

  return (
    <section className="exec-recruiting-profiles" aria-labelledby={`${baseId}-heading`}>
      <div className="exec-recruiting-profiles__inner">
        <header className="exec-recruiting-profiles__header">
          <p className="exec-recruiting-profiles__eyebrow">{section.eyebrow}</p>
          <h2 id={`${baseId}-heading`} className="exec-recruiting-profiles__title">
            {section.title}
          </h2>
          <p className="exec-recruiting-profiles__description">{section.description}</p>
        </header>

        <div
          className="exec-recruiting-profiles__tabs"
          role="tablist"
          aria-label="IT leadership hiring profiles"
        >
          {section.profiles.map((profile, index) => {
            const isActive = index === activeIndex;
            const tabId = `${baseId}-tab-${profile.id}`;
            const panelId = `${baseId}-panel-${profile.id}`;

            return (
              <button
                key={profile.id}
                id={tabId}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={panelId}
                className={`exec-recruiting-profiles__tab${isActive ? " exec-recruiting-profiles__tab--active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <ExecutiveRecruitingHiringProfileIcon
                  name={profile.tabIcon}
                  className="exec-recruiting-profiles__tab-icon"
                />
                <span className="exec-recruiting-profiles__tab-label">{profile.tabLabel}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={activeProfile.id}
            id={`${baseId}-panel-${activeProfile.id}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${activeProfile.id}`}
            className="exec-recruiting-profiles__panel"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={panelTransition}
          >
            <div className="exec-recruiting-profiles__panel-content">
              <p className="exec-recruiting-profiles__panel-eyebrow">{activeProfile.panelEyebrow}</p>
              <h3 className="exec-recruiting-profiles__panel-title">{activeProfile.headline}</h3>
              <p className="exec-recruiting-profiles__panel-text">{activeProfile.description}</p>

              <ul className="exec-recruiting-profiles__highlights">
                {activeProfile.highlights.map((highlight) => (
                  <li key={highlight.label} className="exec-recruiting-profiles__highlight">
                    <ExecutiveRecruitingHiringProfileIcon
                      name={highlight.icon}
                      className="exec-recruiting-profiles__highlight-icon"
                    />
                    <span>{highlight.label}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={section.scheduleHref}
                className="exec-recruiting-profiles__cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                {section.scheduleLabel}
                <IconArrowRight className="exec-recruiting-profiles__cta-icon" />
              </Link>
            </div>

            <div className="exec-recruiting-profiles__panel-media">
              <Image
                src={activeProfile.imageSrc}
                alt={activeProfile.imageAlt}
                width={720}
                height={480}
                className="exec-recruiting-profiles__panel-image"
              />
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
