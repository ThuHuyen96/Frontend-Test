"use client"

import { INotiRequest } from "@/type/Common"
import { notification } from "antd"
import Image from "next/image"
import React, { useEffect } from "react"
import parseHtml from "html-react-parser"

type IProps = INotiRequest & {
  isOpen: boolean
  onclose: () => void
}

export default function NotifyCustom({ type = "success", message, description, isOpen, onclose }: IProps) {
  const [api, contextHolder] = notification.useNotification()

  useEffect(() => {
    if (isOpen) {
      openNotification()
      setTimeout(() => {
        onclose()
      }, 10)
    }
  }, [isOpen])

  const openNotification = () => {
    api.open({
      className: `bg-gradient-to-r text-white rounded-2xl ${
        type === "success" ? "from-[rgba(0,159,101,0.8)] to-[rgba(0,159,101,0.6)]" : "from-[rgba(211,53,53,0.8)] to-[rgba(211,53,53,0.6)]"
      }`,
      message: message,
      description: description ?  parseHtml(description) : description,
      icon:
        type === "success" ? (
          <Image
            src="/img/icon/check-success.svg"
            alt="Success"
            width={40}
            height={40}
          />
        ) : type === "error" ? (
          <Image
            src="/img/icon/danger_info.svg"
            alt="Error"
            width={54}
            height={54}
          />
        ) : null,
    })
  }

  return <>{contextHolder}</>
}
