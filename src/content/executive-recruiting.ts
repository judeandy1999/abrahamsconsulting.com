import type { ExecutiveRecruitingPageContent } from "./schema";

const EXECUTIVE_RECRUITING_MEETING_URL =
  "https://info.abrahamsconsulting.com/meetings/angela-gibson/executive-it-recruiting-meeting-link?uuid=a22486a0-6b3e-4974-a888-d163780bf6b6";

const HIRING_PROFILE_SCORECARD_URL = "https://itleadershiphiringprofile.scoreapp.com/";

const EXECUTIVE_RECRUITING_EMPLOYER_HUBSPOT_FORM = {
  portalId: "44647552",
  formId: "c235489c-1307-4c04-8492-3dfb11c9fbd8",
  region: "na1"
} as const;

const EXECUTIVE_RECRUITING_CANDIDATE_HUBSPOT_FORM = {
  portalId: "44647552",
  formId: "31210c27-704d-42bc-a747-f3ba708c0360",
  region: "na1"
} as const;

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
  },
  embedFormSection: {
    eyebrow: "GET STARTED",
    title: "How Can We Support You Today?",
    description:
      "Whether you're building a stronger leadership team or exploring your next executive opportunity, we're here to help.",
    formPrompt: "Select a path to open the form.",
    employerPath: {
      title: "I'm looking to hire an executive",
      description: "Find the right leadership talent for your organization.",
      ctaLabel: "Hire an Executive",
      hubspotForm: EXECUTIVE_RECRUITING_EMPLOYER_HUBSPOT_FORM
    },
    candidatePath: {
      title: "I'm exploring executive opportunities",
      description: "Explore select executive opportunities or confidential representation.",
      ctaLabel: "Explore Opportunities",
      hubspotForm: EXECUTIVE_RECRUITING_CANDIDATE_HUBSPOT_FORM
    }
  },
  whoThisIsForSection: {
    eyebrow: "WHO THIS IS FOR",
    title: "Built for Leaders Making High-Stakes Decisions",
    description:
      "We partner with organizations and executive leaders who understand that the right leadership changes everything.",
    items: [
      { id: "ceos", icon: "ceos", label: "CEOs driving transformation or growth" },
      { id: "cios", icon: "cios", label: "CIOs modernizing legacy systems" },
      { id: "ctos", icon: "ctos", label: "CTOs scaling engineering teams" },
      { id: "boards", icon: "boards", label: "Boards replacing critical leadership" },
      {
        id: "confidential-transitions",
        icon: "confidential-transitions",
        label: "Organizations requiring confidential executive transitions"
      }
    ],
    callout: "If the role impacts strategy, revenue, or risk — this is for you."
  },
  processSection: {
    eyebrow: "OUR PROCESS",
    title: "A Structured, Low-Risk Process",
    steps: [
      {
        id: "discovery",
        stepNumber: "01",
        icon: "discovery",
        title: "Confidential Discovery Call",
        description: "15-minute conversation to understand your business, not just the job description."
      },
      {
        id: "alignment",
        stepNumber: "02",
        icon: "alignment",
        title: "Role & Strategy Alignment",
        description: "Define success metrics, leadership profile, and potential risks."
      },
      {
        id: "search",
        stepNumber: "03",
        icon: "search",
        title: "Targeted Executive Search",
        description: "Identify, vet, and approach the right leaders."
      },
      {
        id: "shortlist",
        stepNumber: "04",
        icon: "shortlist",
        title: "Curated Shortlist Delivery",
        description: "Only qualified, aligned executives."
      }
    ],
    callout: "You don't get resumes. You get decision-ready candidates."
  },
  whyAbrahamsSection: {
    eyebrow: "WHY ABRAHAMS",
    title: "Not Traditional Recruiting",
    traditionalColumnLabel: "Traditional Recruiting",
    abrahamsColumnLabel: "Abrahams Consulting",
    comparisonRows: [
      { id: "matching", traditional: "Resume matching", abrahams: "Executive vetting" },
      { id: "volume", traditional: "High-volume candidates", abrahams: "Curated shortlist" },
      { id: "transaction", traditional: "Transactional hiring", abrahams: "Strategic alignment" },
      { id: "placement", traditional: "Short-term placement", abrahams: "Long-term impact" }
    ],
    sidebarQuote: "We don't fill roles. We de-risk leadership decisions.",
    sidebarImageSrc: "/images/executive-recruiting/hero.webp",
    sidebarImageAlt: "Modern conference room with leadership team seating"
  },
  executiveImpactSection: {
    eyebrow: "REAL EXECUTIVE IMPACT",
    title: "Results Driven by Leadership Fit",
    sidebarQuote: "Results driven by leadership fit, not just credentials.",
    cards: [
      {
        id: "cio-placement",
        icon: "cio-placement",
        title: "CIO Placement",
        outcome: [
          { text: "Reduced cloud spend by " },
          { text: "40%", emphasis: true }
        ]
      },
      {
        id: "ciso-placement",
        icon: "ciso-placement",
        title: "CISO Placement",
        outcome: [
          { text: "Strengthened enterprise security posture within " },
          { text: "90 days", emphasis: true }
        ]
      },
      {
        id: "cto-hire",
        icon: "cto-hire",
        title: "CTO Hire",
        outcome: [
          { text: "Scaled engineering team " },
          { text: "4x", emphasis: true },
          { text: " within 12 months" }
        ]
      }
    ]
  },
  executiveOpportunitiesSection: {
    eyebrow: "EXECUTIVE OPPORTUNITIES",
    title: "Current Executive Opportunities",
    description: "We partner with select organizations on critical leadership roles.",
    applyLabel: "Apply / Express Interest",
    opportunities: [
      {
        id: "cio-financial-services",
        title: "Chief Information Officer (CIO)",
        industry: "Financial Services",
        icon: "financial-services"
      },
      {
        id: "cto-fintech",
        title: "Chief Technology Officer (CTO)",
        industry: "FinTech / SaaS",
        icon: "fintech"
      },
      {
        id: "ciso-healthcare",
        title: "Chief Information Security Officer (CISO)",
        industry: "Healthcare",
        icon: "healthcare"
      },
      {
        id: "vp-engineering",
        title: "VP Engineering",
        industry: "High-Growth Tech",
        icon: "engineering-growth"
      }
    ],
    candidatePanel: {
      eyebrow: "FOR EXECUTIVE CANDIDATES",
      title: "Not Seeing the Right Role?",
      description: "We work with a select group of executive leaders and represent them confidentially in the market.",
      bullets: [
        "Discreet career positioning",
        "Access to unadvertised opportunities",
        "Strategic career alignment"
      ],
      ctaLabel: "Submit Your Profile",
      confidentialityNote: "All candidate submissions are handled with strict confidentiality.",
      imageSrc: "/images/executive-recruiting/hero.webp",
      imageAlt: "Executive leader reviewing opportunities in a modern office"
    }
  }
};
