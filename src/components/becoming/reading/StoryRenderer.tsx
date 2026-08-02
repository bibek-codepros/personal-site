import type { ReactNode } from "react";
import ReactMarkdown from "react-markdown";

import { FadeIn } from "@/components/animations/FadeIn";
import { Divider } from "@/components/shared/Divider";
import { Paragraph } from "@/components/typography/Paragraph";
import { QuoteBlock } from "@/components/typography/QuoteBlock";

import type { BodySegment } from "@/lib/stories";

import { MemoryCard } from "./MemoryCard";

/**
 * Renders the manuscript's markdown exactly as written — headings,
 * paragraphs, emphasis, links, dividers, and (if ever used) blockquotes —
 * with only one addition: paragraphs entering the viewport fade up
 * gently, per docs/becoming/05_BECOMING_INTERACTIONS.md.
 */
function MarkdownFlow({ markdown }: { markdown: string }) {
  return (
    <ReactMarkdown
      components={{
        p: ({ children }) => (
          <FadeIn distance={8} duration={0.4}>
            <Paragraph constrained={false} className="text-pretty">
              {children}
            </Paragraph>
          </FadeIn>
        ),
        hr: () => <Divider className="my-10" />,
        blockquote: ({ children }) => (
          <FadeIn duration={0.6} distance={0}>
            <QuoteBlock className="my-10">{String(children)}</QuoteBlock>
          </FadeIn>
        ),
        h2: ({ children }) => (
          <h2 className="mt-12 font-heading text-2xl text-foreground">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="mt-10 font-heading text-xl text-foreground">{children}</h3>
        ),
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
}

export type MemoryInjection = {
  /** 0-indexed — the Nth memory-type segment in this chapter. */
  afterMemoryIndex: number;
  element: ReactNode;
};

type StoryRendererProps = {
  segments: BodySegment[];
  /** Rendered immediately after a specific memory block — "images placed
   *  where they emotionally belong," never at a fixed generic position. */
  injections?: MemoryInjection[];
  /** Rendered at the very end when a chapter has no memory blocks to
   *  anchor to (e.g. Leading Beyond Code, Still Becoming). */
  fallbackVisual?: ReactNode;
};

/** Assigns each memory-type segment its sequential index (others get -1),
 *  without mutating a counter across the render pass. */
function indexMemorySegments(segments: BodySegment[]): number[] {
  return segments.reduce<{ indices: number[]; count: number }>(
    (acc, segment) =>
      segment.type === "memory"
        ? { indices: [...acc.indices, acc.count], count: acc.count + 1 }
        : { indices: [...acc.indices, -1], count: acc.count },
    { indices: [], count: 0 }
  ).indices;
}

export function StoryRenderer({ segments, injections = [], fallbackVisual }: StoryRendererProps) {
  const hasAnyMemory = segments.some((segment) => segment.type === "memory");
  const memoryIndices = indexMemorySegments(segments);

  return (
    <div className="space-y-6">
      {segments.map((segment, index) => {
        if (segment.type === "memory") {
          const injection = injections.find(
            (i) => i.afterMemoryIndex === memoryIndices[index]
          );
          return (
            <div key={index}>
              <MemoryCard markdown={segment.content} />
              {injection && <div className="my-10 max-w-[420px]">{injection.element}</div>}
            </div>
          );
        }
        return <MarkdownFlow key={index} markdown={segment.content} />;
      })}
      {!hasAnyMemory && fallbackVisual && (
        <div className="my-10 max-w-[420px]">{fallbackVisual}</div>
      )}
    </div>
  );
}
