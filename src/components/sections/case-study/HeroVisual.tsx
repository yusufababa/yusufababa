import { ImagePlaceholder, type CaseStudyImage } from "@/components/ui/ImagePlaceholder";

export function HeroVisual({ image }: { image: CaseStudyImage }) {
  const isWide = image.layout === "wide";

  return (
    <div className={isWide ? "mx-auto w-full max-w-5xl" : "mx-auto w-full max-w-2xl"}>
      <ImagePlaceholder
        image={image}
        showCaption={false}
        frameClassName={
          isWide
            ? "aspect-[16/9] rounded-[2rem] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.3)]"
            : "aspect-[4/5] rounded-[2rem] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.35)]"
        }
      />
    </div>
  );
}
