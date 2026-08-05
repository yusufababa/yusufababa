import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { aboutBio } from "@/data/about";
import { ExperienceSection } from "@/components/sections/about/ExperienceSection";
import { GallerySection } from "@/components/sections/about/GallerySection";
import { PlaylistSection } from "@/components/sections/about/PlaylistSection";

export default function AboutPage() {
  return (
    <>
      <Container className="pb-12 pt-40 md:pb-16 md:pt-48">
        <ScrollReveal>
          <h1 className="max-w-4xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            {aboutBio.headline}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="mt-10 max-w-3xl space-y-5 text-[15px] leading-relaxed text-grey sm:text-base">
            {aboutBio.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className="mt-14">
            <p className="font-mono text-xs uppercase tracking-wide text-grey">.skills</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-3">
              {aboutBio.skills.map((skill, i) => (
                <span
                  key={skill}
                  className="flex items-center font-mono text-sm text-ink"
                >
                  {skill}
                  {i < aboutBio.skills.length - 1 && (
                    <span className="ml-3 size-1 rounded-full bg-border" />
                  )}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>

      <ExperienceSection />
      <GallerySection />
      <PlaylistSection />
    </>
  );
}
