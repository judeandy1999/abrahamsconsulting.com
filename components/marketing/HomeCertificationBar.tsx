import Image from "next/image";
import type { SiteContent } from "../../src/content/schema";

type HomeCertificationBarProps = {
  site: SiteContent;
};

export function HomeCertificationBar({ site }: HomeCertificationBarProps) {
  const { certificationStrip } = site;

  return (
    <section className="certification-bar" aria-labelledby="certification-bar-heading">
      <div className="certification-bar__inner">
        <div className="certification-bar__heading-wrap">
          <h2 id="certification-bar-heading" className="certification-bar__title">
            {certificationStrip.title}
          </h2>
        </div>

        <span className="certification-bar__rule" aria-hidden="true" />

        <div className="certification-bar__media">
          <Image
            src={certificationStrip.imageSrc}
            alt={certificationStrip.imageAlt}
            width={1200}
            height={200}
            loading="lazy"
            className="certification-bar__image"
            sizes="(max-width: 960px) 100vw, 900px"
            quality={75}
          />
        </div>
      </div>
    </section>
  );
}
