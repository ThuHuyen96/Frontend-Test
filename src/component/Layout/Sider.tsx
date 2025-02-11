"use client"

import Image from "next/image"
import { useRecoilState } from "recoil"
import { siderState } from "@/recoil"
import { MENUS } from "@/config/constant"
import classNames from "classnames"
import { useLocale, useTranslations } from "next-intl"
import { Link, usePathname, routing, useRouter } from "@/i18n/routing"
import { useEffect, useState, useTransition } from "react"
import { Dropdown } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useParams } from "next/navigation"

export default function Sider() {
  const pathname = usePathname()
  const router = useRouter()
  const params = useParams()
  const trans = useTranslations("general")
  const tranSearch = useTranslations("search")
  const [sider, setSider] = useRecoilState(siderState)
  const menus = MENUS(trans)
  const [searchValue, setSearchValue] = useState("")
  const [items, setItems] = useState<any[]>([])
  const [isPending, startTransition] = useTransition()
  const locale = useLocale()

  const handleClickOutSide = () => {
    setSider(false)
  }

  const handleSearchKeyword = (keyword: string) => {
    console.log(keyword)
  }

  const handleSelectLocale = (locale: string) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: locale },
      )
    })
  }

  useEffect(() => {
    let locales: any[] = []
    routing.locales.map((locale) => {
      locales.push({
        label: (
          <span className="inline-flex items-center">
            <Image
              src={`/img/flag/${locale}.svg`}
              alt={trans("locale", { locale })}
              width={32}
              height={32}
              style={{
                width: "32px",
                height: "32px",
                objectFit: "cover",
              }}
            />
            <span className="ml-2 inline-block">{trans("locale", { locale })}</span>
          </span>
        ),
        key: locale,
        onClick: () => handleSelectLocale(locale),
      })
    })
    setItems(locales)
  }, [])

  return (
    <aside
      className={`fixed top-0 left-0 z-50 md:relative h-full w-full md:w-36 lg:w-60 xl:w-[340px] flex flex-col transition-transform duration-300 ease-in-out ${
        sider ? "transform translate-x-0" : "transform -translate-x-full md:translate-x-0"
      }`}>
      <div className="w-72 md:w-full bg-[var(--secondary-10)] py-6 px-4 md:px-5 xl:px-6 relative z-50 h-full overflow-y-auto custom-scrollbar">
        <div className="md:pb-4 lg:pb-6 xl:pb-8 font-bold text-lg text-center">
          <Link
            href="/"
            onClick={handleClickOutSide}
            className="inline-block">
            <Image
              src="/wizzor_group_2x.png"
              alt="WIZZOR"
              width={174}
              height={56}
              priority={true}
            />
          </Link>
        </div>
        <div>
          <Link
            href="/"
            onClick={handleClickOutSide}
            className={classNames(
              "inline-flex gap-2 items-center justify-center w-full rounded-lg text-xs lg:text-sm font-medium py-3 lg:py-4 xl:py-5 shadow-md border border-transparent",
              pathname === "/" ? "bg-[var(--primary--70)] text-white" : "bg-white hover:text-[var(--primary--70)] hover:border-[var(--primary--70)]",
            )}>
            <span className="inline-block w-6 xl:w-8">
              <Image
                src="/img/icon/dashboard.svg"
                alt="dashboard"
                width={32}
                height={32}
                style={{
                  width: "100%",
                }}
                className={pathname === "/" ? "hidden" : ""}
              />
              <Image
                src="/img/icon/dashboard_white.svg"
                alt="dashboard"
                width={32}
                height={32}
                style={{
                  width: "100%",
                }}
                className={pathname === "/" ? "" : "hidden"}
              />
            </span>
            <span className="md:hidden lg:inline-block">Dashboard</span>
          </Link>
          <div className="pt-3">
            <ul className="list-none m-0 p-0  gap-2 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {menus.map((menu, index) => (
                <li key={index}>
                  <Link
                    href={menu.url}
                    onClick={handleClickOutSide}
                    className={classNames(
                      "w-full shadow-md rounded-lg py-4 px-2 inline-flex justify-center items-center flex-col text-xs lg:text-sm border border-transparent",
                      pathname.includes(menu.url)
                        ? "text-white bg-[var(--primary--70)]"
                        : "bg-white hover:text-[var(--primary--70)] hover:border-[var(--primary--70)]",
                    )}>
                    <span className="inline-block w-6 xl:w-9">
                      <Image
                        src={menu.icon}
                        alt={menu.label}
                        width={36}
                        height={36}
                        style={{
                          width: "100%",
                        }}
                        className={pathname.includes(menu.url) ? "hidden" : ""}
                      />
                      <Image
                        src={menu.active}
                        alt={menu.label}
                        width={36}
                        height={36}
                        style={{
                          width: "100%",
                        }}
                        className={pathname.includes(menu.url) ? "" : "hidden"}
                      />
                    </span>
                    <span className="whitespace-nowrap">{menu.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 flex md:block lg:flex items-center gap-2">
          <Dropdown
            menu={{ items }}
            disabled={isPending}
            trigger={["click"]}>
            <Link
              href="#"
              scroll={false}
              className="bg-white border border-[var(--secondary-20)] rounded-lg inline-flex items-center justify-center gap-3 px-2 py-3 md:w-full xl:w-32 xl:shrink-0">
              <span className="inline-flex items-center justify-center gap-1">
                <Image
                  src={`/img/flag/${locale}.svg`}
                  alt="en"
                  width={32}
                  height={32}
                />
                <span className="text-[var(--secondary-100)]">{trans("locale", { locale })}</span>
              </span>
              <FontAwesomeIcon icon={faChevronDown} />
            </Link>
          </Dropdown>
        </div>
        <p className="text-center text-xs text-[var(--secondary-60)] mt-10">
          © 2025. <br /> All Rights Reserved.
        </p>
      </div>
      <Link
        href="#"
        scroll={false}
        onClick={handleClickOutSide}
        className={`w-full h-full absolute z-10 md:hidden bg-[rgba(0,0,0,0.3)] transition-transform duration-300 ease-in-out ${
          sider ? "transform translate-x-0" : "transform -translate-x-full"
        }`}></Link>
    </aside>
  )
}
