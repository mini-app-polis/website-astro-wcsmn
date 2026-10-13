// What wcsmn.com expects of api-kaianolevine-com (TEST-016).
//
// The site makes one call: src/pages/contact.astro posts its form straight
// to POST /v1/contact as application/x-www-form-urlencoded (a plain HTML
// form, no script). Without a Turnstile token the API must refuse before
// verifying or sending anything. The origin check runs first, so a 403 is
// also a refusal; a 400 must name only the missing token, which proves the
// API still reads the field names the form sends — type, originSite, email
// — and the honeypot field, left empty, is not mistaken for spam.
//
// When the form gains or renames a field, change FORM to match. See
// harness.mjs for the guard and why this suite is read-only.

import { test } from "node:test";
import assert from "node:assert/strict";
import { call, expectError } from "./harness.mjs";

// The fields contact.astro submits, less cf-turnstile-response.
const FORM = {
  originSite: "wcsmn.com",
  type: "contact",
  redirect: "true",
  firstName: "Contract",
  lastName: "Suite",
  email: "contract-suite@example.com",
  website: "",
  message: "Contract suite probe — refused before sending.",
};

test("POST /v1/contact without a Turnstile token is refused, and accepts the form's field names", async () => {
  const path = "/v1/contact";
  const res = await call(path, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      origin: "https://wcsmn.com",
    },
    body: new URLSearchParams(FORM).toString(),
    redirect: "manual",
  });
  assert.ok(res.status === 400 || res.status === 403, `${path} answered ${res.status}, not a refusal`);
  const error = expectError(res, path, res.status);
  if (res.status === 400) {
    assert.equal(error.code, "validation_error");
    assert.deepEqual(error.details?.missing, ["turnstileToken"], `${path} did not accept the form's field names`);
  }
});
