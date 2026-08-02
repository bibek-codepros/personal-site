import ReactMarkdown from "react-markdown";

import { FadeIn } from "@/components/animations/FadeIn";
import { Paragraph } from "@/components/typography/Paragraph";

/**
 * A memory becoming visible — never because it's more important, but
 * because it naturally became an emotional anchor. Reveals border, then
 * label, then content, in a small stagger (per BECOMING_INTERACTIONS.md).
 */
export function MemoryCard({ markdown }: { markdown: string }) {
  return (
    <FadeIn duration={0.5} distance={12} className="my-10">
      <div className="border-l-2 border-gold/50 pl-6">
        <FadeIn duration={0.3} delay={0.12}>
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            A Memory
          </p>
        </FadeIn>
        <FadeIn duration={0.4} delay={0.24} className="mt-3 space-y-4">
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
      </div>
    </FadeIn>
  );
}
