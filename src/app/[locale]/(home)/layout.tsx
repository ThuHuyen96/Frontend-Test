import Footer from "@/component/Layout/Footer"
import Header from "@/component/Layout/Header"
import { appConfig } from "@/config/app"

type Props = {
  children?: React.ReactNode
  params: { locale: string }
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

export default async function LayoutHome({ children, params }: Props) {
  const lang = params.locale
  const data = await fetchPages(lang)

  return (
    <div className="h-screen">
      <Header data={data ? data[0] : null} />
      <main
        id="main-content"
        className="flex-1 overflow-y-auto overflow-x-hidden">
        {children}
      </main>
      <Footer data={data ? data[0] : null} />
    </div>
  )
}
