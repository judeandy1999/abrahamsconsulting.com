import Image from "next/image";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { accessibleExternalPdfLinkLabel, withPdfLinkLabel } from "../../lib/accessibility/accessible-external-label";

type NasaSewpViOrderingGuideCardProps = {
  section: NasaSewpViPageContent["electronicOrderingGuide"];
};

function IconDownload() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3v10m0 0 4-4m-4 4-4-4M5 19h14"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NasaSewpViOrderingGuideCard({ section }: NasaSewpViOrderingGuideCardProps) {
  const { download, accessibility } = section;
  const orderingGuideAvailable = download.isAvailable === true;
  const vpatAvailable = accessibility.vpat.isAvailable === true;

  return (
    <article className="sewp-vi-ordering-guide" aria-labelledby="sewp-vi-ordering-guide-download-heading">
      <div className="sewp-vi-ordering-guide__visual">
        <Image
          src={download.illustrationSrc}
          alt={download.illustrationAlt}
          width={200}
          height={200}
          className="sewp-vi-ordering-guide__illustration"
        />
      </div>

      <div className="sewp-vi-ordering-guide__body">
        <h3 id="sewp-vi-ordering-guide-download-heading" className="sewp-vi-ordering-guide__title">
          {download.title}
        </h3>
        <p className="sewp-vi-ordering-guide__description">{download.description}</p>

        <a
          href={download.href}
          className="btn btn--primary sewp-vi-ordering-guide__cta"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={accessibleExternalPdfLinkLabel(download.downloadLabel)}
        >
          <IconDownload />
          {withPdfLinkLabel(download.downloadLabel)}
        </a>
      </div>
    </article>
  );
}
