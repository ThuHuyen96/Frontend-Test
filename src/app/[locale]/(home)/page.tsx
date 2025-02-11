import React from "react"
import { Metadata } from "next"
import HomeContainer from "./section/HomeContainer"
import { appConfig } from "@/config/app"

type Props = {
  params: { locale: string }
}

export const metadata: Metadata = {
  title: "Home",
}

const fetchPages: any = async (lang: string) => {
  try {
    const res = await fetch(`${appConfig.apiUrl}//v1/pages?lang=${lang}`, {
      method: "GET",
      next: { revalidate: 0 },
    })
    if (!res.ok) throw new Error("Failed to fetch data")
    return res.json()
  } catch (error) {
    console.error("Error fetching data:", error)
    return null
  }
}

export default async function Home({ params }: Props) {
  const lang = params.locale
  const data = await fetchPages(lang)

  return <HomeContainer data={data ? data[0] : null} />
}
