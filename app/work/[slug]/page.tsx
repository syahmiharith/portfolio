import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { caseStudyStructuredData, serializeJsonLd } from "@/lib/seo";
import { Sidebar } from "@/components/navigation";
import { Header, Actions, Preview } from "@/components/shared";
import SplitFlow from "@/content/splitflow.mdx";
import Receipt from "@/content/receipt-to-form.mdx";
import Inventory from "@/content/inventory-request-system.mdx";
const stories = {
  splitflow: SplitFlow,
  "receipt-to-form": Receipt,
  "inventory-request-system": Inventory,
};
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return p
    ? {
        title: p.seoTitle ?? `${p.title}: ${p.summary}`,
        description: p.seoDescription ?? p.subtitle,
        alternates: { canonical: `/work/${slug}` },
        openGraph: {
          type: "article",
          siteName: "Zulsyahmi Zulkefli",
          locale: "en_US",
          title: p.seoTitle ?? `${p.title}: ${p.summary}`,
          description: p.seoDescription ?? p.subtitle,
          images: [{ url: p.media, width: 1280, height: 720, alt: p.alt }],
          url: `/work/${slug}`,
        },
        twitter: {
          card: "summary_large_image",
          title: p.seoTitle ?? p.title,
          description: p.seoDescription ?? p.subtitle,
          images: [p.media],
        },
      }
    : { title: "Not found", robots: { index: false, follow: false } };
}
export default async function Story({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  const Content = stories[slug as keyof typeof stories];
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(caseStudyStructuredData(p)),
        }}
      />
      <Sidebar current={slug} />
      <main id="main" tabIndex={-1} className="main story">
        <Header />
        <div className="story-header">
          <Link className="back" href={`/#${slug}`}>
            <ArrowLeft size={16} /> Selected work
          </Link>
          <h1>{p.title}</h1>
          <p>{p.subtitle}</p>
          <div className="story-meta">
            <span>{p.status}</span>
            {p.role && <span>{p.role}</span>}
          </div>
          <Actions project={p} story={false} />
        </div>
        <Preview project={p} priority caption />
        <article className="prose">
          <Content />
          {p.evidence.some((e) => e.url !== `${p.code}#readme`) && (
            <>
              <h2>Explore the implementation</h2>
              <ul>
                {p.evidence
                  .filter((e) => e.url !== `${p.code}#readme`)
                  .map((e) => (
                    <li key={e.url}>
                      <a href={e.url}>{e.label}</a>
                    </li>
                  ))}
              </ul>
            </>
          )}
        </article>
        <Link className="next-work" href={`/work/${next.slug}`}>
          <span>{next.number}</span>
          {next.title}
          <ArrowRight size={26} />
        </Link>
      </main>
    </>
  );
}
