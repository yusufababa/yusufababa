import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { ImagePlaceholder, type CaseStudyImage } from "@/components/ui/ImagePlaceholder";

export function ScreensGallery({
  images,
  accent,
}: {
  images: CaseStudyImage[];
  accent: string;
}) {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <ScrollReveal>
          <SectionHeading eyebrow="The screens" heading="A look at what shipped" />
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {images.map((image, i) => (
            <ScrollReveal key={image.caption} delay={i * 0.05}>
              <ImagePlaceholder image={image} accent={accent} frameClassName="aspect-[9/19]" />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
