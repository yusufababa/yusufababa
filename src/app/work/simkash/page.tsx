import { projects } from "@/data/projects";
import { simkashCaseStudy } from "@/data/case-studies/simkash";
import { CaseStudyTopBar } from "@/components/sections/case-study/CaseStudyTopBar";
import { CaseStudyHero } from "@/components/sections/case-study/CaseStudyHero";
import { ProblemSolution } from "@/components/sections/case-study/ProblemSolution";
import { MetricsGrid } from "@/components/sections/case-study/MetricsGrid";
import { ProcessSection } from "@/components/sections/case-study/ProcessSection";
import { PersonasSection } from "@/components/sections/case-study/PersonasSection";
import { FlowDiagram } from "@/components/sections/case-study/FlowDiagram";
import { EcosystemSection } from "@/components/sections/case-study/EcosystemSection";
import { ScreensGallery } from "@/components/sections/case-study/ScreensGallery";
import { CaseStudyClosing } from "@/components/sections/case-study/CaseStudyClosing";

const projectIndex = projects.findIndex((p) => p.slug === "simkash");
const project = projects[projectIndex]!;
const nextProject = projects[(projectIndex + 1) % projects.length]!;

export default function SimkashCaseStudyPage() {
  return (
    <>
      <CaseStudyTopBar />
      <CaseStudyHero project={project} hero={simkashCaseStudy.hero} />
      <ProblemSolution problem={simkashCaseStudy.problem} solution={simkashCaseStudy.solution} />
      <MetricsGrid metrics={simkashCaseStudy.metrics} />
      <ProcessSection process={simkashCaseStudy.process} />
      <PersonasSection personas={simkashCaseStudy.personas} accent={project.accent} />
      <FlowDiagram
        title={simkashCaseStudy.flow.title}
        image={simkashCaseStudy.flow.image}
        accent={project.accent}
      />
      <EcosystemSection tiers={simkashCaseStudy.ecosystem} accent={project.accent} />
      <ScreensGallery images={simkashCaseStudy.gallery} accent={project.accent} />
      <CaseStudyClosing closing={simkashCaseStudy.closing} nextProject={nextProject} />
    </>
  );
}
