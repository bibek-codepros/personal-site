# BECOMING CONTENT FLOW

Status: Production Ready

Version: 1.0

---

# Purpose

This document defines how the Becoming experience consumes and presents the manuscript.

The manuscript already exists.

These files are the source of truth.

Claude MUST NEVER rewrite them.

Claude MUST NEVER summarize them.

Claude MUST NEVER replace their voice.

Its responsibility is to present them beautifully.

---

# Source of Truth

The manuscript lives inside:

/stories/

01_where_it_all_began.md

02_starting_again.md

03_the_place_that_believed_in_me.md

04_leading_beyond_code.md

05_window_seat.md

06_still_becoming.md

These files are the heart of HOME.

Everything else exists to support them.

---

# Rendering Strategy

The Becoming page acts as a reading engine.

It loads one chapter.

Displays it.

Provides breathing space.

Then naturally transitions to the next.

The website should never feel like:

Page 1

↓

Page 2

↓

Page 3

Instead it should feel like reading one continuous book.

---

# Chapter Order

The order is fixed.

Do not rearrange.

Chapter One

Where It All Began

↓

Chapter Two

Starting Again

↓

Chapter Three

The Place That Believed In Me

↓

Chapter Four

Leading Beyond Code

↓

Chapter Five

Window Seat

↓

Chapter Six

Still Becoming

---

# Loading Behaviour

Visitor opens Becoming.

Only Chapter One is initially loaded.

Subsequent chapters may be:

Prefetched

Lazy loaded

Or dynamically rendered.

Performance should remain excellent.

---

# Markdown Rules

Render markdown faithfully.

Support:

Headings

Paragraphs

Lists

Quotes

Bold

Italic

Links

Horizontal dividers

Never strip formatting.

Never compress paragraphs.

Respect intentional spacing.

Whitespace is part of the writing.

---

# Chapter Header

Each markdown file should automatically receive:

Chapter Number

Chapter Title

Estimated Reading Time

Short Description

This information comes from the application.

Not from the manuscript.

The manuscript begins immediately afterward.

---

# Reading Time

Calculate automatically.

Approximate:

220 words per minute.

Display:

5 min read

7 min read

9 min read

etc.

---

# Reading Progress

Progress is chapter-based.

Not scroll-based.

Display:

01 • 02 • 03 • 04 • 05 • 06

Highlight the current chapter.

Never show percentage progress.

Reading should never feel like completing a task.

---

# Memory Blocks

Certain paragraphs deserve emphasis.

Claude should detect obvious emotional moments and render them as Memory Blocks.

Examples:

First Nokia phone.

Army Interview.

First HTML.

First International Flight.

Joining Code Pros.

These become visually highlighted.

Not because they are more important.

Because they naturally become emotional anchors.

---

# Reflection Blocks

At the conclusion of every chapter:

Insert one reflection.

Use an existing sentence from the manuscript whenever possible.

Do not invent motivational quotes.

Reflection appears in larger typography.

Centered.

With generous whitespace.

Example:

"Sometimes failure quietly becomes the beginning."

---

# Image Placement

Images should never interrupt reading.

Instead they should appear:

Immediately after a major memory.

Example:

Childhood memory

↓

Image

↓

Continue reading

Not:

Paragraph

Image

Paragraph

Image

Paragraph

Image

Avoid visual noise.

---

# Callout Sections

Certain chapters naturally contain supporting information.

Example:

Army Journey

Could include:

3 Attempts

Passed Physical Tests

Passed IQ Tests

Passed Government Examination

Interview

Not Selected

Present this as an elegant timeline or fact card.

Not a table.

Not a résumé.

This enriches the story without interrupting it.

---

# Supporting Details

Throughout the manuscript,

small details should quietly appear.

Examples:

📍 Kathmandu

📅 Around 2016

✈ Singapore Airlines

☕ First Starbucks

🌊 First Ocean

These should appear as tiny captions.

Never dominate.

They reward attentive readers.

---

# End of Chapter

Every chapter ends identically.

Display:

You have reached the end of Chapter X.

↓

Take a breath.

↓

Open Chapter X+1

The transition should encourage reflection.

Not urgency.

---

# Last Chapter

Chapter Six is different.

No Next button.

Instead display:

Thank you for reading.

HOME is still being written.

Just like life.

↓

Return Home

↓

Visit Notebook

↓

Start a Conversation

---

# Future Expansion

The reading engine should support unlimited future chapters.

Adding a new chapter should require only:

Creating:

/stories/

07_new_story.md

Updating chapter metadata.

No redesign.

No architecture changes.

---

# Future Languages

The architecture should support multilingual content.

Example:

/stories/en/

/stories/ne/

The reading engine remains identical.

Only the manuscript changes.

---

# Notebook Integration

The Becoming experience should naturally lead into Notebook.

Notebook is not another chapter.

Notebook contains:

Thoughts

Ideas

Lessons

Observations

Personal writings

The transition should feel natural.

Not promotional.

---

# Emotional Journey

Every chapter should answer one emotional question.

Chapter One

Where did curiosity begin?

↓

Chapter Two

What happened when the original dream ended?

↓

Chapter Three

Who believed in me before I believed in myself?

↓

Chapter Four

What does leadership actually mean?

↓

Chapter Five

When did life begin making sense?

↓

Chapter Six

What am I still searching for?

Visitors should leave feeling they have walked beside the author rather than simply reading facts.

---

# Definition of Done

The Becoming experience succeeds when:

□ The manuscript remains untouched.

□ Every chapter flows naturally into the next.

□ Reading feels effortless.

□ Emotional moments are highlighted without becoming theatrical.

□ Navigation disappears into the background.

□ Visitors become immersed enough to forget they are using a website.

The story is the interface.

Everything else simply supports it.