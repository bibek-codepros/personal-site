# 06_ANIMATIONS.md

# Motion & Animation System

Version: 1.0

Status:
Production

Priority:
High

---

# Philosophy

Motion should never impress.

Motion should reassure.

The visitor should rarely notice the animation itself.

Instead,

they should simply feel that everything belongs exactly where it appears.

Animation exists to reduce cognitive load.

Never increase it.

---

# Core Principle

Movement should feel like breathing.

Natural.

Calm.

Almost invisible.

If someone says

"Wow, nice animation."

It is probably too much.

The ideal reaction is

"This website feels wonderful."

without realizing motion created that feeling.

---

# Motion Keywords

Calm

Gentle

Editorial

Elegant

Natural

Responsive

Premium

Intentional

---

# Forbidden Keywords

Flashy

Loud

Playful

Elastic

Bouncy

Game-like

Aggressive

Attention-seeking

---

# Animation Library

Framer Motion

Only.

Avoid additional animation libraries unless absolutely necessary.

---

# Default Duration

Extra Fast

150ms

Fast

250ms

Normal

400ms

Slow

600ms

Very Slow

800ms

Never exceed

1000ms

---

# Default Easing

easeOut

Default.

Occasionally

easeInOut

Never use

Bounce

Elastic

Spring values that overshoot heavily.

---

# Page Load

Purpose

Reduce harsh appearance.

Animation

Opacity

0 → 1

TranslateY

20px → 0

Duration

500ms

Delay

0

Occurs once.

---

# Section Reveal

Every section enters only when approaching viewport.

Animation

Opacity

0 → 1

TranslateY

24px → 0

Duration

500ms

Viewport

Once

Trigger

Approximately 20%

---

# Stagger Rules

Use only inside grouped content.

Cards

Timeline

Buttons

Lists

Delay

80–120ms

Never create long animation chains.

---

# Hero Animation

Eyebrow

↓

Heading

↓

Paragraph

↓

Primary Button

↓

Secondary Button

Each separated by

100ms

The hero should feel welcoming.

Not theatrical.

---

# Typography Animation

Never animate letters.

Never animate words individually.

Avoid

Typewriter

Character reveals

Scrambling effects

Large rotations

Typography should remain readable.

---

# Navigation

Initial

Fade

On Scroll

Background becomes slightly opaque.

Shadow remains minimal.

Transition

250ms

---

# Button Hover

Scale

1 → 1.02

Background transition

150ms

No bounce.

No glow.

---

# Card Hover

TranslateY

-4px

Shadow

Very subtle

Duration

200ms

---

# Image Reveal

Fade

Opacity

TranslateY

12px

No zoom.

No spin.

No rotation.

---

# Timeline Animation

Each milestone appears independently.

Stagger

100ms

Connecting line

Fade only.

---

# Quote Blocks

Fade.

Nothing else.

The words carry enough emotion.

---

# Window Seat

Image

Soft fade.

Story

Delayed fade.

No cinematic motion.

The stillness is intentional.

---

# Current Chapter

Cards

Simple fade.

Hover

Very slight lift.

Maximum

4px

---

# Footer

No entrance animation.

It should feel grounded.

Stable.

Reliable.

---

# Page Transition

Keep transitions short.

Opacity

Fade

Optional

Very small Y translation.

Maximum duration

400ms

---

# Scroll Behaviour

Native browser scrolling.

Smooth scrolling only for anchor navigation.

Never hijack scrolling.

Never create scroll-jacking.

---

# Loading States

Skeleton components.

Soft shimmer.

No spinning loaders unless unavoidable.

---

# Cursor

Default system cursor.

No custom cursor.

No trailing effects.

---

# Mouse Effects

Avoid following mouse movement.

Avoid floating UI.

Avoid cursor physics.

---

# Reduced Motion

Respect

prefers-reduced-motion

Disable:

Fade

Translate

Scale

Stagger

Replace with

Instant appearance.

Accessibility always wins.

---

# Performance

GPU accelerated transforms only.

Prefer

opacity

transform

Avoid animating

width

height

left

top

margin

padding

box-shadow continuously

---

# Motion Checklist

Every animation should answer:

Does it improve understanding?

Does it reduce friction?

Does it support the story?

Would removing it make the experience worse?

If not,

remove it.

---

# Animation Tokens

Create reusable constants.

Example

FAST

NORMAL

SLOW

SECTION_DELAY

CARD_STAGGER

BUTTON_DURATION

Reuse everywhere.

Never hardcode values repeatedly.

---

# Future Motion

Notebook

Page transitions

AI Companion

Image gallery

Timeline expansion

Should all reuse the same motion language.

Never invent new animation styles.

---

# Definition of Done

Motion is complete when:

✓ Visitors never feel distracted.

✓ Animations feel premium.

✓ Reduced motion is respected.

✓ Performance remains excellent.

✓ Every transition has a purpose.

✓ The website feels alive.

Not animated.

---

# North Star

The best animation is the one people never consciously notice.

It quietly guides them through the story.

That is the standard for Project HOME.