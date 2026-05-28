import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

const VALID_FIXTURE = "tests/fixtures/valid-content.json";
const INVALID_FIXTURE = "tests/fixtures/invalid-content.json";

test("validator accepts valid content fixture", () => {
  const result = spawnSync("node", ["scripts/validate-content.mjs", "--fixture", VALID_FIXTURE], {
    encoding: "utf8"
  });

  assert.equal(result.status, 0);
  assert.match(result.stdout, /Validation passed/);
});

test("validator rejects invalid content fixture", () => {
  const result = spawnSync("node", ["scripts/validate-content.mjs", "--fixture", INVALID_FIXTURE], {
    encoding: "utf8"
  });

  assert.equal(result.status, 1);
  assert.match(result.stdout + result.stderr, /Validation failed/);
});
