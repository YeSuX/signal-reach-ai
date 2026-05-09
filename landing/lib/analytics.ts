type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

// 中文注释：Phase 0 先保留轻量埋点封装，后续可替换为 PostHog 或 Cloudflare Zaraz。
export function trackEvent(name: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent("signalreach:analytics", {
      detail: { name, payload }
    })
  );
}

