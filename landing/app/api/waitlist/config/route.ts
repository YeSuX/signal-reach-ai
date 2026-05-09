import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextResponse } from "next/server";

type WaitlistConfigEnv = CloudflareEnv & {
  TURNSTILE_SITE_KEY?: string;
  NEXT_PUBLIC_TURNSTILE_SITE_KEY?: string;
};

export async function GET() {
  const { env } = await getCloudflareContext({ async: true });
  const waitlistEnv = env as WaitlistConfigEnv;

  return NextResponse.json(
    {
      siteKey: waitlistEnv.TURNSTILE_SITE_KEY || waitlistEnv.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""
    },
    {
      headers: {
        "Cache-Control": "public, max-age=300"
      }
    }
  );
}
