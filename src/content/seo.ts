import type { LaunchPageSeo } from "./schema";

export const launchPageSeoContent = [
  {
    routeKey: "home",
    path: "/",
    title: "Abrahams Consulting",
    description:
      "Strategic consulting and staffing services for enterprise and government teams pursuing mission-critical outcomes."
  },
  {
    routeKey: "about",
    path: "/about",
    title: "About Abrahams Consulting",
    description:
      "Learn how Abrahams Consulting partners with public and private sector organizations on strategy, staffing, and contract alignment."
  },
  {
    routeKey: "services",
    path: "/services",
    title: "Security, Networking & Storage Solutions",
    description:
      "Explore Abrahams Consulting niche solutions for security, networking, and storage—including IBM Resiliency, Aruba networking, and enterprise storage guidance."
  },
  {
    routeKey: "executive-recruiting",
    path: "/executive-recruiting",
    title: "IT Executive Recruiting",
    description:
      "Identify visionary C-Suite and VP-level technology leaders through Abrahams Consulting's forensic, data-driven executive search process."
  },
  {
    routeKey: "contracts",
    path: "/contracts",
    title: "Contract Vehicles & Procurement",
    description:
      "Review procurement-ready contract vehicles that help agencies and prime partners engage Abrahams Consulting quickly and compliantly."
  },
  {
    routeKey: "trust",
    path: "/trust",
    title: "Trust & Credentials",
    description:
      "Review certifications, qualification signals, case snapshots, and partner indicators before engaging Abrahams Consulting."
  },
  {
    routeKey: "consultation",
    path: "/consultation",
    title: "Request a Consultation",
    description:
      "Start a consultation to align Abrahams Consulting services and contract vehicles with your mission priorities and procurement context."
  },
  {
    routeKey: "consultation-success",
    path: "/consultation/success",
    title: "Consultation Request Received",
    description:
      "Your consultation request was received. Abrahams Consulting will review your submission and follow up with next steps."
  }
] as const satisfies readonly LaunchPageSeo[];
