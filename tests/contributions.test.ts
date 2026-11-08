import { test } from "node:test";
import assert from "node:assert/strict";
import { parseContributions, verifiedContributions } from "../lib/contributions";
import { GET } from "../app/api/contributions/route";

function merged(number: number, mergedAt = "2026-11-08T12:00:00Z") {
  return { html_url: `https://github.com/community/project/pull/${number}`, number, title: `Contribution ${number}`, user: { login: "syahmiharith" }, pull_request: { merged_at: mergedAt } };
}

test("the feed excludes open PRs, other authors, own repositories and unsafe destinations", () => {
  const valid = merged(1);
  const entries = parseContributions({ items: [valid, valid,
    { ...merged(2), pull_request: { merged_at: null } },
    { ...merged(3), user: { login: "someone-else" } },
    { ...merged(4), html_url: "https://github.com/syahmiharith/portfolio/pull/4" },
    { ...merged(5), html_url: "https://github.com.evil.example/community/project/pull/5" },
    { ...merged(6), html_url: "javascript:alert(1)" },
  ] });
  assert.deepEqual(entries.map((entry) => entry.number), [1]);
});

test("newly merged older PRs sort by merge date and replay creates no duplicates", () => {
  const data = { items: [merged(100, "2026-10-01T12:00:00Z"), merged(1, "2026-11-09T12:00:00Z"), merged(1, "2026-11-09T12:00:00Z")] };
  assert.deepEqual(parseContributions(data).map((entry) => entry.number), [1, 100]);
  assert.deepEqual(parseContributions(data), parseContributions(data));
  assert.throws(() => parseContributions({ ...data, incomplete_results: true }));
});

test("the feed route syncs public entries and survives GitHub outages without losing verified work", async (context) => {
  const request = context.mock.method(globalThis, "fetch", async () => Response.json({ items: [merged(17)] }));
  const live = await (await GET()).json();
  assert.equal(live.source, "github");
  assert.equal(live.entries[0].number, 17);
  const input = request.mock.calls[0].arguments[0] as URL;
  assert.equal(input.origin, "https://api.github.com");
  assert.match(input.searchParams.get("q")!, /is:merged author:syahmiharith -user:syahmiharith/);
  request.mock.mockImplementation(async () => new Response("rate limited", { status: 403 }));
  const outage = await (await GET()).json();
  assert.equal(outage.source, "snapshot");
  assert.deepEqual(outage.entries, verifiedContributions);
  request.mock.mockImplementation(async () => { throw new Error("network unavailable"); });
  assert.equal((await (await GET()).json()).source, "snapshot");
});
