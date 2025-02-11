import { atom } from "recoil"

export const loadingState = atom<boolean>({
  key: "loadingState",
  default: true,
})

export const siderState = atom<boolean>({
  key: "siderState",
  default: false,
})

export const titleState = atom<string>({
  key: "titleState",
  default: "Dashboard",
})

export const locationSelectState = atom<any>({
  key: "locationSelectState",
  default: null,
})
