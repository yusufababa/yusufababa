"use client";

import { usePathname } from "next/navigation";
import { Nav } from "./Nav";

// Full case studies have their own back/scroll-to-top controls instead
// of the standard floating nav.
export function ConditionalNav() {
  const pathname = usePathname();
  if (pathname === "/work/simkash" || pathname === "/work/rydepro") return null;
  return <Nav />;
}
