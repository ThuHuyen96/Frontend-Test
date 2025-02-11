"use client"

import Image from "next/image"

type IProps = {
  className?: string
  data?: any
}

export default function InstagramPostItem({ className, data }: IProps) {
  return (
    <div className={`overflow-hidden bg-white rounded-lg p-4 group ${className || ""}`}>
      <Image
        className="w-full aspect-[2/1] group-hover:scale-105 transition-all"
        src="/img/brooke-lark.png"
        alt=""
        width={1030}
        height={470}
      />
      <div className="px-2">
        <div className="pt-2 mb-2 text-black flex items-center justify-between">
          <p className="font-semibold text-base md:text-xl lg:text-2xl">{data?.author}</p>
          <span className="border border-[rgba(102,102,102,0.1)] rounded-full px-2 md:text-xl">{data?.date}</span>
        </div>
        <p className="line-clamp-2 text-[#666666] md:text-base">{data?.review}</p>
      </div>
    </div>
  )
}
