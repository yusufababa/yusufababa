import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { ImagePlaceholder, type CaseStudyImage } from "@/components/ui/ImagePlaceholder";
import { PrototypeVideo } from "./PrototypeVideo";

export function FlowDiagram({
  title,
  image,
  accent,
  video,
}: {
  title: string;
  image: CaseStudyImage;
  accent: string;
  video?: {
    src: string;
    poster?: string;
  };
}) {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <ScrollReveal>
          <SectionHeading eyebrow="Sample user flow" heading={title} />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className={`mx-auto mt-10 ${video ? "max-w-5xl" : "max-w-3xl"}`}>
            {video ? (
              <PrototypeVideo src={video.src} poster={video.poster} title={title} />
            ) : (
              <ImagePlaceholder
                image={image}
                accent={accent}
                frameClassName="aspect-[16/10]"
                showCaption={false}
              />
            )}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
