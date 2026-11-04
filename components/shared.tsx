import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
export function Header() {
  return (
    <header className="topbar">
      <nav aria-label="Main navigation">
        <Link href="/#work">Work</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
    </header>
  );
}
export function Actions({
  project,
  story = true,
}: {
  project: Project;
  story?: boolean;
}) {
  return (
    <div className="actions">
      <a href={project.live}>
        Try product <ArrowUpRight aria-hidden size={18} />
      </a>
      {story && (
        <Link href={`/work/${project.slug}`}>
          Read story <ArrowUpRight aria-hidden size={18} />
        </Link>
      )}
      <a href={project.code}>
        View code <ArrowUpRight aria-hidden size={18} />
      </a>
    </div>
  );
}
export function Preview({
  project,
  priority = false,
  caption = false,
}: {
  project: Project;
  priority?: boolean;
  caption?: boolean;
}) {
  return (
    <figure className="preview">
      <Image
        src={project.media}
        alt={project.alt}
        width={1280}
        height={720}
        fetchPriority={priority ? "high" : undefined}
        loading={priority ? "eager" : "lazy"}
        sizes="(max-width: 899px) 100vw, 45vw"
      />
      {caption && <figcaption>Captured {project.verified}</figcaption>}
    </figure>
  );
}
