import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <Container className="py-24">
      <h1 className="font-display text-3xl font-semibold md:text-5xl">Work</h1>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 0.05}>
            <Link
              href={`/work/${project.slug}`}
              className="block rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-ink"
            >
              <p className="font-mono text-xs uppercase tracking-wide text-grey">
                {project.meta} · {project.year}
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold">{project.title}</h2>
              <p className="mt-2 text-sm text-grey">Case study coming soon.</p>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </Container>
  );
}
