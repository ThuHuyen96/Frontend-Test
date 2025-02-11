"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RecoilRoot } from "recoil"
import { ConfigProvider } from "antd"
import { themeConfig } from "@/config/theme"

const queryClient = new QueryClient({
  defaultOptions: {
      queries: {
          retry: 0,
          refetchOnWindowFocus: false,
      },
  },
})

type Props = {
  children: React.ReactNode
}

export const AppProvider: React.FC<Props> = ({ children }) => {
  ConfigProvider.config({
    prefixCls: "ant",
    iconPrefixCls: "anticon",
    theme: themeConfig,
  })

  return (
    <ConfigProvider theme={themeConfig}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>{children}</RecoilRoot>
      </QueryClientProvider>
    </ConfigProvider>
  )
}
