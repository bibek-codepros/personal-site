import ReactMarkdown from "react-markdown";

import { FadeIn } from "@/components/animations/FadeIn";
import { Paragraph } from "@/components/typography/Paragraph";

type MemoryCardProps = {
  markdown: string;
  title: string;
  location?: string;
};

/**
 * A memory becoming visible — never because it's more important, but
 * because it naturally became an emotional anchor. Reveals border, then
 * label, then title, then content, in a small stagger (per
 * BECOMING_INTERACTIONS.md). Structure follows 03_MEMORY_SYSTEM.md: small
 * label, memory title, short story, optional location.
 */
export function MemoryCard({ markdown, title, location }: MemoryCardProps) {
  return (
    <FadeIn duration={0.5} distance={12} className="my-18">
      <div className="border-l-2 border-gold/50 pl-6">
        <FadeIn duration={0.3} delay={0.12}>
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Memory
          </p>
        </FadeIn>

        <FadeIn duration={0.35} delay={0.2}>
          <p className="mt-2 font-heading text-xl text-foreground">{title}</p>
        </FadeIn>

        <FadeIn duration={0.4} delay={0.32} className="mt-3 space-y-4">
          <ReactMarkdown
            components={{
              p: ({ children }) => (
                <Paragraph constrained={false} className="text-pretty">
                  {children}
                </Paragraph>
              ),
            }}
          >
            {markdown}
          </ReactMarkdown>
        </FadeIn>

        {location && (
          <FadeIn duration={0.3} delay={0.4}>
            <p className="mt-4 text-xs tracking-wide text-muted-foreground uppercase">
              {location}
            </p>
          </FadeIn>
        )}
      </div>
    </FadeIn>
  );
}
