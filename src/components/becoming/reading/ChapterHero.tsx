import Link from "next/link";

import { FadeIn } from "@/components/animations/FadeIn";
import { Divider } from "@/components/shared/Divider";

type ChapterHeroProps = {
  number: number;
  title: string;
  subtitle: string;
  readingTime: number;
};

const STAGGER = 0.12;

/** Every chapter begins identically — consistency creates comfort. */
export function ChapterHero({ number, title, subtitle, readingTime }: ChapterHeroProps) {
  return (
    <header>
      <FadeIn onScroll={false} distance={12} delay={STAGGER * 0}>
        <Link
          href="/"
          className="rounded-sm text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Home
        </Link>
        <p className="mt-1 font-mono text-xs tracking-wide text-muted-foreground uppercase">
          Chapter {String(number).padStart(2, "0")}
        </p>
      </FadeIn>

      <FadeIn onScroll={false} distance={12} delay={STAGGER * 1} className="mt-4">
        <h1 className="font-heading text-[32px] leading-[1.2] font-normal text-foreground md:text-[40px]">
          {title}
        </h1>
      </FadeIn>

      <FadeIn onScroll={false} distance={12} delay={STAGGER * 2} className="mt-4">
        <p className="font-heading text-xl text-muted-foreground italic">{subtitle}</p>
      </FadeIn>

      <FadeIn onScroll={false} distance={12} delay={STAGGER * 3} className="mt-4">
        <p className="text-sm text-muted-foreground">{readingTime} min read</p>
      </FadeIn>

      <FadeIn onScroll={false} distance={12} delay={STAGGER * 4} className="mt-10">
        <Divider />
      </FadeIn>
    </header>
  );
}
