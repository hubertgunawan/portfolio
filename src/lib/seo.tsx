import type { Metadata } from "next";
import { profile } from "@/content/profile";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
    twitter: { title, description },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.targetRoles,
    url: profile.siteUrl,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location.city,
      addressCountry: profile.location.countryCode,
    },
    knowsLanguage: profile.languages,
    knowsAbout: [
      "Node.js",
      "React",
      "AWS",
      "Docker",
      "Kubernetes",
      "RESTful API design",
      "AI agents",
      "Machine learning",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Institut Sains Dan Teknologi Terpadu Surabaya",
    },
    sameAs: [profile.links.github, profile.links.blog, profile.links.linkedin].filter(Boolean),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
