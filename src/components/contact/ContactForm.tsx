"use client";

import { AnimatePresence, m } from "framer-motion";
import { useState, type FormEvent } from "react";

import { useSafeReducedMotion } from "@/components/animations/useSafeReducedMotion";
import { Button } from "@/components/buttons/Button";
import { cn } from "@/lib/utils";

const PROJECT_TYPES = [
  "Website / Web App",
  "Mobile App",
  "AI / Automation",
  "API / Integration",
  "Something else",
] as const;

const OTHER_TYPE = "Something else";

const BUDGETS = ["Not sure yet", "Under $2,000", "$2,000 – $5,000", "$5,000 – $10,000", "$10,000+"];
const TIMELINES = ["Just exploring", "Within 1 month", "1–3 months", "3+ months"];

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string[];
  /** Only shown/used when "Something else" is selected. */
  projectTypeOther: string;
  budget: string;
  timeline: string;
  description: string;
  /** Honeypot — left empty by real visitors, often auto-filled by bots. */
  website: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: [],
  projectTypeOther: "",
  budget: "",
  timeline: "",
  description: "",
  website: "",
};

type FieldErrors = Partial<Record<"name" | "email" | "projectType" | "description", string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(state: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!state.name.trim()) errors.name = "Please share your name.";
  if (!state.email.trim()) errors.email = "Please share an email.";
  else if (!EMAIL_PATTERN.test(state.email.trim())) errors.email = "That email doesn't look right.";
  if (state.projectType.length === 0) errors.projectType = "Choose at least one.";
  if (!state.description.trim()) errors.description = "Tell me a little about it.";
  return errors;
}

const LABEL = "block text-sm font-medium text-foreground";
const FIELD =
  "mt-2 w-full rounded-lg border border-border bg-transparent px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const FIELD_INVALID = "border-destructive";
const ERROR_TEXT = "mt-2 text-sm text-destructive";
const CHIP =
  "rounded-lg border border-border px-4 py-2 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const CHIP_SELECTED = "border-foreground bg-secondary font-medium";

/**
 * Another door into conversation, not a lead-gen form. Client-side
 * validation is a courtesy (instant feedback); the API route re-validates
 * everything server-side since this is public and unauthenticated.
 */
export function ContactForm() {
  const [state, setState] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const shouldReduceMotion = useSafeReducedMotion();

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((s) => ({ ...s, [key]: value }));
  }

  function toggleProjectType(type: string) {
    setState((s) => {
      const selected = s.projectType.includes(type);
      return {
        ...s,
        projectType: selected ? s.projectType.filter((t) => t !== type) : [...s.projectType, type],
        // Clear the clarification text once "Something else" is deselected —
        // no point holding onto detail for an option that's no longer chosen.
        projectTypeOther: type === OTHER_TYPE && selected ? "" : s.projectTypeOther,
      };
    });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (state.website) return; // honeypot tripped — quietly do nothing

    const fieldErrors = validate(state);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus("submitting");
    setServerError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setServerError(
          body.message ?? "Something went wrong. Please try again, or email me directly."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setServerError("Something went wrong. Please try again, or email me directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <m.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg border border-border px-6 py-8"
      >
        <p className="text-lg text-foreground">Got it.</p>
        <p className="mt-2 text-lg text-foreground">
          I&rsquo;ll read through it properly and get back to you.
        </p>
        <p className="mt-4 font-heading text-xl text-muted-foreground italic">
          &mdash; Bibek
        </p>
      </m.div>
    );
  }

  const showOtherDetail = state.projectType.includes(OTHER_TYPE);

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <input
        type="text"
        name="website"
        value={state.website}
        onChange={(e) => update("website", e.target.value)}
        style={{ position: "absolute", left: "-9999px" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="cf-name" className={LABEL}>
          Name
        </label>
        <input
          id="cf-name"
          type="text"
          value={state.name}
          onChange={(e) => update("name", e.target.value)}
          className={cn(FIELD, errors.name && FIELD_INVALID)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "cf-name-error" : undefined}
        />
        {errors.name && (
          <p id="cf-name-error" className={ERROR_TEXT}>
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="cf-email" className={LABEL}>
          Email
        </label>
        <input
          id="cf-email"
          type="email"
          value={state.email}
          onChange={(e) => update("email", e.target.value)}
          className={cn(FIELD, errors.email && FIELD_INVALID)}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "cf-email-error" : undefined}
        />
        {errors.email && (
          <p id="cf-email-error" className={ERROR_TEXT}>
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="cf-company" className={LABEL}>
          Company / Organization
        </label>
        <input
          id="cf-company"
          type="text"
          value={state.company}
          onChange={(e) => update("company", e.target.value)}
          className={FIELD}
        />
      </div>

      <div>
        <span className={LABEL}>What are you looking to build?</span>
        <div
          className="mt-2 flex flex-wrap gap-2"
          role="group"
          aria-describedby={errors.projectType ? "cf-type-error" : undefined}
        >
          {PROJECT_TYPES.map((type) => {
            const selected = state.projectType.includes(type);
            return (
              <button
                key={type}
                type="button"
                aria-pressed={selected}
                onClick={() => toggleProjectType(type)}
                className={cn(CHIP, selected && CHIP_SELECTED)}
              >
                {type}
              </button>
            );
          })}
        </div>
        {errors.projectType && (
          <p id="cf-type-error" className={ERROR_TEXT}>
            {errors.projectType}
          </p>
        )}

        <AnimatePresence>
          {showOtherDetail && (
            <m.div
              key="other-detail"
              initial={shouldReduceMotion ? false : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <label htmlFor="cf-other" className="sr-only">
                What kind of project is it?
              </label>
              <input
                id="cf-other"
                type="text"
                value={state.projectTypeOther}
                onChange={(e) => update("projectTypeOther", e.target.value)}
                placeholder="What kind of project is it?"
                className={cn(FIELD, "mt-3")}
              />
            </m.div>
          )}
        </AnimatePresence>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-budget" className={LABEL}>
            Budget
          </label>
          <select
            id="cf-budget"
            value={state.budget}
            onChange={(e) => update("budget", e.target.value)}
            className={FIELD}
          >
            <option value="">Not specified</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cf-timeline" className={LABEL}>
            Timeline
          </label>
          <select
            id="cf-timeline"
            value={state.timeline}
            onChange={(e) => update("timeline", e.target.value)}
            className={FIELD}
          >
            <option value="">Not specified</option>
            {TIMELINES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-description" className={LABEL}>
          Tell me a little about it
        </label>
        <textarea
          id="cf-description"
          rows={5}
          value={state.description}
          onChange={(e) => update("description", e.target.value)}
          placeholder="What are you trying to build, what problem are you solving, or where are you stuck?"
          className={cn(FIELD, errors.description && FIELD_INVALID)}
          aria-invalid={!!errors.description}
          aria-describedby={errors.description ? "cf-description-error" : undefined}
        />
        {errors.description && (
          <p id="cf-description-error" className={ERROR_TEXT}>
            {errors.description}
          </p>
        )}
      </div>

      {status === "error" && serverError && (
        <p role="alert" className={ERROR_TEXT}>
          {serverError}
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Start the conversation →"}
      </Button>
    </form>
  );
}
