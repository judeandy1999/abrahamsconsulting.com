import type { Metadata } from "next";
import "../../styles/pages/contact-us.css";
import { ContactUsPageContent } from "../../../components/marketing/ContactUsPageContent";
import { buildMarketingMetadata } from "../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/contact-us")!);

export default function ContactUsPage() {
  return <ContactUsPageContent />;
}
