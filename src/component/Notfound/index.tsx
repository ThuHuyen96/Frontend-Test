import { Link } from "@/i18n/routing"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames"
import Image from "next/image"

type Props = {
  backHome?: boolean
  message?: string
  className?: string
  slot?: React.ReactNode
  image?: string
}

export default function NotFoundBox({ message, className, backHome = true, slot, image = "/img/not-found.png" }: Props) {
  return (
    <div className={classNames("flex items-center justify-center bg-white h-full", className || "")}>
      <div className="px-4 py-8">
        <div className="flex items-center justify-center">
          <Image
            src={image}
            alt="404"
            width={156}
            height={173}
            className="max-w-full"
          />
        </div>
        <p className="md:text-lg text-[var(--secondary-40)] mb-1 font-medium text-center mt-6">{message || "Not found"}</p>
        {slot}
        {backHome && (
          <Link
            aria-label="back home"
            href="/"
            className="font-medium flex items-center justify-between px-[30px] md:max-w-[400px] border border-[var(--primary--70)] rounded-lg md:text-base xl:text-lg h-[34px] md:h-[60px] 2xl:h-[65px] text-[var(--primary--70)] hover:border-[var(--primary--70)] hover:text-white hover:bg-[var(--primary--70)]">
            <span>BACK TO HOME</span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="max-h-[12px]"
            />
          </Link>
        )}
      </div>
    </div>
  )
}
