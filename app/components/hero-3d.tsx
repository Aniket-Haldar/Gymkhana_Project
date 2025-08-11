"use client"

import { useMemo, useState, useCallback, useEffect } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Environment, Float } from "@react-three/drei"
import { useRef, Suspense } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

function InteractiveSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useFrame((state) => {
    if (meshRef.current) {
      // Base rotation with mouse influence
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 + mousePosition.y * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + mousePosition.x * 0.5

      // Pulsing effect when clicked
      if (isClicked) {
        const pulse = Math.sin(state.clock.elapsedTime * 10) * 0.1 + 1
        meshRef.current.scale.setScalar(2.5 * pulse)
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(2.5, 2.5, 2.5), 0.1)
      }
    }
  })

  const handlePointerMove = useCallback((event: any) => {
    const x = (event.point.x / 5) * 0.5
    const y = (event.point.y / 5) * 0.5
    setMousePosition({ x, y })
  }, [])

  const handleClick = useCallback(() => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 1000)
  }, [])

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere
        ref={meshRef}
        args={[1, 32, 32]}
        scale={2.5}
        onPointerEnter={() => {
          setIsHovered(true)
          document.body.style.cursor = "pointer"
        }}
        onPointerLeave={() => {
          setIsHovered(false)
          document.body.style.cursor = "default"
        }}
        onPointerMove={handlePointerMove}
        onClick={handleClick}
      >
        <MeshDistortMaterial
          color={isHovered ? "#06b6d4" : "#14b8a6"}
          attach="material"
          distort={isHovered ? 0.5 : 0.3}
          speed={isHovered ? 2.5 : 1.5}
          roughness={0.1}
          metalness={0.8}
          emissive={isClicked ? "#14b8a6" : "#000000"}
          emissiveIntensity={isClicked ? 0.3 : 0}
        />
      </Sphere>
    </Float>
  )
}

function InteractiveCubes() {
  const cubesRef = useRef<THREE.Group>(null)
  const [hoveredCube, setHoveredCube] = useState<number | null>(null)
  const [clickedCubes, setClickedCubes] = useState<Set<number>>(new Set())

  useFrame((state) => {
    if (cubesRef.current) {
      cubesRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  const cubes = useMemo(() => {
    const gymkhanaColors = ["#14b8a6", "#06b6d4", "#0891b2", "#0e7490", "#155e75", "#164e63", "#0f766e", "#134e4a"]
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
        color: gymkhanaColors[i],
      }
    })
  }, [])

  const handleCubeClick = useCallback((index: number) => {
    setClickedCubes((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }, [])

  return (
    <group ref={cubesRef}>
      {cubes.map((cube, i) => (
        <Float key={i} speed={1.5 + i * 0.1} rotationIntensity={0.8} floatIntensity={1.5}>
          <mesh
            position={cube.position}
            rotation={cube.rotation}
            scale={hoveredCube === i ? 1.3 : clickedCubes.has(i) ? 1.2 : 1}
            onPointerEnter={() => {
              setHoveredCube(i)
              document.body.style.cursor = "pointer"
            }}
            onPointerLeave={() => {
              setHoveredCube(null)
              document.body.style.cursor = "default"
            }}
            onClick={() => handleCubeClick(i)}
          >
            <boxGeometry args={[0.3, 0.3, 0.3]} />
            <meshStandardMaterial
              color={cube.color}
              metalness={0.7}
              roughness={0.3}
              emissive={clickedCubes.has(i) ? cube.color : "#000000"}
              emissiveIntensity={clickedCubes.has(i) ? 0.2 : 0}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function InteractiveStudentSymbols() {
  const [hoveredSymbol, setHoveredSymbol] = useState<number | null>(null)
  const [rotatingSymbols, setRotatingSymbols] = useState<Set<number>>(new Set())

  const symbols = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => {
      const angle = (i / 6) * Math.PI * 2
      return {
        position: [Math.cos(angle) * 7, Math.sin(angle) * 2, Math.cos(angle) * 2] as [number, number, number],
        type: i % 3, // Different symbol types
      }
    })
  }, [])

  const handleSymbolClick = useCallback((index: number) => {
    setRotatingSymbols((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }, [])

  return (
    <group>
      {symbols.map((symbol, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.4} floatIntensity={1}>
          <mesh
            position={symbol.position}
            scale={hoveredSymbol === i ? 1.4 : 1}
            onPointerEnter={() => {
              setHoveredSymbol(i)
              document.body.style.cursor = "pointer"
            }}
            onPointerLeave={() => {
              setHoveredSymbol(null)
              document.body.style.cursor = "default"
            }}
            onClick={() => handleSymbolClick(i)}
          >
            {symbol.type === 0 && <cylinderGeometry args={[0.2, 0.2, 0.8]} />}
            {symbol.type === 1 && <coneGeometry args={[0.3, 0.8, 6]} />}
            {symbol.type === 2 && <octahedronGeometry args={[0.4]} />}
            <meshStandardMaterial
              color={symbol.type === 0 ? "#06b6d4" : symbol.type === 1 ? "#0891b2" : "#14b8a6"}
              metalness={0.6}
              roughness={0.4}
              emissive={
                rotatingSymbols.has(i)
                  ? symbol.type === 0
                    ? "#06b6d4"
                    : symbol.type === 1
                      ? "#0891b2"
                      : "#14b8a6"
                  : "#000000"
              }
              emissiveIntensity={rotatingSymbols.has(i) ? 0.3 : 0}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function InteractiveParticles() {
  const particlesRef = useRef<THREE.Group>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { viewport } = useThree()

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
      // Particles follow mouse slightly
      particlesRef.current.rotation.x = mousePosition.y * 0.1
      particlesRef.current.rotation.z = mousePosition.x * 0.05
    }
  })

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1
    const y = -(event.clientY / window.innerHeight) * 2 + 1
    setMousePosition({ x, y })
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])

  return (
    <group ref={particlesRef}>
      {Array.from({ length: 20 }).map((_, i) => (
        <Float key={i} speed={0.5 + i * 0.1} rotationIntensity={0.2} floatIntensity={0.5}>
          <mesh position={[(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 15]}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshStandardMaterial
              color="#06b6d4"
              emissive="#06b6d4"
              emissiveIntensity={0.1}
              transparent
              opacity={0.6}
            />
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
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#14b8a6" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#06b6d4" />
      <pointLight position={[0, 10, -10]} intensity={0.4} color="#0891b2" />
      <InteractiveSphere />
      <InteractiveCubes />
      <InteractiveStudentSymbols />
      <InteractiveParticles />
      <Environment preset="night" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.2}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableDamping
        dampingFactor={0.05}
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
