import { notification } from "antd"
import { get } from "lodash"
import axios from "axios"
import Cookies from "universal-cookie"
import { appConfig } from "@/config/app"

const cookies = new Cookies()

let isRefreshing = false
let failedQueue: any[] = []

// queue refresh
const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (token) {
      prom.resolve(token)
    } else {
      prom.reject(error)
    }
  })
  failedQueue = []
}

const handleResponseSuccess = (response: any) => response

const handleResponseError = async (error: any) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  if (get(error, "response.status") === 401) {
    const originalRequest = error.config
    if (!isRefreshing) {
      isRefreshing = true

      try {
        const oldToken = cookies.get("access_token")
        if (oldToken) {
          const response = await axios.post(
            `${appConfig.apiUrl}/auth/refresh`,
            {
              access_token: oldToken,
            },
            {
              headers: {
                Authorization: `Bearer ${oldToken}`,
              },
            },
          )

          const newToken = response?.data?.data?.access_token
          cookies.set("access_token", newToken, {
            expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
            path: "/",
            sameSite: "strict",
          })

          axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`

          processQueue(null, newToken)

          isRefreshing = false

          originalRequest.headers["Authorization"] = `Bearer ${newToken}`
          return axios(originalRequest)
        } else {
          processQueue(null, null)
          isRefreshing = false

          window.location.href = "/login"
          return Promise.reject(new Error("No access token found. Redirecting to login."))
        }
      } catch (err) {
        processQueue(err, null)

        window.location.href = "/login"
        return Promise.reject(err)
      }
    }
    return new Promise((resolve, reject) => {
      failedQueue.push({ resolve, reject })
    })
  } else if (get(error, "response.status") >= 500) {
    // notification.error({
    //   message: "500",
    //   description: "The server encountered an error. Please try again later.",
    //   key: "server_error",
    // }); 
  } else if (get(error, "response.status") === 403) {
    window.location.href = "/403"
  }

  return Promise.reject(error)
}

export { handleResponseError, handleResponseSuccess }
