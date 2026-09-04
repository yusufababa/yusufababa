import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import type { CaseStudyPersona } from "@/data/case-studies/types";

export function PersonasSection({
  personas,
  accent,
}: {
  personas: CaseStudyPersona[];
  accent: string;
}) {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Who I designed for"
            heading="Two users, two very different jobs to be done"
          />
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {personas.map((persona, i) => (
            <ScrollReveal key={persona.name} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-border p-7">
                <div className="flex items-center gap-4">
                  <div
                    className="flex size-12 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold text-white"
                    style={{ backgroundColor: accent }}
                  >
                    {persona.initials}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {persona.name}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-wide text-grey">
                      {persona.age} · {persona.role}
                    </p>
                    <p className="font-mono text-xs uppercase tracking-wide text-grey">
                      {persona.location}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-grey">
                      Goal
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink">
                      {persona.goal}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-grey">
                      Frustration
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink">
                      {persona.frustration}
                    </p>
                  </div>
                </div>

                <blockquote className="mt-6 border-l-2 border-border pl-4 font-display text-base italic text-ink">
                  &ldquo;{persona.quote}&rdquo;
                </blockquote>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
