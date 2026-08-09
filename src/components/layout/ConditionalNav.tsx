"use client";

import { usePathname } from "next/navigation";
import { Nav } from "./Nav";

// The Simkash case study has its own back/scroll-to-top controls
// instead of the standard floating nav.
export function ConditionalNav() {
  const pathname = usePathname();
  if (pathname === "/work/simkash") return null;
  return <Nav />;
}
