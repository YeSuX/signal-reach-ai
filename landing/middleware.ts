import createMiddleware from "next-intl/middleware";

import { defaultLocale, locales } from "@/lib/i18n";

export default createMiddleware({
  defaultLocale,
  localePrefix: "always",
  locales
});

export const config = {
  matcher: ["/", "/(en|zh-CN)/:path*"]
};

