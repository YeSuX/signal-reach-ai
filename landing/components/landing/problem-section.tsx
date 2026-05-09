"use client";

import { CheckCircle2, XCircle } from "lucide-react";

import type { LandingContent } from "./types";

export function ProblemSection({ content }: { content: LandingContent }) {
  return (
    <section id="product" className="relative z-10 border-y border-line bg-surface/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal">{content.problem.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">{content.problem.title}</h2>
          <p className="mt-5 text-lg leading-8 text-muted">{content.problem.body}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <WorkflowCard title={content.problem.traditional} items={content.problem.oldSteps} negative />
          <WorkflowCard title={content.problem.signalreach} items={content.problem.newSteps} />
        </div>
      </div>
    </section>
  );
}

function WorkflowCard({ title, items, negative = false }: { title: string; items: string[]; negative?: boolean }) {
  const Icon = negative ? XCircle : CheckCircle2;

  return (
    <div className="rounded-3xl border border-line bg-bg/70 p-5">
      <h3 className="mb-5 font-semibold">{title}</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <div className="flex gap-3 rounded-2xl border border-line bg-surface px-4 py-3 text-sm" key={item}>
            <Icon className={negative ? "mt-0.5 size-4 shrink-0 text-danger" : "mt-0.5 size-4 shrink-0 text-signal"} />
            <span className={negative ? "text-muted" : "font-medium text-ink"}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

