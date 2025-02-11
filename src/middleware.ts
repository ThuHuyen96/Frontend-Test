import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// export default createMiddleware(routing)

const i18nMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  return i18nMiddleware(request);
}

export const config = {
  // matcher: ["/", "/(en|vi)/:path*"],
  matcher: [
    "/((?!api|_next/static|_next/image|manifest.webmanifest|manifest.json|favicon.ico|sitemap.xml|robots.txt|apple-touch-icon.png|wizzor_group_2x.png|wizzor.png|wizzor2x.png|img|scripts).*)",
    "/(register|forgot-password|verify-account)"
  ],
};
