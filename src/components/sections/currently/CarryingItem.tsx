"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

import styles from "./currently.module.css";
import type { CarryingThought } from "./currently.data";
import { ReframeMorph, type ReframeMorphHandle } from "./ReframeMorph";

const GLYPHS: Record<CarryingThought["glyph"], ReactNode> = {
  log: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path style={{ "--len": 92 } as CSSProperties} d="M3 6h20M3 13h25M3 20h13" />
      <path
        className={styles.glyphGold}
        style={{ "--len": 26 } as CSSProperties}
        d="M3 28h24"
      />
    </svg>
  ),
  loop: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="4" cy="16" r="2.8" />
      <circle cx="28" cy="16" r="2.8" />
      <path style={{ "--len": 8 } as CSSProperties} d="M8 16h4" />
      <path
        className={styles.glyphGold}
        style={{ "--len": 8 } as CSSProperties}
        d="M20 16h4"
      />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path style={{ "--len": 24 } as CSSProperties} d="M3 25c0-6 4-9 8-9" />
      <path style={{ "--len": 24 } as CSSProperties} d="M21 25c0-6 4-9 8-9" />
      <circle cx="11" cy="10" r="3.6" />
      <circle className={styles.glyphGold} cx="29" cy="10" r="3.6" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path style={{ "--len": 24 } as CSSProperties} d="M3 11h24" />
      <path
        className={styles.glyphGold}
        style={{ "--len": 18 } as CSSProperties}
        d="M3 21h15"
      />
      <circle cx="25" cy="21" r="2.2" />
    </svg>
  ),
};

/**
 * One item in "What I'm Carrying These Days". Default rendering (no JS,
 * prefers-reduced-motion, or before hydration) is the complete, settled
 * item — the `anim`/`in` classes below are added imperatively after mount
 * and are the ONLY thing that ever triggers motion. See currently.module.css
 * for what those two classes unlock.
 *
 * Progress-bar tracking lives in the sibling CarryingPanel and reads this
 * item's position via `data-carrying-item` — this component owns only its
 * own reveal-on-entry, never the active row.
 */
export function CarryingItem({
  thought,
  index,
}: {
  thought: CarryingThought;
  index: number;
}) {
  const rootRef = useRef<HTMLElement>(null);
  const morphRef = useRef<ReframeMorphHandle>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.classList.add("anim");

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      el.classList.add("in");
      morphRef.current?.run();
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal();
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);

    // An observer miss must never leave text — or the morph — un-triggered.
    const failsafe = window.setTimeout(reveal, 2800);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <article
      ref={rootRef}
      data-carrying-item
      className={cn(
        styles.item,
        "border-t border-foreground/[0.13] pt-[38px]",
        "first:border-t-0 first:pt-0 lg:first:pt-1",
        "[&+&]:mt-[60px] md:pt-12 md:[&+&]:mt-24 lg:[&+&]:mt-[132px]",
      )}
    >
      <div className="mb-[18px] flex items-baseline gap-[11px]">
        <span className="font-mono text-[11px] text-gold" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-[12.5px] text-muted-foreground">
          {thought.kicker}
        </span>
      </div>

      <h3 className="font-heading text-[27px] leading-[1.24] font-normal tracking-[-0.01em] text-foreground md:text-[36px] xl:text-[42px]">
        {thought.headline.map((line, lineIndex) => (
          <span key={line} className={styles.ln}>
            <span style={{ "--d": `${lineIndex * 0.09}s` } as CSSProperties}>
              {line}
            </span>
          </span>
        ))}
      </h3>

      <span className={styles.glyph}>{GLYPHS[thought.glyph]}</span>

      {thought.body.kind === "prose" ? (
        <p className="max-w-[44ch] font-heading text-base leading-[1.95] text-foreground md:text-[17.5px]">
          {thought.body.lead}
          <span className="text-muted-foreground">{thought.body.dim}</span>
        </p>
      ) : (
        <ReframeMorph
          ref={morphRef}
          lineAWords={thought.body.lineAWords}
          lineBWords={thought.body.lineBWords}
          tail={thought.body.tail}
        />
      )}

      <p className="mt-[18px] font-mono text-[11px] leading-[1.95] text-muted-foreground md:text-[11.5px]">
        {thought.receipts}
      </p>
    </article>
  );
}
