# 05_COMPONENT_LIBRARY.md

# Component Library

Version: 1.0

Status:
Production

Priority:
Critical

---

# Philosophy

Components should feel like LEGO bricks.

Small.

Reusable.

Predictable.

Every component should solve exactly one problem.

Avoid giant components.

Avoid duplicated UI.

---

# Component Hierarchy

App

↓

Layout

↓

Page

↓

Section

↓

Component

↓

Primitive

Never skip layers.

---

# Folder Structure

/components

layout/

navigation/

hero/

story/

timeline/

sections/

buttons/

typography/

footer/

shared/

animations/

---

# Naming Convention

Use PascalCase.

Examples

Hero.tsx

OpeningLetter.tsx

JourneyTimeline.tsx

WindowSeat.tsx

CurrentChapter.tsx

Footer.tsx

Avoid names like:

Component1

HeroNew

FinalHero

TestComponent

---

# 1. Container

Purpose

Controls maximum width.

Responsibilities

- Horizontal padding
- Responsive width
- Center alignment

Props

children

className

size

Variants

sm

md

lg

xl

Default

lg

---

# 2. Section

Purpose

Standard vertical spacing.

Responsibilities

- Top spacing
- Bottom spacing
- Background support

Props

children

id

background

spacing

---

# 3. Heading

Purpose

Consistent headings.

Props

level

children

align

variant

Variants

Hero

Section

Page

Quote

---

# 4. Paragraph

Purpose

Readable body text.

Maximum width

720px

Variants

Default

Muted

Large

Lead

---

# 5. Button

Variants

Primary

Secondary

Ghost

Text

Sizes

Small

Medium

Large

Rules

Rounded corners.

Comfortable padding.

Subtle hover.

Never flashy.

---

# 6. Navbar

Responsibilities

Navigation

Current page

Responsive menu

Brand logo

Optional theme toggle

Height

72px

Sticky

Yes

Transparent at top

Yes

Blur on scroll

Very subtle

---

# 7. Footer

Responsibilities

Closing message

Navigation

Copyright

Minimal social links

Never overcrowded.

---

# 8. Hero

Contains

Eyebrow

Heading

Description

CTA

Secondary CTA

Animation

Fade only.

---

# 9. OpeningLetter

Contains

Title

Body

Signature

Purpose

Slow reading.

No distractions.

---

# 10. JourneyTimeline

Displays

Career progression.

Supports

Desktop

Mobile

Future additions

Timeline Item contains

Title

Subtitle

Description

Year (optional)

---

# 11. StorySection

Reusable narrative block.

Contains

Heading

Paragraphs

Quote

Optional image

Optional CTA

Used for

Code Pros

Window Seat

Future stories

---

# 12. QuoteBlock

Purpose

Highlight meaningful reflections.

Contains

Quote

Author

Optional context

Style

Large typography.

Lots of whitespace.

---

# 13. ImageBlock

Purpose

Display photography.

Rules

Rounded corners

Responsive

Lazy loaded

Optimized

No decorative frames.

---

# 14. Divider

Purpose

Separate chapters.

Types

Line

Whitespace

Minimal graphic

Default

Whitespace.

---

# 15. CurrentChapter

Contains

Heading

Current focus

Future direction

CTA

---

# 16. SectionTitle

Small reusable component.

Contains

Eyebrow

Heading

Description

Used across every page.

---

# 17. PageHeader

Used for

Becoming

Notebook

Contact

Contains

Title

Description

Optional image

---

# 18. Callout

Purpose

Highlight important thoughts.

Variants

Note

Reflection

Lesson

Quote

---

# 19. StoryImage

Purpose

Support narrative.

Never dominate.

Caption optional.

---

# 20. CTASection

Purpose

Guide users forward.

Contains

Heading

Description

Button

Never aggressive.

---

# Shared Principles

Every component must support

Dark Mode (future)

Accessibility

Keyboard navigation

Reduced motion

Responsive layout

Semantic HTML

---

# Component Rules

One responsibility.

Reusable.

Predictable.

No duplicated logic.

Minimal props.

Readable code.

---

# Accessibility Checklist

Semantic HTML

Keyboard focus

Screen reader labels

Alt text

Contrast AA

Reduced motion

Touch targets 44px+

---

# Performance Checklist

Server Components first

Client Components only when required

Lazy loading

Memoize expensive rendering

Optimize images

Avoid unnecessary state

---

# Definition of Done

A component is complete when

✓ Accessible

✓ Responsive

✓ Reusable

✓ Typed

✓ Documented

✓ Simple

✓ Beautiful

✓ Matches Project HOME philosophy

---

# Future Components

NotebookCard

ReadingCard

PhotoGallery

TimelineFilter

AICompanion

JournalEntry

AnnualReflection

BookRecommendation

LifeEventCard

MemoryGallery

ThemeSwitcher