import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArmyJourneyCallout } from "@/components/becoming/reading/ArmyJourneyCallout";
import { ChapterEnding } from "@/components/becoming/reading/ChapterEnding";
import { ChapterHero } from "@/components/becoming/reading/ChapterHero";
import { ILLUSTRATIONS } from "@/components/becoming/reading/illustrationMap";
import { PageNumber } from "@/components/becoming/reading/PageNumber";
import { ReadingLayout } from "@/components/becoming/reading/ReadingLayout";
import { ReflectionBlock } from "@/components/becoming/reading/ReflectionBlock";
import { RunningHeader } from "@/components/becoming/reading/RunningHeader";
import { StoryRenderer, type MemoryInjection } from "@/components/becoming/reading/StoryRenderer";
import { SupportingDetails } from "@/components/becoming/reading/SupportingDetail";
import { getAdjacentChapters } from "@/content/chaptersMeta";
import { pageMetadata } from "@/lib/site";
import { getChapterBySlug, getChapterSlugs } from "@/lib/stories";

type ChapterPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getChapterSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ChapterPageProps): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);
  if (!chapter) return {};

  const title = `${chapter.title} — Becoming | Bibek Sigdel`;
  const description = chapter.subtitle;

  return {
    title,
    description,
    ...pageMetadata({ title, description, path: `/becoming/${chapter.slug}` }),
  };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);
  if (!chapter) notFound();

  const { next } = getAdjacentChapters(chapter.number);
  const Illustration = chapter.illustrationKey ? ILLUSTRATIONS[chapter.illustrationKey] : undefined;

  // Every chapter now has at most one memory block, so its illustration
  // (if it has one) and its Army-journey callout (only "The Dream" has
  // one) both anchor to that same, single memory. Chapters with neither —
  // a chapter can genuinely have no illustration, per HOME's "specific
  // memory over generic icon" rule — render nothing here at all.
  const memoryVisual =
    Illustration || chapter.armyJourneyCallout ? (
      <>
        {Illustration && <Illustration />}
        {chapter.armyJourneyCallout && <ArmyJourneyCallout {...chapter.armyJourneyCallout} />}
      </>
    ) : undefined;

  const injections: MemoryInjection[] = memoryVisual
    ? [{ afterMemoryIndex: 0, element: memoryVisual }]
    : [];

  return (
    <ReadingLayout backgroundTint={chapter.backgroundTint}>
      <RunningHeader chapterNumber={chapter.number} backgroundTint={chapter.backgroundTint} />
      <PageNumber number={chapter.number} />

      <ChapterHero
        number={chapter.number}
        title={chapter.title}
        subtitle={chapter.subtitle}
        readingTime={chapter.readingTime}
      />

      {chapter.supportingDetails && <SupportingDetails details={chapter.supportingDetails} />}

      <div className="mt-12">
        <StoryRenderer
          segments={chapter.bodySegments}
          injections={injections}
          fallbackVisual={memoryVisual}
        />
      </div>

      {chapter.reflection && <ReflectionBlock markdown={chapter.reflection} />}

      <ChapterEnding current={chapter} next={next} />
    </ReadingLayout>
  );
}
