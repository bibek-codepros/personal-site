"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

import styles from "./currently.module.css";
import type { CarryingThought } from "./currently.data";

type CarryingPanelProps = {
  items: readonly Pick<CarryingThought, "contentsLabel" | "caption">[];
  photoSrc: string;
  photoAlt: string;
};

type RowMetric = { top: number; height: number };

/**
 * The sticky left column: contents list, scroll progress bar, the one
 * photograph, and its museum-label caption strip. All four are driven by a
 * single scroll calculation (see `track`) so the bar, the active row, and
 * the caption can never drift out of sync with each other.
 *
 * Reveal-on-entry for the headline/glyph/prose lives in the sibling
 * CarryingItem — this component only reads item positions via
 * `data-carrying-item`, it never sets their `in` class.
 */
export function CarryingPanel({ items, photoSrc, photoAlt }: CarryingPanelProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const idxRef = useRef<HTMLOListElement>(null);
  const thumbRef = useRef<HTMLSpanElement>(null);
  const rowRefs = useRef<Array<HTMLLIElement | null>>([]);
  const figureRef = useRef<HTMLElement>(null);
  const labelListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const idx = idxRef.current;
    const thumb = thumbRef.current;
    const figure = figureRef.current;
    const labelList = labelListRef.current;
    const shell = root?.parentElement;
    if (!root || !idx || !thumb || !figure || !shell) return;

    const itemEls = Array.from(
      shell.querySelectorAll<HTMLElement>("[data-carrying-item]"),
    );
    const rows = rowRefs.current.filter(
      (el): el is HTMLLIElement => el !== null,
    );
    if (!itemEls.length || !rows.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) root.classList.add("anim");

    let rowMetrics: RowMetric[] = [];
    const measureRows = () => {
      rowMetrics = rows.map((row) => ({
        top: row.offsetTop,
        height: row.offsetHeight,
      }));
    };
    measureRows();

    let activeIndex = -1;
    const setActive = (i: number) => {
      if (i === activeIndex) return;
      activeIndex = i;
      rows.forEach((row, k) => row.classList.toggle("on", k === i));
      if (labelList) {
        const step =
          labelList.firstElementChild instanceof HTMLElement
            ? labelList.firstElementChild.offsetHeight
            : 44;
        labelList.style.transform = `translateY(${-i * step}px)`;
      }
    };

    const track = () => {
      const mid = window.innerHeight * 0.5;
      let i = 0;
      let frac = 0;

      // Read every rect first, then write — never interleave the two.
      const rects = itemEls.map((el) => el.getBoundingClientRect());
      for (let k = 0; k < rects.length; k++) {
        const r = rects[k];
        if (mid >= r.top) {
          i = k;
          frac = Math.min(1, Math.max(0, (mid - r.top) / r.height));
        }
      }

      // The last item's top can sit below the reading line even at maximum
      // scroll — once the page bottom is reached, it is what's being read.
      const atEnd =
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 24;
      if (atEnd) {
        i = itemEls.length - 1;
        frac = 1;
      }

      const row = rowMetrics[i];
      const next = rowMetrics[Math.min(i + 1, rowMetrics.length - 1)];
      const top = row.top + (next.top - row.top) * frac;

      thumb.style.height = `${row.height}px`;
      thumb.style.transform = `translateY(${top}px)`;
      setActive(i);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        track();
      });
    };

    let resizeTimer: number | undefined;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        measureRows();
        track();
      }, 120);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    let figureIo: IntersectionObserver | undefined;
    if (!reduce) {
      figureIo = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              root.classList.add("seen");
              figureIo?.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.25 },
      );
      figureIo.observe(figure);
    }

    setActive(0);
    track();

    // An observer miss must never leave the photograph masked.
    const failsafe = window.setTimeout(() => {
      root.classList.add("seen");
    }, 2800);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(resizeTimer);
      window.clearTimeout(failsafe);
      figureIo?.disconnect();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={cn(styles.panel, "lg:sticky lg:top-[88px] lg:self-start")}
    >
      <div className={cn(styles.idx, "hidden lg:block")}>
        <span className={styles.track} aria-hidden="true" />
        <span ref={thumbRef} className={styles.thumb} aria-hidden="true" />
        <ol ref={idxRef} className={styles.idxList}>
          {items.map((item, index) => (
            <li
              key={item.contentsLabel}
              ref={(el) => {
                rowRefs.current[index] = el;
              }}
              className={styles.row}
            >
              <span className={styles.n}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.t}>{item.contentsLabel}</span>
            </li>
          ))}
        </ol>
      </div>

      <figure ref={figureRef} className={styles.figure}>
        <Image
          src={photoSrc}
          alt={photoAlt}
          width={900}
          height={1125}
          sizes="(min-width: 1280px) 380px, (min-width: 1024px) 330px, 100vw"
        />
        <span className={styles.fmask} aria-hidden="true" />
      </figure>

      <div className={styles.label} aria-hidden="true">
        <ul ref={labelListRef} className={styles.labelList}>
          {items.map((item) => (
            <li key={item.contentsLabel} className={styles.labelItem}>
              {item.caption[0]}
              <br />
              {item.caption[1]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
