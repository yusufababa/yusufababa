import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { siteConfig } from "@/lib/site-config";
import { HeroBackdrop } from "./HeroBackdrop";
import { RotatingWord } from "./RotatingWord";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroBackdrop>
        <Container className="relative z-10 pb-14 pt-32 md:pb-20 md:pt-36">
          <ScrollReveal>
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <p className="mb-4 rounded-full border border-border bg-white/70 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-grey backdrop-blur-sm sm:text-xs">
                Product Designer (UI/UX) · Design Engineer
              </p>

              <h1 className="max-w-5xl font-display text-[2.75rem] font-bold leading-[0.98] tracking-[-0.045em] text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                <span aria-hidden="true">I design </span>
                <RotatingWord />
                <span className="sr-only">
                  I design products, apps, websites, and businesses.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-grey sm:text-base md:text-lg">
                {siteConfig.bio} Give me the problem, the team, and the standard—I&apos;ll
                bring the thinking, craft, and code.{" "}
                <Link
                  href="/about"
                  className="font-medium text-ink underline decoration-from-font underline-offset-4 transition-opacity hover:opacity-60"
                >
                  More about me
                </Link>
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/#selected-work"
                  className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 font-body text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink/90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2"
                >
                  See the work <span className="ml-2">↓</span>
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full px-2 py-3 font-mono text-sm text-ink transition-opacity hover:opacity-60"
                >
                  Let&apos;s talk
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </HeroBackdrop>
    </section>
  );
}
