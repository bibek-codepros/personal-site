"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

import { useCappedViewportAmount } from "./useCappedViewportAmount";
import { useSafeReducedMotion } from "./useSafeReducedMotion";
import { blurFadeUp, DURATION, SECTION_VIEWPORT_AMOUNT, fadeUp } from "./variants";

/**
 * Pre-declared at module scope (never inside a component) so we never
 * create a new component type during render.
 */
const MOTION_TAG = {
  div: m.div,
  article: m.article,
  li: m.li,
} as const;

type MotionTagName = keyof typeof MOTION_TAG;

type FadeInProps = {
  children: ReactNode;
  className?: string;
  as?: MotionTagName;
  id?: string;
  "aria-labelledby"?: string;
  /** Vertical distance the content travels while revealing, in pixels. */
  distance?: number;
  duration?: number;
  delay?: number;
  /**
   * When true (default), the element reveals as it scrolls into view.
   * Set to false for content that should animate immediately on mount,
   * such as hero elements.
   */
  onScroll?: boolean;
  /**
   * Adds a soft blur-to-sharp transition alongside the fade. Reserved for
   * rare, special-occasion moments (e.g. the homepage's one memorable
   * quote) — never the default reveal.
   */
  blur?: boolean;
};

/**
 * Reveals its children with a gentle fade + upward drift — the only
 * motion pattern Project HOME uses for section entrances. Respects
 * prefers-reduced-motion by appearing instantly.
 */
export function FadeIn({
  children,
  className,
  as = "div",
  distance = 24,
  duration = DURATION.section,
  delay = 0,
  onScroll = true,
  blur = false,
  ...rest
}: FadeInProps) {
  const shouldReduceMotion = useSafeReducedMotion();
  const { amount, measureRef } = useCappedViewportAmount(SECTION_VIEWPORT_AMOUNT);
  const variants = shouldReduceMotion
    ? fadeUp(0, 0, 0)
    : blur
      ? blurFadeUp(distance, duration, delay)
      : fadeUp(distance, duration, delay);
  const MotionTag = MOTION_TAG[as];

  return (
    <MotionTag
      ref={measureRef}
      className={className}
      initial="hidden"
      variants={variants}
      {...(onScroll
        ? {
            whileInView: "visible",
            viewport: { once: true, amount },
          }
        : { animate: "visible" })}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
