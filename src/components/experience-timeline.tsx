import type { Experience } from "@/content/experience";
import { ChevronDownIcon } from "./icons";

export function ExperienceTimeline({ items }: { items: Experience[] }) {
  return (
    <ol className="relative ml-1.5 space-y-8 border-l border-border pl-6 md:pl-8">
      {items.map((item, i) => (
        <li key={`${item.company}-${item.start}`} className="relative">
          <span
            aria-hidden="true"
            className={`absolute top-7 -left-[31px] size-3 rounded-full border-2 bg-background md:-left-[39px] ${
              i === 0 ? "border-primary" : "border-border-strong"
            }`}
          />
          <article className="rounded-lg border border-border bg-surface p-6 transition-colors duration-150 hover:border-border-strong">
            <header className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-h3 font-semibold text-fg">{item.role}</h3>
                <p className="text-sm text-muted">{item.company}</p>
              </div>
              <p className="font-mono text-label text-subtle">
                <time>{item.start}</time> – <time>{item.end}</time>
              </p>
            </header>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-subtle">
              {item.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            {item.details.length > 0 && (
              <details className="group mt-5 border-t border-border pt-4">
                <summary className="inline-flex cursor-pointer list-none items-center gap-1 font-mono text-label text-primary hover:text-primary-hover [&::-webkit-details-marker]:hidden">
                  <span className="group-open:hidden">Show details</span>
                  <span className="hidden group-open:inline">Hide details</span>
                  <ChevronDownIcon
                    size={14}
                    className="transition-transform duration-150 group-open:rotate-180"
                  />
                </summary>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-subtle">
                  {item.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </details>
            )}
          </article>
        </li>
      ))}
    </ol>
  );
}
