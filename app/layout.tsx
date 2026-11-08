import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteUrl } from "@/lib/projects";
import { siteDescription, siteTitle, deploymentRobots } from "@/lib/seo";
const editorial = localFont({
  src: "../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2",
  variable: "--font-editorial",
  display: "swap",
});
const body = localFont({
  src: "../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2",
  variable: "--font-body",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s — Zulsyahmi Zulkefli",
  },
  description: siteDescription,
  alternates: { canonical: "/" },
  authors: [{ name: "Zulsyahmi Zulkefli", url: siteUrl }],
  creator: "Zulsyahmi Zulkefli",
  robots: deploymentRobots(),
  openGraph: {
    type: "website",
    siteName: "Zulsyahmi Zulkefli",
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${editorial.variable} ${body.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
