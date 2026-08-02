import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ChapterList } from "@/components/notebook/ChapterList";
import { EmptyState } from "@/components/notebook/EmptyState";
import { VolumeHero } from "@/components/notebook/VolumeHero";
import { getAllVolumes } from "@/lib/notebook";

export const metadata: Metadata = {
  title: "Notebook | Bibek Sigdel",
  description:
    "The Notebook — small memories, honestly written. Not a blog. A collection of the moments that quietly shaped a life.",
};

export default function NotebookPage() {
  const volume = getAllVolumes()[0];

  if (!volume) {
    return (
      <Section spacing="lg">
        <Container size="md">
          <EmptyState message="Nothing here yet. Life will eventually give me something worth writing." />
        </Container>
      </Section>
    );
  }

  return (
    <>
      <VolumeHero volume={volume} />
      <ChapterList volume={volume} />
    </>
  );
}
