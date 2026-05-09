const worker = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/api/waitlist/config") {
      return handleWaitlistConfig(env);
    }

    if (url.pathname === "/api/waitlist" && request.method === "POST") {
      return handleWaitlistSubmission(request, env);
    }

    const { default: openNextWorker } = await import("./.open-next/worker.js");
    return openNextWorker.fetch(request, env, ctx);
  }
};

export default worker;

function handleWaitlistConfig(env) {
  const siteKey = env.TURNSTILE_SITE_KEY || "";

  return json(
    {
      siteKey: siteKey && !siteKey.startsWith("REPLACE_WITH_") ? siteKey : ""
    },
    {
      headers: {
        "Cache-Control": "public, max-age=300"
      }
    }
  );
}

async function handleWaitlistSubmission(request, env) {
  const payload = normalizePayload(await request.json().catch(() => null));

  if (!payload) {
    return json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const database = env.signalreach_landing || env.DB;

  if (!database || !env.TURNSTILE_SECRET_KEY) {
    return json({ ok: false, error: "server_not_configured" }, { status: 500 });
  }

  const ip = request.headers.get("CF-Connecting-IP") || request.headers.get("x-forwarded-for") || "";
  const turnstileOk = await verifyTurnstile({
    token: payload.turnstileToken,
    secret: env.TURNSTILE_SECRET_KEY,
    ip
  });

  if (!turnstileOk) {
    return json({ ok: false, error: "turnstile_failed" }, { status: 403 });
  }

  const result = await database
    .prepare(
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
      payload.email,
      payload.role,
      payload.company ?? null,
      payload.useCase,
      payload.query,
      payload.locale,
      payload.utmSource ?? null,
      payload.utmMedium ?? null,
      payload.utmCampaign ?? null,
      await hashIp(ip, env.TURNSTILE_SECRET_KEY),
      request.headers.get("user-agent") || null
    )
    .run();

  return json({ ok: true, id: result.meta?.last_row_id ?? null });
}

async function verifyTurnstile({ token, secret, ip }) {
  const body = new FormData();
  body.set("secret", secret);
  body.set("response", token);
  if (ip) body.set("remoteip", ip);

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body
  });

  if (!response.ok) return false;

  const data = await response.json().catch(() => null);
  return data?.success === true;
}

function normalizePayload(input) {
  if (!input || typeof input !== "object") return null;

  const email = readString(input.email).toLowerCase();
  const role = readString(input.role);
  const company = readString(input.company);
  const useCase = readString(input.useCase);
  const query = readString(input.query);
  const locale = readString(input.locale);
  const turnstileToken = readString(input.turnstileToken);

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
    utmSource: optionalString(input.utmSource, 120),
    utmMedium: optionalString(input.utmMedium, 120),
    utmCampaign: optionalString(input.utmCampaign, 160)
  };
}

async function hashIp(ip, salt) {
  if (!ip) return undefined;

  const bytes = new TextEncoder().encode(`${salt}:${ip}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);

  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function readString(value) {
  return typeof value === "string" ? value.trim() : "";
}

function optionalString(value, maxLength) {
  const text = readString(value);
  return text ? trimTo(text, maxLength) : undefined;
}

function trimTo(value, maxLength) {
  return value.length > maxLength ? value.slice(0, maxLength) : value;
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function json(payload, init = {}) {
  return Response.json(payload, init);
}
