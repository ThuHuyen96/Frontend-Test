"use client"

import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import BlockTitle from "../Common/BlockTitle"
import { ACTIONS } from "@/config/constant"
import { useRecoilState } from "recoil"
import { locationSelectState } from "@/recoil"

type Props = {
  data?: any
}

export default function InteractiveMap({ data }: Props) {
  const [selected, setSelected] = useRecoilState(locationSelectState)

  const handleSelectLocation = (loc: any) => {
    setSelected(loc)
  }

  return (
    <div
      className="relative bg-[#FFF6F4] bg-no-repeat bg-cover py-8 md:py-[3.75rem]"
      style={{ backgroundImage: "url(/img/shutterstock.png)" }}>
      <Link
        href="#"
        id="mapBlock"></Link>
      <div className="page-container px-4 md:px-8 xl:px-0">
        <BlockTitle
          title="Titre Bloc 2"
          background="bg-[#FFF6F4]"
        />
        <ul className="flex justify-center items-center gap-4 py-5 md:py-8 flex-wrap">
          {ACTIONS.map((item, index) => (
            <li key={index}>
              <button
                type="button"
                onClick={() => handleSelectLocation(item)}
                className="group bg-white flex items-center rounded-full px-4 h-10 gap-2 border border-[rgba(242,84,45,0.5)] hover:bg-[#FFEDE8]">
                <Image
                  src={item.iconBlack}
                  alt={item.label}
                  width={20}
                  height={20}
                  className="group-hover:opacity-80 md:w-7 md:h-7"
                />
                <span className="font-medium text-[var(--primary-color)] md:text-xl">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="relative h-[400px]">
          <Image
            src="/img/map.jpg"
            alt="Map"
            className="w-full h-full object-cover"
            fill
            style={{
              objectFit: "cover",
            }}
          />

          {ACTIONS.map((loc) => (
            <button
              key={loc.id}
              style={{ top: loc.y, left: loc.x }}
              className={`absolute z-20 cursor-pointer transition-all hover:text-red-500 hover:scale-150 text-2xl ${
                selected?.id === loc.id ? "text-red-500 scale-150" : "text-blue-500"
              }`}
              onClick={() => handleSelectLocation(loc)}>
              <Image
                src={loc.pin}
                alt={loc.label}
                width={48}
                height={57}
              />
            </button>
          ))}
        </div>
      </div>
      {selected && (
        <div className="absolute top-0 left-0 z-50 w-full h-full bg-[rgba(0,0,0,0.25)]">
          <Link
            href="#"
            scroll={false}
            className="absolute w-full h-full z-10"
            onClick={() => setSelected(null)}></Link>
          <div className="bg-white shadow-md p-4 rounded-md w-80 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-lg font-bold">{selected?.label}</h2>
            <button
              className="absolute top-4 right-4 z-20 text-sm text-gray-500"
              onClick={() => setSelected(null)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
