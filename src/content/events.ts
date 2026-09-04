import type { EventsPageContent } from "./schema";

export const EVENTS_IMAGES = {
  hpZgxNanoWebinar: "/images/events/hp-zgx-nano-webinar.png"
} as const;

export const HP_ZGX_NANO_WEBINAR_REGISTRATION_URL =
  "https://us02web.zoom.us/webinar/register/WN_0BiKWclGSwSTaXRek8fyxA#/registration";

export const eventsPageContent: EventsPageContent = {
  hero: {
    title: "Events",
    description:
      "Join Abrahams Consulting for technical exchange meetings, product briefings, and partner-led sessions designed for enterprise and government technology leaders."
  },
  splash: {
    enabled: true,
    imageSrc: EVENTS_IMAGES.hpZgxNanoWebinar,
    imageAlt:
      "Abrahams Consulting and HP Technical Exchange Meeting — AI Supercomputing in the Palm of Your Hand, September 17, 2026",
    ctaLabel: "Reserve Your Free Spot Now",
    ctaHref: HP_ZGX_NANO_WEBINAR_REGISTRATION_URL
  },
  upcomingSection: {
    title: "Upcoming Events",
    emptyMessage: "No upcoming events scheduled at this time. Check back soon."
  },
  pastSection: {
    title: "Past Events",
    emptyMessage: "No past events to display yet."
  },
  knowMoreLabel: "Learn More",
  registerCtaLabel: "Reserve Your Free Spot Now",
  events: [
    {
      id: "hp-zgx-nano-webinar-sep-2026",
      status: "upcoming",
      title: "AI Supercomputing in the Palm of Your Hand",
      subtitle: "Exploring the Revolutionary HP ZGX Nano AI Station",
      eventType: "Technical Exchange Meeting",
      date: "Thursday, September 17, 2026",
      time: "10:00 am – 11:00 am EST",
      location: "Interactive Zoom Link",
      partner: "HP",
      cardImageSrc: EVENTS_IMAGES.hpZgxNanoWebinar,
      cardImageAlt:
        "Abrahams Consulting and HP Technical Exchange Meeting — HP ZGX Nano AI Station webinar on September 17, 2026",
      modal: {
        imageSrc: EVENTS_IMAGES.hpZgxNanoWebinar,
        imageAlt:
          "Abrahams Consulting and HP Technical Exchange Meeting — HP ZGX Nano AI Station webinar on September 17, 2026",
        summary:
          "Join Abrahams Consulting and HP for a technical exchange on the HP ZGX Nano G1n — ultra-compact on-prem AI supercomputing built for today's most demanding workloads.",
        details: [
          { label: "Event Type", value: "Technical Exchange Meeting" },
          { label: "Date", value: "Thursday, September 17, 2026" },
          { label: "Time", value: "10:00 am – 11:00 am EST" },
          { label: "Location", value: "Interactive Zoom Link" },
          { label: "Partner", value: "HP" }
        ],
        highlights: [
          {
            title: "On-Prem Power. AI Performance.",
            description:
              "Experience ultra-compact supercomputing built for today's most demanding AI workloads."
          },
          {
            title: "Secure. Scalable. Yours.",
            description: "Keep your data protected with on-prem infrastructure that scales with you."
          },
          {
            title: "Compact Design. Limitless Potential.",
            description:
              "The HP ZGX Nano G1n delivers desktop power in a device that fits in the palm of your hand."
          }
        ],
        ctaHref: HP_ZGX_NANO_WEBINAR_REGISTRATION_URL,
        ctaLabel: "Reserve Your Free Spot Now"
      }
    }
  ]
};
