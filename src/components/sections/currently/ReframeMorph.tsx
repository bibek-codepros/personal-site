"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import type { ReactNode, RefObject } from "react";

export type ReframeMorphHandle = {
  /** Runs the morph once; later calls are no-ops. Safe to call repeatedly. */
  run: () => void;
};

type ReframeMorphProps = {
  lineAWords: readonly string[];
  lineBWords: readonly string[];
  tail: string;
};

const EASE = "cubic-bezier(.16,1,.3,1)";

function renderWords(
  words: readonly string[],
  refs: RefObject<Array<HTMLSpanElement | null>>,
) {
  const nodes: ReactNode[] = [];
  words.forEach((word, index) => {
    if (index > 0) nodes.push(" ");
    nodes.push(
      <span
        key={index}
        className="inline-block"
        ref={(el) => {
          refs.current[index] = el;
        }}
      >
        {word}
      </span>,
    );
  });
  return nodes;
}

/**
 * The one piece of this section that can't be done with CSS transitions
 * alone. Both questions are real, always-present text — nothing here is
 * revealed by the morph, only re-positioned. Line B's shared words fly in
 * from line A's measured position (FLIP), then the diverging tail unfolds
 * via clip-path. Both effects run through the Web Animations API directly:
 * without a `run()` call (JS off, or reduced motion upstream), every word
 * and the tail simply render at their normal, correct layout position.
 */
export const ReframeMorph = forwardRef<ReframeMorphHandle, ReframeMorphProps>(
  function ReframeMorph({ lineAWords, lineBWords, tail }, ref) {
    const wordsA = useRef<Array<HTMLSpanElement | null>>([]);
    const wordsB = useRef<Array<HTMLSpanElement | null>>([]);
    const tailRef = useRef<HTMLSpanElement>(null);
    const ranRef = useRef(false);

    useImperativeHandle(ref, () => ({
      run() {
        if (ranRef.current) return;
        ranRef.current = true;

        const play = () => {
          const a = wordsA.current;
          const b = wordsB.current;
          for (let i = 0; i < b.length && i < a.length; i++) {
            const fromEl = a[i];
            const toEl = b[i];
            if (!fromEl || !toEl) continue;
            const from = fromEl.getBoundingClientRect();
            const to = toEl.getBoundingClientRect();
            toEl.animate(
              [
                {
                  transform: `translate(${from.left - to.left}px, ${from.top - to.top}px)`,
                },
                { transform: "translate(0,0)" },
              ],
              {
                duration: 1050,
                delay: 220 + i * 48,
                easing: EASE,
                fill: "both",
              },
            );
          }
          tailRef.current?.animate(
            [{ clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0 0 0)" }],
            { duration: 780, delay: 620, easing: EASE, fill: "both" },
          );
        };

        if (typeof document !== "undefined" && document.fonts?.ready) {
          document.fonts.ready.then(play);
        } else {
          play();
        }
      },
    }));

    return (
      <span className="block">
        <span className="block whitespace-nowrap text-muted-foreground">
          {renderWords(lineAWords, wordsA)}
        </span>
        <span className="block whitespace-nowrap text-foreground">
          {renderWords(lineBWords, wordsB)}
          <span className="inline-block" ref={tailRef}>
            {" " + tail}
            <span className="text-gold">?</span>
          </span>
        </span>
      </span>
    );
  },
);
