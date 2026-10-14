import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, ArrowRightIcon, ExternalIcon, GithubIcon } from "@/components/icons";
import { Tag, buttonClass } from "@/components/ui";
import { getProject, projects } from "@/content/projects";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: `${project.title} — Case study`,
    description: project.summary,
    path: `/projects/${project.slug}/`,
  });
}

export default async function CaseStudyPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { default: Content } = await import(`@/content/case-studies/${slug}.mdx`);

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <article className="container-page py-12 md:py-20">
      <Link
        href="/projects"
        className="mb-10 inline-flex items-center gap-1.5 font-mono text-label text-muted transition-colors hover:text-fg"
      >
        <ArrowLeftIcon size={14} /> All projects
      </Link>

      <header className="mb-12 max-w-3xl border-b border-border pb-10">
        <p className="mb-3 font-mono text-xs uppercase tracking-wider text-primary">
          {project.category} · {project.year}
        </p>
        <h1 className="mb-4 text-h2 font-bold text-fg md:text-h1">{project.title}</h1>
        <p className="mb-6 text-lg leading-relaxed text-muted">{project.summary}</p>
        <dl className="mb-6 grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="mb-1 font-mono text-xs text-subtle">Context</dt>
            <dd className="text-fg">{project.context}</dd>
          </div>
          <div>
            <dt className="mb-1 font-mono text-xs text-subtle">Areas</dt>
            <dd className="text-fg">{project.tags.join(", ")}</dd>
          </div>
        </dl>
        <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
        {(project.links?.live || project.links?.repo) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className={buttonClass("secondary")}>
                <ExternalIcon size={16} /> Visit live site
              </a>
            )}
            {project.links.repo && (
              <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className={buttonClass("secondary")}>
                <GithubIcon size={16} /> View on GitHub
              </a>
            )}
          </div>
        )}
      </header>

      <div className="prose-case">
        <Content />
      </div>

      <nav
        aria-label="More projects"
        className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2"
      >
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="group rounded-lg border border-border p-5 transition-colors hover:border-border-strong hover:bg-surface"
          >
            <span className="mb-1 flex items-center gap-1.5 font-mono text-xs text-subtle">
              <ArrowLeftIcon size={12} /> Previous
            </span>
            <span className="font-medium text-fg group-hover:text-primary">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={`/projects/${next.slug}`}
            className="group rounded-lg border border-border p-5 text-right transition-colors hover:border-border-strong hover:bg-surface"
          >
            <span className="mb-1 flex items-center justify-end gap-1.5 font-mono text-xs text-subtle">
              Next <ArrowRightIcon size={12} />
            </span>
            <span className="font-medium text-fg group-hover:text-primary">{next.title}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
