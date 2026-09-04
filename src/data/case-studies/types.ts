import type { CaseStudyImage } from "@/components/ui/ImagePlaceholder";

export type { CaseStudyImage };

export type CaseStudyMetric = { label: string; value: string };
export type ProcessStep = { step: string; description: string };
export type CaseStudyPersona = {
  name: string;
  initials: string;
  age: number;
  role: string;
  location: string;
  goal: string;
  frustration: string;
  quote: string;
};
export type EcosystemTier = { label: string; description: string };
export type CaseStudyLiveLink = { label: string; url: string };

export type CaseStudy = {
  hero: {
    tagline: string;
    role: string;
    duration: string;
    platforms: string[];
    liveLinks: CaseStudyLiveLink[];
    image: CaseStudyImage;
  };
  problem: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  solution: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    pillars: string[];
  };
  metrics: CaseStudyMetric[];
  process: ProcessStep[];
  personas: CaseStudyPersona[];
  flow: { title: string; image: CaseStudyImage };
  ecosystem: EcosystemTier[];
  gallery: CaseStudyImage[];
  closing: { heading: string; body: string };
};
