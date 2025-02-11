"use client"

import React, { useState } from "react"

interface IProps {
  value: number
  color?: string
  size?: number
  className?: string
  onChange?: (value: number) => void
  interactive?: boolean
}

const Rate = ({ value, color = "#FFC451", size = 18, className, onChange, interactive = false }: IProps) => {
  const componentId = React.useId()
  const totalStars = 5
  const [rateValue, setRateValue] = useState<number>(value)
  const [hoverValue, setHoverValue] = useState<number | null>(null)

  const currentValue = hoverValue !== null ? hoverValue : rateValue

  const stars = Array.from({ length: totalStars }, (_, index) => {
    const starValue = index + 1
    if (currentValue >= starValue) return "full"
    if (currentValue > starValue - 1 && currentValue < starValue) return "partial"
    return "empty"
  })

  const handleMouseEnter = (index: number) => {
    if (!interactive) return
    const newValue = index + 1
    setHoverValue(newValue)
  }

  const handleMouseLeave = () => {
    if (!interactive) return
    setHoverValue(null)
  }

  const handleClick = (index: number) => {
    if (!interactive) return
    const newValue = index + 1
    setRateValue(newValue)
    onChange?.(newValue)
  }

  return (
    <div
      className={className ? className : "flex gap-1 justify-center items-center"}
      onMouseLeave={handleMouseLeave}>
      {stars.map((status, index) => (
        <Star
          key={index}
          componentId={componentId}
          status={status}
          color={color}
          size={size}
          onMouseEnter={() => handleMouseEnter(index)}
          onClick={() => handleClick(index)}
          interactive={interactive}
        />
      ))}
    </div>
  )
}

const Star = ({ status, color, size, componentId, onMouseEnter, onClick, interactive }: any) => {
  const fill = status === "full" ? color : status === "partial" ? `url(#gradient-${componentId})` : "#fff"
  const stroke = status === "empty" ? color : "none"
  const strokeWidth = status === "empty" ? 1 : 0

  return (
    <svg
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      width={strokeWidth ? size - 2 : size}
      height={strokeWidth ? size - 2 : size}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: interactive ? "pointer" : "default" }}>
      <defs>
        <linearGradient id={`gradient-${componentId}`}>
          <stop
            offset="50%"
            stopColor={color}
          />
          <stop
            offset="50%"
            stopColor="#eee"
          />
        </linearGradient>
      </defs>
      <path
        d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

export default Rate
