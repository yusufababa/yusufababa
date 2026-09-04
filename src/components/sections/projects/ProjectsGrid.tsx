"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { projects } from "@/data/projects";
import { websites } from "@/data/websites";

type WorkTab = "product" | "websites";

const tabs: { id: WorkTab; label: string }[] = [
  { id: "product", label: "Product" },
  { id: "websites", label: "Websites" },
];

const sectionHeadings: Record<WorkTab, string> = {
  product: "Products designed to ship.",
  websites: "Websites that make an impression.",
};

export function ProjectsGrid() {
  const [activeTab, setActiveTab] = useState<WorkTab>("product");

  return (
    <section id="selected-work" className="scroll-mt-28 pb-24 pt-6 md:pb-32 md:pt-10">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-start gap-7 border-b border-border pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-grey">
                Selected work
              </p>
              <AnimatePresence initial={false} mode="wait">
                <motion.h2
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:whitespace-nowrap md:text-4xl lg:text-[2.75rem]"
                >
                  {sectionHeadings[activeTab]}
                </motion.h2>
              </AnimatePresence>
            </div>

            <div
              className="relative flex rounded-full border border-border bg-surface p-1"
              role="tablist"
              aria-label="Filter selected work"
            >
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`${tab.id}-work-panel`}
                    onClick={() => setActiveTab(tab.id)}
                    className="relative z-10 min-w-24 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-work-tab"
                        className="absolute inset-0 -z-10 rounded-full bg-ink"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className={isActive ? "text-white" : "text-grey"}>
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          {activeTab === "product" ? (
            <motion.div
              key="product"
              id="product-work-panel"
              role="tabpanel"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="mt-9 grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 md:gap-y-16"
            >
              {projects.map((project, index) => (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <Link href={`/work/${project.slug}`} className="group block">
                    <div
                      className="relative aspect-[16/11] overflow-hidden rounded-[26px] border border-black/5"
                      style={{ backgroundColor: project.accent }}
                    >
                      {project.coverImage ? (
                        <Image
                          src={project.coverImage}
                          alt={`${project.title} project cover`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                          priority={index < 2}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-end overflow-hidden p-7">
                          <span className="absolute -right-6 -top-10 font-display text-[9rem] font-semibold leading-none text-white/10">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <p className="max-w-xs font-display text-3xl font-semibold text-white">
                            {project.title}
                          </p>
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/10" />
                      <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white backdrop-blur-md">
                        {project.sector}
                      </span>
                    </div>

                    <div className="mt-5 flex items-start justify-between gap-5">
                      <div>
                        <h3 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                          {project.title}
                        </h3>
                        <p className="mt-1.5 font-mono text-xs tracking-wide text-grey">
                          {project.meta}
                        </p>
                      </div>
                      <span className="pt-1 font-mono text-xs text-grey">
                        {project.year}
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="websites"
              id="websites-work-panel"
              role="tabpanel"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="mt-9 grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 md:gap-y-16"
            >
              {websites.map((website, index) => (
                <motion.article
                  key={website.url}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <a
                    href={website.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                  >
                    <div className="relative aspect-[16/11] overflow-hidden rounded-[26px] border border-black/5 bg-ink">
                      <Image
                        src={website.coverImage}
                        alt={`${website.title} website mockup`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
                      <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white backdrop-blur-md">
                        Website
                      </span>
                    </div>

                    <div className="mt-5 flex items-start justify-between gap-5">
                      <div>
                        <h3 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                          {website.title}
                        </h3>
                        <p className="mt-1.5 font-mono text-xs tracking-wide text-grey">
                          {website.meta}
                        </p>
                      </div>
                      <span className="pt-1 font-mono text-xs text-grey">
                        {website.year}
                      </span>
                    </div>
                  </a>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
