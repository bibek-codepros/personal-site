"use client";

import { useRouter } from "next/navigation";

import { OpeningTransition } from "./OpeningTransition";

type BecomingEntryProps = {
  firstChapterSlug: string;
  firstChapterTitle: string;
};

/** Plays the opening transition once, then enters Chapter One. */
export function BecomingEntry({ firstChapterSlug, firstChapterTitle }: BecomingEntryProps) {
  const router = useRouter();

  return (
    <OpeningTransition
      chapterTitle={firstChapterTitle}
      onComplete={() => router.replace(`/becoming/${firstChapterSlug}`)}
    />
  );
}
