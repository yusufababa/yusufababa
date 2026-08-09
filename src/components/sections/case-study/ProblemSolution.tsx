import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import type { SimkashCaseStudy } from "@/data/case-studies/simkash";

export function ProblemSolution({
  problem,
  solution,
}: {
  problem: SimkashCaseStudy["problem"];
  solution: SimkashCaseStudy["solution"];
}) {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <ScrollReveal>
          <SectionHeading eyebrow={problem.eyebrow} heading={problem.heading} />
          <div className="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-grey sm:text-base">
            {problem.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="mt-16">
            <SectionHeading eyebrow={solution.eyebrow} heading={solution.heading} />
            <div className="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-grey sm:text-base">
              {solution.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {solution.pillars.map((pillar) => (
                <span
                  key={pillar}
                  className="rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs uppercase tracking-wide text-ink"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
