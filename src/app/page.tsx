import { CopyEmail } from "@/components/copy-email";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ArrowRightIcon, DownloadIcon, ExternalIcon, GithubIcon, LinkedinIcon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { SkillsGrid } from "@/components/skills-grid";
import { TerminalCard } from "@/components/terminal-card";
import { ButtonLink, Section, SectionHeading, TextLink, buttonClass } from "@/components/ui";
import { experience } from "@/content/experience";
import { locationLabel, profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";
import { skillGroups } from "@/content/skills";
import { getLatestPosts } from "@/lib/blog";

export default async function HomePage() {
  const posts = await getLatestPosts(3);

  return (
    <>
      {/* Hero */}
      <section className="container-page pt-16 pb-12 md:pt-24 md:pb-16" aria-labelledby="hero-title">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            {profile.openToWork && (
              <p className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-primary/20 bg-primary-muted px-3 py-1 font-mono text-xs text-primary">
                <span className="size-1.5 shrink-0 rounded-full bg-success" aria-hidden="true" />
                Open to {profile.targetRoles.join(" & ")} roles · {locationLabel}
              </p>
            )}
            <h1 id="hero-title" className="mb-4 text-h1 font-bold text-fg md:text-display">
              {profile.name}
            </h1>
            <p className="mb-4 max-w-xl text-lg font-medium text-fg/90 md:text-xl">
              {profile.tagline}
            </p>
            <p className="mb-8 max-w-xl leading-relaxed text-muted">{profile.pitch}</p>
            <div className="flex flex-wrap items-center gap-3">
              <ButtonLink href="/projects">View Projects</ButtonLink>
              <a href={profile.resumePdf} download className={buttonClass("secondary")}>
                <DownloadIcon size={16} />
                Download Resume
              </a>
              <ButtonLink href="#contact" variant="ghost">
                Contact
              </ButtonLink>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className={buttonClass("secondary", "w-10 px-0")}
              >
                <GithubIcon size={18} />
              </a>
            </div>
          </div>
          <div className="min-w-0 lg:col-span-5">
            <TerminalCard />
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" aria-labelledby="about-title">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="01 · About" title="About me" id="about-title" />
          <p className="mb-6 text-lg leading-relaxed text-muted">{profile.summary}</p>
          <TextLink href="/about">
            More about me <ArrowRightIcon size={14} />
          </TextLink>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" aria-labelledby="skills-title">
        <SectionHeading eyebrow="02 · Skills" title="Technical skills" id="skills-title" />
        <SkillsGrid groups={skillGroups} />
      </Section>

      {/* Experience */}
      <Section id="experience" aria-labelledby="experience-title">
        <SectionHeading eyebrow="03 · Experience" title="Work experience" id="experience-title" />
        <ExperienceTimeline items={experience} />
      </Section>

      {/* Featured projects */}
      <Section id="projects" aria-labelledby="projects-title">
        <SectionHeading
          eyebrow="04 · Projects"
          title="Featured work"
          id="projects-title"
          action={
            <TextLink href="/projects">
              View all projects <ArrowRightIcon size={14} />
            </TextLink>
          }
        />
        <ul className="grid gap-4 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Section>

      {/* Blog */}
      {posts.length > 0 && (
        <Section id="blog" aria-labelledby="blog-title">
          <SectionHeading
            eyebrow="05 · Blog"
            title="Latest from the blog"
            id="blog-title"
            action={
              <TextLink href={profile.links.blog} external>
                Visit blog.haheng.au <ExternalIcon size={14} />
              </TextLink>
            }
          />
          <p className="-mt-4 mb-6 max-w-2xl text-sm text-muted">
            Written and published daily by an AI agent pipeline I built.{" "}
            <TextLink href="/projects/ai-daily-blog" className="text-sm">
              How it works
            </TextLink>
          </p>
          <ul className="divide-y divide-border border-y border-border">
            {posts.map((post) => (
              <li key={post.url}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1 px-1 py-4 transition-colors hover:bg-surface sm:flex-row sm:items-center sm:gap-6 sm:px-3"
                >
                  <time dateTime={post.date} className="shrink-0 font-mono text-label text-subtle">
                    {post.date}
                  </time>
                  <span className="flex-1 font-medium text-fg transition-colors group-hover:text-primary">
                    {post.title}
                  </span>
                  {post.category && (
                    <span className="hidden font-mono text-xs text-subtle md:inline">
                      {post.category}
                    </span>
                  )}
                  <ExternalIcon size={14} className="hidden text-subtle group-hover:text-primary sm:block" />
                </a>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Contact */}
      <Section id="contact" aria-labelledby="contact-title" className="pb-24">
        <SectionHeading
          eyebrow={posts.length > 0 ? "06 · Contact" : "05 · Contact"}
          title="Let's work together"
          id="contact-title"
        />
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-6">
            <p className="text-lg leading-relaxed text-muted">
              I&apos;m open to {profile.targetRoles.join(" and ")} roles. The fastest way to reach
              me is email.
            </p>
            <CopyEmail email={profile.email} />
            <div className="flex flex-wrap gap-3">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass("secondary")}
              >
                <GithubIcon size={16} /> GitHub
              </a>
              {profile.links.linkedin && (
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass("secondary")}
                >
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
              )}
              <a href={profile.resumePdf} download className={buttonClass("ghost")}>
                <DownloadIcon size={16} /> Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
