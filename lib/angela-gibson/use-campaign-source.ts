"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export function useCampaignSource(): string | undefined {
  const searchParams = useSearchParams();
  const raw = searchParams.get("src");

  return useMemo(() => {
    if (!raw) {
      return undefined;
    }

    const trimmed = raw.trim();
    return trimmed.length > 0 ? trimmed : undefined;
  }, [raw]);
}
