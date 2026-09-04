"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["products.", "apps.", "websites.", "businesses."];

export function RotatingWord() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <span
      aria-hidden="true"
      className="relative inline-grid overflow-hidden align-bottom text-grey"
    >
      <span className="invisible col-start-1 row-start-1">businesses.</span>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={words[index]}
          className="col-start-1 row-start-1 whitespace-nowrap"
          initial={prefersReducedMotion ? false : { y: "85%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={prefersReducedMotion ? undefined : { y: "-85%", opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
