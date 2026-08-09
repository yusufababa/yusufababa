"use client";

import Link from "next/link";

function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true">
      <path
        d="M8 13V3M8 3L3.5 7.5M8 3l4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true">
      <path
        d="M13 8H3M3 8l4.5-4.5M3 8l4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CaseStudyTopBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-5 z-50 flex items-center justify-between px-4 sm:px-6">
      <Link
        href="/#selected-work"
        aria-label="Back to projects"
        className="pointer-events-auto flex size-11 items-center justify-center rounded-full bg-ink text-white shadow-[0_14px_34px_-10px_rgba(0,0,0,0.4)] transition-transform hover:scale-105"
      >
        <ArrowLeftIcon />
      </Link>

      <button
        type="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="pointer-events-auto flex size-11 items-center justify-center rounded-full bg-ink text-white shadow-[0_14px_34px_-10px_rgba(0,0,0,0.4)] transition-transform hover:scale-105"
      >
        <ArrowUpIcon />
      </button>
    </div>
  );
}
