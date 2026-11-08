import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/projects";
export default function robots(): MetadataRoute.Robots {
  // Let crawlers read the preview noindex directive; advertise only the production sitemap.
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(process.env.VERCEL_ENV !== "preview"
      ? { sitemap: `${siteUrl}/sitemap.xml` }
      : {}),
  };
}
