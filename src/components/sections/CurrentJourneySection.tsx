import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";

import { CarryingItem } from "./currently/CarryingItem";
import { CarryingPanel } from "./currently/CarryingPanel";
import { CARRYING_ITEMS } from "./currently/currently.data";

/**
 * What Bibek is concretely inside right now — four present-tense problems,
 * each ending in a question he hasn't answered yet.
 *
 * A single photograph stays pinned in the left column while the four items
 * scroll past it; a contents list and progress bar (both sticky-panel-only,
 * hidden below `lg` — see CarryingPanel) track which one is being read.
 * Every settled state is complete and correct before any motion runs: the
 * `anim`/`in`/`seen` classes that unlock motion are added imperatively,
 * after mount, never through conditional rendering.
 */
export function CurrentJourneySection() {
  return (
    <Section
      background="secondary"
      className="pt-[104px] pb-[120px] md:pt-[140px] md:pb-[160px]"
      aria-labelledby="current-journey-heading"
    >
      <Container>
        <Heading id="current-journey-heading" variant="section">
          What I&rsquo;m Carrying These Days
        </Heading>
        <Paragraph
          variant="muted"
          constrained={false}
          className="mt-[18px] max-w-[44ch] text-base md:mt-[22px] md:text-lg"
        >
          Four things I&rsquo;m in the middle of. None of them finished.
        </Paragraph>

        <div className="mt-14 lg:mt-24 lg:grid lg:grid-cols-[330px_1fr] lg:items-start lg:gap-x-[72px] xl:grid-cols-[380px_1fr] xl:gap-x-24">
          <CarryingPanel
            items={CARRYING_ITEMS}
            photoSrc="/images/carrying/desk.jpg"
            photoAlt="Bibek working at his desk, laptop open beside a second monitor"
          />

          <div className="mt-10 lg:mt-0">
            {CARRYING_ITEMS.map((thought, index) => (
              <CarryingItem
                key={thought.contentsLabel}
                thought={thought}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
