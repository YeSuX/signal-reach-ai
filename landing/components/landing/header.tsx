"use client";

import Link from "next/link";
import { Globe2, UserRoundSearch } from "lucide-react";

import type { LandingContent } from "./types";

export function Header({ content, locale }: { content: LandingContent; locale: string }) {
  const nextLocale = locale === "zh-CN" ? "en" : "zh-CN";

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="flex items-center gap-3 font-semibold tracking-tight">
          {/* 中文注释：品牌标识直接使用 lucide 的找人搜索图标，保持单线条风格。 */}
          <span className="grid size-9 place-items-center rounded-xl border border-line bg-surface text-ink shadow-sm">
            <UserRoundSearch aria-hidden="true" className="size-5" strokeWidth={2.2} />
          </span>
          SignalReach AI
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          <a className="transition hover:text-ink" href="#product">
            {content.nav.product}
          </a>
          <a className="transition hover:text-ink" href="#example">
            {content.nav.examples}
          </a>
          <a className="transition hover:text-ink" href="#use-cases">
            {content.nav.useCases}
          </a>
          <a className="transition hover:text-ink" href="#faq">
            {content.nav.faq}
          </a>
        </nav>
        <Link
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:border-signal"
          href={`/${nextLocale}`}
          hrefLang={nextLocale}
        >
          <Globe2 className="size-4" />
          {content.nav.language}
        </Link>
      </div>
    </header>
  );
}
