import { appConfig } from "@/config/app"
import type { MetadataRoute } from "next"
import { routing, getPathname } from "@/i18n/routing"

export const revalidate = 604800 // 1 week

export default function sitemap(): MetadataRoute.Sitemap {
  // const res = await fetch(`${appConfig.apiUrl}/sitemap`, {
  //   method: "GET",
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Origin: appConfig.appUrl,
  //   },
  //   next: { revalidate: 604800 },
  // });

  // if (!res.ok) {
  //   throw new Error('Failed to fetch data for sitemap');
  // }

  // const data = await res.json();
  const staticUrls: any[] = []

  // if (data.posts) {
  //   data.posts.map((item: any) => {
  //     staticUrls.push({
  //       url: `${appConfig.appUrl}/${item}`,
  //       lastModified: new Date(),
  //       priority: 0.5,
  //     })
  //   })
  // }
  return [getEntry("/")]
  // return [getEntry('/'), getEntry('/users')]
}

type Href = Parameters<typeof getPathname>[0]["href"]

function getEntry(href: Href) {
  return {
    url: getUrl(href, routing.defaultLocale),
    alternates: {
      languages: Object.fromEntries(routing.locales.map((locale) => [locale, getUrl(href, locale)])),
    },
  }
}

function getUrl(href: Href, locale: (typeof routing.locales)[number]) {
  const pathname = getPathname({ locale, href })
  return appConfig.appUrl + pathname
}
