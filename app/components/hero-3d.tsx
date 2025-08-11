"use client"

import { useMemo } from "react"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Environment, Float } from "@react-three/drei"
import { useRef, Suspense } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 32, 32]} scale={2.5}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

function FloatingCubes() {
  const cubesRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (cubesRef.current) {
      cubesRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  const cubes = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => {
      const angle = (i / 8) * Math.PI * 2
      const radius = 5
      return {
        position: [Math.cos(angle) * radius, Math.sin(i * 0.5) * 2, Math.sin(angle) * radius] as [
          number,
          number,
          number,
        ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
        color: `hsl(${(i * 45) % 360}, 70%, 60%)`,
      }
    })
  }, [])

  return (
    <group ref={cubesRef}>
      {cubes.map((cube, i) => (
        <Float key={i} speed={1.5 + i * 0.1} rotationIntensity={0.8} floatIntensity={1.5}>
          <mesh position={cube.position} rotation={cube.rotation}>
            <boxGeometry args={[0.3, 0.3, 0.3]} />
            <meshStandardMaterial color={cube.color} metalness={0.7} roughness={0.3} />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function VotingSymbols() {
  const symbols = useMemo(() => {
    return Array.from({ length: 4 }, (_, i) => {
      const angle = (i / 4) * Math.PI * 2
      return {
        position: [Math.cos(angle) * 7, Math.sin(angle) * 2, Math.cos(angle) * 2] as [number, number, number],
      }
    })
  }, [])

  return (
    <group>
      {symbols.map((symbol, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.4} floatIntensity={1}>
          <mesh position={symbol.position}>
            <cylinderGeometry args={[0.2, 0.2, 0.8]} />
            <meshStandardMaterial color="#ec4899" metalness={0.6} roughness={0.4} />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function Hero3DScene() {
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#3b82f6" />
      <AnimatedSphere />
      <FloatingCubes />
      <VotingSymbols />
      <Environment preset="night" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.2}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Suspense>
  )
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-50">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }} gl={{ antialias: false, alpha: true }} dpr={[1, 1.5]}>
        <Hero3DScene />
      </Canvas>
    </div>
  )
}
