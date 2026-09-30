"use client";

import { AngelaAbout } from "./AngelaAbout";
import { AngelaHero } from "./AngelaHero";
import { useAngelaPageAnalytics } from "./angela-analytics";
import { BrandGrid } from "./BrandGrid";
import { StayConnectedForm } from "./StayConnectedForm";

export function AngelaHubPage() {
  const analytics = useAngelaPageAnalytics();

  return (
    <>
      <AngelaHero analytics={analytics} />
      <StayConnectedForm />
      <BrandGrid analytics={analytics} />
      <AngelaAbout />
    </>
  );
}
