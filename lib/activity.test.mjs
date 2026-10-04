// Run: node --test lib/activity.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { summarize } from "./activity.ts";

test("summarize daily counts", () => {
  assert.deepEqual(summarize([1, 1, 2, 1, 0, 3]), { activedays: 5, maxstreak: 4 });
  assert.deepEqual(summarize([]), { activedays: 0, maxstreak: 0 });
});
