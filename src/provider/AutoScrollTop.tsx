"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export const AutoScrollTop: React.FC = () => {
  const pathname = usePathname()

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }, [pathname])

  return null
}
