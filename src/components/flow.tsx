import { Fragment } from "react";
import { ArrowRightIcon } from "./icons";

type Step = { label: string; note?: string };

/** Simple architecture / pipeline diagram used in case studies. */
export function Flow({ steps, caption }: { steps: Step[]; caption?: string }) {
  return (
    <figure className="not-prose my-8 rounded-lg border border-border bg-surface p-5">
      <ol className="flex flex-col items-stretch gap-2 md:flex-row md:items-center">
        {steps.map((step, i) => (
          <Fragment key={step.label}>
            <li className="flex-1 rounded-md border border-border-strong bg-surface-raised px-3 py-3">
              <p className="font-mono text-xs text-primary">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-1 text-sm font-semibold text-fg">{step.label}</p>
              {step.note && <p className="mt-1 text-xs leading-snug text-muted">{step.note}</p>}
            </li>
            {i < steps.length - 1 && (
              <li aria-hidden="true" className="flex justify-center text-subtle">
                <ArrowRightIcon size={16} className="rotate-90 md:rotate-0" />
              </li>
            )}
          </Fragment>
        ))}
      </ol>
      {caption && (
        <figcaption className="mt-4 font-mono text-xs text-subtle">{caption}</figcaption>
      )}
    </figure>
  );
}
