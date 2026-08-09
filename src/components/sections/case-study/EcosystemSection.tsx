import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import type { EcosystemTier } from "@/data/case-studies/simkash";

export function EcosystemSection({
  tiers,
  accent,
}: {
  tiers: EcosystemTier[];
  accent: string;
}) {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Systems thinking"
            heading="A product for nine roles, not one"
            dek="Simkash's business runs on a multi-tier agent network. Every tier — from a street-level partner to the super admin — gets its own dashboard, scoped to exactly what that role needs to see and act on."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-10 max-w-xl border-l border-border pl-6">
            {tiers.map((tier, i) => (
              <div key={tier.label} className="relative pb-8 last:pb-0">
                <span
                  aria-hidden
                  className="absolute -left-[1.8rem] top-1 size-2.5 rounded-full"
                  style={{ backgroundColor: accent }}
                />
                <p className="font-mono text-[11px] uppercase tracking-wide text-grey">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-display text-base font-semibold text-ink">
                  {tier.label}
                </h3>
                <p className="mt-1 text-sm text-grey">{tier.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
