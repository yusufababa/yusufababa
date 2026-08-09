import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import type { CaseStudyMetric } from "@/data/case-studies/simkash";

export function MetricsGrid({ metrics }: { metrics: CaseStudyMetric[] }) {
  return (
    <section className="py-8 md:py-10">
      <Container>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {metrics.map((metric, i) => (
            <ScrollReveal key={metric.label} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6">
                <p className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-wide text-grey">
                  {metric.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
