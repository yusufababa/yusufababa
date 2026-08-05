import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) notFound();

  return (
    <Container className="py-24">
      <p className="font-mono text-xs uppercase tracking-wide text-grey">
        {project.sector} · {project.year}
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold">{project.title}</h1>
      <p className="mt-6 max-w-2xl text-grey">Case study coming soon.</p>
    </Container>
  );
}
