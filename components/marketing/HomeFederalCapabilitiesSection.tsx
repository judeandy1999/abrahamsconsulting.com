import dynamic from "next/dynamic";
import type { SiteContent } from "../../src/content/schema";

const YouTubeFacade = dynamic(
  () => import("./YouTubeFacade").then((module) => ({ default: module.YouTubeFacade })),
  { ssr: true }
);

type HomeFederalCapabilitiesSectionProps = {
  site: SiteContent;
};

export function HomeFederalCapabilitiesSection({ site }: HomeFederalCapabilitiesSectionProps) {
  const { homeFederalCapabilities } = site;

  return (
    <section className="home-federal" aria-labelledby="home-federal-heading">
      <div className="home-federal__inner">
        <h2 id="home-federal-heading" className="home-about__heading">
          {homeFederalCapabilities.heading}
        </h2>

        <p className="home-federal__text">
          {homeFederalCapabilities.body}
          <a
            className="home-federal__link"
            href={homeFederalCapabilities.linkHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {homeFederalCapabilities.linkLabel}
          </a>
        </p>

        <div className="home-federal__video">
          <YouTubeFacade
            embedUrl={homeFederalCapabilities.videoEmbedUrl}
            title={homeFederalCapabilities.videoTitle}
            className="home-federal__video-frame"
          />
        </div>
      </div>
    </section>
  );
}
