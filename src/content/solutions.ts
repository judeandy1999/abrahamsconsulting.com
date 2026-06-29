import type { SolutionsPageContent } from "./schema";

export const solutionsPageContent: SolutionsPageContent = {
  hero: {
    segments: ["Security", "Networking", "Storage"],
    description:
      "Abrahams Consulting gives organizations a helping hand with the vulnerability of data they hold. Our niche solutions span security, networking, and storage—helping you address technology needs and understand what is required to get set up with confidence."
  },
  showcases: [
    {
      id: "security",
      textPosition: "left",
      panel: {
        icon: "shield",
        eyebrow: "Security",
        partnerName: "IBM Resiliency",
        paragraphs: [
          "IBM Resiliency is a comprehensive approach to helping organizations withstand and recover from disruptions. It encompasses a wide range of solutions and services designed to enhance business continuity, disaster recovery, and cybersecurity.",
          "IBM provides advanced data protection solutions to safeguard critical data against threats like ransomware, hardware failures, and natural disasters. Additionally, IBM helps organizations develop robust business continuity plans to minimize the impact of disruptions and ensure rapid recovery."
        ],
        ctaLabel: "EXPLORE IBM SOLUTIONS",
        ctaHref: "/consultation"
      },
      media: {
        type: "video",
        presenter: "Abrahams Consulting LLC",
        subtitle: "Cyber Resiliency with IBM Flash Storage",
        title: "Cyber Resiliency with",
        titleAccent: "IBM FlashSystem Storage",
        videoEmbedUrl: "https://www.youtube.com/embed/00Ct8Oceq3E?modestbranding=1&rel=0",
        videoTitle: "Cyber Resiliency with IBM Flash Storage",
        addedOnLabel: "Added On:",
        addedOnItems: ["IBM FlashSystem 7200", "IBM FlashSystem 5200", "IBM FlashSystem 5000"],
        meta: [
          { icon: "calendar", label: "March 7, 2021 (9:15am)" },
          { icon: "eye", label: "1,845,842+ Views" },
          { icon: "award", label: "IBM Storage Sales Competency, NY - TECHX" }
        ],
        duration: "45:33"
      }
    },
    {
      id: "networking",
      textPosition: "right",
      panel: {
        icon: "network",
        eyebrow: "Networking",
        partnerName: "Aruba",
        paragraphs: [
          "We provide network assessment, network design, and network planning deployment by employing a consultative approach which allows for a clear understanding of our clients' current infrastructure, enabling us to identify key areas of improvement or upgrade."
        ],
        ctaLabel: "FIND OUT MORE",
        ctaHref: "/consultation"
      },
      media: {
        type: "image",
        imageSrc: "/images/solutions/vector-networking.webp",
        imageAlt: "Niche solutions infographic showing cloud, operations, collaboration, and mobility capabilities",
        caption: "Niche Solutions"
      }
    },
    {
      id: "cloud-storage",
      textPosition: "left",
      panel: {
        icon: "cloud",
        eyebrow: "Cloud Storage",
        partnerName: "HPE",
        paragraphs: [
          "Hewlett Packard Enterprise is an organization business-focused that comprises of two divisions. The Enterprise group which provides niche solutions for servers, storage, networking etc. and Financial Services.",
          "With cloud storage provided by HPE it is now possible to run your workload anywhere."
        ],
        ctaLabel: "FIND OUT MORE",
        ctaHref: "/consultation"
      },
      media: {
        type: "image",
        imageSrc: "/images/solutions/vector-storage.webp",
        imageAlt: "Niche solutions infographic for cloud and enterprise storage",
        caption: "Niche Solutions"
      }
    },
    {
      id: "tape-storage",
      textPosition: "right",
      panel: {
        icon: "hard-drive",
        eyebrow: "Tape Storage",
        partnerName: "Quantum",
        paragraphs: [
          "Quantum Corporation has announced its latest innovations to protect against ransomware and other forms of cyberattacks."
        ],
        ctaLabel: "FIND OUT MORE",
        ctaHref: "/consultation"
      },
      media: {
        type: "image",
        imageSrc: "/images/solutions/data-storage.webp",
        imageAlt: "Enterprise data storage and backup infrastructure",
        caption: "Niche Solutions"
      }
    }
  ]
};
