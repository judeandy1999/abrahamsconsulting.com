import dynamic from "next/dynamic";
import type { SiteContent } from "../../src/content/schema";

const PartnerLogoCarousel = dynamic(
  () => import("./PartnerLogoCarousel").then((module) => ({ default: module.PartnerLogoCarousel })),
  { ssr: true }
);

type HomeAboutSectionProps = {
  site: SiteContent;
};

export function HomeAboutSection({ site }: HomeAboutSectionProps) {
  const { homeAbout } = site;

  return (
    <section className="home-about" aria-labelledby="home-about-heading">
      <div className="home-about__inner">
        <div className="home-about__story">
          <p className="home-about__eyebrow">{homeAbout.eyebrow}</p>
          <h2 id="home-about-heading" className="home-about__heading">
            {homeAbout.heading}
          </h2>
          {homeAbout.paragraphs.map((paragraph, index) => (
            <p key={index} className="home-about__text">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="home-about__partners-panel" aria-labelledby="home-about-partners-heading">
          <p id="home-about-partners-heading" className="home-about__eyebrow home-about__eyebrow--partners">
            {homeAbout.partnersHeading}
          </p>
          <PartnerLogoCarousel logos={homeAbout.partnerLogos} />
        </aside>
      </div>
    </section>
  );
}
