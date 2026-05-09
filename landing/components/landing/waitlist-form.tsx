"use client";

import Script from "next/script";
import { FormEvent, useEffect, useId, useMemo, useRef, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

import { trackEvent } from "@/lib/analytics";
import { submitWaitlist } from "@/lib/waitlist";

import type { LandingContent } from "./types";

type TurnstileApi = {
  render: (
    element: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
      theme: "light" | "dark" | "auto";
    }
  ) => string;
  reset: (widgetId?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export function WaitlistForm({ content, locale }: { content: LandingContent; locale: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [configLoaded, setConfigLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileSiteKey, setTurnstileSiteKey] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [useCase, setUseCase] = useState(content.form.options[0]);
  const [query, setQuery] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | undefined>(undefined);
  const turnstileElementId = useId().replaceAll(":", "");

  const params = useMemo(() => {
    if (typeof window === "undefined") return new URLSearchParams();
    return new URLSearchParams(window.location.search);
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function loadConfig() {
      try {
        const response = await fetch("/api/waitlist/config");
        const data = (await response.json()) as { siteKey?: string };

        if (!isMounted) return;
        setTurnstileSiteKey(data.siteKey || "");
      } catch {
        if (isMounted) setError(content.form.configError);
      } finally {
        if (isMounted) setConfigLoaded(true);
      }
    }

    void loadConfig();

    return () => {
      isMounted = false;
    };
  }, [content.form.configError]);

  useEffect(() => {
    if (!turnstileSiteKey || !turnstileRef.current || widgetIdRef.current || !window.turnstile) return;

    widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
      sitekey: turnstileSiteKey,
      theme: "dark",
      callback: (token) => {
        setTurnstileToken(token);
        setError(null);
      },
      "expired-callback": () => {
        setTurnstileToken("");
        setError(content.form.turnstileExpired);
      },
      "error-callback": () => {
        setTurnstileToken("");
        setError(content.form.turnstileError);
      }
    });
  }, [content.form.turnstileError, content.form.turnstileExpired, turnstileSiteKey]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!turnstileSiteKey) {
      setError(content.form.configError);
      return;
    }

    if (!turnstileToken) {
      setError(content.form.turnstileRequired);
      return;
    }

    const payload = {
      email,
      role,
      company,
      useCase,
      query,
      locale,
      turnstileToken,
      utmSource: params.get("utm_source") || undefined,
      utmMedium: params.get("utm_medium") || undefined,
      utmCampaign: params.get("utm_campaign") || undefined
    };

    trackEvent("waitlist_form_submitted", {
      locale,
      use_case: useCase,
      utm_source: payload.utmSource,
      utm_medium: payload.utmMedium,
      utm_campaign: payload.utmCampaign
    });

    setIsSubmitting(true);
    setError(null);

    try {
      const result = await submitWaitlist(payload);

      if (!result.ok) {
        setError(errorMessageFor(result.error, content));
        window.turnstile?.reset(widgetIdRef.current);
        setTurnstileToken("");
        return;
      }

      setSubmitted(true);
      setEmail("");
      setRole("");
      setCompany("");
      setQuery("");
      window.turnstile?.reset(widgetIdRef.current);
      setTurnstileToken("");
    } catch {
      setError(content.form.error);
      window.turnstile?.reset(widgetIdRef.current);
      setTurnstileToken("");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="waitlist" className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Script
        id="cloudflare-turnstile"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={() => {
          if (!turnstileSiteKey || !turnstileRef.current || widgetIdRef.current || !window.turnstile) return;

          widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
            sitekey: turnstileSiteKey,
            theme: "dark",
            callback: (token) => {
              setTurnstileToken(token);
              setError(null);
            },
            "expired-callback": () => {
              setTurnstileToken("");
              setError(content.form.turnstileExpired);
            },
            "error-callback": () => {
              setTurnstileToken("");
              setError(content.form.turnstileError);
            }
          });
        }}
      />
      <div className="grid gap-10 rounded-[2rem] border border-line bg-ink p-6 text-surface shadow-panel sm:p-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal">{content.form.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">{content.form.title}</h2>
          <p className="mt-5 text-lg leading-8 text-surface/70">{content.form.body}</p>
          {submitted ? (
            <div className="mt-8 flex gap-3 rounded-2xl border border-signal/30 bg-signal/10 p-4 text-sm text-surface">
              <CheckCircle2 className="size-5 shrink-0 text-signal" />
              {content.form.success}
            </div>
          ) : null}
          {error ? (
            <div className="mt-4 flex gap-3 rounded-2xl border border-danger/40 bg-danger/10 p-4 text-sm text-surface">
              <AlertCircle className="size-5 shrink-0 text-danger" />
              {error}
            </div>
          ) : null}
        </div>
        <form className="grid gap-4" onSubmit={onSubmit} onFocus={() => trackEvent("waitlist_form_started", { locale })}>
          <Field label={content.form.email}>
            <input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={content.form.placeholderEmail} className="input" />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={content.form.role}>
              <input required value={role} onChange={(event) => setRole(event.target.value)} placeholder={content.form.placeholderRole} className="input" />
            </Field>
            <Field label={content.form.company}>
              <input value={company} onChange={(event) => setCompany(event.target.value)} placeholder={content.form.placeholderCompany} className="input" />
            </Field>
          </div>
          <Field label={content.form.useCase}>
            <select value={useCase} onChange={(event) => setUseCase(event.target.value)} className="input">
              {content.form.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </Field>
          <Field label={content.form.query}>
            <textarea required value={query} onChange={(event) => setQuery(event.target.value)} placeholder={content.form.placeholderQuery} className="input min-h-32 resize-y" />
          </Field>
          <div className="min-h-[65px]">
            <div id={turnstileElementId} ref={turnstileRef} />
            {configLoaded && !turnstileSiteKey ? <p className="text-xs leading-5 text-danger">{content.form.configError}</p> : null}
          </div>
          <input type="hidden" name="locale" value={locale} />
          <button
            className="inline-flex items-center justify-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-signal/40 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            disabled={isSubmitting || !configLoaded || !turnstileSiteKey}
            type="submit"
          >
            {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : null}
            {isSubmitting ? content.form.submitting : content.form.submit}
          </button>
          <p className="text-xs leading-5 text-surface/50">{content.form.privacy}</p>
        </form>
      </div>
      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 1rem;
          border: 1px solid rgba(255, 253, 247, 0.18);
          background: rgba(255, 253, 247, 0.08);
          padding: 0.85rem 1rem;
          color: #fffdf7;
          outline: none;
        }
        .input:focus {
          border-color: var(--signal);
          box-shadow: 0 0 0 4px rgba(102, 209, 158, 0.14);
        }
        .input::placeholder {
          color: rgba(255, 253, 247, 0.38);
        }
      `}</style>
    </section>
  );
}

function errorMessageFor(error: string, content: LandingContent) {
  if (error === "turnstile_failed") return content.form.turnstileError;
  if (error === "invalid_payload") return content.form.invalidError;
  if (error === "server_not_configured") return content.form.configError;
  return content.form.error;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-surface/70">
      {label}
      {children}
    </label>
  );
}
