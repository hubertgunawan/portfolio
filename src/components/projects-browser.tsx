"use client";

import { useState } from "react";
import { projectTags, type Project, type ProjectTag } from "@/content/projects";
import { ProjectCard } from "./project-card";
import { cn } from "./ui";

export function ProjectsBrowser({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<ProjectTag | null>(null);
  const visible = active ? projects.filter((p) => p.tags.includes(active)) : projects;

  const chip = (selected: boolean) =>
    cn(
      "h-8 rounded-full border px-3.5 font-mono text-label transition-colors duration-150",
      selected
        ? "border-primary/40 bg-primary-muted text-primary"
        : "border-border text-muted hover:border-border-strong hover:text-fg",
    );

  return (
    <>
      <div role="group" aria-label="Filter projects by tag" className="mb-8 flex flex-wrap gap-2">
        <button type="button" className={chip(active === null)} aria-pressed={active === null} onClick={() => setActive(null)}>
          All
        </button>
        {projectTags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={chip(active === tag)}
            aria-pressed={active === tag}
            onClick={() => setActive(active === tag ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} project{visible.length === 1 ? "" : "s"}
      </p>
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} headingLevel="h2" />
          </li>
        ))}
      </ul>
    </>
  );
}
