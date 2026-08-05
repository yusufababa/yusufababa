"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState, type UIEvent } from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsRail() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  function handleScroll(e: UIEvent<HTMLDivElement>) {
    const el = e.currentTarget;
    const max = el.scrollWidth - el.clientWidth;
    const ratio = max > 0 ? el.scrollLeft / max : 0;
    setProgress(ratio);
    setActive(Math.round(ratio * (projects.length - 1)));
  }

  function scrollToIndex(index: number) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }

  return (
    <section className="pb-24 pt-8 md:pb-32 md:pt-12">
      <Container>
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-wide text-grey">
                Selected work
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                A few things I&apos;ve shipped
              </h2>
            </div>
            <p className="font-mono text-sm text-grey">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
          >
            {projects.map((project, i) => (
              <button
                key={project.slug}
                type="button"
                onClick={() => scrollToIndex(i)}
                className="group w-[78vw] shrink-0 snap-start text-left sm:w-[340px]"
              >
                <div
                  className="relative h-[200px] overflow-hidden rounded-2xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  style={{ backgroundColor: project.accent }}
                >
                  <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-white">
                    {project.sector}
                  </span>
                  <span className="absolute bottom-5 left-5 h-2 w-24 rounded-full bg-white/35" />
                  <span className="absolute bottom-5 left-[7.5rem] h-2 w-12 rounded-full bg-white/20" />

                  <span className="absolute bottom-5 right-5 flex items-center gap-1 rounded-full bg-white/0 px-3 py-1 font-mono text-[11px] text-white opacity-0 transition-all duration-300 group-hover:bg-white/15 group-hover:opacity-100">
                    Case study soon →
                  </span>
                </div>

                <div className="mt-4 flex items-baseline justify-between">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-grey">{project.year}</span>
                </div>
                <p className="mt-1 font-mono text-xs tracking-wide text-grey">
                  {project.meta}
                </p>
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-border">
          <motion.div
            className="h-full rounded-full bg-ink"
            animate={{ width: `${Math.max(progress * 100, 12)}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          />
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/work"
            className={cn(
              "font-mono text-sm text-ink underline decoration-from-font underline-offset-4 transition-opacity hover:opacity-60",
            )}
          >
            View all work →
          </Link>
        </div>
      </Container>
    </section>
  );
}
