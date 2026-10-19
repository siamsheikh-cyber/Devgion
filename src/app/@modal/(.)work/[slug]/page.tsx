import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import { ProjectModal } from "@/components/work/ProjectModal";

interface ModalPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

/**
 * Intercepted route for /work/[slug].
 * When navigated to from within the app (e.g. homepage), Next.js renders
 * this modal over the current page while updating the browser URL.
 */
export default async function ProjectModalRoute({ params }: ModalPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectModal project={project} />;
}
