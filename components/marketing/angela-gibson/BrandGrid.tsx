"use client";

import Image from "next/image";
import Link from "next/link";
import { angelaGibsonBrandImages, angelaGibsonLinks } from "../../../src/content/angela-gibson";
import { IconArrowRight } from "../NavIcons";
import type { AngelaAnalyticsHandlers } from "./angela-analytics";

type BrandGridProps = {
  analytics: AngelaAnalyticsHandlers;
};

export function BrandGrid({ analytics }: BrandGridProps) {
  return (
    <section id="explore-work" className="angela-page__brands" aria-labelledby="angela-brands-heading">
      <div className="angela-page__brands-inner">
        <header className="angela-page__brands-header">
          <p className="angela-page__eyebrow angela-page__eyebrow--center">Three brands. A shared purpose.</p>
          <h2 id="angela-brands-heading" className="angela-page__brands-title">
            Explore the Work
          </h2>
          <p className="angela-page__brands-description">Our ecosystem — three brands, each with a distinct mission.</p>
        </header>

        <ul className="angela-page__brand-grid">
          <li>
            <article className="angela-page__brand-card">
              <div className="angela-page__brand-media">
                <Image
                  src={angelaGibsonBrandImages.abrahams.src}
                  alt={angelaGibsonBrandImages.abrahams.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="angela-page__brand-image angela-page__brand-image--abrahams"
                />
              </div>
              <div className="angela-page__brand-card-body">
                <h3 className="angela-page__brand-heading">Abrahams Consulting</h3>
                <p className="angela-page__brand-tagline">Technology solutions for government, delivered.</p>
                <p className="angela-page__brand-body">
                  A certified M/WBE IT firm serving public-sector agencies and prime contractors. We deliver IT
                  infrastructure, hardware and software procurement, and cybersecurity solutions with the compliance and
                  reliability government contracts demand.
                </p>
                <Link
                  href={angelaGibsonLinks.abrahamsContact}
                  className="btn btn--primary angela-page__brand-cta"
                  onClick={() => analytics.trackAbrahamsCard()}
                >
                  Partner or team with us
                  <IconArrowRight className="btn__icon" />
                </Link>
              </div>
            </article>
          </li>
          <li>
            <article className="angela-page__brand-card">
              <div className="angela-page__brand-media">
                <Image
                  src={angelaGibsonBrandImages.cobwiit.src}
                  alt={angelaGibsonBrandImages.cobwiit.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="angela-page__brand-image"
                />
              </div>
              <div className="angela-page__brand-card-body">
                <h3 className="angela-page__brand-heading">CoBWiIT</h3>
                <p className="angela-page__brand-tagline">Classrooms to careers to contracts.</p>
                <p className="angela-page__brand-body">
                  A membership collective for Black women in IT, AI and leadership. It gives members skills, mentorship
                  and access to opportunities in the GovTech sector, including Responsible AI governance, CMMC readiness
                  and government procurement.
                </p>
                <a
                  href={angelaGibsonLinks.cobwiit}
                  className="btn angela-page__brand-cta angela-page__brand-cta--outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => analytics.trackCobwiitCard()}
                >
                  Join the founding 100
                  <IconArrowRight className="btn__icon" />
                </a>
              </div>
            </article>
          </li>
          <li>
            <article className="angela-page__brand-card">
              <div className="angela-page__brand-media">
                <Image
                  src={angelaGibsonBrandImages.eveSpeaks.src}
                  alt={angelaGibsonBrandImages.eveSpeaks.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="angela-page__brand-image angela-page__brand-image--eve-speaks"
                />
              </div>
              <div className="angela-page__brand-card-body">
                <h3 className="angela-page__brand-heading">Eve Speaks</h3>
                <p className="angela-page__brand-tagline">Heal. Aspire. Grow.</p>
                <p className="angela-page__brand-body">
                  A speaking and coaching practice that helps women leaders and entrepreneurs find their voice, own their
                  story and step into rooms they were built for.
                </p>
                <a
                  href={angelaGibsonLinks.eveSpeaks}
                  className="btn angela-page__brand-cta angela-page__brand-cta--outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => analytics.trackEveSpeaksCard()}
                >
                  Book Angela to speak or coach
                  <IconArrowRight className="btn__icon" />
                </a>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
}
