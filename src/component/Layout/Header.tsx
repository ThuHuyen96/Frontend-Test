"use client"

import { locationSelectState, siderState } from "@/recoil"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRecoilState, useSetRecoilState } from "recoil"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { Link } from "@/i18n/routing"
import { ACTIONS, getMenus } from "@/config/constant"
import Image from "next/image"
import { useEffect } from "react"

type Props = {
  data?: any
}

const Header = ({ data }: Props) => {
  const [isOpen, setIsOpen] = useRecoilState(siderState)
  const setLocationSelect = useSetRecoilState(locationSelectState)
  const menus = getMenus()

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#562C2C]">
      <div className="py-2.5 px-4 flex items-center justify-between lg:hidden">
        <Link
          href="/"
          className="inline-block text-white py-1 hover:opacity-80">
          LOGO SAMPLE
        </Link>
        <div className="flex items-center gap-6">
          <button
            type="button"
            className="w-8 h-8 text-xl hover:bg-[#F2542D] text-white rounded-full inline-flex items-center justify-center"
            onClick={handleToggleMenu}>
            {isOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
          </button>
        </div>
      </div>
      <div className="page-container hidden lg:block">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-12">
            <Link
              href="/"
              className="inline-block text-white py-1 hover:text-[var(--secondary-color)]">
              LOGO SAMPLE
            </Link>
            <ul className="">
              {data?.head_menu && data?.head_menu.map((menu: string, index: number) => (
                <li
                  key={index}
                  className="inline-block px-4 first:pr-12">
                  <Link
                    href="#"
                    className="text-white py-1 hover:text-[var(--secondary-color)]">
                    {menu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="flex items-center">
              {ACTIONS.map((item, index) => (
                <li
                  key={index}
                  className="px-2 first:pl-0">
                  <Link
                    href="#mapBlock"
                    onClick={() => setLocationSelect(item)}
                    className="group">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={28}
                      height={28}
                      className="group-hover:hidden"
                    />
                    <Image
                      src={item.iconHover}
                      alt={item.label}
                      width={28}
                      height={28}
                      className="hidden group-hover:block"
                    />
                  </Link>
                </li>
              ))}
              <li className="pl-4">
                <button
                  type="button"
                  className="bg-[var(--secondary-color)] hover:bg-[#CA3E1B] text-white rounded-3xl h-10 min-w-16 inline-flex items-center justify-end px-4"
                  onClick={handleToggleMenu}>
                  <span className="text-white text-base inline-block mr-2 xl:hidden">Contactez-nous</span>
                  <Image
                    alt="ArrowUpRight"
                    src="/img/icon/ArrowUpRight.svg"
                    width={24}
                    height={24}
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
