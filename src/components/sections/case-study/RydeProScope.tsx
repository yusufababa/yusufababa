import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import type { RydeProSurface } from "@/data/case-studies/rydepro";

export function RydeProScope({ surfaces }: { surfaces: RydeProSurface[] }) {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="The product ecosystem"
            heading="Four perspectives, one shared journey"
            dek="The rider-facing experience was only one part of the product. Every surface needed the same understanding of a booking, even though each person saw and acted on it differently."
          />
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {surfaces.map((surface, index) => (
            <ScrollReveal key={surface.number} delay={index * 0.06}>
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-border bg-surface p-7 transition-colors duration-300 hover:bg-white">
                <span className="absolute right-5 top-3 font-display text-7xl font-semibold leading-none text-ink/[0.04] transition-colors group-hover:text-ink/[0.07]">
                  {surface.number}
                </span>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-grey">
                  {surface.responsibility}
                </p>
                <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight text-ink">
                  {surface.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-grey">
                  {surface.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
