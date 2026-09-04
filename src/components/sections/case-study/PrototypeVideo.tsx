"use client";

import { useEffect, useRef, useState } from "react";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      <path d="m9 7 8 5-8 5V7Z" fill="currentColor" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      <path
        d="M8 7v10M16 7v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PrototypeVideo({
  src,
  title,
  poster,
}: {
  src: string;
  title: string;
  poster?: string;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const frame = frameRef.current;
    const video = videoRef.current;
    if (!frame || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.intersectionRatio < 0.35 && !video.paused) {
          video.pause();
        }
      },
      { threshold: [0, 0.35, 0.7] },
    );

    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch {
        setIsPlaying(false);
      }
    } else {
      video.pause();
    }
  }

  return (
    <div
      ref={frameRef}
      className="group relative aspect-video overflow-hidden rounded-[28px] border border-white/10 bg-[#090909] shadow-[0_28px_80px_-35px_rgba(0,0,0,0.5)]"
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload="metadata"
        playsInline
        className="size-full object-contain"
        onPlay={() => {
          setIsPlaying(true);
          setHasStarted(true);
        }}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        Your browser does not support embedded videos.
      </video>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? `Pause ${title}` : `Play ${title}`}
        className="absolute inset-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
      >
        <span
          className={`flex size-16 items-center justify-center rounded-full bg-white text-ink shadow-xl transition-all duration-300 sm:size-20 ${
            isPlaying
              ? "scale-90 opacity-0 group-focus-within:scale-100 group-focus-within:opacity-100 group-hover:scale-100 group-hover:opacity-100"
              : "scale-100 opacity-100 hover:scale-105"
          }`}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </span>
      </button>

      <div className="pointer-events-none absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white sm:inset-x-7 sm:bottom-6">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/55">
            Interactive prototype
          </p>
          <p className="mt-1 font-display text-sm font-semibold sm:text-base">{title}</p>
        </div>
        <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white/70 backdrop-blur-md">
          {isPlaying ? "Click to pause" : hasStarted ? "Paused" : "Play video"}
        </span>
      </div>
    </div>
  );
}
