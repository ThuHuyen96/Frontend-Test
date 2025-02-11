import { Poppins } from "next/font/google"
import "../globals.css"
import Head from "next/head"
import { AppProvider } from "@/provider/AppProvider"
import { CookiesProvider } from "next-client-cookies/server"
import React from "react"
import { AntdRegistry } from "@ant-design/nextjs-registry"
import { Viewport } from "next"
import { AutoScrollTop } from "@/provider/AutoScrollTop"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

export const dynamic = "force-dynamic"
export const revalidate = 0

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 2,
  viewportFit: "cover",
  userScalable: false,
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }
  const messages = await getMessages()
  setRequestLocale(locale)

  return (
    <html lang={locale}>
      <body className={`${poppins.variable}`}>
        <CookiesProvider>
          <AntdRegistry>
            <NextIntlClientProvider
              locale={locale}
              messages={messages}>
              <AppProvider>
                <AutoScrollTop />
                {children}
              </AppProvider>
            </NextIntlClientProvider>
          </AntdRegistry>
        </CookiesProvider>
      </body>
    </html>
  )
}
