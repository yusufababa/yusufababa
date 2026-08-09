import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import type { ProcessStep } from "@/data/case-studies/simkash";

export function ProcessSection({ process }: { process: ProcessStep[] }) {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <ScrollReveal>
          <SectionHeading eyebrow="Design process" heading="Research to a live product, solo" />
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => (
            <ScrollReveal key={item.step} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border p-6">
                <p className="font-mono text-xs text-grey">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">{item.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-grey">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
