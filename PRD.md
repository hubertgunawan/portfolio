# PRD: Personal Portfolio Website — haheng.au

| Field | Value |
|---|---|
| Owner | Hubert Gunawan |
| Status | Draft |
| Last updated | 2026-10-14 |
| Source | `Hubert_Gunawan_Resume.pdf` |

---

## 1. Overview

A personal developer portfolio at **haheng.au** that presents Hubert Gunawan as a **Software Engineer and AI Engineer**: 3+ years building backend and full-stack systems with Node.js, React, and AWS, plus hands-on work in machine learning (deepfake detection thesis) and AI agents (an autonomous daily blog). The site should turn the resume into a credible, scannable, and memorable web presence that helps land a **Software Engineer** or **AI Engineer** role.

The site itself also serves as a proof of skill: it should be built, tested, containerized, and deployed with the same practices listed on the resume (React, Node.js, Docker, AWS, CI/test automation).

## 2. Goals & Non-Goals

### Goals
1. **Get interviews.** Recruiters and hiring managers understand who Hubert is, what he builds, and how to contact him within 30 seconds.
2. **Show technical depth.** Project case studies show architecture, decisions, and results, not just bullet points.
3. **Position for two roles.** Make it clear that Hubert fits both Software Engineer and AI Engineer roles. Present AI work (agents, LLM pipelines, ML models) as production engineering, not as experiments.
4. **Show engineering quality.** The site is fast, accessible, tested, and self-hosted the way production systems should be.
5. **Link the ecosystem.** Connect the portfolio with the AI-generated blog at **blog.haheng.au** and with GitHub at **github.com/hubertgunawan**.
6. **Make updates easy.** Content (experience, projects, skills) lives in structured data/Markdown files, so updates don't require touching components.

### Non-Goals (v1)
- A CMS or admin dashboard.
- User accounts, comments, or authentication.
- Hosting the blog itself (it stays on `blog.haheng.au`; the portfolio only links to it and may show recent posts).
- Multi-language content (English only in v1; Indonesian is a possible later addition).

## 3. Target Audience

| Persona | Needs | Time on site |
|---|---|---|
| **Technical recruiter** (SE and AI roles) | Role fit, years of experience, location, contact, downloadable resume | 30–90 s |
| **Hiring manager / engineer (Software)** | Depth of backend and system design work, code quality, GitHub, architecture choices | 3–10 min |
| **Hiring manager / engineer (AI)** | Real AI/ML work: agent design, LLM integration, model training and evaluation, how AI runs in production | 3–10 min |
| **Peers / network** | Blog, projects, ways to connect | Variable |

## 4. Content Inventory (from resume)

