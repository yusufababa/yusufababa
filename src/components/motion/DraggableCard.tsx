"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

// Placeholder draggable element — a loose card that can be flicked around
// within its parent bounds. Swap the drag constraints / content per use case.
export function DraggableCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      drag
      dragElastic={0.15}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileDrag={{ scale: 1.03, cursor: "grabbing" }}
      className={cn(
        "cursor-grab select-none rounded-2xl border border-border bg-surface p-6",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
