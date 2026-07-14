import Image from "next/image";
import Link from "next/link";
import type { SiteContent } from "../../src/content/schema";
import { HeroFeatureIcon } from "./HeroFeatureIcon";
import { IconArrowRight } from "./NavIcons";

type HomeHeroProps = {
  site: SiteContent;
};

export function HomeHero({ site }: HomeHeroProps) {
  const { homeHero } = site;

  return (
    <section id="home-value-proposition" className="home-hero" aria-labelledby="home-hero-heading">
      <div className="home-hero__inner">
        <div className="home-hero__content">
          <h1 id="home-hero-heading" className="home-hero__headline">
            {homeHero.headlinePrefix}
            <span className="home-hero__headline-accent">{homeHero.headlineAccent}</span>
            {homeHero.headlineSuffix}
          </h1>
          <p className="home-hero__description">{homeHero.description}</p>

          <ul className="home-hero__features" aria-label="Key qualifications">
            {homeHero.features.map((feature) => (
              <li key={feature.label}>
                <span className="home-hero__feature-icon">
                  <HeroFeatureIcon name={feature.icon} />
                </span>
                <span>{feature.label}</span>
              </li>
            ))}
          </ul>

          <div className="home-hero__actions">
            <Link href={site.consultationCta.path} className="btn btn--primary">
              {homeHero.primaryCtaLabel}
              <IconArrowRight className="btn__icon" />
            </Link>
            <Link href="/contracts" className="btn btn--secondary">
              {homeHero.secondaryCtaLabel}
            </Link>
          </div>
        </div>

        <div className="home-hero__visual" aria-hidden="true">
          <picture>
            <source media="(max-width: 960px)" srcSet="/images/hero-logo-mobile.webp" type="image/webp" />
            <Image
              src="/images/hero-logo.webp"
              alt=""
              width={520}
              height={520}
              priority
              fetchPriority="high"
              sizes="(max-width: 960px) min(100vw, 400px), 520px"
              className="home-hero__logo"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
