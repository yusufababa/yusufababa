"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 15 15" width="15" height="15" fill="white" aria-hidden="true">
      <path d="M3.4 5.3H1V13h2.4V5.3ZM2.2 4.2a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8ZM14 8.5c0-2.2-1.2-3.3-2.9-3.3-1.3 0-1.9.7-2.3 1.2v-1H6.5V13h2.3V8.9c0-1.1.4-1.8 1.4-1.8.8 0 1.2.6 1.2 1.8V13H14V8.5Z" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex size-4 flex-col items-center justify-center">
      <motion.span
        className="absolute h-[1.5px] w-4 rounded-full bg-white"
        animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute h-[1.5px] w-4 rounded-full bg-white"
        animate={{ opacity: open ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.span
        className="absolute h-[1.5px] w-4 rounded-full bg-white"
        animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
        transition={{ duration: 0.2 }}
      />
    </span>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <nav
        aria-label="Primary"
        className="pointer-events-auto flex h-[61px] w-full max-w-[735px] items-center justify-between gap-6 rounded-full bg-ink px-6 py-3 shadow-[0_14px_34px_-10px_rgba(0,0,0,0.4)] md:px-10"
      >
        <Link href="/" className="shrink-0" aria-label={siteConfig.shortName}>
          <Image
            src="/hero/avatar.png"
            alt=""
            width={40}
            height={40}
            className="size-10 rounded-full object-cover"
            priority
          />
        </Link>

        <div className="hidden items-center gap-7 font-body text-[15px] font-medium text-white md:flex">
          {siteConfig.nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-white/70",
                  isActive ? "text-white" : "text-white/85",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-4 font-mono text-sm font-medium text-[#888] sm:flex">
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition-colors hover:text-white"
            >
              Email Me
            </a>
            <a
              href={siteConfig.resumeUrl}
              download
              className="transition-colors hover:text-white"
            >
              Resume
            </a>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href={siteConfig.whatsapp}
              aria-label="WhatsApp"
              className="opacity-90 transition-opacity hover:opacity-100"
            >
              <Image src="/hero/whatsapp.svg" alt="" width={15} height={15} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              aria-label="LinkedIn"
              className="opacity-90 transition-opacity hover:opacity-100"
            >
              <LinkedinIcon />
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 md:hidden"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="pointer-events-auto fixed inset-x-4 top-24 z-40 flex flex-col gap-8 rounded-[28px] bg-ink px-8 py-10 text-white shadow-[0_24px_60px_-12px_rgba(0,0,0,0.5)] md:hidden"
          >
            <div className="flex flex-col gap-5 font-display text-2xl font-semibold">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "transition-colors hover:text-white/70",
                    pathname === item.href ? "text-white" : "text-white/80",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3 border-t border-white/10 pt-6 font-mono text-sm text-[#888]">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                Email Me
              </a>
              <a href={siteConfig.resumeUrl} download className="hover:text-white">
                Resume
              </a>
            </div>

            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
              <a href={siteConfig.whatsapp} aria-label="WhatsApp" className="opacity-90">
                <Image src="/hero/whatsapp.svg" alt="" width={16} height={16} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                aria-label="LinkedIn"
                className="opacity-90"
              >
                <LinkedinIcon />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
