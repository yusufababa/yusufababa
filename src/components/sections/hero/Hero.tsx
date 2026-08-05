import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { siteConfig } from "@/lib/site-config";
import { HeroBackdrop } from "./HeroBackdrop";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroBackdrop>
        <Container className="relative z-10 pb-16 pt-40 md:pb-24 md:pt-48">
          <ScrollReveal>
            <div className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
              <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-[44px]">
                Designs that ship. Products that work.
              </h1>
              <p className="text-[15px] leading-relaxed text-grey sm:text-base">
                {siteConfig.bio}{" "}
                <Link
                  href="/about"
                  className="text-ink underline decoration-from-font underline-offset-2"
                >
                  Read More
                </Link>
              </p>
              <div className="mt-2 flex items-center gap-4">
                <Link href="/work">
                  <Button variant="primary">Explore Work →</Button>
                </Link>
                <Link
                  href="/contact"
                  className="font-mono text-[15px] text-ink transition-opacity hover:opacity-60"
                >
                  Say Salaam →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </HeroBackdrop>
    </section>
  );
}
