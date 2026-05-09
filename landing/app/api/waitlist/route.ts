import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextRequest, NextResponse } from "next/server";

import { normalizeWaitlistPayload, type WaitlistSubmission } from "@/lib/waitlist";

type D1DatabaseBinding = {
  prepare: (query: string) => {
    bind: (...values: Array<string | null>) => {
      run: () => Promise<{ meta?: { last_row_id?: number } }>;
    };
  };
};

type WaitlistEnv = CloudflareEnv & {
  DB?: D1DatabaseBinding;
  TURNSTILE_SECRET_KEY?: string;
};

type TurnstileResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export async function POST(request: NextRequest) {
  const payload = normalizeWaitlistPayload(await request.json().catch(() => null));

  if (!payload) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const { env } = getCloudflareContext();
  const waitlistEnv = env as WaitlistEnv;

  if (!waitlistEnv.DB || !waitlistEnv.TURNSTILE_SECRET_KEY) {
    return NextResponse.json({ ok: false, error: "server_not_configured" }, { status: 500 });
  }

  const ip = request.headers.get("CF-Connecting-IP") || request.headers.get("x-forwarded-for") || "";
  const turnstileOk = await verifyTurnstile({
    token: payload.turnstileToken,
    secret: waitlistEnv.TURNSTILE_SECRET_KEY,
    ip
  });

  if (!turnstileOk) {
    return NextResponse.json({ ok: false, error: "turnstile_failed" }, { status: 403 });
  }

  const submission: WaitlistSubmission = {
    email: payload.email,
    role: payload.role,
    company: payload.company,
    useCase: payload.useCase,
    query: payload.query,
    locale: payload.locale,
    utmSource: payload.utmSource,
    utmMedium: payload.utmMedium,
    utmCampaign: payload.utmCampaign,
    ipHash: await hashIp(ip, waitlistEnv.TURNSTILE_SECRET_KEY),
    userAgent: request.headers.get("user-agent") || undefined
  };

  const result = await waitlistEnv.DB.prepare(
    `INSERT INTO waitlist_submissions (
      email,
      role,
      company,
      use_case,
      query,
      locale,
      utm_source,
      utm_medium,
      utm_campaign,
      ip_hash,
      user_agent
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  )
    .bind(
      submission.email,
      submission.role,
      submission.company ?? null,
      submission.useCase,
      submission.query,
      submission.locale,
      submission.utmSource ?? null,
      submission.utmMedium ?? null,
      submission.utmCampaign ?? null,
      submission.ipHash ?? null,
      submission.userAgent ?? null
    )
    .run();

  return NextResponse.json({ ok: true, id: result.meta?.last_row_id ?? null });
}

async function verifyTurnstile({ token, secret, ip }: { token: string; secret: string; ip: string }) {
  const body = new FormData();
  body.set("secret", secret);
  body.set("response", token);
  if (ip) body.set("remoteip", ip);

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body
  });

  if (!response.ok) return false;

  const data = (await response.json().catch(() => null)) as TurnstileResponse | null;
  return data?.success === true;
}

async function hashIp(ip: string, salt: string) {
  if (!ip) return undefined;

  const bytes = new TextEncoder().encode(`${salt}:${ip}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);

  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}
