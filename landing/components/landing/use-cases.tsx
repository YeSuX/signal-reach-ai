"use client";

import { ArrowUpRight } from "lucide-react";

import type { LandingContent } from "./types";

export function UseCases({ content }: { content: LandingContent }) {
  return (
    <section id="use-cases" className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal">{content.useCases.eyebrow}</p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">{content.useCases.title}</h2>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {content.useCases.items.map((item) => (
          <article className="rounded-3xl border border-line bg-surface/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lift" key={item.title}>
            <div className="flex items-start justify-between gap-6">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <ArrowUpRight className="size-5 text-signal" />
            </div>
            <p className="mt-5 rounded-2xl border border-line bg-bg px-4 py-3 text-sm font-medium text-muted">{item.query}</p>
            <p className="mt-4 text-sm leading-6 text-muted">{item.result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

