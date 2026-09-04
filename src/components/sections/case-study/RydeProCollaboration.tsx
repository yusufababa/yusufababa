import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function RydeProCollaboration() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <ScrollReveal>
          <div className="overflow-hidden rounded-[30px] bg-ink px-7 py-10 text-white sm:px-10 md:px-14 md:py-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
              Launch and the next chapter
            </p>
            <div className="mt-5 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div>
                <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                  Shipping MVP was a milestone, not the end of the system.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
                  The first eight months focused on getting the rider, web-booking, and
                  operations experience into the market. The remaining phase pushed the
                  product beyond reservation into the live relationship between rider,
                  driver, and dispatch.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                    Months 01—08
                  </p>
                  <p className="mt-3 font-display text-xl font-semibold">
                    MVP 1.0 launched
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    Rider app, responsive booking, admin, and dispatch foundations.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                    Months 09—12
                  </p>
                  <p className="mt-3 font-display text-xl font-semibold">
                    Co-designed the next phase
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    Driver-app and rider post-booking states prepared before my departure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
