import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import type { RydeProFeature } from "@/data/case-studies/rydepro";

export function RydeProFeatureStories({ features }: { features: RydeProFeature[] }) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Selected design stories"
            heading="The decisions behind the screens"
            dek="Six parts of the product that show how rider simplicity, driver clarity, and operational control were designed together."
          />
        </ScrollReveal>

        <div className="mt-12">
          {features.map((feature, index) => {
            const reverse = index % 2 === 1;

            return (
              <article
                key={feature.number}
                className="grid gap-9 border-t border-border py-14 first:pt-12 lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-20"
              >
                <ScrollReveal className={reverse ? "lg:order-2" : undefined}>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs text-grey">
                        {feature.number}
                      </span>
                      <span className="size-1 rounded-full bg-border" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-grey">
                        {feature.eyebrow}
                      </span>
                      <span className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-ink">
                        {feature.status}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
                      {feature.heading}
                    </h3>
                    <p className="mt-5 text-[15px] leading-relaxed text-grey">
                      {feature.summary}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {feature.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex gap-3 text-sm leading-relaxed text-ink/80"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-green" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.08} className={reverse ? "lg:order-1" : undefined}>
                  <div
                    className={`transition-transform duration-500 hover:-translate-y-1 ${
                      reverse ? "lg:order-1" : ""
                    }`}
                  >
                    <ImagePlaceholder
                      image={feature.image}
                      accent="#151515"
                      frameClassName="aspect-[16/10] rounded-[28px] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.28)]"
                    />
                  </div>
                </ScrollReveal>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
