import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Sidebar } from "@/components/navigation";
import { Header, Actions, Preview } from "@/components/shared";
import { projects, linkedin, github } from "@/lib/projects";
export default function Home() {
  return (
    <>
      <Sidebar />
      <main id="main" tabIndex={-1} className="main">
        <Header />
        <section className="hero" id="work">
          <h1>
            Software for the
            <br />
            everyday.
          </h1>
          <p>Shared expenses. Reviewed receipts. Reliable operations.</p>
        </section>
        <div className="projects">
          {projects.map((p, i) => (
            <section
              className="project"
              id={p.slug}
              key={p.slug}
              aria-labelledby={`${p.slug}-title`}
            >
              {i > 0 && (
                <div className="chapter-rule">
                  <span>{p.number}</span>
                  <span>{p.title}</span>
                  <ArrowRight size={23} aria-hidden />
                </div>
              )}
              <div className="project-grid">
                <div className="project-copy">
                  <span className="square" aria-hidden />
                  <h2 id={`${p.slug}-title`}>{p.title}</h2>
                  <p>{p.summary}</p>
                  <Actions project={p} />
                </div>
                <Preview project={p} priority={i === 0} />
              </div>
            </section>
          ))}
        </div>
        <section className="lower" aria-labelledby="contributions">
          <h2 id="contributions">In good company.</h2>
          <a
            className="contribution"
            href="https://github.com/career-ops-hq/career-ops/pull/41"
          >
            <span>
              <strong>Codex workflow support</strong>
              <small>career-ops · Pull request #41</small>
            </span>
            <span>
              Merged <ArrowUpRight size={18} />
            </span>
          </a>
          <a
            className="contribution"
            href="https://github.com/career-ops-hq/career-ops/pull/444"
          >
            <span>
              <strong>Structured machine summaries</strong>
              <small>career-ops · Pull request #444</small>
            </span>
            <span>
              Merged <ArrowUpRight size={18} />
            </span>
          </a>
        </section>
        <section className="lower about" id="about">
          <h2>A little context.</h2>
          <p>
            I’m Zulsyahmi, a Computer Science student at Sungkyunkwan
            University. I work across interfaces, application logic, and the
            details that keep a product useful.
          </p>
          <div className="about-meta">
            <span>Computer Science · Sungkyunkwan University</span>
            <span>Expected graduation · February 2027</span>
            <span>Available for full-time roles · March 2027</span>
          </div>
        </section>
        <section className="lower contact" id="contact">
          <h2>Have something in mind?</h2>
          <div className="contact-links">
            <a href={linkedin}>
              Let’s talk on LinkedIn <ArrowUpRight size={23} />
            </a>
            <a href={github}>
              GitHub <ArrowUpRight size={23} />
            </a>
          </div>
        </section>
        <footer>
          <span>© {new Date().getFullYear()} Zulsyahmi Zulkefli</span>
          <a href="#work">Back to top ↑</a>
        </footer>
      </main>
    </>
  );
}
