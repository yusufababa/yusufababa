import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <ScrollReveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Experience
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6">
          {experience.map((entry, i) => (
            <ScrollReveal key={entry.company} delay={i * 0.06}>
              <div className="flex h-full gap-5 rounded-2xl border border-border p-6">
                <div className="flex shrink-0 flex-col items-center">
                  <div className="relative size-11 overflow-hidden rounded-full border border-border sm:size-14">
                    <Image
                      src={entry.logo}
                      alt={entry.company}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                    {entry.role} <span className="text-grey">· {entry.company}</span>
                  </h3>

                  <p className="mt-1 font-body text-xs uppercase tracking-wide text-grey">
                    {entry.type} · {entry.start} – {entry.end}
                  </p>
                  <p className="mt-1 font-body text-xs uppercase tracking-wide text-grey">
                    {entry.location} · {entry.remote}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
