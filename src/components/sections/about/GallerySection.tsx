"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { galleryPhotos } from "@/data/gallery";

const AUTO_ADVANCE_MS = 4000;
const VISIBLE_STACK = 3;

export function GallerySection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pointerStartX = useRef<number | null>(null);

  function advance(dir: 1 | -1) {
    setIndex((prev) => (prev + dir + galleryPhotos.length) % galleryPhotos.length);
  }

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => advance(1), AUTO_ADVANCE_MS);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, index]);

  function manualAdvance(dir: 1 | -1) {
    advance(dir);
    setPaused(true);
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => setPaused(false), AUTO_ADVANCE_MS * 1.6);
  }

  // Deliberately not using framer-motion's onDragEnd/onClick for the
  // interaction logic — onDragEnd only fires once real movement is
  // detected (so a plain tap never reached it), while onClick fires
  // independently of it with no reliable ordering between the two,
  // which meant a real swipe ended up advancing the deck by two cards.
  // Tracking the pointer ourselves gives a single, deterministic path
  // for both a tap and a swipe. `drag="x"` below is kept purely for the
  // elastic visual feedback while dragging — this logic ignores it.
  function handlePointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    pointerStartX.current = e.clientX;
  }

  function handlePointerUp(e: ReactPointerEvent<HTMLDivElement>) {
    if (pointerStartX.current === null) return;
    const dx = e.clientX - pointerStartX.current;
    pointerStartX.current = null;
    if (dx > 60) manualAdvance(-1);
    else manualAdvance(1);
  }

  return (
    <section className="py-16 md:py-20">
      <Container>
        <ScrollReveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Off the clock
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="relative mx-auto mt-10 h-[440px] w-full max-w-sm select-none sm:h-[500px]">
            {galleryPhotos.map((photo, i) => {
              const offset = (i - index + galleryPhotos.length) % galleryPhotos.length;
              if (offset > VISIBLE_STACK) return null;
              const isFront = offset === 0;
              const tilt = i % 2 === 0 ? 1 : -1;

              return (
                <motion.div
                  key={photo.src}
                  className="absolute inset-0 origin-bottom overflow-hidden rounded-[28px] border border-border bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)]"
                  style={{ zIndex: VISIBLE_STACK - offset + 1 }}
                  animate={{
                    scale: 1 - offset * 0.05,
                    y: offset * 14,
                    rotate: isFront ? 0 : tilt * offset * 2.5,
                    opacity: 1,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                  drag={isFront ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.6}
                  onPointerDown={isFront ? handlePointerDown : undefined}
                  onPointerUp={isFront ? handlePointerUp : undefined}
                  whileTap={isFront ? { cursor: "grabbing" } : undefined}
                >
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    sizes="(max-width: 640px) 90vw, 384px"
                    className="pointer-events-none object-cover"
                    priority={i === 0}
                  />
                  {isFront && (
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent p-6 pt-16">
                      <p className="font-display text-lg font-semibold text-white">
                        {photo.caption}
                      </p>
                      <p className="mt-1 font-mono text-xs text-white/70">{photo.sub}</p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
