"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * The transition from Homepage to Becoming — timed exactly per
 * docs/becoming/05_BECOMING_INTERACTIONS.md's "Opening Sequence". The two
 * lines are the manuscript's own opening words (content/stories/
 * 01_where_it_all_began.md), never invented.
 */
const OPENING_LINES = [
  "There is a question I get asked from time to time.",
  "“When did your journey into technology begin?”",
];

const FADE_IN = 0.8;
const PAUSE = 1.8;
const FADE_OUT = 0.6;
const CHAPTER_REVEAL = 1.2;
const CHAPTER_HOLD = 1;

// Absolute milliseconds from mount, derived from the sequence above.
const ADVANCE_TO_LINE_2 = (FADE_IN + PAUSE) * 1000;
const ADVANCE_TO_CHAPTER = ADVANCE_TO_LINE_2 + (FADE_OUT + FADE_IN + PAUSE) * 1000;
const COMPLETE = ADVANCE_TO_CHAPTER + (FADE_OUT + CHAPTER_REVEAL + CHAPTER_HOLD) * 1000;

type OpeningTransitionProps = {
  chapterTitle: string;
  onComplete: () => void;
};

export function OpeningTransition({ chapterTitle, onComplete }: OpeningTransitionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      onComplete();
      return;
    }

    const timers = [
      setTimeout(() => setStep(1), ADVANCE_TO_LINE_2),
      setTimeout(() => setStep(2), ADVANCE_TO_CHAPTER),
      setTimeout(onComplete, COMPLETE),
    ];

    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldReduceMotion]);

  // Never branch the render itself on shouldReduceMotion — the server has
  // no way to know a client's OS-level motion preference, so doing so
  // causes a hydration mismatch. The effect above already redirects
  // immediately; reduced-motion visitors just see this overlay for the
  // brief moment until that navigation completes.
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onComplete}
      onKeyDown={(e) => e.key === "Enter" && onComplete()}
      aria-label="Skip intro"
      className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-foreground px-6"
    >
      <AnimatePresence mode="wait">
        {step < OPENING_LINES.length ? (
          <m.p
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: FADE_OUT } }}
            transition={{ duration: FADE_IN }}
            className="max-w-[600px] text-center font-heading text-2xl text-background italic md:text-3xl"
          >
            {OPENING_LINES[step]}
          </m.p>
        ) : (
          <m.div
            key="chapter-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: CHAPTER_REVEAL }}
            className="text-center"
          >
            <p className="text-xs font-medium tracking-[0.2em] text-background/70 uppercase">
              Home
            </p>
            <p className="mt-3 font-heading text-2xl text-background md:text-3xl">
              Chapter One
            </p>
            <p className="mt-2 text-background/80">{chapterTitle}</p>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
