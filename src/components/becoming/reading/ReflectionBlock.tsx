import ReactMarkdown from "react-markdown";

import { FadeIn } from "@/components/animations/FadeIn";

/**
 * Reflection is sacred. Everything else stops. One slow fade, generous
 * whitespace, no surrounding animation — per BECOMING_INTERACTIONS.md.
 * The 120px margin is 01_EDITORIAL_SYSTEM.md's Vertical Rhythm for
 * Reflection, exactly.
 */
export function ReflectionBlock({ markdown }: { markdown: string }) {
  return (
    <FadeIn duration={0.8} distance={0} className="my-30 space-y-6 text-center">
      <ReactMarkdown
        components={{
          p: ({ children }) => (
            <p className="font-heading text-2xl leading-snug text-balance text-foreground italic md:text-3xl">
              {children}
            </p>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </FadeIn>
  );
}
