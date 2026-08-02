import { ChapterCardsSection } from "@/components/chapters/ChapterCardsSection";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { CodeProsSection } from "@/components/sections/CodeProsSection";
import { CurrentJourneySection } from "@/components/sections/CurrentJourneySection";
import { OneMinuteStorySection } from "@/components/sections/OneMinuteStorySection";
import { QuoteMomentSection } from "@/components/sections/QuoteMomentSection";
import { TodaySection } from "@/components/sections/TodaySection";
import { WindowSeatSection } from "@/components/sections/WindowSeatSection";

export default function Home() {
  return (
    <>
      <Hero />
      <QuoteMomentSection />
      <OneMinuteStorySection />
      <CurrentJourneySection />
      <ChapterCardsSection />
      <CodeProsSection />
      <WindowSeatSection />
      <TodaySection />
      <Footer />
    </>
  );
}
