"use client"

import { Tooltip } from "antd"

export const renderTooltipText = (content: string, className?: string, classNameTooltip?: string) => {
    return (
      <Tooltip
        title={content}
        className={`truncate whitespace-nowrap overflow-hidden ${classNameTooltip || ""}`}>
        <div className={`text-base leading-[22px] text-[var(--secondary-100)] font-normal px-2.5 py-[11px] w-full ${className || ""}`}>
          {content}
        </div>
      </Tooltip>
    )
  }