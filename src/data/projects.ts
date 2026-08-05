export type Project = {
  slug: string;
  title: string;
  meta: string;
  sector: "Fintech" | "Mobility" | "Proptech";
  year: number;
  accent: string;
  caseStudyReady: boolean;
};

// Placeholder data — swap in real case studies as they're written up.
export const projects: Project[] = [
  {
    slug: "simkash",
    title: "Simkash",
    meta: "Fintech · Web & Mobile",
    sector: "Fintech",
    year: 2025,
    accent: "#218C59",
    caseStudyReady: false,
  },
  {
    slug: "rydepro",
    title: "RydePro",
    meta: "Mobility · MVP 1.0",
    sector: "Mobility",
    year: 2024,
    accent: "#1A1A1A",
    caseStudyReady: false,
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
