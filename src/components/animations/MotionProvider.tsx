"use client";

import { domAnimation, LazyMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Loads only the animation features Project HOME actually uses (fade,
 * transform, variants, viewport triggers) instead of framer-motion's full
 * feature set — meaningfully smaller client bundle. Pair with `m.*`
 * components, never the full `motion.*` import, inside this provider.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
