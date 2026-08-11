import { NextResponse } from "next/server";

import { SITE_URL } from "@/lib/site";

export const runtime = "nodejs";
// Google Apps Script Web Apps occasionally have slow cold starts. Give the
// function enough room for one retry within a single request lifecycle
// rather than surfacing a raw gateway timeout to the visitor.
export const maxDuration = 20;

type InquiryPayload = {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string[];
  /** Clarification text, only meaningful when projectType includes "Something else". */
  projectTypeOther?: string;
  description?: string;
  budget?: string;
  timeline?: string;
  website?: string; // honeypot
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * A single, low-traffic personal site doesn't need a real rate-limiting
 * service — an in-memory sliding window per server instance is enough to
 * blunt casual abuse. It resets on cold start and doesn't share state
 * across serverless instances; that's a known, accepted limitation, not
 * an oversight, per "do not over-engineer this."
 */
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const submissionsByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissionsByIp.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  submissionsByIp.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

async function postWithTimeout(url: string, body: unknown, timeoutMs: number): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timer);
  }
}

function validate(body: InquiryPayload): string | null {
  if (!body.name?.trim()) return "Please share your name.";
  if (!body.email?.trim() || !EMAIL_PATTERN.test(body.email.trim())) {
    return "Please share a valid email.";
  }
  if (!body.projectType || body.projectType.length === 0) return "Choose at least one project type.";
  if (!body.description?.trim()) return "Tell me a little about it.";
  return null;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: "Too many submissions from this connection. Please try again later." },
      { status: 429 }
    );
  }

  let body: InquiryPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this in. Bots that blindly fill
  // every field do. Respond as if nothing happened rather than a error.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ message: validationError }, { status: 400 });
  }

  const endpoint = process.env.GOOGLE_INQUIRY_ENDPOINT;
  if (!endpoint) {
    return NextResponse.json(
      {
        message:
          "This form isn't connected to a destination yet — please email its.bibeksigdel@gmail.com directly in the meantime.",
      },
      { status: 503 }
    );
  }

  // The form no longer has a general "Anything else?" field — the
  // Sheet's "Additional Notes" column is now only ever filled from the
  // "Something else" project-type clarification, when given.
  const additionalNotes = body.projectTypeOther?.trim()
    ? `Something else: ${body.projectTypeOther.trim()}`
    : "";

  const record = {
    timestamp: new Date().toISOString(),
    name: body.name!.trim(),
    email: body.email!.trim(),
    company: body.company?.trim() ?? "",
    projectType: body.projectType,
    description: body.description!.trim(),
    budget: body.budget?.trim() ?? "",
    timeline: body.timeline?.trim() ?? "",
    additionalNotes,
    source: SITE_URL,
    status: "New",
  };

  // One retry, since Apps Script Web Apps occasionally have slow cold
  // starts — a single slow response shouldn't fail a real inquiry. Kept
  // short (worst case ~10.3s total) so a genuinely broken endpoint fails
  // fast instead of leaving the visitor staring at "Sending…".
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const sheetResponse = await postWithTimeout(endpoint, record, 5000);
      if (sheetResponse.ok) {
        return NextResponse.json({ ok: true });
      }
    } catch {
      // fall through to retry or final failure below
    }
    if (attempt === 1) {
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  }

  return NextResponse.json(
    { message: "Something went wrong on my end. Please try again, or email me directly." },
    { status: 502 }
  );
}
