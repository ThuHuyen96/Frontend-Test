import { appConfig } from "@/config/app"
import { apiClient } from "./ApiClient"
// import Cookies from "universal-cookie"

// const cookies = new Cookies()

// const accessToken = cookies.get("access_token")

const defaultApiClient = apiClient({
    baseURL: appConfig.apiUrl,
    // bearerToken: accessToken || ''
})

export { defaultApiClient }
