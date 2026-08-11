import Image from "next/image";
import Link from "next/link";

import { QuietNav } from "@/components/layout/QuietNav";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  /** The section the reader is already in — passed straight through to
   *  QuietNav. */
  current?: "home" | "becoming" | "notebook" | "contact";
  /** "minimal" is logo-only, no destination links — for the homepage,
   *  where the Hero already carries the page's opening. */
  variant?: "default" | "minimal";
  className?: string;
};

const LOGO_LINK_CLASSES =
  "inline-flex shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

/**
 * The site's quiet identity mark — logo on the left, "Home / Becoming /
 * Notebook / Contact" on the right, current section stronger than the
 * rest. Never a conventional navbar: no background fill, no pills, no
 * animated indicator, nothing sticky — just a thin rule underneath, the
 * top edge of a printed page. This is the ONLY navigation chrome on any
 * page; nothing else should ever look like a second header.
 *
 * Self-contained at 680px — the same centered width as the site's main
 * reading column (Becoming/Notebook) — regardless of how wide or narrow
 * the page around it is, so the logo and nav land at the same horizontal
 * position on every page rather than drifting with each page's own
 * content width. The `minimal` variant (homepage) deliberately skips the
 * centering: it's a left-aligned masthead sitting in normal flow above
 * Hero's own left-aligned content, not a floating badge.
 */
export function SiteHeader({ current, variant = "default", className }: SiteHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-x-8 gap-y-3",
        variant === "default" && "mx-auto max-w-[680px] border-b border-border pb-6",
        className
      )}
    >
      <Link href="/" aria-label="Back to Home" className={LOGO_LINK_CLASSES}>
        <Image
          src="/brand/bibek-dark.svg"
          alt=""
          width={483}
          height={100}
          priority
          className="h-5 w-auto md:h-6"
        />
      </Link>
      {variant === "default" && <QuietNav current={current} />}
    </div>
  );
}
