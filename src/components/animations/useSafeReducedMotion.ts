import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mediaQuery = window.matchMedia(QUERY);
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getSnapshot(): boolean {
  return window.matchMedia(QUERY).matches;
}

/** The server has no OS to ask, and always assumes motion is fine. */
function getServerSnapshot(): boolean {
  return false;
}

/**
 * A hydration-safe `prefers-reduced-motion` read.
 *
 * The bug this avoids: the server always renders assuming full motion
 * (it has no way to know a visitor's OS preference), but framer-motion's
 * own `useReducedMotion()` can resolve `true` on the client's very first
 * render if the OS already prefers reduced motion — before hydration
 * finishes comparing that render against the server's HTML. The result
 * was a real hydration mismatch on every `FadeIn`/`StaggerGroup` on the
 * page (visible with Playwright's `reducedMotion: "reduce"` emulation,
 * or a real OS-level setting): the "hidden" state's geometry differed
 * between server and client, even though the eventual, fully-mounted
 * result was correct either way.
 *
 * `useSyncExternalStore`'s `getServerSnapshot` is the tool React built
 * specifically for this — it's what both the server and the client's
 * first hydration pass use, so they always agree. The real value is
 * only read afterward, safely, once hydration has already committed.
 */
export function useSafeReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
