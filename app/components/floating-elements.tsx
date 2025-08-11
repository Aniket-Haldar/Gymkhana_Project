"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Enhanced floating geometric shapes */}
      <div
        className="absolute top-20 left-10 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce opacity-60 shadow-lg"
        style={{ animationDelay: "0s", animationDuration: "4s" }}
      />
      <div
        className="absolute top-40 right-20 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rotate-45 animate-pulse opacity-50 shadow-lg"
        style={{ animationDelay: "1s", animationDuration: "3s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-4 h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-bounce opacity-70 shadow-lg"
        style={{ animationDelay: "2s", animationDuration: "5s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rotate-12 animate-pulse opacity-60 shadow-lg"
        style={{ animationDelay: "0.5s", animationDuration: "4s" }}
      />
      <div
        className="absolute top-1/2 left-5 w-3 h-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full animate-bounce opacity-80 shadow-lg"
        style={{ animationDelay: "1.5s", animationDuration: "3.5s" }}
      />
      <div
        className="absolute top-1/3 right-5 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rotate-45 animate-pulse opacity-50 shadow-lg"
        style={{ animationDelay: "2.5s", animationDuration: "4.5s" }}
      />

      {/* Enhanced gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse opacity-60" />
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse opacity-50"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse opacity-70 transform -translate-x-1/2 -translate-y-1/2"
        style={{ animationDelay: "2s" }}
      />

      {/* Animated lines */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent animate-pulse" />
      <div
        className="absolute bottom-0 right-1/3 w-px h-24 bg-gradient-to-t from-transparent via-purple-500/30 to-transparent animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </div>
  )
}
