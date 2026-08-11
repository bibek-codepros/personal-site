import Link from "next/link";

import { cn } from "@/lib/utils";

const ITEMS = [
  { key: "home", label: "Home", href: "/" },
  { key: "becoming", label: "Becoming", href: "/becoming" },
  { key: "notebook", label: "Notebook", href: "/notebook" },
  { key: "contact", label: "Contact", href: "/contact" },
] as const;

type QuietNavProps = {
  /** The section the reader is already in — rendered stronger/darker
   *  than the rest, not as a plain unclickable label: on a live site,
   *  "current" still needs to read at a glance, not just be inert. */
  current?: (typeof ITEMS)[number]["key"];
  className?: string;
};

const LINK_CLASSES =
  "rounded-sm text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const CURRENT_CLASSES =
  "rounded-sm text-xs font-semibold tracking-[0.15em] text-foreground uppercase";

/**
 * A quiet way to leave a page without reaching for the browser's Back
 * button — never a navbar. "Home" is listed here alongside the logo on
 * purpose: the two aren't redundant, this is the explicit navigation
 * item, the logo is the signature.
 */
export function QuietNav({ current, className }: QuietNavProps) {
  return (
    <nav
      aria-label="Site"
      className={cn("flex flex-wrap items-center gap-x-6 gap-y-1", className)}
    >
      {ITEMS.map((item) =>
        item.key === current ? (
          <span key={item.key} aria-current="page" className={CURRENT_CLASSES}>
            {item.label}
          </span>
        ) : (
          <Link key={item.key} href={item.href} className={LINK_CLASSES}>
            {item.label}
          </Link>
        )
      )}
    </nav>
  );
}
