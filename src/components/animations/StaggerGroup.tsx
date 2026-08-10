"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

import { useCappedViewportAmount } from "./useCappedViewportAmount";
import { useSafeReducedMotion } from "./useSafeReducedMotion";
import {
  DURATION,
  SECTION_VIEWPORT_AMOUNT,
  STAGGER_CHILD,
  fadeUp,
  staggerContainer,
} from "./variants";

/**
 * Pre-declared at module scope (never inside a component) so we never
 * create a new component type during render — required by the rules of
 * hooks and needed for stable animation state across re-renders.
 */
const MOTION_TAG = {
  div: m.div,
  ol: m.ol,
  ul: m.ul,
  li: m.li,
} as const;

type MotionTagName = keyof typeof MOTION_TAG;

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  as?: MotionTagName;
  stagger?: number;
};

/**
 * Reveals a group of children (cards, timeline entries, lists) with a
 * short stagger between each one. Pair with StaggerItem.
 */
export function StaggerGroup({
  children,
  className,
  as = "div",
  stagger = STAGGER_CHILD,
}: StaggerGroupProps) {
  const shouldReduceMotion = useSafeReducedMotion();
  const { amount, measureRef } = useCappedViewportAmount(SECTION_VIEWPORT_AMOUNT);
  const MotionTag = MOTION_TAG[as];

  // Reduced motion: children become visible immediately, never gated
  // behind a scroll/viewport trigger.
  const viewportProps = shouldReduceMotion
    ? { animate: "visible" as const }
    : {
        whileInView: "visible" as const,
        viewport: { once: true, amount },
      };

  return (
    <MotionTag
      ref={measureRef}
      className={className}
      initial="hidden"
      variants={staggerContainer(shouldReduceMotion ? 0 : stagger)}
      {...viewportProps}
    >
      {children}
    </MotionTag>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: MotionTagName;
  distance?: number;
};

export function StaggerItem({
  children,
  className,
  as = "div",
  distance = 24,
}: StaggerItemProps) {
  const shouldReduceMotion = useSafeReducedMotion();
  const MotionTag = MOTION_TAG[as];

  return (
    <MotionTag
      className={className}
      variants={
        shouldReduceMotion
          ? fadeUp(0, 0, 0)
          : fadeUp(distance, DURATION.section)
      }
    >
      {children}
    </MotionTag>
  );
}
