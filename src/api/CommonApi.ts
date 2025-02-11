import { defaultApiClient } from "@/util/ApiClient"

const getPages = async (lang: string) => {
  return await defaultApiClient.get("/v1/pages?lang=" + lang)
}

export const CommonApi = {
  getPages
}
