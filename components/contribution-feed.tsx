"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowUpRight, GitPullRequest } from "lucide-react";
import { allContributionsUrl, verifiedContributions, type ContributionFeed as Feed } from "@/lib/contributions";

export function ContributionFeed() {
  const section = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [entered, setEntered] = useState(false);
  const [feed, setFeed] = useState<Feed>({ entries: verifiedContributions, source: "snapshot" });
  const [unavailable, setUnavailable] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
      if (entry.isIntersecting) setEntered(true);
    });
    if (section.current) observer.observe(section.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const controller = new AbortController();
    let pending = false;
    async function refresh() {
      if (document.hidden || pending) return;
      pending = true;
      try {
        const response = await fetch("/api/contributions", { signal: controller.signal });
        if (!response.ok) throw new Error("Feed unavailable");
        const next: Feed = await response.json();
        if (controller.signal.aborted) return;
        if (next.source === "github") {
          setFeed(next);
          setUnavailable(false);
        } else setUnavailable(true);
      } catch {
        if (!controller.signal.aborted) setUnavailable(true);
      } finally { pending = false; }
    }
    void refresh();
    const timer = setInterval(refresh, 60_000);
    document.addEventListener("visibilitychange", refresh);
    return () => {
      controller.abort();
      clearInterval(timer);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, [inView]);

  return (
    <section ref={section} className="oss-feed" aria-labelledby="contributions" data-entered={entered}>
      <div className="oss-heading">
        <h3 id="contributions">Open-source contributions</h3>
        <p>Merged into other projects.</p>
        <span className="oss-sync" role="status">
          {unavailable ? "GitHub unavailable. Showing saved entries." : feed.source === "github" ? "Auto-updated from GitHub" : "Verified entries · 9 Nov 2026"}
        </span>
      </div>
      <div>
        <ul className="oss-list">
          {feed.entries.slice(0, 6).map((entry, index) => (
            <li key={entry.url} className="oss-item" style={{ "--arrival-delay": `${index * 85}ms` } as CSSProperties}>
              <GitPullRequest size={16} aria-hidden="true" />
              <a href={entry.url} target="_blank" rel="noopener noreferrer">
                <span className="oss-title">{entry.title}</span>
                <span className="oss-meta">{entry.repository} · #{entry.number} · Merged <time dateTime={entry.mergedAt}>{new Date(entry.mergedAt).toLocaleDateString("en-GB", { month: "short", year: "numeric", timeZone: "UTC" })}</time></span>
                <ArrowUpRight size={15} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
        {feed.entries.length === 0 && <p className="oss-empty">Public merged contributions will appear here.</p>}
        <a className="oss-all" href={allContributionsUrl} target="_blank" rel="noopener noreferrer">All merged contributions <ArrowUpRight size={13} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
      </div>
    </section>
  );
}
