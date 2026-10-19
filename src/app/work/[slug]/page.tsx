import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ArrowRight, AlertCircle, Wrench, CheckCircle2, Layers } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { BrowserFrame, PhoneFrame } from "@/components/ui/MockupFrame";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return buildMetadata({
    title: `${project.title} — Restaurant Website Case Study`,
    description: `${project.problem} Read how Devgion helped ${project.client}.`,
    path: `/work/${project.slug}`,
  });
}

/**
 * Standalone project page.
 * Rendered when users visit /work/[slug] directly or via search engines.
 */
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const showPlatform = project.platform && project.platform !== "TODO";

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: `${project.title} — Restaurant Website Case Study`,
    description: project.problem,
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      "@type": "Restaurant",
      name: project.client,
    },
    url: `${siteConfig.url}/work/${project.slug}`,
  };

  return (
    <>
      <JsonLd data={projectSchema} />

      <article className="py-12 sm:py-16 md:py-20">
        <Container>
          {/* Breadcrumb & Back navigation */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              <ArrowLeft className="size-4" />
              <span>Back to Home</span>
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href="/#work"
              className="transition-colors hover:text-foreground"
            >
              Recent Work
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-foreground truncate max-w-[200px] sm:max-w-none">
              {project.title}
            </span>
          </nav>

          {/* Header */}
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-heading text-xs font-bold uppercase tracking-wider text-primary">
                Case Study
              </span>
              {showPlatform && (
                <span className="inline-flex items-center rounded-full bg-secondary px-3 py-0.5 text-xs font-semibold text-secondary-foreground">
                  {project.platform}
                </span>
              )}
            </div>

            <h1 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {project.title}
            </h1>

            <p className="mt-3 text-lg text-muted-foreground">
              Client: <strong className="font-medium text-foreground">{project.client}</strong>
            </p>
          </div>

          {/* Device frame previews (desktop browser and mobile phone) */}
          <div className="mt-10 max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-muted/40 to-transparent p-4 sm:p-6">
            <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-12 sm:gap-8">
              <div className={cn(project.mobileImage ? "sm:col-span-8" : "sm:col-span-12")}>
                <BrowserFrame
                  url={project.liveUrl || "https://example.com"}
                  title={project.title}
                  imageSrc={project.desktopImage || project.coverImage}
                  imageAlt={project.desktopImageAlt || project.coverImageAlt}
                  aspectRatio="16/10"
                  priority
                />
              </div>
              {project.mobileImage && (
                <div className="flex justify-center sm:col-span-4">
                  <PhoneFrame
                    title={`${project.title} Mobile`}
                    imageSrc={project.mobileImage}
                    imageAlt={project.mobileImageAlt}
                    priority
                  />
                </div>
              )}
            </div>
          </div>

          {/* Structured Case Study Grid */}
          <div className="mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {/* The Problem */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
              <div className="flex items-center gap-2 font-heading text-base font-semibold text-foreground">
                <AlertCircle className="size-5 text-amber-500" />
                <span>The Problem</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {project.problem}
              </p>
            </div>

            {/* What We Did */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
              <div className="flex items-center gap-2 font-heading text-base font-semibold text-foreground">
                <Wrench className="size-5 text-primary" />
                <span>What We Did</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {project.whatWeDid}
              </p>
            </div>

            {/* The Result */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs sm:col-span-2">
              <div className="flex items-center gap-2 font-heading text-base font-semibold text-foreground">
                <CheckCircle2 className="size-5 text-emerald-500" />
                <span>The Result</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {project.result}
              </p>
            </div>

            {/* Platform if known */}
            {showPlatform && (
              <div className="rounded-2xl border border-border bg-card p-6 shadow-xs sm:col-span-2">
                <div className="flex items-center gap-2 font-heading text-base font-semibold text-foreground">
                  <Layers className="size-5 text-primary" />
                  <span>Platform</span>
                </div>
                <p className="mt-2 text-sm font-medium text-foreground sm:text-base">
                  {project.platform}
                </p>
              </div>
            )}
          </div>

          {/* External link / CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-border pt-8 max-w-4xl">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                <span>Visit live website</span>
                <ExternalLink className="size-4" />
              </a>
            )}

            <div className="ml-auto flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span>Get a free 7-day test</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
