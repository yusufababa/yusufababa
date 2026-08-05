import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { playlistTracks } from "@/data/playlist";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#1DB954" aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0Zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.42.12-.78-.18-.9-.6-.12-.42.18-.78.6-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.24 1.08Zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.32-1.32 9.719-.66 13.439 1.62.361.181.54.78.301 1.2Zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3Z" />
    </svg>
  );
}

export function PlaylistSection() {
  return (
    <footer className="mx-4 mb-4 overflow-hidden rounded-[28px] bg-ink text-white md:mx-6 md:mb-6">
      <Container className="py-10 md:py-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
              A look into
            </p>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              My Playlist
            </h2>
          </div>
          <a
            href={siteConfig.spotifyPlaylistUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 transition-colors hover:bg-white/20"
          >
            <SpotifyIcon />
            <span className="font-mono text-xs">View playlist</span>
          </a>
        </div>

        <div className="no-scrollbar mt-8 flex gap-3 overflow-x-auto pb-1">
          {playlistTracks.map((track, i) => (
            <a
              key={track.title}
              href={track.url}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "w-20 shrink-0 transition-transform hover:-translate-y-1 hover:rotate-0 sm:w-24",
                i % 2 === 0 ? "-rotate-3" : "rotate-3",
              )}
            >
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={track.cover}
                  alt={`${track.title} — ${track.artist}`}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <p className="mt-2 truncate font-body text-xs font-medium">{track.title}</p>
              <p className="truncate font-mono text-[10px] text-white/40">
                {track.artist}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.shortName}. {siteConfig.location}.
          </p>
          <div className="flex items-center gap-5 font-mono uppercase tracking-wide">
            <a
              href={siteConfig.social.linkedin}
              className="transition-colors hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.social.dribbble}
              className="transition-colors hover:text-white"
            >
              Dribbble
            </a>
            <a
              href={siteConfig.social.github}
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
