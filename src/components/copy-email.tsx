"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "./icons";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <div className="flex items-center justify-between gap-3 rounded-md border border-border bg-surface p-2 pl-4">
      <a
        href={`mailto:${email}`}
        className="truncate font-mono text-sm text-fg transition-colors hover:text-primary"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-sm border border-border bg-surface-raised px-2.5 font-mono text-label text-muted transition-colors hover:border-border-strong hover:text-fg"
        aria-label={copied ? "Email copied" : "Copy email address"}
      >
        {copied ? <CheckIcon size={14} className="text-success" /> : <CopyIcon size={14} />}
        <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
      </button>
    </div>
  );
}
