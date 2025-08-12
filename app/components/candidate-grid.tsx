"use client"

import type React from "react"
import { User, Award, ExternalLink } from "lucide-react"
import Image from "next/image"

interface Candidate {
  id: number
  name: string
  position: string
  positionAbbr: string
  image: string
  description: string
  achievements: string[]
  featured?: boolean
  size?: "full" | "large" | "medium" | "small"
}

interface CandidateGridProps {
  candidates: Candidate[]
}

const CandidateGrid: React.FC<CandidateGridProps> = ({ candidates }) => {
  const getCardClasses = (candidate: Candidate, index: number) => {
    const baseClasses =
      "group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700/50 hover:border-yellow-400/70 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-400/25"

    // Mobile: all cards equal size, Desktop: bento layout
    if (candidate.position.toLowerCase().includes("president")) {
      return `${baseClasses} col-span-1 md:col-span-2 lg:col-span-3 row-span-1 md:row-span-2`
    } else if (
      candidate.position.toLowerCase().includes("vice") ||
      candidate.position.toLowerCase().includes("secretary")
    ) {
      return `${baseClasses} col-span-1 md:col-span-1 lg:col-span-2 row-span-1`
    } else {
      return `${baseClasses} col-span-1 row-span-1`
    }
  }

  const getCardHeight = (candidate: Candidate) => {
    if (candidate.position.toLowerCase().includes("president")) {
      return "min-h-[400px] md:min-h-[500px]"
    } else if (
      candidate.position.toLowerCase().includes("vice") ||
      candidate.position.toLowerCase().includes("secretary")
    ) {
      return "min-h-[350px] md:min-h-[400px]"
    } else {
      return "min-h-[300px]"
    }
  }

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
        {candidates.map((candidate, index) => (
          <div
            key={candidate.id}
            className={`${getCardClasses(candidate, index)} ${getCardHeight(candidate)}`}
            style={{
              animationDelay: `${index * 0.15}s`,
            }}
          >
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 via-amber-500/20 to-transparent" />
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600" />
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-yellow-400/10 rounded-tl-full" />
            </div>

            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 right-4 w-16 h-16 border border-yellow-400/30 rotate-45" />
              <div className="absolute bottom-8 left-8 w-12 h-12 border border-yellow-400/20 rotate-12" />
            </div>

            <div className="relative p-6 h-full flex flex-col">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-2 px-4 rounded-full text-sm shadow-lg">
                {candidate.positionAbbr}
              </div>

              <div className="mb-6">
                <div className="text-yellow-400 font-semibold text-sm mb-2 tracking-wider">VOTE FOR</div>
                <div className="text-white font-bold text-2xl md:text-3xl leading-tight">
                  {candidate.position.toLowerCase().includes("president") ? "PRESIDENT" : candidate.positionAbbr}
                </div>
              </div>

              <div className="relative mb-6 flex justify-center flex-shrink-0">
                <div
                  className={`relative rounded-2xl overflow-hidden border-2 border-yellow-400/40 group-hover:border-yellow-400 transition-all duration-500 ${
                    candidate.position.toLowerCase().includes("president")
                      ? "w-40 h-40 md:w-48 md:h-48"
                      : "w-32 h-32 md:w-36 md:h-36"
                  }`}
                >
                  <Image
                    src={candidate.image || "/placeholder.svg"}
                    alt={candidate.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              <div className="text-center mb-6 flex-grow">
                <h3
                  className={`font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300 ${
                    candidate.position.toLowerCase().includes("president")
                      ? "text-2xl md:text-3xl"
                      : "text-xl md:text-2xl"
                  }`}
                >
                  {candidate.name}
                </h3>
                <p className="text-gray-400 text-sm md:text-base font-medium">{candidate.position}</p>

                {(candidate.position.toLowerCase().includes("president") ||
                  candidate.position.toLowerCase().includes("vice")) && (
                  <p className="text-gray-300 text-sm leading-relaxed mt-4 px-2">{candidate.description}</p>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {candidate.achievements
                  .slice(0, candidate.position.toLowerCase().includes("president") ? 6 : 3)
                  .map((achievement) => (
                    <span
                      key={achievement}
                      className="bg-gray-800/80 text-yellow-400 text-xs px-3 py-1.5 rounded-full border border-gray-600/50 hover:border-yellow-400/50 transition-colors duration-300"
                    >
                      {achievement}
                    </span>
                  ))}
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center text-yellow-400 text-sm font-medium">
                  <User className="w-4 h-4 mr-2" />
                  <span>Candidate</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm cursor-pointer group/link">
                  <Award className="w-4 h-4 mr-2 group-hover/link:rotate-12 transition-transform duration-300" />
                  <span>View Profile</span>
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-inner shadow-yellow-400/20" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CandidateGrid
