"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { useRef, useMemo, Suspense } from "react"
import type * as THREE from "three"

function Particles(props: any) {
  const ref = useRef<THREE.Points>(null)

  const [sphere] = useMemo(() => {
    const positions = new Float32Array(3000 * 3) // Reduced particle count
    for (let i = 0; i < 3000; i++) {
      const radius = Math.random() * 1.2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }
    return [positions]
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#3b82f6" size={0.003} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

function ParticleScene() {
  return (
    <Suspense fallback={null}>
      <Particles />
    </Suspense>
  )
}

export function ParticleBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 1] }} gl={{ antialias: false, alpha: true }} dpr={[1, 1.5]}>
        <ParticleScene />
      </Canvas>
    </div>
  )
}
