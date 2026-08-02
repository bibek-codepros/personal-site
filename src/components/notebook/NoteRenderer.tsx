import Image from "next/image";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

import type { Note } from "@/lib/notebook";

/**
 * Rich-markdown treatment shared by every note — headings, lists, quotes,
 * images, code, links, rules, per SPRINT_3_NOTEBOOK_IMPLEMENTATION.md's
 * "beautiful typography... comfortable line length... generous whitespace."
 * Blockquotes double as the callout treatment — plain markdown has no
 * separate callout syntax, and none of the manuscript uses one.
 */
const proseComponents: Components = {
  // Every note opens with "# Title" matching its own frontmatter title,
  // which NoteHeader already renders more elegantly — skip the duplicate.
  h1: () => null,
  p: ({ children }) => (
    <p className="text-lg leading-relaxed text-pretty text-foreground">{children}</p>
  ),
  h2: ({ children }) => (
    <h2 className="mt-4 font-heading text-2xl text-foreground">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-2 font-heading text-xl text-foreground">{children}</h3>
  ),
  ul: ({ children }) => (
    <ul className="list-disc space-y-2 pl-6 text-lg text-foreground marker:text-muted-foreground">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal space-y-2 pl-6 text-lg text-foreground marker:text-muted-foreground">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-gold/50 pl-6">
      <div className="font-heading text-xl leading-snug text-balance text-foreground italic md:text-2xl">
        {children}
      </div>
    </blockquote>
  ),
  hr: () => <hr className="border-border" />,
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="text-foreground underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:decoration-foreground"
      >
        {children}
      </a>
    );
  },
  code: ({ children }) => (
    <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[0.9em] text-foreground">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="overflow-x-auto rounded-xl border border-border/60 bg-secondary p-4 font-mono text-sm leading-relaxed text-foreground">
      {children}
    </pre>
  ),
  img: ({ src, alt }) => {
    if (typeof src !== "string") return null;
    return (
      <span className="block">
        <span className="relative block aspect-[3/2] w-full overflow-hidden rounded-2xl border border-border/60 bg-secondary">
          <Image
            src={src}
            alt={alt ?? ""}
            fill
            sizes="(min-width: 768px) 680px, 100vw"
            className="object-cover"
          />
        </span>
        {alt && (
          <span className="mt-3 block text-center text-sm text-muted-foreground">{alt}</span>
        )}
      </span>
    );
  },
};

/** Renders a note's markdown body — the manuscript exactly as written. */
export function NoteRenderer({ note }: { note: Note }) {
  return (
    <div className="space-y-8">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={proseComponents}>
        {note.content}
      </ReactMarkdown>
    </div>
  );
}
