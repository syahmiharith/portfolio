import { github, linkedin, siteUrl, projects, type Project } from "./projects";

export const siteTitle = "Zulsyahmi Zulkefli | Full-Stack Product Engineer";
export const siteDescription =
  "Full-stack product engineer building with Next.js, TypeScript and PostgreSQL. Explore live products, case studies and verified engineering decisions.";
const person = {
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Zulsyahmi Zulkefli",
  jobTitle: "Full-Stack Product Engineer",
  description:
    "Designs, builds and maintains web products from workflow to release.",
  knowsAbout: [
    "Product design",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Software testing",
  ],
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
    {
      "@type": "ItemList",
      name: "Selected product engineering work",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        url: `${siteUrl}/work/${project.slug}`,
      })),
    },
  ],
};
export function deploymentRobots(environment = process.env.VERCEL_ENV) {
  return environment === "preview"
    ? { index: false, follow: false }
    : { index: true, follow: true };
}
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
        inLanguage: "en",
        mainEntityOfPage: url,
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
