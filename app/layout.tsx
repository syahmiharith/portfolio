import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteUrl } from "@/lib/projects";
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
    default: "Zulsyahmi Zulkefli — Software for the everyday.",
    template: "%s — Zulsyahmi Zulkefli",
  },
  description:
    "Selected software projects, the decisions behind them, and the work of keeping them useful.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Zulsyahmi Zulkefli",
    title: "Software for the everyday.",
    description: "Selected work by Zulsyahmi Zulkefli.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
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
