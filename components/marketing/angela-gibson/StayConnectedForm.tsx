"use client";

import { angelaGibsonStayConnectedHubspotForm } from "../../../src/content/angela-gibson";
import { HubSpotFormFrame } from "../HubSpotFormFrame";

export function StayConnectedForm() {
  return (
    <section id="stay-connected" className="angela-page__connect" aria-label="Stay connected">
      <div className="angela-page__connect-card">
        <div className="angela-page__connect-form-wrap">
          <HubSpotFormFrame config={angelaGibsonStayConnectedHubspotForm} className="angela-page__hubspot" />
        </div>
      </div>
    </section>
  );
}
