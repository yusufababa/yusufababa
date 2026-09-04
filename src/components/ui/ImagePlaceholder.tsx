import Image from "next/image";
import { cn } from "@/lib/utils";

export type CaseStudyImage = {
  src: string | null;
  caption: string;
  alt: string;
  placeholderLabel?: string;
  layout?: "portrait" | "wide";
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
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <span
              aria-hidden
              className="flex size-10 items-center justify-center rounded-full border bg-white/70 text-lg backdrop-blur-sm"
              style={{ borderColor: accent, color: accent }}
            >
              +
            </span>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-grey">
              Mockup needed
            </p>
            {image.placeholderLabel && (
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink/75">
                {image.placeholderLabel}
              </p>
            )}
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
