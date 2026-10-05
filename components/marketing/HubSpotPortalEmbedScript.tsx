"use client";

import Script from "next/script";
import { hubSpotPortalEmbedScriptSrc } from "../../lib/hubspot/embed-script";

type HubSpotPortalEmbedScriptProps = {
  portalId: string;
};

export { hubSpotPortalEmbedScriptSrc };

/** Loads the HubSpot embed script once per portal (deduped by script id). */
export function HubSpotPortalEmbedScript({ portalId }: HubSpotPortalEmbedScriptProps) {
  return (
    <Script
      id={`hs-form-embed-script-${portalId}`}
      src={hubSpotPortalEmbedScriptSrc(portalId)}
      strategy="afterInteractive"
    />
  );
}
