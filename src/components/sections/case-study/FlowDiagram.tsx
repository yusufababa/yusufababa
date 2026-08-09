import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { ImagePlaceholder, type CaseStudyImage } from "@/components/ui/ImagePlaceholder";

export function FlowDiagram({
  title,
  image,
  accent,
}: {
  title: string;
  image: CaseStudyImage;
  accent: string;
}) {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <ScrollReveal>
          <SectionHeading eyebrow="Sample user flow" heading={title} />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-3xl">
            <ImagePlaceholder
              image={image}
              accent={accent}
              frameClassName="aspect-[16/10]"
              showCaption={false}
            />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
