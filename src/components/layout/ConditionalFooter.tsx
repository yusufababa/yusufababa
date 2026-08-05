"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

// The About page has its own closing section (the playlist) instead of
// the standard footer.
export function ConditionalFooter() {
  const pathname = usePathname();
  if (pathname === "/about") return null;
  return <Footer />;
}
