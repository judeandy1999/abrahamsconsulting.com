"use client";

import type { HubspotFormConfig } from "../../src/content/schema";
import { HubSpotPortalEmbedScript } from "./HubSpotPortalEmbedScript";

type HubSpotFormFrameProps = {
  config: HubspotFormConfig;
  className?: string;
  /** When false, assume the portal embed script is loaded elsewhere on the page. */
  loadPortalScript?: boolean;
};

export function HubSpotFormFrame({ config, className, loadPortalScript = true }: HubSpotFormFrameProps) {
  return (
    <div className={className}>
      {loadPortalScript ? <HubSpotPortalEmbedScript portalId={config.portalId} /> : null}
      <div
        className="hs-form-frame"
        data-region={config.region}
        data-form-id={config.formId}
        data-portal-id={config.portalId}
      />
    </div>
  );
}
