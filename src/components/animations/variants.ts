import type { Transition, Variants } from "framer-motion";

/**
 * Motion tokens — reused everywhere so timing stays consistent.
 * Values follow docs/implementation/06_ANIMATIONS.md. Never hardcode
 * durations or easing directly in a component; import from here.
 */
export const DURATION = {
  extraFast: 0.15,
  fast: 0.25,
  normal: 0.4,
  /** Page load and section reveal — the default entrance duration. */
  section: 0.5,
  slow: 0.6,
  verySlow: 0.8,
} as const;

export const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];
export const EASE_IN_OUT: Transition["ease"] = [0.65, 0, 0.35, 1];

/** Delay between grouped items (cards, timeline entries, lists). */
export const STAGGER_CHILD = 0.1;

/** Delay between sequential hero elements (eyebrow, heading, copy, CTAs). */
export const HERO_STAGGER = 0.1;

/** Fraction of a section that must enter the viewport before it reveals. */
export const SECTION_VIEWPORT_AMOUNT = 0.2;

/**
 * `SECTION_VIEWPORT_AMOUNT` is a fraction of the revealing element's OWN
 * height. For an unusually tall block (e.g. a chapter rendered as one
 * uninterrupted flow of text), that fraction can work out to more pixels
 * than any real viewport is tall — the reveal condition becomes
 * impossible to satisfy and the content stays invisible forever. This is
 * the absolute pixel ceiling on that requirement: once an element is tall
 * enough that 20% of it would exceed this many pixels, the required
 * visible amount is capped here instead, so revealing still happens once
 * a meaningful slice of the content is in view — never an unreachable one.
 * Ordinary, shorter elements are untouched by this (their 20% already
 * resolves under the cap).
 */
export const MAX_VIEWPORT_REVEAL_PX = 200;

export function fadeUp(
  distance = 24,
  duration: number = DURATION.slow,
  delay = 0
): Variants {
  return {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: EASE_OUT },
    },
  };
}

/**
 * A rare, special-occasion reveal — fade + soft blur-to-sharp. Reserved for
 * the one memorable quote moment; never used broadly (06_ANIMATIONS.md's
 * "invisible" motion language stays the default everywhere else).
 */
export function blurFadeUp(
  distance = 16,
  duration: number = DURATION.slow,
  delay = 0
): Variants {
  return {
    hidden: { opacity: 0, y: distance, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration, delay, ease: EASE_OUT },
    },
  };
}

export function fade(duration: number = DURATION.slow, delay = 0): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration, delay, ease: EASE_OUT },
    },
  };
}

export function staggerContainer(
  stagger: number = STAGGER_CHILD,
  delayChildren = 0
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };
}

/**
 * HOME's motion language — named registers, not one fade-up applied
 * everywhere. Pass a register's `distance`/`duration` into `<FadeIn>` so
 * the homepage has deliberate rhythm as a reader moves through it,
 * rather than every section arriving the same way.
 *
 * - whisper — barely-there. Quiet, minor sections (e.g. Today).
 * - pause — almost no motion at all. Whitespace and typography carry the
 *   section, not the reveal (e.g. Current Journey).
 * - arrive — the default entrance. A little more noticeable; fine for
 *   sections meant to feel like discovery (e.g. Chapter Cards).
 * - land — slower and smaller, not bigger. For the emotional landmarks
 *   (One Minute Story, Code Pros, Window Seat) — deliberate, not
 *   dramatic; the content settles into place rather than sliding in.
 */
export const MOTION = {
  whisper: { distance: 8, duration: DURATION.normal },
  pause: { distance: 4, duration: DURATION.slow },
  arrive: { distance: 24, duration: DURATION.section },
  land: { distance: 14, duration: DURATION.verySlow },
} as const;
