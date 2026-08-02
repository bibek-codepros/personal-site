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
