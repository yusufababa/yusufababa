import type { Metadata } from "next";
import { projects } from "@/data/projects";
import {
  rydeproCaseStudy,
  rydeproFeatures,
  rydeproSurfaces,
} from "@/data/case-studies/rydepro";
import { CaseStudyTopBar } from "@/components/sections/case-study/CaseStudyTopBar";
import { CaseStudyHero } from "@/components/sections/case-study/CaseStudyHero";
import { ProblemSolution } from "@/components/sections/case-study/ProblemSolution";
import { MetricsGrid } from "@/components/sections/case-study/MetricsGrid";
import { ProcessSection } from "@/components/sections/case-study/ProcessSection";
import { FlowDiagram } from "@/components/sections/case-study/FlowDiagram";
import { RydeProScope } from "@/components/sections/case-study/RydeProScope";
import { RydeProFeatureStories } from "@/components/sections/case-study/RydeProFeatureStories";
import { RydeProCollaboration } from "@/components/sections/case-study/RydeProCollaboration";
import { CaseStudyClosing } from "@/components/sections/case-study/CaseStudyClosing";

export const metadata: Metadata = {
  title: "RydePro Case Study",
  description:
    "Designing RydePro across rider mobile, web booking, admin, dispatch, and driver experiences — from MVP 1.0 to launch.",
};

const projectIndex = projects.findIndex((project) => project.slug === "rydepro");
const project = projects[projectIndex]!;
const nextProject = projects[(projectIndex + 1) % projects.length]!;

export default function RydeProCaseStudyPage() {
  return (
    <>
      <CaseStudyTopBar />
      <CaseStudyHero project={project} hero={rydeproCaseStudy.hero} />
      <ProblemSolution
        problem={rydeproCaseStudy.problem}
        solution={rydeproCaseStudy.solution}
      />
      <MetricsGrid metrics={rydeproCaseStudy.metrics} />
      <ProcessSection process={rydeproCaseStudy.process} />
      <RydeProScope surfaces={rydeproSurfaces} />
      <FlowDiagram
        title={rydeproCaseStudy.flow.title}
        image={rydeproCaseStudy.flow.image}
        accent={project.accent}
        video={{
          src: "/rydepro/booking-prototype.mp4?v=web-optimized",
          poster: "/rydepro/cover.png",
        }}
      />
      <RydeProFeatureStories features={rydeproFeatures} />
      <RydeProCollaboration />
      <CaseStudyClosing closing={rydeproCaseStudy.closing} nextProject={nextProject} />
    </>
  );
}
