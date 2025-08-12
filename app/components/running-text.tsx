"use client"

import { useEffect, useRef } from "react"

interface RunningTextProps {
  text: string
  direction?: "left" | "right"
  speed?: number
  className?: string
}

export function RunningText({ text, direction = "left", speed = 50, className = "" }: RunningTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const textElement = textRef.current

    if (!container || !textElement) return

    const containerWidth = container.offsetWidth
    const textWidth = textElement.offsetWidth
    const totalDistance = containerWidth + textWidth

    textElement.style.animation = `scroll-${direction} ${totalDistance / speed}s linear infinite`

    return () => {
      textElement.style.animation = ""
    }
  }, [direction, speed, text])

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap ${className}`}
      style={{ maskImage: "linear-gradient(90deg, transparent, white 10%, white 90%, transparent)" }}
    >
      <div
        ref={textRef}
        className="inline-block"
        style={{
          transform: direction === "left" ? "translateX(100%)" : "translateX(-100%)",
        }}
      >
        {text}
      </div>
    </div>
  )
}
