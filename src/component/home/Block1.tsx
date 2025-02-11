"use client"

import BlockTitle from "../Common/BlockTitle"
import PostItem from "../Common/PostItem"

type Props = {
  data?: any
}

export default function Block1({ data }: Props) {
  return (
    <div className="py-16 md:py-20 px-4 md:px-8 page-container xl:px-0">
      <BlockTitle
        title={data?.title}
        classLine="hidden md:block"
      />
      <p className="text-center md:text-xl lg:text-2xl text-[var(--primary-color)]">{data?.subtitle}</p>
      <div className="mt-5 md:mt-10 grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-6 md:pt-11">
        {data?.cases.map((item: any, index: number) => (
          <PostItem
            key={index}
            data={item}
            image={index}
            className={index === 1 ? "md:relative md:-top-11" : ""}
          />
        ))}
      </div>
    </div>
  )
}
