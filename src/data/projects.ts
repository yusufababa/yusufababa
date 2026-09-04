export type Project = {
  slug: string;
  title: string;
  meta: string;
  sector: "Fintech" | "Mobility" | "Proptech";
  year: number;
  accent: string;
  caseStudyReady: boolean;
  coverImage?: string;
};

// Placeholder data — swap in real case studies as they're written up.
export const projects: Project[] = [
  {
    slug: "rydepro",
    title: "RydePro",
    meta: "Mobility · Rider, Web & Operations",
    sector: "Mobility",
    year: 2026,
    accent: "#151515",
    caseStudyReady: true,
    coverImage: "/rydepro/cover.png",
  },
  {
    slug: "simkash",
    title: "Simkash",
    meta: "Fintech · Web & Mobile",
    sector: "Fintech",
    year: 2025,
    accent: "#218C59",
    caseStudyReady: true,
    coverImage: "/simkash/Cover.png",
  },
  {
    slug: "homekey",
    title: "HomeKey",
    meta: "Proptech · Web App",
    sector: "Proptech",
    year: 2024,
    accent: "#3373FF",
    caseStudyReady: false,
  },
  {
    slug: "vaultly",
    title: "Vaultly",
    meta: "Fintech · Web & Mobile",
    sector: "Fintech",
    year: 2023,
    accent: "#FF8026",
    caseStudyReady: false,
  },
];
