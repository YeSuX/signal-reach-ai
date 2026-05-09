"use client";

import { ExternalLink } from "lucide-react";

import { SpotlightCard } from "@/components/react-bits/spotlight-card";

import type { LandingContent } from "./types";

export function ExampleOutput({ content }: { content: LandingContent }) {
  return (
    <section id="example" className="relative z-10 border-y border-line bg-ink py-20 text-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal">{content.example.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">{content.example.title}</h2>
            <div className="mt-8 rounded-3xl border border-surface/15 bg-surface/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-surface/50">Query</p>
              <p className="mt-3 text-lg leading-7">{content.example.query}</p>
            </div>
          </div>
          <div className="grid gap-4">
            {content.example.cards.map((card, index) => (
              <SpotlightCard
                className="border-surface/15 bg-surface text-ink"
                key={card.role}
              >
                <div className="grid gap-4 md:grid-cols-[1fr_auto]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-semibold">{card.role}</h3>
                      <span className="rounded-full bg-bg px-3 py-1 text-xs font-medium text-muted">{card.segment}</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted">{card.why}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {card.evidence.map((item) => (
                        <span className="inline-flex items-center gap-1 rounded-full border border-line bg-bg px-3 py-1 text-xs font-semibold text-source" key={item}>
                          {item}
                          <ExternalLink className="size-3" />
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 rounded-2xl bg-signal/10 px-4 py-3 text-sm font-medium text-signal">{card.angle}</p>
                  </div>
                  <div className="min-w-24">
                    <div className="rounded-2xl bg-ink px-4 py-3 text-center text-surface">
                      <div className="text-3xl font-bold">{card.score}</div>
                      <div className="text-xs text-surface/60">match</div>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-line">
                      <div
                        className="h-full rounded-full bg-signal"
                        style={{
                          width: `${card.score}%`,
                          transitionDelay: `${index * 120}ms`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

