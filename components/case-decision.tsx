import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { caseScreens, type CaseScreen } from "@/lib/case-screens";

export function Decision({ number, title, summary, screen, children }: {
  number: string;
  title: string;
  summary: string;
  screen: CaseScreen;
  children: ReactNode;
}) {
  const capture = caseScreens[screen];
  const portrait = capture.height > capture.width;
  const source = `/images/case-studies/${screen}.webp`;
  return (
    <section className={`case-decision${portrait ? " case-decision--portrait" : ""}`} aria-labelledby={`decision-${number}`}>
      <header className="decision-heading">
        <span className="decision-number">Decision {number}</span>
        <h3 id={`decision-${number}`}>{title}</h3>
      </header>
      <p className="decision-summary">{summary}</p>
      <figure className="decision-figure">
        <a href={source} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size screen: ${title} (opens in a new tab)`}>
          <Image src={source} width={capture.width} height={capture.height} alt={capture.alt} sizes={portrait ? "(max-width: 599px) 100vw, 425px" : "(max-width: 899px) 100vw, 70vw"} />
        </a>
        <figcaption>
          <span>{capture.caption}</span>
          <a href={source} target="_blank" rel="noopener noreferrer" aria-label={`View full-size ${title} screen (opens in a new tab)`}>Full size <ArrowUpRight size={13} aria-hidden="true" /></a>
        </figcaption>
      </figure>
      <div className="decision-rationale">{children}</div>
    </section>
  );
}
