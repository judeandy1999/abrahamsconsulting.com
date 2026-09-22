import { eventsPageContent } from "../../src/content/events";
import type { EventItem } from "../../src/content/schema";

export function getEventBySlug(slug: string): EventItem | undefined {
  return eventsPageContent.events.find((event) => event.slug === slug);
}

export function getEventRecordingSlugs(): string[] {
  return eventsPageContent.events.filter((event) => event.recording).map((event) => event.slug);
}
