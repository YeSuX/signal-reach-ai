export type WaitlistPayload = {
  email: string;
  role: string;
  company?: string;
  useCase: string;
  query: string;
  locale: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
};

// 中文注释：当前表单使用 mailto fallback，后续可在这里接入 Cloudflare D1 + Turnstile。
export function buildWaitlistMailto(payload: WaitlistPayload) {
  const subject = encodeURIComponent(`SignalReach waitlist: ${payload.useCase}`);
  const body = encodeURIComponent(
    [
      `Email: ${payload.email}`,
      `Role: ${payload.role}`,
      `Company: ${payload.company || "-"}`,
      `Use case: ${payload.useCase}`,
      `Locale: ${payload.locale}`,
      `UTM source: ${payload.utmSource || "-"}`,
      `UTM medium: ${payload.utmMedium || "-"}`,
      `UTM campaign: ${payload.utmCampaign || "-"}`,
      "",
      "Search query:",
      payload.query
    ].join("\n")
  );

  return `mailto:hello@signalreach.ai?subject=${subject}&body=${body}`;
}
