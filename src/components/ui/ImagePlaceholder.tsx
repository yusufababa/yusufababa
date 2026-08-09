import Image from "next/image";
import { cn } from "@/lib/utils";

export type CaseStudyImage = {
  src: string | null;
  caption: string;
  alt: string;
};

export function ImagePlaceholder({
  image,
  accent = "#121212",
  className,
  frameClassName,
  showCaption = true,
}: {
  image: CaseStudyImage;
  accent?: string;
  className?: string;
  frameClassName?: string;
  showCaption?: boolean;
}) {
  return (
    <div className={cn("flex h-full flex-col", className)}>
      <div
        className={cn(
          "relative flex-1 overflow-hidden rounded-2xl border border-border bg-surface",
          !image.src && "border-dashed",
          frameClassName,
        )}
        style={!image.src ? { backgroundColor: `${accent}14` } : undefined}
      >
        {image.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 90vw, 480px"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
            <span
              aria-hidden
              className="flex size-9 items-center justify-center rounded-full border"
              style={{ borderColor: accent, color: accent }}
            >
              ⬚
            </span>
            <p className="font-mono text-[10px] uppercase tracking-wide text-grey">
              Image placeholder
            </p>
          </div>
        )}
      </div>
      {showCaption && (
        <p className="mt-3 font-mono text-xs uppercase tracking-wide text-grey">
          {image.caption}
        </p>
      )}
    </div>
  );
}
