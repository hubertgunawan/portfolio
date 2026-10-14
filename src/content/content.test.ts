import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { profile } from "./profile";
import { featuredProjects, projects } from "./projects";

const caseStudyDir = path.join(__dirname, "case-studies");

describe("content", () => {
  it("has a case study file for every project, and no orphans", () => {
    const files = readdirSync(caseStudyDir).map((f) => f.replace(/\.mdx$/, ""));
    expect(files.sort()).toEqual(projects.map((p) => p.slug).sort());
  });

  it("has unique slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("features one software, and two AI projects (PRD H-6)", () => {
    expect(featuredProjects.map((p) => p.slug)).toEqual([
      "warehouse-stock-management",
      "ai-daily-blog",
      "deepfake-detection-lstm-rppg",
    ]);
  });

  it("ships the resume PDF", () => {
    expect(existsSync(path.join(__dirname, "../../public", profile.resumePdf))).toBe(true);
  });

  it("never exposes the phone number in site content (PRD §4.1)", () => {
    const phone = /0851\s*0504\s*8128|85105048128/;
    expect(JSON.stringify(profile)).not.toMatch(phone);
  });
});
