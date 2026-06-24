import type { SiteContent } from "../../src/content/schema";
import { AwardBannerBadge } from "./AwardBannerBadge";
import { HeroFeatureIcon } from "./HeroFeatureIcon";
import { IconArrowRight } from "./NavIcons";

type AwardBannerProps = {
  site: SiteContent;
};

export function AwardBanner({ site }: AwardBannerProps) {
  const { awardBanner } = site;

  return (
    <section className="award-banner" aria-label="Contract award announcement">
      <div className="award-banner__inner">
        <div className="award-banner__badge" aria-hidden="true">
          <AwardBannerBadge className="award-banner__badge-icon" />
        </div>

        <span className="award-banner__rule" aria-hidden="true" />

        <p className="award-banner__headline">{awardBanner.headline}</p>

        <span className="award-banner__rule" aria-hidden="true" />

        <p className="award-banner__description">{awardBanner.description}</p>

        <a
          href={awardBanner.href}
          className="award-banner__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          {awardBanner.ctaLabel}
          <IconArrowRight className="award-banner__cta-icon award-banner__cta-icon--arrow" />
        </a>
      </div>
    </section>
  );
}
