import type { NasaSewpViPageContent } from "../../src/content/schema";

type OrderingGuide = NonNullable<NasaSewpViPageContent["resources"]["orderingGuide"]>;

type NasaSewpViOrderingGuideCardProps = {
  guide: OrderingGuide;
  className?: string;
};

function IconDownload() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

export function NasaSewpViOrderingGuideCard({ guide, className }: NasaSewpViOrderingGuideCardProps) {
  const cardClassName = ["sewp-vi-ordering-guide", className].filter(Boolean).join(" ");

  if (guide.isAvailable) {
    return (
      <a
        href={guide.href}
        className={`${cardClassName} sewp-vi-ordering-guide--available`}
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="sewp-vi-ordering-guide__icon" aria-hidden="true">
          <IconDownload />
        </span>
        <span className="sewp-vi-ordering-guide__label">{guide.label}</span>
      </a>
    );
  }

  return (
    <div className={`${cardClassName} sewp-vi-ordering-guide--coming-soon`} aria-disabled="true">
      <span className="sewp-vi-ordering-guide__icon" aria-hidden="true">
        <IconDownload />
      </span>
      <span className="sewp-vi-ordering-guide__label">{guide.comingSoonLabel}</span>
    </div>
  );
}
