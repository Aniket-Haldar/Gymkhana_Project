"use client"

import { useEffect, useState } from "react"

export function Loader({ onFinish }: { onFinish?: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 30)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100 && onFinish) {
      // Use setTimeout to defer the callback execution to avoid state update during render
      const timer = setTimeout(() => {
        onFinish()
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [progress, onFinish])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
      <div className="relative w-[80px] h-[80px] perspective-[800px]">
        <div className="relative w-full h-full transform rotate-x-45 rotate-y-45 preserve-3d">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={`absolute w-[13px] h-full transform-style-preserve animate-pulse`}
              style={{
                left: `${i * 13.3}px`,
                animationDelay: `${i * 0.1}s`,
                backgroundColor: i === 2 ? "#FCD34D" : "#1f1f1f", // Yellow instead of orange
                transform: `translateZ(0px) rotateY(0deg)`,
                border: "1px solid #333",
              }}
            >
              <div className="face front" />
              <div className="face back" />
              <div className="face left" />
              <div className="face right" />
              <div className="face top" />
              <div className="face bottom" />
            </div>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div className="mt-6 text-2xl font-medium">{progress}%</div>

      <div className="absolute bottom-5 left-5 text-sm">• Elections</div>
      <div className="absolute bottom-5 right-5 text-sm">Students' Gymkhana</div>

      <div
        className="absolute bottom-14 left-0 h-[2px] bg-yellow-400 transition-all duration-100 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
