import { ImagePlaceholder, type CaseStudyImage } from "@/components/ui/ImagePlaceholder";

export function HeroVisual({ image }: { image: CaseStudyImage }) {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <ImagePlaceholder
        image={image}
        showCaption={false}
        frameClassName="aspect-[4/5] rounded-[2rem] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.35)]"
      />
    </div>
  );
}
