"use client";

import type { LandingContent } from "./types";

export function Differentiation({ content }: { content: LandingContent }) {
  return (
    <section className="relative z-10 border-y border-line bg-surface/65 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal">{content.difference.eyebrow}</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">{content.difference.title}</h2>
            <div className="mt-8 space-y-3">
              {content.difference.not.map((item) => (
                <p className="rounded-2xl border border-line bg-bg px-5 py-4 text-xl font-semibold" key={item}>
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="grid content-end gap-4">
            {content.difference.pillars.map((pillar) => (
              <div className="rounded-3xl border border-line bg-bg p-5" key={pillar.title}>
                <h3 className="text-xl font-semibold text-signal">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

