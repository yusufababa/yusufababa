"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, type UIEvent } from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { projects } from "@/data/projects";

export function ProjectsRail() {
  const [progress, setProgress] = useState(0);

  function handleScroll(e: UIEvent<HTMLDivElement>) {
    const el = e.currentTarget;
    const max = el.scrollWidth - el.clientWidth;
    const ratio = max > 0 ? el.scrollLeft / max : 0;
    setProgress(ratio);
  }

  return (
    <section id="selected-work" className="scroll-mt-28 pb-16 pt-4 md:pb-20 md:pt-6">
      <Container>
        <ScrollReveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            A few things I&apos;ve shipped
          </h2>
        </ScrollReveal>

      </Container>

      <ScrollReveal delay={0.1}>
        <div
          onScroll={handleScroll}
          className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 pl-6 pr-6 scroll-pl-6 scroll-pr-6 md:pl-[max(2.5rem,calc((100vw-72rem)/2+2.5rem))] md:pr-[max(2.5rem,calc((100vw-72rem)/2+2.5rem))] md:scroll-pl-[max(2.5rem,calc((100vw-72rem)/2+2.5rem))] md:scroll-pr-[max(2.5rem,calc((100vw-72rem)/2+2.5rem))]"
        >
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group w-[78vw] shrink-0 snap-start text-left sm:w-[340px]"
            >
              <div
                className="relative h-[200px] overflow-hidden rounded-2xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                style={{ backgroundColor: project.accent }}
              >
                {project.coverImage && (
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 78vw, 340px"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />

                <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-white backdrop-blur-sm">
                  {project.sector}
                </span>

                <span className="absolute bottom-5 right-5 flex items-center gap-1 rounded-full bg-white/0 px-3 py-1 font-mono text-[11px] text-white opacity-0 transition-all duration-300 group-hover:bg-white/15 group-hover:opacity-100">
                  {project.caseStudyReady ? "View case study →" : "Case study soon →"}
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
            </Link>
          ))}
        </div>
      </ScrollReveal>

      <Container>
        <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-border">
          <motion.div
            className="h-full rounded-full bg-ink"
            animate={{ width: `${Math.max(progress * 100, 12)}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          />
        </div>
      </Container>
    </section>
  );
}
