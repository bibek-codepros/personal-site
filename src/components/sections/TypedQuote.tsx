"use client";

import { useEffect, useRef, useState } from "react";

import { useSafeReducedMotion } from "@/components/animations/useSafeReducedMotion";
import { cn } from "@/lib/utils";

/**
 * The same quote, broken into the lines it's read as — presentation only,
 * the sentence itself (and its punctuation) is unchanged.
 */
const QUOTE_LINES = [
  "Sometimes we spend so much time",
  "mourning the doors that close…",
  "that we fail to notice",
  "the windows opening beside them.",
];

const FULL_QUOTE =
  "Sometimes we spend so much time mourning the doors that close… that we fail to notice the windows opening beside them.";

/** A steady, comfortable typing pace — not a race, not a crawl. */
const MS_PER_CHARACTER = 45;
/** A brief pause where a line ends, like a breath between phrases. */
const PAUSE_BETWEEN_LINES_MS = 320;

const LINE_CLASSES =
  "font-heading text-3xl leading-snug text-foreground italic md:text-5xl";

/**
 * Types `lines` out one character at a time, once, the first time
 * `enabled` becomes true — never replays afterward. Under
 * prefers-reduced-motion, every line appears in full immediately.
 */
function useTypedLines(lines: string[], enabled: boolean): number[] {
  const shouldReduceMotion = useSafeReducedMotion();
  const [revealed, setRevealed] = useState<number[]>(() => lines.map(() => 0));
  const startedRef = useRef(false);

  useEffect(() => {
    if (shouldReduceMotion || !enabled || startedRef.current) return;
    startedRef.current = true;

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    let lineIndex = 0;
    let charIndex = 0;

    function typeNextCharacter() {
      if (cancelled || lineIndex >= lines.length) return;

      charIndex += 1;
      // Copied into fresh bindings before scheduling the update: `lineIndex`
      // and `charIndex` are mutated again (for the *next* tick) immediately
      // below, and React doesn't guarantee this updater runs before that
      // happens — reading the mutable loop variables directly here could
      // read next tick's values instead of this tick's.
      const tickLine = lineIndex;
      const tickChar = charIndex;
      setRevealed((previous) => {
        const next = [...previous];
        next[tickLine] = tickChar;
        return next;
      });

      if (charIndex >= lines[lineIndex].length) {
        lineIndex += 1;
        charIndex = 0;
        if (lineIndex < lines.length) {
          timer = setTimeout(typeNextCharacter, PAUSE_BETWEEN_LINES_MS);
        }
        return;
      }
      timer = setTimeout(typeNextCharacter, MS_PER_CHARACTER);
    }

    typeNextCharacter();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [enabled, lines, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return lines.map((line) => line.length);
  }
  return revealed;
}

/**
 * Watches its own element and reports, once, the first time it enters the
 * viewport — a plain IntersectionObserver rather than framer-motion's
 * viewport tools, so the typing sequence is independent of the parent's
 * own entrance animation.
 */
function useEnteredViewport<T extends HTMLElement>(): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || entered) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [entered]);

  return [ref, entered];
}

/**
 * The homepage's one memorable quote, typed out one character at a time
 * rather than faded in. Each line keeps the exact box it would occupy
 * fully typed (an invisible twin reserves that width from the first
 * render) so the visible, growing text never re-centers or shifts as it
 * types — only the very last character's position ever moves.
 */
export function TypedQuote() {
  const [containerRef, inView] = useEnteredViewport<HTMLDivElement>();
  const revealed = useTypedLines(QUOTE_LINES, inView);

  return (
    <div ref={containerRef} className="mx-auto max-w-[880px]">
      {/* The real sentence, always fully present for screen readers and
          search engines, independent of the animation below. */}
      <p className="sr-only">{FULL_QUOTE}</p>

      <div aria-hidden="true">
        {QUOTE_LINES.map((line, index) => (
          <div key={line} className="relative mx-auto w-fit">
            <p className={cn(LINE_CLASSES, "invisible")}>{line}</p>
            <p className={cn(LINE_CLASSES, "absolute inset-0 text-left")}>
              {line.slice(0, revealed[index] ?? 0) || " "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
