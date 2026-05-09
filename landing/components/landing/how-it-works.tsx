"use client";

import { Compass, FileSearch, MessageSquareText, Sparkles } from "lucide-react";

import type { LandingContent } from "./types";

const icons = [Compass, FileSearch, Sparkles, MessageSquareText];

export function HowItWorks({ content }: { content: LandingContent }) {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal">{content.how.eyebrow}</p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">{content.how.title}</h2>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {content.how.steps.map((step, index) => {
          const Icon = icons[index] ?? Sparkles;
          return (
            <div className="rounded-3xl border border-line bg-surface/80 p-5 shadow-sm" key={step.title}>
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-signal/10 text-signal">
                <Icon className="size-5" />
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{step.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

