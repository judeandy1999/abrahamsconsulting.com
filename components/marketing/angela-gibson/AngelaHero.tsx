"use client";

import Link from "next/link";
import { angelaGibsonLinks } from "../../../src/content/angela-gibson";
import { IconArrowRight } from "../NavIcons";
import type { AngelaAnalyticsHandlers } from "./angela-analytics";

type AngelaHeroProps = {
  analytics: AngelaAnalyticsHandlers;
};

export function AngelaHero({ analytics }: AngelaHeroProps) {
  return (
    <section className="angela-page__hero" aria-labelledby="angela-hero-heading">
      <div className="angela-page__hero-inner">
        <p className="angela-page__eyebrow angela-page__eyebrow--on-dark angela-page__eyebrow--center">
          Government Technology Contractor · Founder · Speaker · Coach
        </p>
        <h1 id="angela-hero-heading" className="angela-page__hero-title">
          Angela Gibson
        </h1>
        <p className="angela-page__hero-description">
          Certified M/WBE and NYC government contractor, building the path from classrooms to careers to contracts for the
          women coming next.
        </p>
        <div className="angela-page__hero-actions">
          <Link href={angelaGibsonLinks.abrahamsConsultation} className="btn btn--primary" onClick={() => analytics.trackHeroAbrahams()}>
            Work with Abrahams
            <IconArrowRight className="btn__icon" />
          </Link>
          <a
            href={angelaGibsonLinks.cobwiit}
            className="btn btn--secondary"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.trackHeroCobwiit()}
          >
            Join CoBWiIT
            <IconArrowRight className="btn__icon" />
          </a>
          <a
            href={angelaGibsonLinks.eveSpeaks}
            className="btn btn--secondary"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.trackHeroBookAngela()}
          >
            Book Angela
            <IconArrowRight className="btn__icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
