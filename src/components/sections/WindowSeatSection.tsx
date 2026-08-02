import { StorySection } from "@/components/story/StorySection";
import { WindowSeatIllustration } from "@/components/story/WindowSeatIllustration";

/**
 * Not a travel story — a perspective story. Years of invisible work
 * becoming visible, thirty thousand feet above the ground.
 */
export function WindowSeatSection() {
  return (
    <StorySection
      id="window-seat"
      heading="Window Seat"
      paragraphs={[
        "My first international trip wasn't just about another country. It was about perspective.",
        "Sitting beside an airplane window somewhere above the clouds, I realized something I had never noticed before.",
        "Life wasn't replacing my dreams. It was quietly rewriting them.",
        "Sometimes we only understand our own progress after we've had enough distance to look back. That window seat taught me more than the destination ever could.",
      ]}
      cta={{ label: "Read Window Seat →", href: "/becoming/window-seat" }}
      illustration={<WindowSeatIllustration />}
      imagePosition="left"
      background="secondary"
    />
  );
}
