import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const HUBSPOT_FORM = "components/marketing/HubSpotContactForm.tsx";
const CONSULTATION_PAGE = "components/marketing/ContactUsPageContent.tsx";
const SUCCESS_PAGE = "app/(marketing)/contact-us/success/page.tsx";
const LEAD_ROUTE = "app/api/lead/route.ts";
const SEND_EMAIL = "lib/lead/send-lead-email.ts";
const ENV_EXAMPLE = ".env.example";

test("contact page embeds HubSpot form with portal and form ids", async () => {
  const pageSource = await readFile(CONSULTATION_PAGE, "utf8");
  const hubspotSource = await readFile(HUBSPOT_FORM, "utf8");

  assert.match(pageSource, /HubSpotContactForm|hubspotForm/);
  assert.match(pageSource, /contactPage|loadMarketingContent/);
  assert.match(hubspotSource, /hbspt\.forms\.create/);
  assert.match(hubspotSource, /portalId|formId|region/);
});

test("HubSpot embed loads the official forms script", async () => {
  const source = await readFile(HUBSPOT_FORM, "utf8");

  assert.match(source, /js\.hsforms\.net\/forms\/embed\/v2\.js/);
});

test("lead API validates submissions and applies honeypot anti-spam", async () => {
  const source = await readFile(LEAD_ROUTE, "utf8");

  assert.match(source, /honeypotFieldName|honeypot/);
  assert.match(source, /safeParse|parse\(/);
  assert.match(source, /sendLeadEmail/);
  assert.match(source, /400|422/);
});

test("lead API routes successful submissions to consultation success", async () => {
  const source = await readFile(LEAD_ROUTE, "utf8");

  assert.match(source, /contact-us\/success|\/contact-us\/success/);
});

test("email delivery adapter keeps secrets server-side", async () => {
  const source = await readFile(SEND_EMAIL, "utf8");

  assert.match(source, /RESEND_API_KEY/);
  assert.match(source, /LEAD_NOTIFICATION_TO/);
  assert.match(source, /LEAD_NOTIFICATION_FROM/);
  assert.match(source, /fetch\(/);
});

test("success page confirms submission explicitly", async () => {
  const source = await readFile(SUCCESS_PAGE, "utf8");

  assert.match(source, /export const dynamic = "force-static";/);
  assert.match(source, /success|received|submitted/i);
});

test("env example documents lead delivery configuration", async () => {
  const source = await readFile(ENV_EXAMPLE, "utf8");

  assert.match(source, /RESEND_API_KEY/);
  assert.match(source, /LEAD_NOTIFICATION_TO/);
  assert.match(source, /LEAD_NOTIFICATION_FROM/);
});
