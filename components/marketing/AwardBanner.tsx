import Link from "next/link";
import type { SiteContent } from "../../src/content/schema";
import { AwardBannerBadge } from "./AwardBannerBadge";
import { IconArrowRight } from "./NavIcons";

type AwardBannerProps = {
  site: SiteContent;
};

export function AwardBanner({ site }: AwardBannerProps) {
  const { awardBanner, nasaSewpBanner } = site;
  const isPbitsExternal = /^https?:\/\//i.test(awardBanner.href);

  return (
    <section className="award-banner award-banner--stacked" aria-label="Contract award announcements">
      <div className="award-banner__row award-banner__row--pbits">
        <div className="award-banner__inner">
          <article className="award-banner__column">
            <div className="award-banner__lead">
              <div className="award-banner__badge" aria-hidden="true">
                <AwardBannerBadge className="award-banner__badge-icon" />
              </div>

              <div className="award-banner__copy">
                <p className="award-banner__headline">{awardBanner.headline}</p>
                <p className="award-banner__description">{awardBanner.description}</p>
              </div>
            </div>

            {isPbitsExternal ? (
              <a
                href={awardBanner.href}
                className="award-banner__cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                {awardBanner.ctaLabel}
                <IconArrowRight className="award-banner__cta-icon award-banner__cta-icon--arrow" />
              </a>
            ) : (
              <Link href={awardBanner.href} className="award-banner__cta">
                {awardBanner.ctaLabel}
                <IconArrowRight className="award-banner__cta-icon award-banner__cta-icon--arrow" />
              </Link>
            )}
          </article>
        </div>
      </div>

      <div className="award-banner__row award-banner__row--nasa">
        <div className="award-banner__inner">
          <article className="award-banner__column award-banner__column--nasa">
            <div className="award-banner__lead">
              <div className="award-banner__badge" aria-hidden="true">
                <AwardBannerBadge className="award-banner__badge-icon" />
              </div>

              <div className="award-banner__copy">
                <p className="award-banner__headline">{nasaSewpBanner.headline}</p>
                <p className="award-banner__description">{nasaSewpBanner.description}</p>
              </div>
            </div>

            <Link href={nasaSewpBanner.href} className="award-banner__cta award-banner__cta--nasa">
              {nasaSewpBanner.ctaLabel}
              <IconArrowRight className="award-banner__cta-icon award-banner__cta-icon--arrow" />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
