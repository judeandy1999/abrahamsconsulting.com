import type { ExecutiveRecruitingPageContent } from "./schema";

const EXECUTIVE_RECRUITING_MEETING_URL =
  "https://info.abrahamsconsulting.com/meetings/angela-gibson/executive-it-recruiting-meeting-link?uuid=a22486a0-6b3e-4974-a888-d163780bf6b6";

export const executiveRecruitingPageContent: ExecutiveRecruitingPageContent = {
  hero: {
    eyebrow: "EXECUTIVE SEARCH EXCELLENCE",
    headlinePrefix: "Identify the ",
    headlineAccent: "Visionaries",
    headlineSuffix: " Others Miss.",
    description:
      "We help organizations secure top 1% C-Suite and VP-level talent through a forensic, data-driven vetting process that goes beyond the resume.",
    imageSrc: "/images/executive-recruiting/hero.png",
    imageAlt: "Executive leadership team collaborating in a modern boardroom overlooking the city skyline",
    features: [
      {
        icon: "talent",
        title: "Top 1% Talent",
        description: "Access pre-vetted executive and VP-level leaders."
      },
      {
        icon: "vetting",
        title: "Data-Driven Vetting",
        description: "Forensic evaluation uncovering what others overlook."
      },
      {
        icon: "leadership",
        title: "C-Suite & VP Specialists",
        description: "Deep expertise across technology leadership functions."
      },
      {
        icon: "impact",
        title: "Long-Term Impact",
        description: "We align leaders with your strategy, culture, and growth goals."
      }
    ],
    primaryCtaLabel: "FIND EXECUTIVE",
    primaryCtaHref: EXECUTIVE_RECRUITING_MEETING_URL,
    secondaryCtaLabel: "WATCH THE 2 MIN VIDEO",
    secondaryCtaHref: "https://youtube.com/shorts/knuzqrbw1wY?feature=share"
  },
  wrongHireSection: {
    eyebrow: "EXECUTIVE HIRING RISKS",
    title: "The High Cost of the Wrong Hire",
    description:
      "Standard recruiting agencies play a numbers game. At the executive level, precision is the only metric that matters.",
    cards: [
      {
        id: "revenue-stagnation",
        title: "Revenue Stagnation",
        description:
          "Every day a C-level seat sits empty, strategic initiatives stall. We reduce vacancy time by leveraging our pre-vetted \"Shadow Bench\" of passive talent.",
        imageSrc: "/images/executive-recruiting/revenue-stagnation.png",
        imageAlt: "Revenue stagnation icon representing delayed executive hiring impact",
        learnMoreLabel: "LEARN MORE",
        learnMoreHref: EXECUTIVE_RECRUITING_MEETING_URL
      },
      {
        id: "cultural-misalignment",
        title: "Cultural Misalignment",
        description:
          "Resumes show skills, not behavior. Our proprietary 34-point psychometric assessment helps ensure leaders fit your organization's culture and goals.",
        imageSrc: "/images/executive-recruiting/cultural-misalignment.png",
        imageAlt: "Cultural misalignment icon representing leadership fit challenges",
        learnMoreLabel: "LEARN MORE",
        learnMoreHref: EXECUTIVE_RECRUITING_MEETING_URL
      },
      {
        id: "bad-hire-risk",
        title: "The Bad Hire Risk",
        description:
          "Replacing an executive can cost up to 213% of their annual salary. Our industry-leading replacement guarantee helps protect your investment.",
        imageSrc: "/images/executive-recruiting/bad-hire-risk.png",
        imageAlt: "Bad hire risk icon representing executive replacement costs",
        learnMoreLabel: "LEARN MORE",
        learnMoreHref: EXECUTIVE_RECRUITING_MEETING_URL
      }
    ]
  },
  hiringProfileCta: {
    title: "Ready to Hire Your Next CIO, CTO or VP Leader?",
    description: "We identify leaders others miss.",
    ctaLabel: "Schedule a Confidential Consultation",
    ctaHref: EXECUTIVE_RECRUITING_MEETING_URL,
    imageSrc: "/images/executive-recruiting/hero.png",
    imageAlt: "Executive leadership team in a confidential boardroom consultation",
    highlights: [
      { icon: "confidential", label: "Confidential Process" },
      { icon: "precision", label: "Precision-Driven Search" },
      { icon: "partnership", label: "Long-Term Partnership" }
    ]
  }
};
