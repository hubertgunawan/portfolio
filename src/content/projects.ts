export const projectTags = [
  "Backend",
  "Frontend",
  "DevOps",
  "AI Agents",
  "Machine Learning",
] as const;

export type ProjectTag = (typeof projectTags)[number];

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  context: string;
  year: string;
  tags: ProjectTag[];
  stack: string[];
  featured: boolean;
  kind: "software" | "ai";
  links?: {
    live?: string;
    repo?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "warehouse-stock-management",
    title: "Warehouse Stock Management",
    category: "Software",
    summary:
      "A handheld inventory app and Node.js backend that replaced manual stock tracking for warehouse operations staff.",
    context: "PT. Mitra Mulia Makmur",
    year: "2020–2023",
    tags: ["Backend", "Frontend", "DevOps"],
    stack: ["Node.js", "React", "SQL", "NoSQL", "ORM", "Docker", "Kubernetes", "AWS"],
    featured: true,
    kind: "software",
  },
  {
    slug: "ai-daily-blog",
    title: "AI-Powered Daily Blog",
    category: "AI Agents",
    summary:
      "An autonomous pipeline of AI agents that writes and publishes a new post on blog.haheng.au every day.",
    context: "Personal",
    year: "2026",
    tags: ["AI Agents", "Backend"],
    stack: ["AI Agents", "LLM APIs", "Next.js", "Scheduling", "RSS"],
    featured: true,
    kind: "ai",
    links: { live: "https://blog.haheng.au" },
  },
  {
    slug: "deepfake-detection-lstm-rppg",
    title: "Deepfake Detection (LSTM + rPPG)",
    category: "Machine Learning",
    summary:
      "A thesis model that spots deepfake videos by reading heart-rate signals from facial skin and classifying them over time with an LSTM.",
    context: "Undergraduate thesis",
    year: "2023",
    tags: ["Machine Learning"],
    stack: ["LSTM", "rPPG", "Computer Vision", "Deep Learning"],
    featured: true,
    kind: "ai",
  },
  {
    slug: "react-web-platform",
    title: "React Web Platform",
    category: "Software",
    summary:
      "A production web app built from scratch, from architecture through Docker and Kubernetes deployment on AWS.",
    context: "PT. Mitra Mulia Makmur",
    year: "2020–2023",
    tags: ["Frontend", "Backend", "DevOps"],
    stack: ["React", "Node.js", "Docker", "Kubernetes", "AWS"],
    featured: false,
    kind: "software",
  },
  {
    slug: "student-registration-system",
    title: "Student Registration & Records System",
    category: "Software",
    summary:
      "A full-stack web application for new student registration and administrative record management at a university.",
    context: "Institut Sains Dan Teknologi Terpadu Surabaya",
    year: "2017–2020",
    tags: ["Backend", "Frontend"],
    stack: ["Web application", "SQL"],
    featured: false,
    kind: "software",
  },
  {
    slug: "haheng-portfolio",
    title: "This Portfolio — haheng.au",
    category: "Software",
    summary:
      "A static-first Next.js site, tested in CI and self-hosted on AWS S3 + CloudFront with infrastructure as code.",
    context: "Personal",
    year: "2026",
    tags: ["Frontend", "DevOps"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "AWS", "Docker", "GitHub Actions"],
    featured: false,
    kind: "software",
    links: { repo: "https://github.com/hubertgunawan" },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
