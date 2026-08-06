# NARRATIVE OWNERSHIP
## Version 2 Companion Document — Milestone 0

> "The same memory can live in four rooms of the same house.
> It only becomes clutter when every room tells it the same way."

---

# Purpose

Before we can decide what's repetitive, we need to know what each part of HOME is *for*.

Without that, "repetition" is just a feeling. With it, repetition becomes a specific, checkable thing: the same detail, doing the same job, in two places that were supposed to have different jobs.

This document assigns one responsibility to each major section of HOME. Nothing here edits a sentence of actual content. It only defines what each room of the house is responsible for — so Milestone 1's Repetition Map can ask a sharper question than "have we said this before," namely: **"Which version of this memory belongs here?"**

---

# Homepage — owns Emotional Invitation

**Job:** make a first-time visitor want to stay. Nothing more.

The Homepage should never try to satisfy curiosity. It should provoke it. Every memory that appears here — the Army dream, Code Pros, the window seat — should appear in its *shortest, least detailed* form anywhere on the site. If a visitor could read the Homepage's version of a memory and feel like they already know the whole thing, the Homepage has overreached into Becoming's job.

**Test:** Does this passage make someone want to click further, or does it already tell them everything they'd find if they did?

**Should never contain:** full scenes, complete chronology, the granular sensory detail that makes a memory feel lived-in. That belongs elsewhere. The Homepage gets the *feeling* of the memory, not the memory itself.

---

# Becoming — owns Chronological Truth

**Job:** the throughline. What happened, in what order, and why one thing led to the next.

Becoming is where cause and effect live — the Army failure that made room for networking, the networking degree that led to Code Pros, the HTML that led to leadership, the leadership that led to a window seat over Bali. A Becoming chapter should read as though the reader has been walking alongside Bibek since chapter one, each chapter assuming — and rewarding — that continuity.

**Test:** Does this passage explain how this moment connects to what came before it and what comes after? If yes, it belongs here. If a passage is really just an isolated sensory memory with no bearing on the causal arc — a specific joke about slippers, a specific detail about milk tea — it is doing Notebook's job, not Becoming's.

**Should never contain:** isolated fragments that don't advance the throughline. A detail earns its place in Becoming only if removing it would break the chain from one chapter to the next.

---

# Notebook — owns Emotional Reflection

**Job:** take one small, specific memory and sit with it, alone, without needing the rest of the story to make sense.

Where Becoming connects moments, Notebook isolates one. Each entry should be readable with zero context — no prior chapter required — and should stay at a *smaller* scale than its Becoming counterpart, if it has one. Its value is precision: the exact rupiah figure, the exact thing a mother said at an airport, the exact stall in the market. That specificity is what makes an entry feel like a private notebook page rather than a summary of a chapter.

**Test:** Could this entry be read in complete isolation, by someone who has read nothing else on the site, and still land? If an entry secretly depends on Becoming's version of the same event to make emotional sense, it isn't reflecting — it's duplicating.

**Should never contain:** the connective "because of this, then that" reasoning that belongs to Becoming. And critically — it should never restate a Becoming scene at the *same scale* Becoming already told it. When a Notebook entry and a Becoming chapter currently tell the identical scene at the identical level of detail, the fix is not to delete the Notebook entry. It's to find the smaller, different facet of that same memory that only a notebook page would bother to notice.

---

# Stories — own the Individual Moment

A note on terminology first, in the interest of not guessing: there is currently no separate "Stories" section in the codebase distinct from Becoming. The `content/stories/` folder is Becoming's own source material — the six chapters live there. Rather than inventing a fourth page that doesn't exist, this document defines "Stories" as a **mode**, not a destination: the way a Becoming chapter behaves whenever someone arrives at it directly, out of sequence — from a Homepage link, a shared URL, a search result — rather than reading the chapters in order.

**Job:** whenever a single chapter is the *first* thing a reader sees, it must be complete on its own terms, even though its permanent home is inside a chronological structure.

This is a real tension worth naming plainly: Becoming owns chronological truth, but every one of its chapters must also be able to stand alone, because the Homepage links directly into the middle of the sequence (Code Pros, Window Seat) without requiring chapters 1–2 first. A chapter is doing its "Stories" job well when a reader with zero context still gets a complete emotional experience from it. It is failing that job if it leans on "as I mentioned earlier" in a way that only makes sense to someone reading in order.

**Test:** If someone landed on this exact page with no context at all, would it still feel finished?

**Should never contain:** an ending, or an opening, that only makes sense to a reader who arrived from the previous chapter.

---

# A Worked Example (illustrative only — no content changed here)

Take the Bali material, since it is Version 2's largest single decision.

- **Homepage** should carry only the compressed feeling: a door closing, a window opening. Nothing about Singapore, currency, or slippers belongs here at all.
- **Becoming ch.5** owns the full chronological truth of the trip — how it was decided, how it connected to everything before it (the Army dream, the leadership arc), and how it changed what came after. This is the only place the *connective* version of the trip should exist.
- **Notebook #12–15** should each hold one small, standalone fragment Becoming didn't linger on, examined at diary scale — not the boarding-and-rain sequence again, not the same market negotiation in the same words, but the one detail a diary would notice that a chronological chapter would move past.
- **"Stories" mode** applies the moment someone clicks "Read Window Seat" from the Homepage without having read chapters 1–4 first — at that point, ch.5 needs to work as a complete moment for a reader who has no idea an Army dream or a Code Pros chapter exists.

Four rooms. One memory. Four different jobs. Under this framework, the current overlap isn't automatically a violation — it only becomes one where two rooms are doing the *same* job instead of their own.

---

# What This Enables

Milestone 1's Repetition Map can now ask, for every overlapping memory: which room is currently doing a job that belongs to a different room — and which room is missing its job entirely?

No HOME content has been changed. This document only defines whose job is whose.
