import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/projects/", "/about/", "/resume/"];
  return [
    ...pages.map((path) => ({
      url: `${profile.siteUrl}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...projects.map((p) => ({
      url: `${profile.siteUrl}/projects/${p.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
