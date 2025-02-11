import { IIcon } from "@/type/Common"
import { useTranslations } from "next-intl"

export const MENUS = (trans: (key: string) => string) => [
  {
    label: trans("books"),
    url: "/books",
    icon: "/img/icon/book.svg",
    active: "/img/icon/book_white.svg",
  },
  {
    label: trans("calendar"),
    url: "/calendar",
    icon: "/img/icon/calendar.svg",
    active: "/img/icon/calendar_white.svg",
  },
  {
    label: trans("chat"),
    url: "/chat",
    icon: "/img/icon/chat.svg",
    active: "/img/icon/chat_white.svg",
  },
  {
    label: trans("contact"),
    url: "/contact",
    icon: "/img/icon/phone.svg",
    active: "/img/icon/phone_white.svg",
  },
  {
    label: trans("docs"),
    url: "/documents",
    icon: "/img/icon/document.svg",
    active: "/img/icon/document_white.svg",
  },
  {
    label: trans("media"),
    url: "/media",
    icon: "/img/icon/play_square.svg",
    active: "/img/icon/play_square_white.svg",
  },
  {
    label: trans("music"),
    url: "/music",
    icon: "/img/icon/music.svg",
    active: "/img/icon/music_white.svg",
  },
  {
    label: trans("kuisine"),
    url: "/kuisine",
    icon: "/img/icon/kuisine.svg",
    active: "/img/icon/kuisine_white.svg",
  },
  {
    label: trans("news_stand"),
    url: "/news",
    icon: "/img/icon/new.svg",
    active: "/img/icon/new_white.svg",
  },
  {
    label: trans("notices"),
    url: "/reminder",
    icon: "/img/icon/alarm.svg",
    active: "/img/icon/alarm_white.svg",
  },
  {
    label: trans("market"),
    url: "/market",
    icon: "/img/icon/shopping_cart.svg",
    active: "/img/icon/shopping_cart_white.svg",
  },
  {
    label: trans("wgn"),
    url: "/wgn",
    icon: "/img/icon/game.svg",
    active: "/img/icon/game_white.svg",
  },
]

export const getMenus = () => {
  const trans = useTranslations("menu")
  return [
    {
      label: trans("menu1"),
      url: "#",
    },
    {
      label: trans("menu2"),
      url: "#",
    },
    {
      label: trans("menu3"),
      url: "#",
    },
    {
      label: trans("menu4"),
      url: "#",
    },
  ]
}

export const ACTIONS = [
  {
    id: 1,
    icon: "/img/icon/mountains.svg",
    iconHover: "/img/icon/mountains_red.svg",
    iconBlack: "/img/icon/mountains_black.svg",
    pin: "/img/icon/MapPinmountains.svg",
    label: "Activité 1",
    x: "30%", y: "40%"
  },
  {
    id: 2,
    icon: "/img/icon/fishing.svg",
    iconHover: "/img/icon/fishing_red.svg",
    iconBlack: "/img/icon/fishing_black.svg",
    pin: "/img/icon/MapPinfishing.svg",
    label: "Activité 2",
    x: "40%", y: "50%"
  },
  {
    id: 3,
    icon: "/img/icon/crosshair.svg",
    iconHover: "/img/icon/crosshair_red.svg",
    iconBlack: "/img/icon/crosshair_black.svg",
    pin: "/img/icon/MapPincrosshair.svg",
    label: "Activité 3",
    x: "60%", y: "70%"
  },
]

export const PAGINATION: { [key: string]: any } = {
  DEFAULT_CURRENT_PAGE: 1,
  DEFAULT_PAGE_SIZE: 25,
  DEFAULT_TOTAL_ITEM: 0,
  DEFAULT_PAGE_SIZE_OPTIONS: ["25", "50", "100", "150", "200"],
  DEFAULT_TOTAL_PAGE: 1,
}
