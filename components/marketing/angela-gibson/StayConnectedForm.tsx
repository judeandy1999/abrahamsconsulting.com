"use client";

import { angelaGibsonStayConnectedHubspotForm } from "../../../src/content/angela-gibson";
import { HubSpotFormFrame } from "../HubSpotFormFrame";

export function StayConnectedForm() {
  return (
    <section id="stay-connected" className="angela-page__connect" aria-labelledby="angela-connect-heading">
      <div className="angela-page__connect-card">
        <div className="angela-page__connect-layout">
          <div className="angela-page__connect-copy">
            <p className="angela-page__eyebrow">Let&apos;s stay connected</p>
            <h2 id="angela-connect-heading" className="angela-page__connect-title">
              Just heard me speak? Let&apos;s stay connected.
            </h2>
            <p className="angela-page__connect-description">
              Thank you for being in the room. Your certification is the starting line, not the finish. Leave your details
              and tell me where you are headed, and I&apos;ll follow up with resources that fit.
            </p>
          </div>

          <div className="angela-page__connect-form-wrap">
            <HubSpotFormFrame config={angelaGibsonStayConnectedHubspotForm} className="angela-page__hubspot" />
          </div>
        </div>
      </div>
    </section>
  );
}
