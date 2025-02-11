import { CommonApi } from "@/api/CommonApi"
import { useQuery } from "@tanstack/react-query"

export const useGetPages = (lang: string) =>
  useQuery({
    queryKey: ["common.pages", lang],
    queryFn: async (): Promise<any> => {
      const response = await CommonApi.getPages(lang)
      return response.data
    },
    refetchOnWindowFocus: true,
  })
