"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/content/profile";
import { buttonClass, cn } from "./ui";
import { CloseIcon, ExternalIcon, MenuIcon } from "./icons";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
] as const;

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (href: string) =>
    cn(
      "relative text-sm transition-colors duration-150 hover:text-fg",
      isActive(pathname, href) ? "text-fg" : "text-muted",
    );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-semibold text-fg transition-colors hover:text-primary"
        >
          {profile.shortName}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass(item.href)}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
              {isActive(pathname, item.href) && (
                <span className="absolute -bottom-[22px] left-0 h-px w-full bg-primary" />
              )}
            </Link>
          ))}
          <a
            href={profile.links.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-fg"
          >
            Blog <ExternalIcon size={14} />
          </a>
          <Link href="/#contact" className={buttonClass("primary", "h-9 px-4")}>
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md text-muted hover:bg-surface-raised hover:text-fg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-border bg-background md:hidden"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a")) setOpen(false);
          }}
        >
          <ul className="container-page flex flex-col py-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(linkClass(item.href), "block py-3")}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={profile.links.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 py-3 text-sm text-muted hover:text-fg"
              >
                Blog <ExternalIcon size={14} />
              </a>
            </li>
            <li className="pt-2 pb-1">
              <Link href="/#contact" className={buttonClass("primary", "w-full")}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
