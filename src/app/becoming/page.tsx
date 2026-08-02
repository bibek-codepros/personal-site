import type { Metadata } from "next";
import Link from "next/link";

import { BecomingEntry } from "@/components/becoming/reading/BecomingEntry";
import { CHAPTERS_META } from "@/content/chaptersMeta";

const description =
  "None of us become who we are overnight. This is the story of how I slowly became the person I'm still becoming.";

export const metadata: Metadata = {
  title: "Becoming | Bibek Sigdel",
  description,
};

export default function BecomingRootPage() {
  const firstChapter = CHAPTERS_META[0];

  return (
    <>
      <BecomingEntry
        firstChapterSlug={firstChapter.slug}
        firstChapterTitle={firstChapter.title}
      />
      {/* No-JS fallback — the transition never blocks a real path to the story. */}
      <noscript>
        <div className="flex min-h-[100dvh] items-center justify-center bg-background px-6 text-center">
          <Link href={`/becoming/${firstChapter.slug}`} className="text-lg underline">
            Begin reading — Chapter One: {firstChapter.title}
          </Link>
        </div>
      </noscript>
    </>
  );
}
