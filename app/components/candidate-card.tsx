"use client"

import Image from "next/image"

interface Candidate {
  id: number
  name: string
  position: string
  party: string
  image: string
  description: string
  achievements: string[]
  color: string
  keyPolicies: string[]
}

interface CandidateCardProps {
  candidate: Candidate
}

function getPositionAbbreviation(position: string): string {
  const positionMap: { [key: string]: string } = {
    President: "PRESIDENT",
    "Vice President": "VICE PRESI",
    "General Secretary": "GEN SEC",
    "Cultural Secretary": "CULTURAL",
    "Sports Secretary": "SPORTS SEC",
  }
  return positionMap[position] || position.toUpperCase()
}

export function CandidateCard({ candidate }: CandidateCardProps) {
  return (
    <div className="max-w-sm w-full group/card">
      <div className="overflow-hidden relative card h-[600px] rounded-md shadow-xl max-w-sm mx-auto flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-yellow-500/30">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 600">
            <defs>
              <pattern id={`lines-${candidate.id}`} patternUnits="userSpaceOnUse" width="30" height="30">
                <path
                  d="M0,30 L30,0 M15,30 L30,15 M0,15 L15,0"
                  stroke="#fbbf24"
                  strokeWidth="0.8"
                  fill="none"
                  opacity="0.6"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#lines-${candidate.id})`} />
          </svg>
        </div>

        {/* Vote For Section */}
        <div className="text-center z-10 px-4 mb-6 mt-8">
          <p className="text-yellow-400 text-sm font-bold mb-2 tracking-[0.2em]">VOTE FOR</p>
          <h2 className="text-white text-2xl md:text-3xl font-black tracking-wide leading-tight">
            {getPositionAbbreviation(candidate.position)}
          </h2>
        </div>

        <div className="flex justify-center mb-6 z-10 flex-1">
          <div className="relative w-48 h-48 rounded-lg overflow-hidden border-2 border-yellow-500/50">
            <Image
              fill
              alt={candidate.name}
              src={candidate.image || "/placeholder.svg?height=300&width=300"}
              className="object-cover transition-transform duration-300 group-hover/card:scale-105"
            />
          </div>
        </div>

        {/* Candidate Info */}
        <div className="text-center z-10 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="font-bold text-xl text-white mb-1">{candidate.name}</h3>
          <p className="text-yellow-400 font-medium text-sm">{candidate.position}</p>
        </div>
      </div>
    </div>
  )
}
