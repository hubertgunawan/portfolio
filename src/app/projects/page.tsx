import { ProjectsBrowser } from "@/components/projects-browser";
import { SectionHeading } from "@/components/ui";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Software engineering and AI engineering case studies by Hubert Gunawan: backend systems, React apps, AI agent pipelines, and machine learning.",
  path: "/projects/",
});

export default function ProjectsPage() {
  return (
    <div className="container-page py-16 md:py-24">
      <SectionHeading as="h1" eyebrow="Projects" title="Things I've built" />
      <p className="-mt-4 mb-10 max-w-2xl text-lg leading-relaxed text-muted">
        Case studies covering the problem, my role, the architecture, and what I learned. Filter
        by area to find backend, front-end, DevOps, AI agent, or machine learning work.
      </p>
      <ProjectsBrowser projects={projects} />
    </div>
  );
}
