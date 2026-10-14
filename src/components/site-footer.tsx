import Link from "next/link";
import { profile } from "@/content/profile";

export function SiteFooter() {
  const links = [
    { href: `mailto:${profile.email}`, label: "Email" },
    { href: profile.links.github, label: "GitHub" },
    ...(profile.links.linkedin ? [{ href: profile.links.linkedin, label: "LinkedIn" }] : []),
    { href: profile.links.blog, label: "Blog" },
  ];

  return (
    <footer className="mt-auto border-t border-border">
      <div className="container-page flex flex-col gap-4 py-10 font-mono text-label text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
          <span className="mx-2 text-subtle">·</span>
          <Link
            href="/projects/haheng-portfolio"
            className="transition-colors hover:text-fg"
          >
            Built with Next.js on AWS
          </Link>
        </p>
        <ul className="flex flex-wrap gap-5">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="transition-colors hover:text-fg"
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
