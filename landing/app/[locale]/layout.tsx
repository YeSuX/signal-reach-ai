import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";

import { isLocale, locales, type Locale } from "@/lib/i18n";
import "../globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap"
});

const metadataByLocale: Record<Locale, Metadata> = {
  en: {
    metadataBase: new URL("https://signalreach.ai"),
    title: "SignalReach AI - Find high-signal people from a natural language description",
    description:
      "SignalReach AI searches across the web, explains why each person matches, and turns people-search results into personalized outreach drafts.",
    openGraph: {
      title: "SignalReach AI",
      description: "Find high-signal people from a natural language description.",
      images: ["/og.svg"],
      locale: "en_US",
      type: "website"
    }
  },
  "zh-CN": {
    metadataBase: new URL("https://signalreach.ai"),
    title: "SignalReach AI - 用一句话找到高质量目标人选",
    description:
      "SignalReach AI 会跨网络搜索目标对象，解释每个人为什么匹配，并生成可编辑的个性化外联草稿。",
    openGraph: {
      title: "SignalReach AI",
      description: "用一句话找到高质量目标人选。",
      images: ["/og.svg"],
      locale: "zh_CN",
      type: "website"
    }
  }
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return metadataByLocale.en;

  return {
    ...metadataByLocale[locale],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        "zh-CN": "/zh-CN",
        "x-default": "/en"
      }
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        {process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN ? (
          <Script
            data-cf-beacon={`{"token":"${process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN}"}`}
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            strategy="afterInteractive"
          />
        ) : null}
        <NextIntlClientProvider messages={messages}>
          <div className="grain" aria-hidden="true" />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
