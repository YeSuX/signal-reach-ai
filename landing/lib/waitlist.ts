export type WaitlistPayload = {
  email: string;
  role: string;
  company?: string;
  useCase: string;
  query: string;
  locale: string;
  turnstileToken: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
};

export type WaitlistApiResponse =
  | {
      ok: true;
      id: number | null;
    }
  | {
      ok: false;
      error: string;
    };

export type WaitlistSubmission = Omit<WaitlistPayload, "turnstileToken"> & {
  ipHash?: string;
  userAgent?: string;
};

// 中文注释：前端只负责提交到内部 API；真实入库、Turnstile 验证都在服务端完成。
export async function submitWaitlist(payload: WaitlistPayload): Promise<WaitlistApiResponse> {
  const response = await fetch("/api/waitlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const data = (await response.json().catch(() => null)) as WaitlistApiResponse | null;

  if (!data) {
    return { ok: false, error: "invalid_response" };
  }

  return data;
}

export function normalizeWaitlistPayload(input: unknown): WaitlistPayload | null {
  if (!input || typeof input !== "object") return null;

  const payload = input as Record<string, unknown>;
  const email = readString(payload.email).toLowerCase();
  const role = readString(payload.role);
  const company = readString(payload.company);
  const useCase = readString(payload.useCase);
  const query = readString(payload.query);
  const locale = readString(payload.locale);
  const turnstileToken = readString(payload.turnstileToken);

  if (!isValidEmail(email) || !role || !useCase || !query || !locale || !turnstileToken) {
    return null;
  }

  return {
    email,
    role: trimTo(role, 120),
    company: company ? trimTo(company, 160) : undefined,
    useCase: trimTo(useCase, 80),
    query: trimTo(query, 2000),
    locale: trimTo(locale, 16),
    turnstileToken,
    utmSource: optionalString(payload.utmSource, 120),
    utmMedium: optionalString(payload.utmMedium, 120),
    utmCampaign: optionalString(payload.utmCampaign, 160)
  };
}

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function optionalString(value: unknown, maxLength: number) {
  const text = readString(value);
  return text ? trimTo(text, maxLength) : undefined;
}

function trimTo(value: string, maxLength: number) {
  return value.length > maxLength ? value.slice(0, maxLength) : value;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
