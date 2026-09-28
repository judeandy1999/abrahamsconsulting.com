import type { EventsPageContent } from "./schema";
import { buildEventRecordingAccessAbsoluteUrl } from "../../lib/events/recording-access";

export const EVENTS_IMAGES = {
  hpZgxNanoWebinar: "/images/events/hp-zgx-nano-webinar.png",
  globeNorthAiSecurityWebinar:
    "/images/events/globe-north-ai-security-webinar-nov-2026.png",
  globeNorthAiSecurityWebinarSplash:
    "/images/events/globe-north-ai-security-webinar-splash.png"
} as const;

export const GLOBE_NORTH_AI_SECURITY_WEBINAR_SLUG = "globe-north-ai-security-webinar-nov-2026";

export const GLOBE_NORTH_AI_SECURITY_WEBINAR_REGISTRATION_URL =
  "https://us02web.zoom.us/webinar/register/WN_6d7bujTtQb-Af7g10ZCXUg";

export const HP_ZGX_NANO_WEBINAR_SLUG = "hp-zgx-nano-webinar-sep-2026";

export const HP_ZGX_NANO_WEBINAR_FORM_ID = "6a96f7c1-feff-49af-9bea-bd6f8756fadf";

export const HP_ZGX_NANO_WEBINAR_RECORDING_URL = "https://youtu.be/UpUFdUt5Feg";

/** Paste into HubSpot form Step 3 → Redirect to a page → Specific URL */
export const HP_ZGX_NANO_WEBINAR_HUBSPOT_REDIRECT_URL = buildEventRecordingAccessAbsoluteUrl(
  HP_ZGX_NANO_WEBINAR_SLUG,
  HP_ZGX_NANO_WEBINAR_FORM_ID
);

export const eventsPageContent: EventsPageContent = {
  hero: {
    title: "Events",
    description:
      "Join Abrahams Consulting for technical exchange meetings, product briefings, and partner-led sessions designed for enterprise and government technology leaders."
  },
  splash: {
    enabled: true,
    imageSrc: EVENTS_IMAGES.globeNorthAiSecurityWebinarSplash,
    imageAlt:
      "Abrahams Consulting and Globe North Technical Exchange Meeting — AI-Driven Security and Deployment webinar on November 12, 2026",
    ctaLabel: "Register Now",
    ctaHref: GLOBE_NORTH_AI_SECURITY_WEBINAR_REGISTRATION_URL,
    ctaPlacement: "banner"
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
  backToEventsLabel: "Back to Events",
  events: [
    {
      id: "globe-north-ai-security-webinar-nov-2026",
      slug: GLOBE_NORTH_AI_SECURITY_WEBINAR_SLUG,
      status: "upcoming",
      title: "AI-Driven Security & Deployment: The New Standard for Modern Organizations",
      subtitle: "Expert Speaker Session with Gregory North",
      eventType: "Technical Exchange Meeting",
      date: "November 12, 2026",
      time: "10:00 AM EST",
      location: "Zoom",
      partner: "Globe North",
      cardImageSrc: EVENTS_IMAGES.globeNorthAiSecurityWebinar,
      cardImageAlt:
        "Abrahams Consulting and Globe North Technical Exchange Meeting — AI-Driven Security and Deployment webinar on November 12, 2026",
      modal: {
        imageSrc: EVENTS_IMAGES.globeNorthAiSecurityWebinar,
        imageAlt:
          "Abrahams Consulting and Globe North Technical Exchange Meeting — AI-Driven Security and Deployment webinar on November 12, 2026",
        summary:
          "Join Abrahams Consulting and Globe North for a technical exchange on AI-driven security and deployment — how modern organizations detect threats, govern generative AI, and adopt intelligent deployment strategies with confidence.",
        details: [
          { label: "Event Type", value: "Technical Exchange Meeting" },
          { label: "Speaker", value: "Gregory North" },
          { label: "Date", value: "November 12, 2026" },
          { label: "Time", value: "10:00 AM EST" },
          { label: "Location", value: "Zoom" },
          { label: "Partner", value: "Globe North" }
        ],
        highlights: [
          {
            title: "AI-Powered Threat Detection",
            description:
              "AI-powered threat detection, anomaly analysis, and incident response for modern security operations."
          },
          {
            title: "Generative & Shadow AI Governance",
            description:
              "Governing generative AI and shadow AI risks within your organization."
          },
          {
            title: "Intelligent Deployment Strategies",
            description:
              "Intelligent deployment strategies: AIOps, patch prioritization, and DevSecOps."
          },
          {
            title: "Secure AI Workload Adoption",
            description:
              "Secure AI workload adoption for regulated and compliance-driven environments."
          },
          {
            title: "Practical AI Evaluation",
            description:
              "Practical steps to evaluate and adopt AI solutions that fit your environment."
          }
        ],
        ctaHref: GLOBE_NORTH_AI_SECURITY_WEBINAR_REGISTRATION_URL,
        ctaLabel: "Register Now"
      }
    },
    {
      id: "hp-zgx-nano-webinar-sep-2026",
      slug: HP_ZGX_NANO_WEBINAR_SLUG,
      status: "past",
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
      recording: {
        videoUrl: HP_ZGX_NANO_WEBINAR_RECORDING_URL,
        videoTitle: "AI Supercomputing in the Palm of Your Hand — HP ZGX Nano AI Station",
        description:
          "Watch the recorded Technical Exchange Meeting with Abrahams Consulting and HP on the HP ZGX Nano G1n — ultra-compact on-prem AI supercomputing built for today's most demanding workloads.",
        gate: {
          title: "Access the session recording",
          description:
            "Complete the form below to unlock the on-demand recording of our Technical Exchange Meeting with HP.",
          hubspotForm: {
            portalId: "44647552",
            formId: HP_ZGX_NANO_WEBINAR_FORM_ID,
            region: "na1",
            targetId: "hubspot-event-recording-form"
          }
        }
      },
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
        ctaHref: `/events/${HP_ZGX_NANO_WEBINAR_SLUG}`,
        ctaLabel: "View Recording"
      }
    }
  ]
};
