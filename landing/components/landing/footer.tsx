"use client";

import type { LandingContent } from "./types";

export function Footer({ content }: { content: LandingContent }) {
  return (
    <footer className="relative z-10 border-t border-line bg-surface/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <div className="font-semibold text-ink">SignalReach AI</div>
          <div>{content.footer.tagline}</div>
        </div>
        <div>{content.footer.privacy}</div>
      </div>
    </footer>
  );
}

