# haheng.au

Personal portfolio of **Hubert Gunawan**, Software Engineer & AI Engineer.
Spec: [`PRD.md`](./PRD.md) · Design system: [`DESIGN.md`](./DESIGN.md)

## Stack

Next.js 16 (App Router, static export) · React 19 · TypeScript · Tailwind CSS 4 · MDX · Vitest

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm test
npm run build      # static site in out/
npm run preview    # serve out/ on http://localhost:4173
```

Docker preview of the production build:

```bash
docker build -t haheng-portfolio .
docker run --rm -p 8080:80 haheng-portfolio
```

## Editing content

All content lives in `src/content/`; components don't need to change.

| What | File |
|---|---|
| Name, headline, email, links, location | `profile.ts` |
| Skills | `skills.ts` |
| Experience, education, "Beyond Software" | `experience.ts` |
| Project list, tags, featured flags | `projects.ts` |
| Case study body | `case-studies/<slug>.mdx` |

Case studies can use the `<Flow steps={[...]} />` component for architecture diagrams.
Search for `TODO` in `src/content/` to find metrics and details still to fill in.

The "Latest from the blog" section is fetched from `https://blog.haheng.au/rss/en.xml`
at build time and is hidden if the feed is unavailable.
