"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

import type { LandingContent } from "./types";

export function FAQ({ content, locale }: { content: LandingContent; locale: string }) {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative z-10 mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal">{content.faq.eyebrow}</p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">{content.faq.title}</h2>
      </div>
      <div className="mt-10 divide-y divide-line overflow-hidden rounded-3xl border border-line bg-surface/80">
        {content.faq.items.map((item, index) => {
          const isOpen = index === open;
          return (
            <div key={item.q}>
              <button
                className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left font-semibold focus:outline-none focus:ring-4 focus:ring-signal/20"
                onClick={() => {
                  setOpen(isOpen ? -1 : index);
                  trackEvent("faq_opened", { locale, index });
                }}
                type="button"
              >
                {item.q}
                <ChevronDown className={cn("size-5 shrink-0 transition", isOpen && "rotate-180")} />
              </button>
              <div className={cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-6 text-muted">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

