import { getSiteUrl } from "../seo/metadata";

export const EVENT_RECORDING_ACCESS_PARAM = "access-granted";

export function buildEventRecordingAccessUrl(slug: string, hubspotFormId: string): string {
  return `/events/${slug}?${EVENT_RECORDING_ACCESS_PARAM}=${encodeURIComponent(hubspotFormId)}`;
}

export function buildEventRecordingAccessAbsoluteUrl(slug: string, hubspotFormId: string): string {
  return new URL(buildEventRecordingAccessUrl(slug, hubspotFormId), getSiteUrl()).toString();
}

export function isEventRecordingAccessGranted(
  accessGrantValue: string | null,
  expectedHubspotFormId: string
): boolean {
  return accessGrantValue === expectedHubspotFormId;
}