### 4.1 Identity
- **Name:** Hubert Gunawan
- **Headline:** Software Engineer & AI Engineer (Node.js · React · AWS · AI Agents · ML)
- **Target roles:** Software Engineer, AI Engineer
- **GitHub:** [github.com/hubertgunawan](https://github.com/hubertgunawan)
- **Location:** Surabaya, Indonesia (shown site-wide in the hero, About, Resume, footer, and JSON-LD `Person.address`)
- **Email:** gunawanhubert@gmail.com
- **Languages:** Indonesian, English

> ⚠️ **Privacy:** The phone number (085105048128) should **not** appear in plain text on the public site. Use the email address and a contact form instead. The phone number can stay in the downloadable PDF resume if desired.

### 4.2 Professional Summary
> Software engineer with 3+ years of experience designing and building backend and full-stack web applications using Node.js, React, and AWS. Experienced in RESTful API design, SQL/NoSQL database architecture, and deploying containerized services with Docker and Kubernetes. Built production systems from the ground up, including a warehouse stock management application and a React-based web platform.

### 4.3 Technical Skills
| Category | Items |
|---|---|
| Languages & Frameworks | JavaScript, Node.js, React.js |
| Databases | SQL, NoSQL, ORM-based data modeling |
| Cloud & DevOps | AWS, Docker, Kubernetes, Git |
| AI & Machine Learning | AI Agents (for development and content automation), Machine Learning, Deep Learning (LSTM), Computer Vision / rPPG signal analysis |
| Practices | RESTful API Design, Database Design, Unit Testing & Test Automation |

> "AI & Machine Learning" is its own category on the site (split out from "Practices" on the resume) so AI Engineer recruiters can find it immediately. Only list specific tools (e.g., Python, PyTorch/TensorFlow, OpenAI/Anthropic APIs, LangChain) once Hubert confirms he has used them.

### 4.4 Software Engineering Experience
**Senior Software Engineer — PT. Mitra Mulia Makmur, Indonesia (06/2020 – 10/2023)**
- Designed and built RESTful APIs and backend services in Node.js for web and internal tools
- Built a React.js web application from scratch, owning it from architecture through deployment
- Developed a handheld warehouse stock management application that replaced manual inventory tracking
- Designed and managed SQL/NoSQL databases with ORM-based data layers
- Containerized services with Docker; orchestrated deployments with Kubernetes on AWS
- Wrote unit tests and built test automation to catch regressions before release
- Code reviews, production debugging, design discussions, sprint planning

**Assistant Lecturer — Institut Sains Dan Teknologi Terpadu Surabaya (09/2017 – 06/2020)**
- Designed and built a web application for new student registration and administrative record management

### 4.5 Projects (candidates for case studies)
| # | Project | Source | Notes |
|---|---|---|---|
| P1 | **Warehouse Stock Management (Handheld App)** | Experience @ PT. MMM | Flagship case study. Problem: manual inventory. Show architecture, API, DB model, and impact. |
| P2 | **React Web Platform** | Experience @ PT. MMM | End-to-end ownership: architecture → deployment on AWS/K8s. |
| P3 | **Student Registration & Records System** | Assistant Lecturer | Full-stack web app for university administration. |
| P4 | **AI-Generated Personal Blog — blog.haheng.au** | Personal | **Flagship AI case study.** AI agents publish content daily. Cover agent architecture, prompts/orchestration, scheduling, quality control and guardrails, cost, and failure handling. |
| P5 | **Deepfake Detection using LSTM & rPPG** | Thesis | **Flagship ML case study.** Cover dataset, rPPG feature extraction, LSTM model, training and evaluation metrics, and results. Link to code on GitHub if possible. |
| P6 | **This Portfolio — haheng.au** | Personal | Meta case study: stack, CI/CD, IaC, Lighthouse scores. |

> Company projects may be under NDA. Case studies should describe architecture and outcomes in general terms, use diagrams instead of proprietary screenshots, and avoid confidential data.

### 4.6 Education
**Bachelor of Science, Computer Science** — Institut Sains Dan Teknologi Terpadu Surabaya, 2023
- GPA 3.89 / 4.00 — **Magna Cum Laude**
- Thesis: *Deepfake Detection using LSTM and rPPG*

### 4.7 Additional Experience (Australia, 2024 – 2026)
- Sample Preparer, Australia Laboratory Service — Canning Vale, WA (03/2026 – 10/2026)
- Irrigation, Trandos Hydroponic Grow — WA (07/2025 – 03/2026)
- Blueberry Picker, Costa Berry — Gingin, WA (04/2025 – 07/2025)
- Grape Packer, Fruitico — Meelon, WA (03/2025 – 04/2025)
- FOH Team Member, Super Tetsudo — Karrinyup, WA (02/2024 – 03/2025)
- Grape Picker, Fruitico — Hamel, WA (01/2024 – 02/2024)

**Presentation:** Put this in a short, collapsed "Beyond Software" section on the About page, not in the main timeline. Frame it positively (adaptability, teamwork, lab precision and process discipline, customer service). It explains the gap after 10/2023 without distracting from the engineering story.

## 5. Information Architecture

```
haheng.au
├── /                 Home (single-page overview with anchored sections)
│   ├── Hero
│   ├── About (short)
│   ├── Skills
│   ├── Experience (timeline)
│   ├── Featured Projects (3 cards)
│   ├── Latest from the Blog (optional; pulled from blog.haheng.au)
│   └── Contact
├── /projects         All projects (filterable by tag)
├── /projects/[slug]  Case study pages
├── /about            Full bio, education, "Beyond Software", languages
├── /resume           Web resume + PDF download
└── blog.haheng.au    External link (top nav)
```

**Navigation:** Home · Projects · About · Resume · Blog ↗ · Contact (CTA button)
**Footer:** Email, GitHub (github.com/hubertgunawan), LinkedIn, Blog, © year, "Built with …" link to the P6 case study.

## 6. Functional Requirements

Priority: **P0** = must have for launch, **P1** = should have, **P2** = nice to have.

### 6.1 Home
| ID | Requirement | Priority |
|---|---|---|
| H-1 | Hero with name, headline ("Software Engineer & AI Engineer"), 1–2 sentence pitch, and CTAs: **View Projects**, **Download Resume**, **Contact**, plus a GitHub icon link | P0 |
| H-2 | "Open to work" badge: "Open to Software Engineer & AI Engineer roles · Surabaya, Indonesia" | P1 |
| H-3 | Short About block with professional summary and link to /about | P0 |
| H-4 | Skills section grouped by the 5 categories in 4.3 (including AI & Machine Learning), with icons for key tech | P0 |
| H-5 | Experience timeline (PT. MMM, ISTTS) with expandable bullet details | P0 |
| H-6 | 3 featured project cards that balance both roles: **P1** (software), **P4** (AI agents), **P5** (ML). Each card has a title, one-line summary, tech tags, and a link to the case study | P0 |
| H-9 | Pinned GitHub repositories or a contribution summary from github.com/hubertgunawan, fetched at build time with a fallback | P2 |
| H-7 | "Latest from the Blog" showing the 3 most recent posts via RSS/JSON feed from blog.haheng.au, loaded at build time or cached | P1 |
| H-8 | Contact section (see 6.5) | P0 |

### 6.2 Projects
| ID | Requirement | Priority |
|---|---|---|
| PR-1 | Grid of all projects with tag filters (Backend, Frontend, DevOps, AI Agents, Machine Learning) | P0 |
| PR-2 | Case study template: **Problem → My Role → Architecture (diagram) → Key Decisions → Tech Stack → Outcome/Impact → Lessons** | P0 |
| PR-3 | Architecture diagrams (Mermaid or SVG) for P1, P2, P4; ML pipeline diagram for P5 | P1 |
| PR-4 | Links to live demo / GitHub repo (github.com/hubertgunawan) where available | P1 |
| PR-6 | AI/ML case studies (P4, P5) add **Model/Agent Design → Evaluation & Metrics → Limitations & Safety** to the template | P0 |
| PR-5 | Previous/next project navigation | P2 |

### 6.3 About
| ID | Requirement | Priority |
|---|---|---|
| A-1 | Longer bio covering the journey (lecturer → senior software engineer → ML thesis → AI engineering with agents) | P0 |
| A-2 | Education card with GPA, Magna Cum Laude, and thesis summary | P0 |
| A-3 | "Beyond Software" collapsible section (Additional Experience) | P1 |
| A-4 | Languages: Indonesian, English | P0 |
| A-5 | Professional photo | P1 |

### 6.4 Resume
| ID | Requirement | Priority |
|---|---|---|
| R-1 | HTML version of the resume (ATS/SEO friendly, printable) | P0 |
| R-2 | PDF download button (served from `/Hubert_Gunawan_Resume.pdf`) | P0 |
| R-3 | Resume content and site content come from the same data source | P2 |

### 6.5 Contact
| ID | Requirement | Priority |
|---|---|---|
| C-1 | `mailto:` link and copy-to-clipboard button for email | P0 |
| C-2 | Contact form (name, email, message) with server-side validation, spam protection (honeypot + rate limit), and delivery via AWS SES or similar | P1 |
| C-3 | Links to GitHub ([github.com/hubertgunawan](https://github.com/hubertgunawan)) and LinkedIn (URL TBD) | P0 |
| C-4 | Success/error states and confirmation message | P1 |

### 6.6 Global
| ID | Requirement | Priority |
|---|---|---|
| G-1 | Fully responsive (360 px → 1920 px) | P0 |
| G-2 | Dark / light mode (follows system, manual toggle, persisted) | P1 |
| G-3 | SEO: per-page title/description targeting "Software Engineer" and "AI Engineer", Open Graph & Twitter cards, `sitemap.xml`, `robots.txt`, JSON-LD `Person` schema (`jobTitle`, `sameAs` → GitHub) | P0 |
| G-4 | Privacy-friendly analytics (e.g., Plausible/Umami), no cookie banner needed | P1 |
| G-5 | Custom 404 page | P1 |
| G-6 | Subtle motion (respects `prefers-reduced-motion`) | P2 |

## 7. Non-Functional Requirements

| Area | Requirement |
|---|---|
| **Performance** | Lighthouse ≥ 95 on all categories (mobile). LCP < 2.0 s, CLS < 0.1, INP < 200 ms. Initial JS < 100 KB gzipped. |
| **Accessibility** | WCAG 2.2 AA: semantic HTML, keyboard navigation, visible focus, alt text, contrast ≥ 4.5:1. |
| **Security** | HTTPS only, HSTS, CSP, no secrets in the client, phone number not exposed, contact endpoint rate-limited. |
| **Reliability** | Static-first so the site works if the contact API is down. 99.9% availability through CDN. |
| **Maintainability** | Content in typed data files / MDX. Linting, formatting, and type checks enforced in CI. |
| **Testing** | Unit tests for components/utilities, an E2E smoke test (nav, resume download, contact form), and accessibility checks (axe) in CI. |

## 8. Technical Approach

**Hosting decision:** Hubert self-hosts and manages the site on his own AWS account. No managed platforms (Vercel/Netlify). The stack below is chosen to match and demonstrate resume skills.

| Layer | Choice | Rationale |
|---|---|---|
| Framework | **Next.js (React) + TypeScript**, static export / SSG | Shows React skills; great performance and SEO |
| Styling | Tailwind CSS | Fast, consistent design system |
| Content | MDX for case studies; typed JSON/TS for experience, skills, education | Easy updates; one source of truth |
| Contact API | **Node.js** serverless function (AWS Lambda + API Gateway) → AWS SES | Shows Node.js + AWS backend skills |
| Hosting (self-managed) | **AWS S3 + CloudFront**, Route 53 for `haheng.au`, ACM for TLS | Shows AWS skills; low cost; full control |
| Monitoring | CloudWatch alarms (Lambda errors, 5xx rate), uptime check, AWS Budgets alert | Owning hosting means owning uptime and cost |
| IaC | AWS CDK or Terraform | Reproducible infrastructure |
| Containers | Dockerfile for local dev/preview builds | Shows Docker skills (Kubernetes isn't needed for a static site; mention it in case studies instead) |
| Source & CI/CD | Public repo on **github.com/hubertgunawan**; GitHub Actions: lint → type-check → test → build → deploy (OIDC role, no long-lived AWS keys) → CloudFront invalidation | Shows test automation; repo doubles as a code sample |
| Testing | Vitest + React Testing Library, Playwright, axe-core | Matches "Unit Testing and Test Automation" |

## 9. Design Direction

- **Tone:** Professional, clean, engineer-focused. Let content lead and keep visual noise low.
- **Visual:** Neutral base with one accent color, monospace accents for technical labels, generous whitespace.
- **Typography:** Sans-serif for body text (e.g., Inter), monospace for code and tags (e.g., JetBrains Mono).
- **Signature element (optional):** Subtle terminal or API-response styling in the hero (e.g., `GET /hubert → 200 OK`, or an agent-style log line) to reflect both backend and AI focus.
- **Imagery:** Architecture diagrams over screenshots, which also avoids NDA issues.

## 10. Success Metrics

| Metric | Target (first 3 months post-launch) |
|---|---|
| Lighthouse scores (mobile) | ≥ 95 in all categories |
| Resume downloads | Tracked; ≥ 20% of unique visitors on /resume |
| Contact form submissions / email clicks | Tracked; ≥ 5 recruiter contacts |
| Avg. time on case study pages | ≥ 2 minutes |
| Blog click-through from portfolio | Tracked |
| GitHub click-through | Tracked |
| Recruiter contacts by role | Tracked separately for Software Engineer vs AI Engineer |
| Interviews attributed to site | Self-reported |

## 11. Milestones

| Phase | Scope | Est. |
|---|---|---|
| **M0 — Setup** | Repo, Next.js + TS + Tailwind, lint/test/CI, AWS infra (S3, CloudFront, Route 53, ACM) | 2–3 days |
| **M1 — Content** | Write content data files; draft P1, P4, P5 case studies; prepare diagrams and photo; clean up GitHub profile (README, pinned repos) | 3–4 days |
| **M2 — Core pages (P0)** | Home, Projects, Case study template, About, Resume, Contact (mailto), SEO | 4–5 days |
| **M3 — Enhancements (P1)** | Contact form (Lambda + SES), dark mode, blog feed, analytics, 404, remaining case studies | 3–4 days |
| **M4 — QA & Launch** | Accessibility/performance audit, cross-browser testing, DNS cutover, submit sitemap | 1–2 days |

**Total:** about 2.5–3.5 weeks part-time.

## 12. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| NDA limits on company project details | Use generic descriptions, diagrams, and outcomes; no proprietary code or screenshots |
| Employment gap after 10/2023 / non-tech roles | Frame them in "Beyond Software"; keep the engineering skill story current through the blog, AI agent work, and the portfolio itself |
| Few public code samples | Publish the portfolio repo openly on github.com/hubertgunawan; add small open-source demos (e.g., a REST API with tests, Docker, and K8s manifests; an AI agent demo; the thesis code) |
| AI experience is mostly personal/academic | Treat P4 and P5 as full engineering case studies with real metrics; open-source the blog agent pipeline if possible |
| Mixed SE/AI message dilutes positioning | One unified headline, with role-specific filters and featured cards so each audience finds its evidence quickly |
| Self-hosting cost and uptime | CloudFront + S3 static hosting (very low cost), AWS Budgets alerts, CloudWatch alarms, IaC for fast rebuilds |
| Blog feed unavailable | Fetch at build time with a fallback; never block page render |
| Contact form spam | Honeypot, rate limiting, server-side validation, optional Turnstile/hCaptcha |

## 13. Open Questions

1. ~~**Location:** Which location should the site show?~~ **Resolved:** Surabaya, Indonesia.
2. **Remote / relocation:** Should the "Open to work" badge (H-2) say anything about remote work or relocation?
3. ~~**Target role:**~~ **Resolved:** Software Engineer and AI Engineer.
4. **Public links:** GitHub **resolved** (github.com/hubertgunawan). LinkedIn URL still needed.
5. **Project assets:** Are any screenshots, demos, or repos available for the warehouse app, React platform, student registration system, or thesis?
6. **Metrics:** Are there quantifiable results (e.g., inventory time saved, users, uptime) for the case studies?
7. **Blog integration:** Does blog.haheng.au expose an RSS/JSON feed?
8. **Additional Experience:** Show it on the site, or keep it only in the PDF resume?
9. ~~**Hosting preference:**~~ **Resolved:** Self-hosted on Hubert's own AWS account.
10. **AI tooling:** Which AI/ML tools and models were used (e.g., Python, PyTorch/TensorFlow, which LLM APIs, agent frameworks)? These are needed for the skills section and the P4/P5 case studies.

## 14. Appendix: Suggested Copy

**Hero headline:** Hubert Gunawan — Software & AI Engineer building reliable backends, full-stack apps, and AI agents.

**Hero sub-copy:** 3+ years designing REST APIs, databases, and containerized services with Node.js, React, and AWS. Now building AI agents that run in production, like the one that writes my blog every day.

**Featured project blurbs:**
- **Warehouse Stock Management:** A handheld inventory app and Node.js backend that replaced manual stock tracking for warehouse operations staff.
- **AI-Powered Daily Blog:** An autonomous pipeline of AI agents that writes and publishes a new post on blog.haheng.au every day.
- **Deepfake Detection (LSTM + rPPG):** A thesis model that spots deepfake videos by reading heart-rate signals from facial skin and classifying them over time with an LSTM.
- **React Web Platform:** A production web app built from scratch, from architecture through Docker and Kubernetes deployment on AWS.
