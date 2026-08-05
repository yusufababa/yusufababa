import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

const MARQUEE_ITEM = "AVAILABLE FOR WORK";

export function Footer() {
  return (
    <footer className="mx-4 mb-4 overflow-hidden rounded-[32px] bg-ink text-white md:mx-6 md:mb-6">
      <div className="overflow-hidden border-b border-white/10 py-3">
        <div className="flex w-max animate-marquee items-center gap-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-8 font-mono text-xs uppercase tracking-[0.2em] text-white/50"
            >
              {MARQUEE_ITEM}
              <span className="size-1.5 rounded-full bg-accent-green" />
            </span>
          ))}
        </div>
      </div>

      <Container className="py-20 md:py-28">
        <p className="font-mono text-xs uppercase tracking-wide text-white/50">
          Let&apos;s work together
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
          Got a product to design or a role to fill?
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href={siteConfig.resumeUrl} download>
            <Button
              variant="primary"
              className="gap-2 bg-white text-ink hover:bg-white/90"
            >
              Download Résumé
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M8 2v8m0 0 3-3m-3 3-3-3M2.5 12.5v1a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-1"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-mono text-sm text-white/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
          >
            {siteConfig.email}
          </a>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.shortName}. {siteConfig.location}.
          </p>
          <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-wide">
            <a
              href={siteConfig.social.linkedin}
              className="transition-colors hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.social.dribbble}
              className="transition-colors hover:text-white"
            >
              Dribbble
            </a>
            <a
              href={siteConfig.social.github}
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>
            <a
              href={siteConfig.whatsapp}
              className="flex items-center transition-opacity hover:opacity-70"
            >
              <Image src="/hero/whatsapp.svg" alt="WhatsApp" width={14} height={14} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
