"use client"

import { Dropdown, DropdownProps } from "antd"
import lodash from "lodash"
import Image from "next/image"
import React from "react"

export interface IDropdownProps extends DropdownProps {
  customChildren?: React.ReactNode
}

export const DropDownMenu = (props: IDropdownProps) => {
  return (
    <Dropdown
      destroyPopupOnHide
      className={`w-[35px] h-[35px] rounded-[8px] flex justify-center items-center z-[11] shadow-lg bg-[var(--secondary-10)] ${props?.className || ""}`}
      trigger={["click"]}
      {...lodash.omit(props, "className")}>
      {props?.customChildren ? (
        props?.customChildren
      ) : (
        <button>
          <Image
            src={"/img/icon/ellipsis_vertical_sharp.svg"}
            alt={"esllipsis vertical"}
            width={24}
            height={24}
          />
        </button>
      )}
    </Dropdown>
  )
}
