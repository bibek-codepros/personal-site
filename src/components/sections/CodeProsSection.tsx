import { StorySection } from "@/components/story/StorySection";
import { ChairsIllustration } from "@/components/story/ChairsIllustration";

/**
 * The emotional center of the homepage. Code Pros is never a client or an
 * employer here — it's the place that believed in Bibek before he had
 * reason to believe in himself. Gratitude, never promotion.
 */
export function CodeProsSection() {
  return (
    <StorySection
      id="code-pros"
      heading="The Place That Believed In Me"
      intro="Some chapters deserve more than a timeline. This is one of them."
      paragraphs={[
        "When I joined Code Pros, I wasn't joining a company.",
        "I was entering a place that believed in potential.",
        "I arrived as someone still learning. Curious. Unsure. Trying to understand the craft.",
        "Over time, responsibilities changed. Projects became larger. People trusted me with more.",
        "Eventually, leadership became part of the journey too.",
        "Looking back, I don't think the greatest lesson was technical.",
        "It was discovering how much one person's belief can influence another person's future.",
      ]}
      quote={{
        text: "Some opportunities don't simply change your career. They quietly change who you become.",
      }}
      cta={{ label: "Read this chapter →", href: "/becoming/the-place-that-believed-in-me" }}
      illustration={<ChairsIllustration />}
      imagePosition="right"
      background="card"
    />
  );
}
