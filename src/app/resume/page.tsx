import { DownloadIcon } from "@/components/icons";
import { PrintButton } from "@/components/print-button";
import { buttonClass } from "@/components/ui";
import { additionalExperience, education, experience } from "@/content/experience";
import { locationLabel, profile } from "@/content/profile";
import { skillGroups } from "@/content/skills";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Resume",
  description:
    "Resume of Hubert Gunawan, Software Engineer and AI Engineer: experience, skills, and education. Download the PDF.",
  path: "/resume/",
});

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border py-8 print:break-inside-avoid print:py-4">
      <h2 className="mb-5 font-mono text-label uppercase tracking-wider text-primary print:text-black">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function ResumePage() {
  return (
    <div className="container-page max-w-[860px] py-16 md:py-24 print:py-0">
      <div className="mb-10 flex flex-wrap gap-3 print:hidden">
        <a href={profile.resumePdf} download className={buttonClass("primary")}>
          <DownloadIcon size={16} /> Download PDF
        </a>
        <PrintButton />
      </div>

      <header className="pb-8">
        <h1 className="mb-2 text-h2 font-bold text-fg md:text-h1 print:text-black">
          {profile.name}
        </h1>
        <p className="mb-4 text-lg text-muted print:text-black">{profile.headline}</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-label text-muted print:text-black">
          <li>{locationLabel}</li>
          <li>
            <a href={`mailto:${profile.email}`} className="hover:text-primary">
              {profile.email}
            </a>
          </li>
          <li>
            <a href={profile.links.github} className="hover:text-primary">
              github.com/hubertgunawan
            </a>
          </li>
          <li>
            <a href={profile.links.blog} className="hover:text-primary">
              blog.haheng.au
            </a>
          </li>
        </ul>
      </header>

      <ResumeSection title="Summary">
        <p className="leading-relaxed text-muted print:text-black">{profile.summary}</p>
      </ResumeSection>

      <ResumeSection title="Technical skills">
        <dl className="space-y-2 text-sm">
          {skillGroups.map((group) => (
            <div key={group.title} className="grid gap-1 sm:grid-cols-[200px_1fr]">
              <dt className="font-medium text-fg print:text-black">{group.title}</dt>
              <dd className="text-muted print:text-black">{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </ResumeSection>

      <ResumeSection title="Experience">
        <div className="space-y-8">
          {experience.map((job) => (
            <article key={job.company}>
              <header className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-semibold text-fg print:text-black">
                  {job.role} <span className="font-normal text-muted print:text-black">· {job.company}</span>
                </h3>
                <p className="font-mono text-xs text-subtle print:text-black">
                  {job.start} – {job.end}
                </p>
              </header>
              <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted marker:text-subtle print:text-black">
                {[...job.highlights, ...job.details].map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="Education">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="font-semibold text-fg print:text-black">
            {education.degree}{" "}
            <span className="font-normal text-muted print:text-black">· {education.school}</span>
          </h3>
          <p className="font-mono text-xs text-subtle print:text-black">{education.year}</p>
        </div>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted marker:text-subtle print:text-black">
          <li>
            GPA {education.gpa} — {education.honors}
          </li>
          <li>Thesis: {education.thesis}</li>
        </ul>
      </ResumeSection>

      <ResumeSection title="Additional experience">
        <ul className="space-y-1.5 text-sm">
          {additionalExperience.map((job) => (
            <li
              key={`${job.company}-${job.start}`}
              className="flex flex-col sm:flex-row sm:justify-between"
            >
              <span className="text-muted print:text-black">
                <span className="text-fg print:text-black">{job.role}</span> · {job.company},{" "}
                {job.location}
              </span>
              <span className="font-mono text-xs text-subtle print:text-black">
                {job.start} – {job.end}
              </span>
            </li>
          ))}
        </ul>
      </ResumeSection>

      <ResumeSection title="Languages">
        <p className="text-sm text-muted print:text-black">{profile.languages.join(", ")}</p>
      </ResumeSection>
    </div>
  );
}
