import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { HeroVisual } from "./HeroVisual";
import type { Project } from "@/data/projects";
import type { CaseStudy } from "@/data/case-studies/types";

export function CaseStudyHero({
  project,
  hero,
}: {
  project: Project;
  hero: CaseStudy["hero"];
}) {
  return (
    <section className="pb-16 pt-24 md:pb-20 md:pt-28">
      <Container>
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-wide text-grey">
            {project.sector} · {project.year}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-grey sm:text-base">
            {hero.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-wide text-grey">
            <span>Role · {hero.role}</span>
            <span className="size-1 rounded-full bg-border" />
            <span>Duration · {hero.duration}</span>
            <span className="size-1 rounded-full bg-border" />
            <span>{hero.platforms.join(" · ")}</span>
            {hero.liveLinks.map((link) => (
              <span key={link.url} className="flex items-center gap-6">
                <span className="size-1 rounded-full bg-border" />
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink underline decoration-from-font underline-offset-4 transition-opacity hover:opacity-60"
                >
                  {link.label} ↗
                </Link>
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-14">
            <HeroVisual image={hero.image} />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
