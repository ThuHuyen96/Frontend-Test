"use client"

import Image from "next/image"

type IProps = {
  className?: string
  data?: any
  image: number
}

export default function PostItem({ className, data, image }: IProps) {
  const images = ["/img/post1.jpg", "/img/post2.jpg", "/img/post3.jpg"]
  return (
    <div className={`overflow-hidden bg-white ${className || ""}`}>
      <Image
        className="w-full aspect-square rounded-lg"
        src={images[image]}
        alt=""
        width={397}
        height={397}
      />
      <div className="pt-6">
        <span className="text-[var(--secondary-color)] font-medium mb-1 text-xs md:text-lg lg:text-xl">{data?.category}</span>
        <h3 className="text-2xl md:text-[1.75rem] md:leading-[2rem] font-medium text-[var(--primary-color)] mb-4">{data?.cta}</h3>
        <p className="text-[rgba(86,44,44,0.8)] line-clamp-2 text-lg">{data?.description}</p>
        <button className="mt-6 flex items-center justify-center gap-2 border border-[rgba(86,44,44,0.3)] text-[var(--primary-color)] font-medium py-2 rounded-full hover:bg-[#FFEDE8] min-w-56">
          <span className="">{data?.tagline}</span>
          <Image
            src="/img/icon/ArrowUpRightGreen.svg"
            alt=""
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  )
}
