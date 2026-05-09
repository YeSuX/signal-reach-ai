"use client";

import { ArrowRight, Send } from "lucide-react";

import { AnimatedGrid } from "@/components/react-bits/animated-grid";
import { SplitText } from "@/components/react-bits/split-text";

import type { LandingContent } from "./types";

export function Hero({ content, locale }: { content: LandingContent; locale: string }) {
  return (
    <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:pb-28 lg:pt-20">
      <div className="flex flex-col justify-center">
        <div className="mb-6 w-fit rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-muted shadow-sm">
          {content.hero.badge}
        </div>
        <h1 className="max-w-4xl text-balance font-display text-5xl font-semibold leading-[1.04] tracking-normal text-ink sm:text-6xl lg:text-7xl lg:leading-[1.02]">
          <SplitText text={content.hero.title} />
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">{content.hero.subtitle}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#waitlist"
            onClick={() => window.dispatchEvent(new CustomEvent("signalreach:analytics", { detail: { name: "hero_cta_clicked", payload: { locale } } }))}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-surface transition hover:-translate-y-0.5 hover:bg-signal focus:outline-none focus:ring-4 focus:ring-signal/30"
          >
            {content.hero.primaryCta}
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#waitlist"
            onClick={() => window.dispatchEvent(new CustomEvent("signalreach:analytics", { detail: { name: "secondary_cta_clicked", payload: { locale } } }))}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-signal focus:outline-none focus:ring-4 focus:ring-signal/20"
          >
            {content.hero.secondaryCta}
            <Send className="size-4" />
          </a>
        </div>
      </div>
      <HeroVisual content={content} />
    </section>
  );
}

function HeroVisual({ content }: { content: LandingContent }) {
  return (
    <div className="relative min-h-[540px] overflow-hidden rounded-[2rem] border border-line bg-surface/70 p-4 shadow-panel">
      <AnimatedGrid />
      <div className="relative flex min-h-[508px] flex-col justify-between gap-5">
        <div className="animate-in-up rounded-3xl border border-line bg-surface/95 p-5 shadow-sm">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">{content.hero.queryLabel}</div>
          <p className="text-lg font-semibold leading-7">{content.hero.query}</p>
        </div>
        <div className="animate-in-up rounded-3xl border border-line bg-surface/95 p-5 shadow-sm [animation-delay:160ms]">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">{content.hero.signalsLabel}</div>
          <div className="grid grid-cols-2 gap-3">
            {content.hero.signals.map((signal, index) => (
              <div
                className="rounded-2xl border border-line bg-bg/80 px-3 py-3 text-sm font-medium"
                key={signal}
                style={{ animationDelay: `${220 + index * 100}ms` }}
              >
                <span className="mr-2 inline-block size-2 rounded-full bg-signal" />
                {signal}
              </div>
            ))}
          </div>
        </div>
        <div className="animate-in-up rounded-3xl border border-signal/30 bg-ink p-5 text-surface shadow-lift [animation-delay:320ms]">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-surface/60">{content.hero.topMatch}</span>
            <span className="rounded-full bg-signal px-3 py-1 text-sm font-bold text-white">{content.hero.score}</span>
          </div>
          <h2 className="text-pretty font-display text-3xl leading-tight">{content.hero.matchRole}</h2>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface/15">
            <div className="h-full w-[91%] rounded-full bg-signal" />
          </div>
          <p className="mt-4 text-sm text-surface/70">{content.hero.evidence}</p>
        </div>
      </div>
    </div>
  );
}
