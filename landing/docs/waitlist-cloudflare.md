# Waitlist Cloudflare Setup

## 1. Create D1 database

```bash
bunx wrangler d1 create signalreach_landing
```

Copy the returned `database_id` into `wrangler.jsonc`:

```jsonc
"d1_databases": [
  {
    "binding": "DB",
    "database_name": "signalreach_landing",
    "database_id": "<DATABASE_ID>",
    "migrations_dir": "migrations"
  }
]
```

## 2. Apply migrations

```bash
bunx wrangler d1 migrations apply signalreach_landing --remote
```

## 3. Configure Turnstile

Create a Turnstile widget in Cloudflare, then set:

```jsonc
"vars": {
  "TURNSTILE_SITE_KEY": "<TURNSTILE_SITE_KEY>"
}
```

Set the secret key as a Worker secret:

```bash
bunx wrangler secret put TURNSTILE_SECRET_KEY
```

For local `wrangler dev`, copy `.dev.vars.example` to `.dev.vars` and replace the values.

## 4. Deploy

```bash
bun run deploy
```

## 5. Inspect submissions

```bash
bunx wrangler d1 execute signalreach_landing --remote --command "SELECT id, email, role, use_case, locale, created_at FROM waitlist_submissions ORDER BY created_at DESC LIMIT 20"
```
