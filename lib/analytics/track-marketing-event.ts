type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackMarketingEvent(eventName: string, params?: EventParams): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  const payload: Record<string, string | number | boolean> = {};

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== "") {
        payload[key] = value;
      }
    }
  }

  window.gtag("event", eventName, payload);
}
