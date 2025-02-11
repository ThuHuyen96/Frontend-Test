"use client"

type Props = {
  data: any
}

export default function ExplorerBlock({ data }: Props) {
  return (
    <div
      className="relative bg-no-repeat bg-cover py-8 md:py-[3.75rem] mt-20"
      style={{ backgroundImage: "url(/img/MITIK_container.jpg)" }}>
      <div className="page-container px-4 md:px-8 xl:px-0">
        <h2 className="mb-2 text-2xl font-semibold text-center text-[var(--primary-color)] md:text-[2.5rem] md:leading-[2.75rem] lg:text-[3.25rem] lg:leading-[3.5rem]">
          {data?.title} <span className="block text-[rgba(86,44,44,0.5)]">{data?.subtitle}</span>
        </h2>
        <p className="text-[rgba(86,44,44,0.8)] mb-4 max-w-xl mx-auto md:text-xl lg:text-2xl line-clamp-3">{data?.text}</p>
        <div className="text-center">
          <button
            type="button"
            className="bg-[var(--secondary-color)] text-white font-medium text-base md:text-lg rounded-full h-10 w-36 hover:bg-[#CA3E1B]">
            {data?.button}
          </button>
        </div>
        <div className="h-60"></div>
      </div>
    </div>
  )
}
