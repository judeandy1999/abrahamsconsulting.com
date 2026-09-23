"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import type { HubspotFormConfig } from "../../src/content/schema";

type HubSpotFormFrameProps = {
  config: HubspotFormConfig;
  onFormSubmitted?: () => void;
  className?: string;
};

export function HubSpotFormFrame({ config, onFormSubmitted, className }: HubSpotFormFrameProps) {
  const submittedRef = useRef(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (submittedRef.current || !onFormSubmitted) {
        return;
      }

      const data = event.data;
      if (!data || data.type !== "hsFormCallback" || data.eventName !== "onFormSubmitted") {
        return;
      }

      if (data.id && data.id !== config.formId) {
        return;
      }

      submittedRef.current = true;
      onFormSubmitted();
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [config.formId, onFormSubmitted]);

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
