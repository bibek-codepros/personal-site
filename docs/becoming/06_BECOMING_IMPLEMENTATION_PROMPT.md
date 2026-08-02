# BECOMING IMPLEMENTATION PROMPT

You are joining an existing production project called **HOME**.

This is NOT a portfolio website.

This is NOT a personal brand website.

This is NOT a resume.

This is a digital memoir.

Before writing any code, understand that the experience is more important than the interface.

You are expected to think like a Senior Product Designer, Senior Frontend Engineer, Motion Designer, UX Writer, and Creative Director simultaneously.

You are responsible for building one of the most memorable reading experiences on the web.

---

# IMPORTANT PROJECT STRUCTURE

The project has already been architected.

Do NOT change the architecture.

Current structure:

```
/
├── app/
├── components/
├── content/
│   └── stories/
│       ├── 01_where_it_all_began.md
│       ├── 02_starting_again.md
│       ├── 03_the_place_that_believed_in_me.md
│       ├── 04_leading_beyond_code.md
│       ├── 05_window_seat.md
│       └── 06_still_becoming.md
│
├── docs/
│   ├── homepage/
│   ├── becoming/
│   │
│   ├── PROJECT_VISION.md
│   ├── DESIGN_SYSTEM.md
│   ├── UX_PRINCIPLES.md
│   └── NARRATIVE_GUIDE.md
```

---

# BEFORE WRITING CODE

Read these documents completely.

Priority order:

1.

PROJECT_VISION.md

2.

NARRATIVE_GUIDE.md

3.

DESIGN_SYSTEM.md

4.

UX_PRINCIPLES.md

5.

Homepage documentation

6.

Becoming documentation

You must understand the philosophy before implementation.

---

# READ THESE DOCUMENTS

Inside

docs/becoming/

Read:

01_BECOMING_STRUCTURE.md

02_BECOMING_CONTENT_FLOW.md

03_BECOMING_ART_DIRECTION.md

04_BECOMING_UI_REVIEW.md

05_BECOMING_INTERACTIONS.md

These are NOT optional.

Treat them as production requirements.

---

# THE MANUSCRIPT

The actual story already exists.

Location:

content/stories/

DO NOT rewrite.

DO NOT summarize.

DO NOT replace.

DO NOT "improve" writing.

These markdown files are the manuscript.

They are the single source of truth.

Your job is to present them beautifully.

Nothing more.

---

# BUILD A READING ENGINE

Do NOT build six independent pages.

Instead build one reading experience.

Architecture:

Becoming

↓

loads

01_where_it_all_began.md

↓

Next

↓

loads

02_starting_again.md

↓

Next

↓

loads

03...

Continue until Chapter Six.

The reading engine should support unlimited future chapters.

Adding

07_new_story.md

should require almost zero code changes.

Think dynamically.

Not statically.

---

# CHAPTER METADATA

Every story should support metadata.

If metadata is missing,

create a parser that supports future frontmatter.

Example:

---

chapter: 1

title: Where It All Began

subtitle: A story about curiosity.

year: 2016

location: Kathmandu

coverImage: placeholder

illustration: placeholder

---

Use this metadata to build:

Hero section

Reading time

Navigation

SEO

Future search

Future filtering

Timeline

Do not hardcode values.

---

# PAGE EXPERIENCE

This is NOT a scrolling webpage.

It is a reading experience.

Visitor journey:

Homepage

↓

Walk With Me

↓

Opening Transition

↓

Chapter One

↓

Reflection

↓

Chapter Two

↓

Reflection

↓

Chapter Three

↓

...

↓

Final Chapter

↓

Notebook

Every transition should feel intentional.

---

# DESIGN REQUIREMENTS

The interface should disappear.

Only the story remains.

Reading width:

680px

Typography:

Editorial

Whitespace:

Generous

Motion:

Minimal

Performance:

Excellent

Accessibility:

Excellent

---

# IMAGES

Use placeholders.

Never use stock photos.

Every placeholder should indicate:

Future photo

Future illustration

Future memory image

Do NOT fill with random images.

---

# ICONS

Use Lucide Icons.

Only when they support understanding.

Never decorate.

---

# MOTION

Follow

05_BECOMING_INTERACTIONS.md

Exactly.

Avoid inventing additional animations.

The project values restraint.

---

# COMPONENTS

Build reusable components.

Suggested components:

ChapterHero

ReadingLayout

StoryRenderer

QuoteBlock

ReflectionBlock

MemoryCard

Timeline

ReadingNavigation

ChapterFooter

ChapterProgress

Divider

IllustrationPlaceholder

ImagePlaceholder

Future chapters should automatically reuse them.

---

# RESPONSIVENESS

Desktop

Tablet

Mobile

Must all feel premium.

Reading comfort always comes before visual effects.

---

# PERFORMANCE

Optimize:

Images

Fonts

Animations

Hydration

Bundle size

Lazy loading

Markdown rendering

The reading experience should remain extremely smooth.

---

# DO NOT

Do NOT redesign Homepage.

Do NOT rewrite stories.

Do NOT replace typography philosophy.

Do NOT add unnecessary sections.

Do NOT add AI-generated filler.

Do NOT make it look like Medium.

Do NOT make it look like Notion.

Do NOT make it look like Substack.

Do NOT make it look like a portfolio.

This should feel closer to reading a beautifully designed memoir.

---

# IF SOMETHING IS MISSING

Do not stop.

Make a sensible decision.

Leave a clear TODO.

Continue building.

Only stop when blocked by missing assets.

---

# PLACEHOLDERS

Whenever real assets are unavailable:

Use tasteful placeholders.

Label them clearly.

Examples:

PHOTO_PLACEHOLDER_BALI

ILLUSTRATION_PLACEHOLDER_CHILDHOOD

PHOTO_PLACEHOLDER_WINDOW_SEAT

Never use Lorem Ipsum.

Never use generic placeholder cards.

---

# IMPLEMENTATION ORDER

1.

Build the reading engine.

2.

Load markdown dynamically.

3.

Build navigation.

4.

Implement transitions.

5.

Implement typography.

6.

Implement responsive layouts.

7.

Implement placeholders.

8.

Polish interactions.

9.

Self-review.

10.

Refine.

---

# FINAL SELF REVIEW

Before considering the task complete,

review your implementation against

04_BECOMING_UI_REVIEW.md

Every item.

Do not skip.

---

# FINAL DELIVERABLE

When implementation is complete,

provide a report containing:

## What was implemented

## Architecture decisions

## Components created

## Remaining placeholders

## Suggested improvements

## Potential technical debt

## Accessibility notes

## Performance notes

## Future enhancement ideas

---

# QUALITY BAR

Do not build a webpage.

Build an experience.

Visitors should finish Becoming feeling like they spent time with a real person—not a website.

If you ever have to choose between adding another visual feature or improving the reading experience,

always choose the reading experience.

The story is the product.

Everything else exists to support it.