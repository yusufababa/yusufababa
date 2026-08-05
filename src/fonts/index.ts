import { Manrope, Space_Grotesk } from "next/font/google";
import { GeistMono } from "geist/font/mono";

// Display font — headings, hero copy, wordmark.
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Body font
export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

// Labels / accents
export const geistMono = GeistMono;
