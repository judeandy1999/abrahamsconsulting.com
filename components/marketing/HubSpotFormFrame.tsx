"use client";

import Script from "next/script";
import type { HubspotFormConfig } from "../../src/content/schema";

type HubSpotFormFrameProps = {
  config: HubspotFormConfig;
  className?: string;
};

export function HubSpotFormFrame({ config, className }: HubSpotFormFrameProps) {
  return (
    <div className={className}>
      <Script src={`https://js.hsforms.net/forms/embed/${config.portalId}.js`} strategy="afterInteractive" />
      <div
        className="hs-form-frame"
        data-region={config.region}
        data-form-id={config.formId}
        data-portal-id={config.portalId}
      />
    </div>
  );
}
