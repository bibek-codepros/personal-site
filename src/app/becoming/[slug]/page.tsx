import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArmyJourneyCallout } from "@/components/becoming/reading/ArmyJourneyCallout";
import { ChapterEnding } from "@/components/becoming/reading/ChapterEnding";
import { ChapterHero } from "@/components/becoming/reading/ChapterHero";
import { ILLUSTRATIONS } from "@/components/becoming/reading/illustrationMap";
import { ReadingLayout } from "@/components/becoming/reading/ReadingLayout";
import { ReflectionBlock } from "@/components/becoming/reading/ReflectionBlock";
import { StoryRenderer, type MemoryInjection } from "@/components/becoming/reading/StoryRenderer";
import { SupportingDetails } from "@/components/becoming/reading/SupportingDetail";
import { getAdjacentChapters } from "@/content/chaptersMeta";
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

  return {
    title: `${chapter.title} — Becoming | Bibek Sigdel`,
    description: chapter.subtitle,
  };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);
  if (!chapter) notFound();

  const { next } = getAdjacentChapters(chapter.number);
  const Illustration = ILLUSTRATIONS[chapter.illustrationKey];

  // Chapter 1 needs two things anchored to its two distinct memories; every
  // other illustrated chapter anchors its one illustration to its one
  // memory block. Chapters without a memory block fall back to the end.
  const injections: MemoryInjection[] =
    chapter.slug === "where-it-all-began"
      ? [
          { afterMemoryIndex: 0, element: <Illustration /> },
          { afterMemoryIndex: 1, element: <ArmyJourneyCallout {...chapter.armyJourneyCallout!} /> },
        ]
      : [{ afterMemoryIndex: 0, element: <Illustration /> }];

  return (
    <ReadingLayout backgroundTint={chapter.backgroundTint}>
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
          fallbackVisual={<Illustration />}
        />
      </div>

      {chapter.reflection && <ReflectionBlock markdown={chapter.reflection} />}

      <ChapterEnding current={chapter} next={next} />
    </ReadingLayout>
  );
}
