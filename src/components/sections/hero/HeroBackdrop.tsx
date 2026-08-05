"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";

type Puff = { id: number; x: number; y: number; size: number };

let puffId = 0;
const PUFF_LIFETIME_MS = 750;
const MIN_DISTANCE = 45;
const MIN_INTERVAL_MS = 90;

// No ambient backdrop, nothing shown at rest — just a soft, cloudy trail
// that blooms as the cursor moves through the hero and quietly dissolves.
// Uses a radial-gradient fill (cheap to paint) instead of filter: blur() +
// box-shadow (expensive to composite). Removal is driven by Framer Motion's
// own onAnimationComplete (tied to rAF) rather than setTimeout — under
// sustained rapid hovering, the flood of pointermove events plus dozens of
// animating elements was starving setTimeout's macrotask queue, so puffs
// never actually got removed until the mouse stopped, piling up and
// dropping frames badly enough to read as the whole page "blinking".
export function HeroBackdrop({ children }: { children: ReactNode }) {
  const [puffs, setPuffs] = useState<Puff[]>([]);
  const lastPoint = useRef<{ x: number; y: number } | null>(null);
  const lastSpawnAt = useRef(0);

  function spawnPuff(x: number, y: number) {
    const id = puffId++;
    const size = 110 + Math.random() * 90;
    setPuffs((prev) => [...prev, { id, x, y, size }]);
  }

  function removePuff(id: number) {
    setPuffs((prev) => prev.filter((p) => p.id !== id));
  }

  function handlePointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    const now = performance.now();
    if (now - lastSpawnAt.current < MIN_INTERVAL_MS) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const point = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    const last = lastPoint.current;
    if (last && Math.hypot(point.x - last.x, point.y - last.y) < MIN_DISTANCE) return;

    lastPoint.current = point;
    lastSpawnAt.current = now;
    spawnPuff(point.x, point.y);
  }

  function handlePointerLeave() {
    lastPoint.current = null;
  }

  return (
    <div
      className="relative select-none"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <AnimatePresence>
          {puffs.map((puff) => (
            <motion.div
              key={puff.id}
              className="absolute left-0 top-0 rounded-full"
              style={{
                width: puff.size,
                height: puff.size,
                marginLeft: -puff.size / 2,
                marginTop: -puff.size / 2,
                x: puff.x,
                y: puff.y,
                background:
                  "radial-gradient(circle, rgba(180,180,180,0.4) 0%, rgba(190,190,190,0.18) 45%, rgba(200,200,200,0) 72%)",
              }}
              initial={{ opacity: 0.85, scale: 0.5 }}
              animate={{ opacity: 0, scale: 1.3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: PUFF_LIFETIME_MS / 1000, ease: "easeOut" }}
              onAnimationComplete={() => removePuff(puff.id)}
            />
          ))}
        </AnimatePresence>
      </div>

      {children}
    </div>
  );
}
