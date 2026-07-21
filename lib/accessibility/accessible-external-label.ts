export function accessibleExternalLinkLabel(label: string): string {
  return `${label} (opens in new tab)`;
}

/** Ensure PDF destinations are announced in the accessible name (WAVE "Link to PDF document"). */
export function withPdfLinkLabel(label: string): string {
  return /\bpdf\b/i.test(label) ? label : `${label} (PDF)`;
}

export function accessibleExternalPdfLinkLabel(label: string): string {
  return accessibleExternalLinkLabel(withPdfLinkLabel(label));
}
