"use client";

import { useEffect } from "react";

import { trackEvent } from "@/lib/analytics";

import { Differentiation } from "./differentiation";
import { ExampleOutput } from "./example-output";
import { FAQ } from "./faq";
import { Footer } from "./footer";
import { Header } from "./header";
import { Hero } from "./hero";
import { HowItWorks } from "./how-it-works";
import { ProblemSection } from "./problem-section";
import type { LandingContent } from "./types";
import { UseCases } from "./use-cases";
import { WaitlistForm } from "./waitlist-form";

export function LandingPage({ content, locale }: { content: LandingContent; locale: string }) {
  useEffect(() => {
    trackEvent("landing_viewed", { locale });

    const target = document.getElementById("example");
    if (!target) return;

    // 中文注释：只在用户第一次看到示例区时记录一次，避免滚动反复触发。
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackEvent("example_query_viewed", { locale });
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [locale]);

  return (
    <>
      <Header content={content} locale={locale} />
      <main>
        <Hero content={content} locale={locale} />
        <ProblemSection content={content} />
        <HowItWorks content={content} />
        <ExampleOutput content={content} />
        <UseCases content={content} />
        <Differentiation content={content} />
        <WaitlistForm content={content} locale={locale} />
        <FAQ content={content} locale={locale} />
      </main>
      <Footer content={content} />
    </>
  );
}
