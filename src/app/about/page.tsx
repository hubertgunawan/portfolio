import { ChevronDownIcon, GraduationIcon, MapPinIcon } from "@/components/icons";
import { Card, SectionHeading, TextLink } from "@/components/ui";
import { additionalExperience, education } from "@/content/experience";
import { locationLabel, profile } from "@/content/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "About Hubert Gunawan: from assistant lecturer to senior software engineer, a machine learning thesis, and building AI agents in production.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <div className="container-page py-16 md:py-24">
      <SectionHeading as="h1" eyebrow="About" title="Hi, I'm Hubert." />

      <div className="grid gap-12 lg:grid-cols-12">
        <div className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-7">
          <p>
            I&apos;m a software engineer and AI engineer based in {locationLabel}. I like building
            systems that are dependable in production: clear APIs, well-modelled data, automated
            tests, and deployments you don&apos;t have to think twice about.
          </p>
          <p>
            I started as an <strong className="text-fg">assistant lecturer</strong> at Institut
            Sains Dan Teknologi Terpadu Surabaya, where I also built a web application for new
            student registration and administrative records.
          </p>
          <p>
            As a <strong className="text-fg">Senior Software Engineer</strong> at PT. Mitra Mulia
            Makmur, I designed RESTful APIs and backend services in Node.js, built a React web
            application from scratch, and delivered a handheld warehouse stock management app that
            replaced manual inventory tracking. I containerized services with Docker and deployed
            them with Kubernetes on AWS.
          </p>
          <p>
            My thesis on <strong className="text-fg">deepfake detection with LSTM and rPPG</strong>{" "}
            got me into machine learning. Today I build <strong className="text-fg">AI agents</strong>{" "}
            as production systems. The clearest example is{" "}
            <TextLink href="/projects/ai-daily-blog" className="text-base">
              the agent pipeline
            </TextLink>{" "}
            that writes and publishes my blog every day.
          </p>
        </div>

        <aside className="space-y-4 lg:col-span-5">
          <Card>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-md border border-border bg-surface-raised text-primary">
                <GraduationIcon size={18} />
              </span>
              <h2 className="font-semibold text-fg">Education</h2>
            </div>
            <p className="font-medium text-fg">{education.degree}</p>
            <p className="text-sm text-muted">
              {education.school} · {education.year}
            </p>
            <p className="mt-3 font-mono text-label text-primary">
              GPA {education.gpa} · {education.honors}
            </p>
            <div className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted">
              <p className="mb-1 font-mono text-xs text-subtle">Thesis</p>
              <p className="mb-2 font-medium text-fg">{education.thesis}</p>
              <p>{education.thesisSummary}</p>
            </div>
          </Card>

          <Card>
            <h2 className="mb-3 font-semibold text-fg">At a glance</h2>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-subtle">Location</dt>
                <dd className="flex items-center gap-1.5 text-fg">
                  <MapPinIcon size={14} className="text-muted" /> {locationLabel}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-subtle">Languages</dt>
                <dd className="text-fg">{profile.languages.join(", ")}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-subtle">Open to</dt>
                <dd className="text-right text-fg">{profile.targetRoles.join(", ")}</dd>
              </div>
            </dl>
          </Card>
        </aside>
      </div>

      <section aria-labelledby="beyond-title" className="mt-20 max-w-3xl">
        <details className="group rounded-lg border border-border bg-surface">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 [&::-webkit-details-marker]:hidden">
            <div>
              <p className="mb-1 font-mono text-label text-primary">Beyond software</p>
              <h2 id="beyond-title" className="text-h3 font-semibold text-fg">
                Australia, 2024 – 2026
              </h2>
            </div>
            <ChevronDownIcon
              size={18}
              className="shrink-0 text-muted transition-transform duration-150 group-open:rotate-180"
            />
          </summary>
          <div className="border-t border-border p-6">
            <p className="mb-6 leading-relaxed text-muted">
              After 2023 I spent time working in Western Australia across laboratory, agriculture,
              and hospitality roles. They sharpened skills that carry straight into engineering:
              precision and process discipline in a lab, teamwork under time pressure, and
              customer service. I kept building software alongside, including the AI agent
              pipeline behind my blog.
            </p>
            <ul className="divide-y divide-border">
              {additionalExperience.map((job) => (
                <li
                  key={`${job.company}-${job.start}`}
                  className="flex flex-col gap-1 py-3 text-sm sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span>
                    <span className="font-medium text-fg">{job.role}</span>
                    <span className="text-muted">
                      {" "}
                      · {job.company}, {job.location}
                    </span>
                  </span>
                  <span className="font-mono text-xs text-subtle">
                    {job.start} – {job.end}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </details>
      </section>
    </div>
  );
}
