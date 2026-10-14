import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Section({
  id,
  className,
  children,
  ...props
}: ComponentProps<"section">) {
  return (
    <section id={id} className={cn("container-page py-16 md:py-24", className)} {...props}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  as: As = "h2",
  action,
  id,
}: {
  eyebrow: string;
  title: string;
  as?: "h1" | "h2";
  action?: ReactNode;
  id?: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between md:mb-10">
      <div>
        <p className="mb-2 font-mono text-label text-primary">{eyebrow}</p>
        <As
          id={id}
          className={cn(
            "font-semibold text-fg",
            As === "h1" ? "text-h2 md:text-h1 font-bold" : "text-h2",
          )}
        >
          {title}
        </As>
      </div>
      {action}
    </div>
  );
}

export function Tag({ children, active }: { children: ReactNode; active?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-2 py-0.5 font-mono text-xs",
        active
          ? "border-primary/40 bg-primary-muted text-primary"
          : "border-border bg-surface-raised text-muted",
      )}
    >
      {children}
    </span>
  );
}

const buttonStyles = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-hover border border-transparent",
  secondary:
    "border border-border-strong text-fg hover:bg-surface-raised",
  ghost: "border border-transparent text-muted hover:text-fg hover:bg-surface-raised",
} as const;

type ButtonVariant = keyof typeof buttonStyles;

const buttonBase =
  "inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-colors duration-150";

export function ButtonLink({
  variant = "primary",
  className,
  external,
  ...props
}: ComponentProps<typeof Link> & { variant?: ButtonVariant; external?: boolean }) {
  return (
    <Link
      className={cn(buttonBase, buttonStyles[variant], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    />
  );
}

export function buttonClass(variant: ButtonVariant = "primary", className?: string) {
  return cn(buttonBase, buttonStyles[variant], className);
}

export function TextLink({
  className,
  external,
  children,
  ...props
}: ComponentProps<typeof Link> & { external?: boolean }) {
  return (
    <Link
      className={cn(
        "group inline-flex items-center gap-1.5 font-mono text-label text-primary transition-colors duration-150 hover:text-primary-hover",
        className,
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </Link>
  );
}

export function Card({ className, children, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("rounded-lg border border-border bg-surface p-6", className)}
      {...props}
    >
      {children}
    </div>
  );
}
