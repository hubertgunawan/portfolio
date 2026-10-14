import Link from "next/link";
import type { Project } from "@/content/projects";
import { ArrowRightIcon } from "./icons";
import { Tag } from "./ui";

export function ProjectCard({ project, headingLevel = "h3" }: { project: Project; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article className="group relative flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition-colors duration-150 hover:border-border-strong hover:bg-surface-raised">
      <p className="mb-2 font-mono text-xs uppercase tracking-wider text-subtle">
        {project.category}
      </p>
      <Heading className="mb-3 text-h3 font-semibold text-fg">
        <Link
          href={`/projects/${project.slug}`}
          className="after:absolute after:inset-0 after:rounded-lg focus-visible:outline-none"
        >
          {project.title}
        </Link>
      </Heading>
      <p className="mb-6 text-sm leading-relaxed text-muted">{project.summary}</p>
      <div className="mt-auto">
        <ul className="mb-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
          {project.stack.slice(0, 4).map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
        <span className="inline-flex items-center gap-1.5 font-mono text-label text-primary">
          Read case study
          <ArrowRightIcon
            size={14}
            className="transition-transform duration-150 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </article>
  );
}
