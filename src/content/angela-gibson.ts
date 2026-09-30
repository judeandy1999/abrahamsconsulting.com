import type { HubspotFormConfig } from "./schema";

/** Booking URL for Eve Speaks — replace when a dedicated booking page is confirmed. */
export const EVE_SPEAKS_BOOKING_HREF = "https://evespeaks.com/";

/** HubSpot stay-connected form (Angela Gibson page). */
export const angelaGibsonStayConnectedHubspotForm: HubspotFormConfig = {
  portalId: "44647552",
  formId: "052dbc8d-2e5c-4608-952f-f45dbf2ebe74",
  region: "na1"
};

export const angelaGibsonBrandImages = {
  abrahams: {
    src: "/images/angela-gibson/brand-abrahams-consulting.png",
    alt: "Abrahams Consulting — Trusted Government IT Solutions and Procurement Partner"
  },
  cobwiit: {
    src: "/images/angela-gibson/brand-cobwiit.png",
    alt: "CoBWiIT — Together, We Open Doors. Consortium for Black Women in IT"
  },
  eveSpeaks: {
    src: "/images/angela-gibson/brand-eve-speaks.png",
    alt: "Eve Speaks — Unlock Your Full Potential. Heal, Aspire, and Grow"
  }
} as const;

export const angelaGibsonLinks = {
  abrahamsConsultation: "/",
  abrahamsContact: "/contact-us",
  cobwiit: "https://www.cobwiit.com",
  eveSpeaks: EVE_SPEAKS_BOOKING_HREF
} as const;
