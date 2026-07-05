"use client";

import Script from "next/script";
import { useEffect, useId, useRef } from "react";
import type { HubspotFormConfig } from "../../src/content/schema";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          portalId: string;
          formId: string;
          region: string;
          target: string;
        }) => void;
      };
    };
  }
}

type HubSpotContactFormProps = {
  config: HubspotFormConfig;
};

export function HubSpotContactForm({ config }: HubSpotContactFormProps) {
  const reactId = useId();
  const targetId = config.targetId ?? `hubspot-contact-form-${reactId.replace(/:/g, "")}`;
  const createdRef = useRef(false);

  const createForm = () => {
    if (createdRef.current || !window.hbspt?.forms) {
      return;
    }

    createdRef.current = true;

    window.hbspt.forms.create({
      portalId: config.portalId,
      formId: config.formId,
      region: config.region,
      target: `#${targetId}`
    });
  };

  useEffect(() => {
    createForm();
  }, [config.formId, config.portalId, config.region, targetId]);

  return (
    <div className="contact-us-form contact-us-form--hubspot" aria-labelledby="contact-us-heading">
      <Script src="https://js.hsforms.net/forms/embed/v2.js" strategy="afterInteractive" onLoad={createForm} />
      <div id={targetId} className="contact-us-form__hubspot-target" />
    </div>
  );
}
