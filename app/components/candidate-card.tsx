"use client"

import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

interface Candidate {
  id: number
  name: string
  position: string
  party: string
  image: string
  description: string
  achievements: string[]
  color: string
  experience: string
  keyPolicies: string[]
}

interface CandidateCardProps {
  candidate: Candidate
}

function FloatingCard() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.8, 2.5, 0.1]} />
      <MeshDistortMaterial
        color="#1e293b"
        attach="material"
        distort={0.05}
        speed={0.8}
        roughness={0.3}
        metalness={0.7}
        transparent
        opacity={0.2}
      />
    </mesh>
  )
}

function CardScene() {
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={0.3} />
      <FloatingCard />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Suspense>
  )
}

export function CandidateCard({ candidate }: CandidateCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="relative group">
        <div
          className={`relative w-full h-96 transition-all duration-500 cursor-pointer ${isHovered ? "scale-105" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setShowModal(true)}
        >
          {/* 3D Background */}
          <div className="absolute inset-0 w-full h-full opacity-30">
            <Canvas camera={{ position: [0, 0, 4], fov: 50 }} gl={{ antialias: false, alpha: true }} dpr={[1, 1]}>
              <CardScene />
            </Canvas>
          </div>

          {/* Card Content */}
          <div className="relative z-10 h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
            <div className="relative overflow-hidden h-48">
              <Image
                src={candidate.image || "/placeholder.svg?height=300&width=400"}
                alt={candidate.name}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating badge */}
              <div className="absolute top-4 right-4">
                <Badge
                  className={`bg-gradient-to-r ${candidate.color} text-white border-0 shadow-lg backdrop-blur-sm px-3 py-1`}
                >
                  {candidate.experience}
                </Badge>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                  {candidate.name}
                </h3>
                <p className="text-sm text-gray-300 font-medium">{candidate.position}</p>
                <Badge variant="outline" className="border-white/30 text-gray-300 bg-white/5 backdrop-blur-sm">
                  {candidate.party}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-1">
                {candidate.achievements.slice(0, 2).map((achievement, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors"
                  >
                    {achievement}
                  </Badge>
                ))}
              </div>

              <div className="pt-2">
                <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium">
                  Click to learn more →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-br from-slate-900/95 to-blue-900/95 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-3xl">
              <div className="relative p-8">
                {/* Close button */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:text-gray-300 transition-all duration-300 hover:scale-110"
                >
                  ✕
                </button>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left side - Image and basic info */}
                  <div className="space-y-6">
                    <div className="relative">
                      <Image
                        src={candidate.image || "/placeholder.svg?height=400&width=400"}
                        alt={candidate.name}
                        width={400}
                        height={400}
                        className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                      />
                      <div
                        className={`absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-r ${candidate.color} flex items-center justify-center shadow-2xl`}
                      >
                        <span className="text-white font-bold text-lg">{candidate.experience}</span>
                      </div>
                    </div>

                    <div className="text-center space-y-3">
                      <h2
                        className={`text-3xl font-bold bg-gradient-to-r ${candidate.color} bg-clip-text text-transparent`}
                      >
                        {candidate.name}
                      </h2>
                      <p className="text-xl text-gray-300 font-medium">{candidate.position}</p>
                      <Badge className={`bg-gradient-to-r ${candidate.color} text-white border-0 px-4 py-2 text-sm`}>
                        {candidate.party}
                      </Badge>
                    </div>
                  </div>

                  {/* Right side - Details */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">About</h3>
                      <p className="text-gray-300 leading-relaxed text-lg">{candidate.description}</p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Key Policies</h3>
                      <div className="grid gap-3">
                        {candidate.keyPolicies.map((policy, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                          >
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${candidate.color}`} />
                            <span className="text-gray-300 font-medium">{policy}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Achievements</h3>
                      <div className="flex flex-wrap gap-2">
                        {candidate.achievements.map((achievement, index) => (
                          <Badge
                            key={index}
                            className={`bg-gradient-to-r ${candidate.color} text-white border-0 px-3 py-1`}
                          >
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button
                        className={`flex-1 py-3 px-6 rounded-xl bg-gradient-to-r ${candidate.color} text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                      >
                        Support {candidate.name.split(" ")[0]}
                      </button>
                      <button className="flex-1 py-3 px-6 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
