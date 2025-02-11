class LocalStore {
    getItem = (key: string) => {
        if (typeof window === "undefined") return
        return localStorage.getItem(key)
    }

    setItem = (key: string, value: any) => {
        if (typeof window === "undefined") return
        return localStorage.setItem(key, value)
    }

    removeItem = (key: string) => {
        if (typeof window === "undefined") return
        return localStorage.removeItem(key)
    }

    getJson = (key: string) => {
        const value = this.getItem(key)
        try {
            return value ? JSON.parse(value) : null
        } catch {
            return null
        }
    }

    setJson = (key: string, value: any) => {
        return this.setItem(key, JSON.stringify(value))
    }
}

export const localStore = new LocalStore()