import { test } from "node:test";
import assert from "node:assert/strict";
import { projects, siteUrl } from "../lib/projects";
import {
  homeStructuredData,
  caseStudyStructuredData,
  serializeJsonLd,
  deploymentRobots,
} from "../lib/seo";

test("portfolio structured data identifies the author and each canonical case study", () => {
  const profile = homeStructuredData["@graph"].find(
    (entry) => entry["@type"] === "ProfilePage",
  );
  assert.equal(profile?.mainEntity?.name, "Zulsyahmi Zulkefli");
  for (const project of projects) {
    const graph = caseStudyStructuredData(project)["@graph"];
    const work = graph[0];
    assert.equal(work.url, `${siteUrl}/work/${project.slug}`);
    assert.equal(work.author?.url, siteUrl);
    assert.equal(work.about?.url, project.live);
    assert.ok(work.image?.startsWith(`${siteUrl}/images/`));
    assert.equal(graph[1].itemListElement?.at(-1)?.item, work.url);
  }
});

test("structured data cannot break out of its script element", () => {
  const value = { name: '</script><script>alert("test")</script>' };
  const encoded = serializeJsonLd(value);
  assert.equal(encoded.includes("<"), false);
  assert.deepEqual(JSON.parse(encoded), value);
});

test("previews cannot advertise themselves as indexable production pages", () => {
  assert.deepEqual(deploymentRobots("preview"), {
    index: false,
    follow: false,
  });
  assert.deepEqual(deploymentRobots("production"), {
    index: true,
    follow: true,
  });
});
test("the public work index links to real, canonical case-study routes", () => {
  const index = homeStructuredData["@graph"].find(
    (entry) => entry["@type"] === "ItemList",
  );
  assert.deepEqual(
    index?.itemListElement?.map((item) => item.url),
    projects.map((project) => `${siteUrl}/work/${project.slug}`),
  );
});
