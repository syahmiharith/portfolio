import { github, linkedin, siteUrl, type Project } from "./projects";

export const siteTitle = "Zulsyahmi Zulkefli | Product Engineer";
export const siteDescription =
  "Zulsyahmi Zulkefli designs, builds, and maintains software products. Explore live projects, product decisions, and end-to-end engineering.";
const person = {
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Zulsyahmi Zulkefli",
  jobTitle: "Product Engineer",
  url: siteUrl,
  sameAs: [github, linkedin],
};
export const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Zulsyahmi Zulkefli",
      description: siteDescription,
      publisher: person,
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: siteTitle,
      description: siteDescription,
      mainEntity: person,
    },
  ],
};
export function caseStudyStructuredData(project: Project) {
  const url = `${siteUrl}/work/${project.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#case-study`,
        url,
        name: project.title,
        headline: project.seoTitle ?? project.title,
        description: project.seoDescription ?? project.subtitle,
        image: new URL(project.media, siteUrl).href,
        author: person,
        dateModified: project.updated ?? project.verified,
        citation: project.evidence.map((e) => e.url),
        about: {
          "@type": "SoftwareApplication",
          name: project.title,
          url: project.live,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Selected work",
            item: siteUrl,
          },
          { "@type": "ListItem", position: 2, name: project.title, item: url },
        ],
      },
    ],
  };
}
export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
