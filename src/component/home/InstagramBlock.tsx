"use client"

import Image from "next/image"
import InstagramPostItem from "../Common/InstagramPostItem"
import Link from "next/link"

type Props = {
  data?: any
}

export default function InstagramBlock({ data }: Props) {
  const images = [
    "/img/image1.png",
    "/img/image2.png",
    "/img/image3.png",
    "/img/image4.png"
  ]
  return (
    <div className="bg-gradient-to-b from-[rgba(234,252,255,1)] to-[rgba(255,255,255,0)] py-8 md:py-[3.75rem] mt-28">
      <div className="page-container px-4 md:px-8 xl:px-0">
        <div className="md:flex flex-row-reverse items-center mb-8">
          <h2 className="text-[var(--primary-color)] text-2xl lg:text-[2.5rem] lg:leading-[2.75rem] xl:text-[3.25rem] xl:leading-[3.5rem] mb-2 md:w-1/2 shrink-0 md:pl-7">
            {data?.title}
          </h2>
          <p className="md:line-clamp-5 lg:line-clamp-6 text-[rgba(86,44,44,0.8)] md:text-base lg:text-lg md:w-1/2 max-w-1/2 shrink-0 md:pr-7">{data?.text}</p>
        </div>
        <div
          className="bg-no-repeat bg-cover rounded-3xl bg-[rgba(14,149,148,0.2)] p-4 md:px-14 md:py-11 lg:py-14 lg:px-24"
          style={{ backgroundImage: "url(/img/brooke-lark-lg.png)" }}>
          <InstagramPostItem data={data?.reviews[0] || null} />
        </div>
        <div className="py-6 md:py-10 xl:py-5 grid grid-cols-2 gap-5 md:gap-8 xl:gap-6 md:grid-cols-4">
          {data?.reviews &&
            data?.reviews.map((item: any, index: number) =>
              {
                if (index === 0) return null
                return (
                  <div
                    className="relative rounded-2xl overflow-hidden group"
                    key={index}>
                    <Image
                      src={images[index - 1]}
                      alt=""
                      className="w-full aspect-square object-cover transition-all group-hover:scale-110"
                      style={{
                        objectFit: "cover",
                      }}
                      width={292}
                      height={292}
                    />
                    <Link
                      href="#"
                      scroll={false}
                      className="bg-[rgba(86,44,44,0.6)] text-white absolute bottom-0 left-0 w-full inline-flex items-center justify-between p-2 md:py-4 md:px-5 hover:text-[var(--secondary-color)] group">
                      <span className="inline-flex items-center gap-2">
                        <Image
                          src="/img/icon/mdi_instagram.svg"
                          alt=""
                          width={16}
                          height={16}
                          className="md:w-6 md:h-6 xl:w-7 xl:h-7 transition-all group-hover:scale-110"
                        />
                        <span>{item.author}</span>
                      </span>
                      <Image
                        alt="ArrowUpRight"
                        src="/img/icon/ArrowUpRight.svg"
                        width={16}
                        height={16}
                        className="md:w-6 md:h-6 xl:w-7 xl:h-7 transition-all group-hover:scale-110"
                      />
                    </Link>
                  </div>
                )
              }
            )}
        </div>
        <p className="text-center lg:text-base xl:text-2xl">{data?.footer}</p>
      </div>
    </div>
  )
}
