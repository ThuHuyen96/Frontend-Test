import axios, { AxiosRequestConfig, AxiosInstance } from "axios"
import { handleResponseError, handleResponseSuccess } from "@/util/ApiClient/interceptors"
import { get, omit } from "lodash"
import Cookies from "universal-cookie"

export type RequestOptionParam = { [key: string]: any }
export interface ApiClientConfig extends AxiosRequestConfig {
  bearerToken?: any
}

export interface RequestOptions extends RequestInit {
  baseURL?: string
  params?: RequestOptionParam
  data?: any
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
}

export function apiClient(config?: ApiClientConfig): AxiosInstance {
  const cookies = new Cookies()

  // const accessToken = cookies.get("access_token")
  const instance = axios.create(omit(config, "bearerToken"))

  //   if (config?.bearerToken) {
  //     instance.defaults.headers.common["Authorization"] = "Bearer " + config?.bearerToken
  //   }

  // instance.defaults.headers.common["Authorization"] = "Bearer " + accessToken

  instance.defaults.timeout = 60000

  instance.interceptors.request.use(
    (requestConfig) => {
      const accessToken = cookies.get("access_token")
      if (accessToken) {
        requestConfig.headers["Authorization"] = `Bearer ${accessToken}`
      }
      return requestConfig
    },
    (error) => Promise.reject(error)
  )

  instance.interceptors.response.use(handleResponseSuccess, handleResponseError)

  return instance
}
