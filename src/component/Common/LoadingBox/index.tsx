"use client"

import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Spin } from "antd"

type IProps = {
  className?: string
}

export function LoadingBox({ className }: IProps) {
  return (
    <div className={`h-full grow flex justify-center items-center py-4 ${className ? className : ""}`}>
      <Spin
        indicator={
          <FontAwesomeIcon
            icon={faSpinner}
            spin
          />
        }
        size="large"
      />
    </div>
  )
}
