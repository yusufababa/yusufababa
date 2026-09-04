export function SectionHeading({
  eyebrow,
  heading,
  dek,
}: {
  eyebrow: string;
  heading: string;
  dek?: string;
}) {
  return (
    <div>
      <p className="mb-3 font-mono text-xs uppercase tracking-wide text-grey">
        {eyebrow}
      </p>
      <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        {heading}
      </h2>
      {dek && (
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-grey sm:text-base">
          {dek}
        </p>
      )}
    </div>
  );
}
