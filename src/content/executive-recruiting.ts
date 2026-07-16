import type { ExecutiveRecruitingPageContent } from "./schema";

const EXECUTIVE_RECRUITING_MEETING_URL =
  "https://info.abrahamsconsulting.com/meetings/angela-gibson/executive-it-recruiting-meeting-link?uuid=a22486a0-6b3e-4974-a888-d163780bf6b6";

const HIRING_PROFILE_SCORECARD_URL = "https://itleadershiphiringprofile.scoreapp.com/";

export const executiveRecruitingPageContent: ExecutiveRecruitingPageContent = {
  hero: {
    eyebrow: "EXECUTIVE SEARCH EXCELLENCE",
    headlinePrefix: "Identify the ",
    headlineAccent: "Visionaries",
    headlineSuffix: " Others Miss.",
    description:
      "We help organizations secure top 1% C-Suite and VP-level talent through a forensic, data-driven vetting process that goes beyond the resume.",
    imageSrc: "/images/executive-recruiting/hero.webp",
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
        imageSrc: "/images/executive-recruiting/revenue-stagnation.webp",
        imageAlt: "Revenue stagnation icon representing delayed executive hiring impact",
        learnMoreLabel: "LEARN MORE",
        learnMoreHref: EXECUTIVE_RECRUITING_MEETING_URL
      },
      {
        id: "cultural-misalignment",
        title: "Cultural Misalignment",
        description:
          "Resumes show skills, not behavior. Our proprietary 34-point psychometric assessment helps ensure leaders fit your organization's culture and goals.",
        imageSrc: "/images/executive-recruiting/cultural-misalignment.webp",
        imageAlt: "Cultural misalignment icon representing leadership fit challenges",
        learnMoreLabel: "LEARN MORE",
        learnMoreHref: EXECUTIVE_RECRUITING_MEETING_URL
      },
      {
        id: "bad-hire-risk",
        title: "The Bad Hire Risk",
        description:
          "Replacing an executive can cost up to 213% of their annual salary. Our industry-leading replacement guarantee helps protect your investment.",
        imageSrc: "/images/executive-recruiting/bad-hire-risk.webp",
        imageAlt: "Bad hire risk icon representing executive replacement costs",
        learnMoreLabel: "LEARN MORE",
        learnMoreHref: EXECUTIVE_RECRUITING_MEETING_URL
      }
    ]
  },
  hiringProfilesSection: {
    eyebrow: "EXECUTIVE SEARCH SOLUTIONS",
    title: "Which IT Leadership Hiring Profile Fits You?",
    description:
      "Answer a few practical questions and receive a tailored recommendation with actionable insights. Discover which executive search approach will drive the best results for your organization.",
    scheduleLabel: "SCHEDULE A CONSULTATION",
    scheduleHref: EXECUTIVE_RECRUITING_MEETING_URL,
    profiles: [
      {
        id: "advisory-alignment",
        tabLabel: "Advisory & Alignment Reset",
        tabIcon: "advisory",
        panelEyebrow: "ADVISORY & ALIGNMENT RESET",
        headline: "Align leadership with your mission and goals.",
        description:
          "If your team lacks alignment or role clarity, this outcome guides you through resetting internal expectations and building consensus before search. Perfect for companies with stakeholder disagreement or evolving needs.",
        highlights: [
          { icon: "users", label: "Clarify roles and responsibilities" },
          { icon: "target", label: "Build consensus and alignment" },
          { icon: "chart", label: "Strengthen leadership planning outcomes" }
        ],
        imageSrc: "/images/executive-recruiting/hiring-profiles/advisory.webp",
        imageAlt: "Leadership team aligning around a strategic planning session",
        learnMoreLabel: "LEARN MORE",
        learnMoreHref: HIRING_PROFILE_SCORECARD_URL
      },
      {
        id: "retained-search",
        tabLabel: "Retained Executive Search",
        tabIcon: "retained",
        panelEyebrow: "RETAINED EXECUTIVE SEARCH",
        headline: "Secure top-tier IT leaders with a proven process.",
        description:
          "Ideal when the stakes are high and you need a proven process to attract, assess, and secure top-tier IT leaders. This outcome matches you with a full retained search for maximum shortlist quality and risk mitigation.",
        highlights: [
          { icon: "search", label: "Attract qualified executive candidates" },
          { icon: "precision", label: "Assess leadership fit rigorously" },
          { icon: "shield", label: "Mitigate hiring risk at scale" }
        ],
        imageSrc: "/images/executive-recruiting/hiring-profiles/retained.webp",
        imageAlt: "Executive recruiter reviewing leadership candidate profiles",
        learnMoreLabel: "LEARN MORE",
        learnMoreHref: HIRING_PROFILE_SCORECARD_URL
      },
      {
        id: "confidential-replacement",
        tabLabel: "Confidential Replacement Search",
        tabIcon: "confidential",
        panelEyebrow: "CONFIDENTIAL REPLACEMENT SEARCH",
        headline: "Replace leadership discreetly and without disruption.",
        description:
          "For sensitive situations where discretion is key, this option helps you quietly replace a current leader without disrupting your business or alerting the market.",
        highlights: [
          { icon: "lock", label: "Protect sensitive transitions" },
          { icon: "shield", label: "Minimize market exposure" },
          { icon: "target", label: "Maintain business continuity" }
        ],
        imageSrc: "/images/executive-recruiting/hiring-profiles/confidential.webp",
        imageAlt: "Confidential executive search consultation in a private office",
        learnMoreLabel: "LEARN MORE",
        learnMoreHref: HIRING_PROFILE_SCORECARD_URL
      },
      {
        id: "interim-leadership",
        tabLabel: "Interim Leadership Bridge",
        tabIcon: "interim",
        panelEyebrow: "INTERIM LEADERSHIP BRIDGE",
        headline: "Keep momentum while you search for a permanent hire.",
        description:
          "When immediate leadership is critical but a permanent hire isn't ready, this outcome provides guidance on sourcing experienced interim executives to maintain momentum and reduce risk.",
        highlights: [
          { icon: "clock", label: "Fill leadership gaps quickly" },
          { icon: "shield", label: "Reduce operational risk" },
          { icon: "users", label: "Bridge to permanent placement" }
        ],
        imageSrc: "/images/executive-recruiting/hiring-profiles/interim.webp",
        imageAlt: "Interim executive leading a technology team through transition",
        learnMoreLabel: "LEARN MORE",
        learnMoreHref: HIRING_PROFILE_SCORECARD_URL
      }
    ]
  },
  hiringProfileCta: {
    title: "Ready to Hire Your Next CIO, CTO or VP Leader?",
    description: "We identify leaders others miss.",
    ctaLabel: "Schedule a Confidential Consultation",
    ctaHref: EXECUTIVE_RECRUITING_MEETING_URL,
    imageSrc: "/images/executive-recruiting/hero.webp",
    imageAlt: "Executive leadership team in a confidential boardroom consultation",
    highlights: [
      { icon: "confidential", label: "Confidential Process" },
      { icon: "precision", label: "Precision-Driven Search" },
      { icon: "partnership", label: "Long-Term Partnership" }
    ]
  }
};
