"use client"

type IProps = {
  title: string
  background?: string
  classLine?: string
}

export default function BlockTitle({ title, background = "bg-white", classLine }: IProps) {
  return (
    <div className="relative flex items-center justify-center py-2">
      <div className={`absolute left-0 top-1/2 w-full h-[2px] bg-[var(--border-color)] z-0 ${classLine || ""}`}></div>
      <h2
        className={`text-2xl font-bold text-[var(--secondary-color)] text-center uppercase relative z-10 px-5 md:text-[2.5rem] md:leading-[2.75rem] lg:text-[3.25rem] lg:leading-[3.5rem] ${background}`}>
        {title}
      </h2>
    </div>
  )
}