import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";
import type { CaseStudy } from "@/data/case-studies/types";
import type { Project } from "@/data/projects";

export function CaseStudyClosing({
  closing,
  nextProject,
}: {
  closing: CaseStudy["closing"];
  nextProject: Project;
}) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-4xl">
              {closing.heading}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-grey sm:text-base">
              {closing.body}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/#selected-work">
                <Button variant="secondary">← Back to projects</Button>
              </Link>
              <Link href={`/work/${nextProject.slug}`}>
                <Button variant="primary">Next project: {nextProject.title} →</Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
