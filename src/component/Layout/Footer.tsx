"use client"

import Image from "next/image"
import Link from "next/link"

type Props = {
  data?: any
}

export default function Footer({ data }: Props) {
  return (
    <footer className="bg-[var(--primary-color)] text-white py-8 md:py-14">
      <div className="page-container px-4 md:px-8 xl:px-0">
        {data?.footer ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-8 text-center md:text-left">
            <div className="mb-6 md:mb-0 text-base md:col-span-3">
              <h3 className="text-lg font-semibold">{data?.footer?.address?.name}</h3>
              <p className="mt-2">{data?.footer?.address?.phone}</p>
              <p className="mt-1 max-w-52 text-center md:text-left mx-auto lg:max-w-full">{data?.footer?.address?.location}</p>
            </div>
            <div className="text-base md:col-span-8">
              <ul className="md:mt-2 space-y-1 text-[rgba(255,255,255,0.6)] md:grid grid-cols-3">
                {data?.footer?.links?.map((link: any, index: number) => (
                  <li>
                    <Link
                      key={index}
                      href="#"
                      className="hover:text-white">
                      {link?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}
        <div className="space-x-4 flex md:hidden mt-8 justify-center">
          <Link
            href="#"
            className="bg-[var(--secondary-color)] rounded-full h-8 w-8 inline-flex items-center justify-center hover:bg-[#CA3E1B]">
            <Image
              src="/img/icon/facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
            />
          </Link>
          <Link
            href="#"
            className="bg-[var(--secondary-color)] rounded-full h-8 w-8 inline-flex items-center justify-center hover:bg-[#CA3E1B]">
            <Image
              src="/img/icon/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </Link>
          <Link
            href="#"
            className="bg-[var(--secondary-color)] rounded-full h-8 w-8 inline-flex items-center justify-center hover:bg-[#CA3E1B]">
            <Image
              src="/img/icon/youtube.svg"
              alt="YouTube"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <hr className="border-gray-600 my-8" />
        <div className="flex justify-center md:justify-between items-center">
          <p>© BASIC 2024</p>
          <div className="space-x-4 hidden md:flex">
            <Link
              href="#"
              className="bg-[var(--secondary-color)] rounded-full h-8 w-8 inline-flex items-center justify-center hover:bg-[#CA3E1B]">
              <Image
                src="/img/icon/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="#"
              className="bg-[var(--secondary-color)] rounded-full h-8 w-8 inline-flex items-center justify-center hover:bg-[#CA3E1B]">
              <Image
                src="/img/icon/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="#"
              className="bg-[var(--secondary-color)] rounded-full h-8 w-8 inline-flex items-center justify-center hover:bg-[#CA3E1B]">
              <Image
                src="/img/icon/youtube.svg"
                alt="YouTube"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
