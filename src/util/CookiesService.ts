import { useCookies } from 'next-client-cookies'

class CookiesServiceClass {
  constructor() {
    
   }

  setClientCookies = (key: string, value: any, options?: any) => {
    const cookies = useCookies()
    cookies.set(key, value, options || {
      expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
      path: "/",
      sameSite: "lax",
      secure: true,
    })
  }

  getClientCookies = (key: string) => {
    const cookies = useCookies()
    if (cookies) return cookies.get(key)

    return null
  }
  
  destroyClientCookies = (key: string) => {
    const cookies = useCookies()
    cookies.remove(key)
  }
}

const CookiesService = new CookiesServiceClass();
export default CookiesService;
