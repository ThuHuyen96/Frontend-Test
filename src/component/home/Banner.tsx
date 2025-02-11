"use client"

import { ACTIONS } from "@/config/constant"
import { locationSelectState } from "@/recoil"
import Image from "next/image"
import Link from "next/link"
import { useSetRecoilState } from "recoil"

type Props = {
  data?: any
}

export default function Banner() {
  const setLocationSelect = useSetRecoilState(locationSelectState)
  return (
    <div className="relative h-screen">
      <Image
        src="/img/hero_image_desktop.jpg"
        alt=""
        width={1920}
        height={1080}
        className="hidden md:block w-full h-full object-cover"
      />
      <Image
        src="/img/hero_image_mobile.jpg"
        alt=""
        width={375}
        height={812}
        className="block md:hidden w-full h-full object-cover"
      />
      <ul className="absolute bottom-9 md:bottom-10 xl:bottom-20 left-1/2 w-full z-10 flex justify-center items-center page-container -translate-x-1/2">
        {ACTIONS.map((item, index) => (
          <li
            key={index}
            className="grow flex justify-center items-center">
            <Link
              href="#mapBlock"
              onClick={() => setLocationSelect(item)}
              className="group flex justify-center items-center flex-col">
              <Image
                src={item.icon}
                alt={item.label}
                width={24}
                height={24}
                className="group-hover:hidden md:w-8 md:h-8 lg:w-10 lg:h-10"
              />
              <Image
                src={item.iconHover}
                alt={item.label}
                width={24}
                height={24}
                className="group-hover:block md:w-8 md:h-8 lg:w-10 lg:h-10 hidden"
              />
              <span className="text-white font-medium mt-2 xl:hidden group-hover:text-[var(--secondary-color)]">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
