import { get } from "lodash"
import { cookies } from "next/headers"
import { appConfig } from "@/config/app"
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

interface CheckLoginResult {
  accessToken: string | null
  profile: any
  logged: boolean
  status: number | null
  error: Error | null
}

const fetchProfile: any = async (accessToken?: string) => {
  try {
    const res = await fetch(`${appConfig.apiUrl}/auth/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Origin: appConfig.appUrl,
        Authorization: "Bearer " + accessToken,
      },
      next: { revalidate: 0 },
    })
    if (!res.ok) throw new Error("Failed to fetch post data")
    return res.json()
  } catch (error) {
    return null
  }
}

export async function isLogged() {
  const accessToken = cookies().get("access_token")?.value

  if (!accessToken) {
    // const loginUrl = new URL('/login', appConfig.appUrl);
    // loginUrl.searchParams.set('redirect', appConfig.appUrl);

    // return  NextResponse.redirect(loginUrl);

    return {
      accessToken: null,
      profile: null,
      logged: false,
      status: 401,
      error: null,
    } as CheckLoginResult
  }

  return {
    accessToken: accessToken,
    profile: null,
    logged: true,
    status: 200,
    error: null,
  } as CheckLoginResult

  // try {
  //   const promiseProfile = await fetchProfile(accessToken)
  //   if (promiseProfile?.data) {
  //     cookies().set("logged_user", JSON.stringify(promiseProfile?.data))
  //   }

  //   return {
  //     accessToken: accessToken,
  //     profile: promiseProfile?.data,
  //     logged: true,
  //     status: 200,
  //     error: null,
  //   } as CheckLoginResult
  // } catch (error) {
  //   return {
  //     accessToken: null,
  //     profile: null,
  //     logged: false,
  //     status: get(error, "response.status", null),
  //     error,
  //   } as CheckLoginResult
  // }
}

export const config = {
  matcher: ['/:path*', '!/login'],
};
