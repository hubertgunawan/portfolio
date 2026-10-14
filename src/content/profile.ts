export const profile = {
  name: "Hubert Gunawan",
  shortName: "hubert.gunawan",
  headline: "Software Engineer & AI Engineer",
  tagline:
    "Software & AI Engineer building reliable backends, full-stack apps, and AI agents.",
  pitch:
    "3+ years designing REST APIs, databases, and containerized services with Node.js, React, and AWS. Now building AI agents that run in production, like the one that writes my blog every day.",
  summary:
    "Software engineer with 3+ years of experience designing and building backend and full-stack web applications using Node.js, React, and AWS. Experienced in RESTful API design, SQL/NoSQL database architecture, and deploying containerized services with Docker and Kubernetes. Built production systems from the ground up, including a warehouse stock management application and a React-based web platform.",
  targetRoles: ["Software Engineer", "AI Engineer"],
  openToWork: true,
  location: {
    city: "Surabaya",
    country: "Indonesia",
    countryCode: "ID",
  },
  email: "gunawanhubert@gmail.com",
  languages: ["Indonesian", "English"],
  links: {
    github: "https://github.com/hubertgunawan",
    // TODO: add LinkedIn URL once available (PRD §13, Q4).
    linkedin: null as string | null,
    blog: "https://blog.haheng.au",
  },
  resumePdf: "/Hubert_Gunawan_Resume.pdf",
  siteUrl: "https://haheng.au",
} as const;

export const locationLabel = `${profile.location.city}, ${profile.location.country}`;
