import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import { constants } from "node:fs";
import { readFile } from "node:fs/promises";
import test from "node:test";

const HUBSPOT_FORM = "components/marketing/HubSpotContactForm.tsx";
const CONSULTATION_PAGE = "components/marketing/ContactUsPageContent.tsx";
const SUCCESS_PAGE = "app/(marketing)/contact-us/success/page.tsx";
const LEAD_ROUTE = "app/api/lead/route.ts";
const SEND_EMAIL = "lib/lead/send-lead-email.ts";
const ENV_EXAMPLE = ".env.example";

async function assertFileAbsent(path) {
  await assert.rejects(
    () => access(path, constants.F_OK),
    (err) => {
      assert.equal(err.code, "ENOENT");
      return true;
    },
  );
}

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

test("orphan lead API route is deleted", async () => {
  await assertFileAbsent(LEAD_ROUTE);
});

test("orphan Resend lead-email helper is deleted", async () => {
  await assertFileAbsent(SEND_EMAIL);
});

test("success page confirms submission explicitly", async () => {
  const source = await readFile(SUCCESS_PAGE, "utf8");

  assert.match(source, /export const dynamic = "force-static";/);
  assert.match(source, /success|received|submitted/i);
});

test("env example does not document Resend or lead-notification secrets", async () => {
  const source = await readFile(ENV_EXAMPLE, "utf8");

  assert.doesNotMatch(source, /RESEND_API_KEY/);
  assert.doesNotMatch(source, /LEAD_NOTIFICATION_TO/);
  assert.doesNotMatch(source, /LEAD_NOTIFICATION_FROM/);
});
