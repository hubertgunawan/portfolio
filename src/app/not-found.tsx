import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-start py-24 md:py-32">
      <p className="mb-4 font-mono text-label text-subtle">
        <span className="text-fg">$ curl haheng.au</span>
        <span className="text-primary">/this-page</span>
      </p>
      <p className="mb-6 font-mono text-label text-error">HTTP/1.1 404 Not Found</p>
      <h1 className="mb-4 text-h2 font-bold text-fg md:text-h1">Page not found</h1>
      <p className="mb-8 max-w-lg text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/projects" variant="secondary">
          View projects
        </ButtonLink>
      </div>
    </div>
  );
}
