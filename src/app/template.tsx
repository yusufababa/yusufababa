import { PageTransition } from "@/components/motion/PageTransition";
import { type ReactNode } from "react";

// template.tsx remounts on every navigation, which is what gives
// PageTransition a fresh enter animation per route.
export default function Template({ children }: { children: ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
