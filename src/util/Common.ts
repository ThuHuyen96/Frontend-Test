import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)

export const formatDate = (d: string, format: string) => {
  return dayjs(d).format(format)
}

export const formatDateShort = (d: string) => {
  return formatDate(d, "DD/MM/YYYY")
}

export const formatDateMedium = (d: string) => {
  return formatDate(d, "DD/MM/YYYY HH:mm")
}

export const formatDateFull = (d: string) => {
  return formatDate(d, "DD/MM/YYYY HH:mm:ss")
}

export const convertNonAccentVietnamese = (str: string) => {
  const accentsMap = [
    { base: "a", letters: /[àáạảãâầấậẩẫăằắặẳẵ]/g },
    { base: "e", letters: /[èéẹẻẽêềếệểễ]/g },
    { base: "i", letters: /[ìíịỉĩ]/g },
    { base: "o", letters: /[òóọỏõôồốộổỗơờớợởỡ]/g },
    { base: "u", letters: /[ùúụủũưừứựửữ]/g },
    { base: "y", letters: /[ỳýỵỷỹ]/g },
    { base: "d", letters: /[đ]/g },
    { base: "A", letters: /[ÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴ]/g },
    { base: "E", letters: /[ÈÉẸẺẼÊỀẾỆỂỄ]/g },
    { base: "I", letters: /[ÌÍỊỈĨ]/g },
    { base: "O", letters: /[ÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠ]/g },
    { base: "U", letters: /[ÙÚỤỦŨƯỪỨỰỬỮ]/g },
    { base: "Y", letters: /[ỲÝỴỶỸ]/g },
    { base: "D", letters: /[Đ]/g },
  ]

  accentsMap.forEach((accent) => {
    str = str.replace(accent.letters, accent.base)
  })
  return str
}

export const numberParser = (value: any) => {
  return value?.toString()?.replace(/[-’/`~!#*$@_%+=.,^&(){}[\]|;:"'<>?\\]/g, "")
}

export const numberFormatter = (value: any, key?: string) => {
  const chart = key || ","
  return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, chart)
}

export const formatCurrency = (value: any, fixed: number = 2) => {
  return parseFloatNumber(value, fixed)
    .toString()
    .replace(",", ".")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

export const filterOption = (input: any, option: any) => {
  return (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
}

export const filterSort = (optionA: any, optionB: any) => {
  return (optionA?.children ?? "").toLowerCase().localeCompare((optionB?.children ?? "").toLowerCase())
}

export const parseFloatNumber = (value: any, fixed: number = 2) => {
  if (value) {
    return parseFloat(value?.toString()?.replace(/[-&/\\#,+()$~%'":*?<>{}]/g, "")).toFixed(fixed)
  }
  return 0
}

export const getCookie = (name: string): string => {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(";").shift() || ""
  return ""
}

export const Copy_to_clipboard = (text: string | number) => {
  if (typeof text !== 'string' && typeof text !== 'number') {
    return false;
  }

  navigator.clipboard.writeText( String(text) );
  return true
}