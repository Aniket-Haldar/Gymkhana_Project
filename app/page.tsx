"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Heart, Zap, GraduationCap, Coffee, Music, Trophy, Menu, X } from "lucide-react"
import { Hero3D } from "./components/hero-3d"
import { FloatingElements } from "./components/floating-elements"
import { ParticleBackground } from "./components/particle-background"
import { Loader } from "./components/loader"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function GymkhanaPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const [formData, setFormData] = useState({
    name: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name.trim() || !formData.message.trim()) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
      return
    }

    setIsSubmitting(true)

    try {
      // Create submission object with timestamp
      const submission = {
        id: Date.now(),
        name: formData.name.trim(),
        message: formData.message.trim(),
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      }

      // Get existing submissions from localStorage
      const existingSubmissions = JSON.parse(localStorage.getItem("gymkhana-submissions") || "[]")

      // Add new submission
      const updatedSubmissions = [submission, ...existingSubmissions]

      // Store in localStorage
      localStorage.setItem("gymkhana-submissions", JSON.stringify(updatedSubmissions))

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSubmitStatus("success")
      setFormData({ name: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const candidates = [
    {
      id: 1,
      name: "Arjun Sharma",
      position: "President",
      positionAbbr: "PRESIDENT",
      party: "Unity Alliance",
      image: "/candidate-sarah.png",
      description:
        "Final year Computer Science student with extensive student leadership experience. Led successful campaigns for better hostel facilities, improved campus Wi-Fi, and extended library hours. Former head of the Technical Society with a track record of organizing major tech fests and hackathons.",
      achievements: ["Tech Fest Organizer", "Hostel Welfare Champion", "Digital Innovation Leader"],
      color: "from-yellow-500 to-amber-600",
      keyPolicies: ["Better Campus Facilities", "Student Welfare", "Tech Innovation"],
      featured: true, // Added featured flag for bento layout
    },
    {
      id: 2,
      name: "Priya Patel",
      position: "Vice President",
      positionAbbr: "VICE PRESI",
      party: "Unity Alliance",
      image: "/candidate-michael.png",
      description:
        "Business Administration student and former Cultural Secretary. Successfully organized inter-college festivals and improved student engagement significantly. Passionate about mental health awareness and creating inclusive campus environments for all students.",
      achievements: ["Cultural Event Leader", "Mental Health Advocate", "Inclusion Champion"],
      color: "from-amber-500 to-yellow-600",
      keyPolicies: ["Cultural Activities", "Mental Health", "Inclusive Campus"],
    },
    {
      id: 3,
      name: "Rahul Verma",
      position: "Sports Secretary",
      positionAbbr: "SPORTS SEC",
      party: "Unity Alliance",
      image: "/candidate-emily.png",
      description:
        "Physical Education student and captain of the university cricket team. Led the sports committee to win multiple inter-university championships. Advocate for better sports infrastructure and equal opportunities for all students in athletics.",
      achievements: ["Sports Champion", "Infrastructure Advocate", "Team Leadership"],
      color: "from-yellow-600 to-amber-700",
      keyPolicies: ["Sports Infrastructure", "Athletic Programs", "Fitness Facilities"],
    },
    {
      id: 4,
      name: "Sneha Gupta",
      position: "Cultural Secretary",
      positionAbbr: "CULTURAL SEC",
      party: "Unity Alliance",
      image: "/candidate-james.png",
      description:
        "Fine Arts student and accomplished dancer. Organized numerous cultural events and established partnerships with local artists. Champion of creative expression and arts education, working to make cultural activities accessible to all students.",
      achievements: ["Arts Advocate", "Event Organizer", "Creative Leader"],
      color: "from-amber-600 to-yellow-700",
      keyPolicies: ["Arts Programs", "Cultural Events", "Creative Spaces"],
    },
    {
      id: 5,
      name: "Vikash Kumar",
      position: "General Secretary",
      positionAbbr: "GEN SEC",
      party: "Unity Alliance",
      image: "/candidate-maria.png",
      description:
        "Social Work student with extensive experience in student welfare and community service. Led initiatives that improved campus sustainability and established student support systems. Passionate about academic excellence and student rights.",
      achievements: ["Student Welfare Expert", "Sustainability Leader", "Academic Advocate"],
      color: "from-yellow-700 to-amber-800",
      keyPolicies: ["Student Rights", "Campus Sustainability", "Academic Support"],
    },
  ]

  const manifestoPoints = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Academic Excellence",
      description: "Enhanced learning resources, extended library hours, and improved study spaces for all students.",
      details: "24/7 library access, more study rooms, and better academic support systems.",
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Campus Life Enhancement",
      description: "Better dining options, improved hostel facilities, and enhanced campus infrastructure.",
      details: "Upgraded mess facilities, better hostel amenities, and improved campus connectivity.",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Sports & Recreation",
      description: "World-class sports facilities, more recreational activities, and support for athletic excellence.",
      details: "New sports complex, equipment upgrades, and increased sports scholarships.",
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: "Cultural Development",
      description: "Vibrant cultural scene with more events, better venues, and support for artistic talents.",
      details: "New auditorium, cultural grants, and regular artist workshops and performances.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Student Welfare",
      description: "Comprehensive health services, mental health support, and student assistance programs.",
      details: "24/7 medical facility, counseling services, and emergency student support fund.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Digital Innovation",
      description: "High-speed campus-wide Wi-Fi, digital learning platforms, and tech-enabled services.",
      details: "Fiber optic internet, online course platforms, and digital student services portal.",
    },
  ]

  if (isLoading) {
    return <Loader onFinish={() => setIsLoading(false)} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-zinc-900 text-white relative overflow-hidden">
      <ParticleBackground />
      <FloatingElements />

      {/* ... existing header code ... */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 50
            ? "bg-black/90 backdrop-blur-xl border-b border-yellow-500/30 shadow-2xl"
            : "bg-black/20 backdrop-blur-md border-b border-yellow-500/20"
        }`}
      >
        <div className="container px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 group">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border-2 border-yellow-500/40 flex items-center justify-center p-2 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-12 cursor-pointer">
                  <Image
                    src="/nit-durgapur-logo.png"
                    alt="NIT Durgapur"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain filter brightness-110 group-hover:brightness-125 transition-all duration-300"
                  />
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm border-2 border-blue-400/40 flex items-center justify-center p-2 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-rotate-12 cursor-pointer">
                  <Image
                    src="/gymkhana-logo.png"
                    alt="Students' Gymkhana"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain filter brightness-110 group-hover:brightness-125 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:to-amber-400 transition-all duration-300">
                  Students' Gymkhana
                </h1>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  NIT Durgapur
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["Manifesto", "Candidates", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-yellow-500/20 hover:bg-yellow-500/30 transition-all duration-300 hover:scale-110"
            >
              {isMenuOpen ? <X className="h-6 w-6 text-yellow-400" /> : <Menu className="h-6 w-6 text-yellow-400" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-yellow-500/20 pt-4">
              <div className="flex flex-col space-y-4">
                {["Manifesto", "Candidates", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-yellow-500/10"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-20 sm:py-32">
        <Hero3D />
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className="relative inline-block mb-6 sm:mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/40 via-amber-500/40 to-yellow-600/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative accenture-card bg-gradient-to-r from-yellow-900/95 via-amber-900/95 to-yellow-800/95 border-2 border-yellow-400/60 px-6 sm:px-12 py-4 sm:py-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                <Image
                  src="/gymkhana-logo.png"
                  alt="Students' Gymkhana"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10 group-hover:rotate-12 transition-transform duration-500"
                />
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                  Students' Gymkhana Elections 2025
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="manifesto"
        className="py-20 sm:py-32 bg-gradient-to-r from-gray-900/50 via-zinc-900/50 to-black/50 backdrop-blur-xl"
      >
        {/* ... existing manifesto code ... */}
        <div className="container px-4 md:px-6">
          <div className="text-center mobile-spacing mb-12 sm:mb-20">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/40 via-yellow-500/40 to-amber-600/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative accenture-card bg-gradient-to-r from-amber-900/95 via-yellow-900/95 to-amber-800/95 border-2 border-amber-400/60 px-4 sm:px-8 py-3 sm:py-4 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                  Campus Vision
                </h3>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-6 sm:mt-8">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Our Commitment
              </span>
            </h2>
          </div>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <GraduationCap className="h-6 w-6" />,
                title: "Academic Excellence",
                description:
                  "Enhanced learning resources, extended library hours, and improved study spaces for all students.",
                details: "24/7 library access, more study rooms, and better academic support systems.",
              },
              {
                icon: <Coffee className="h-6 w-6" />,
                title: "Campus Life Enhancement",
                description: "Better dining options, improved hostel facilities, and enhanced campus infrastructure.",
                details: "Upgraded mess facilities, better hostel amenities, and improved campus connectivity.",
              },
              {
                icon: <Trophy className="h-6 w-6" />,
                title: "Sports & Recreation",
                description:
                  "World-class sports facilities, more recreational activities, and support for athletic excellence.",
                details: "New sports complex, equipment upgrades, and increased sports scholarships.",
              },
              {
                icon: <Music className="h-6 w-6" />,
                title: "Cultural Development",
                description:
                  "Vibrant cultural scene with more events, better venues, and support for artistic talents.",
                details: "New auditorium, cultural grants, and regular artist workshops and performances.",
              },
              {
                icon: <Heart className="h-6 w-6" />,
                title: "Student Welfare",
                description: "Comprehensive health services, mental health support, and student assistance programs.",
                details: "24/7 medical facility, counseling services, and emergency student support fund.",
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "Digital Innovation",
                description: "High-speed campus-wide Wi-Fi, digital learning platforms, and tech-enabled services.",
                details: "Fiber optic internet, online course platforms, and digital student services portal.",
              },
            ].map((point, index) => (
              <Card
                key={index}
                className="accenture-card group mobile-card hover:scale-105 transition-all duration-500 cursor-pointer"
              >
                <CardHeader>
                  <div
                    className={`h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-r from-yellow-500 to-amber-600 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}
                  >
                    {point.icon}
                  </div>
                  <CardTitle className="text-white text-lg sm:text-xl group-hover:text-yellow-300 transition-colors duration-300">
                    {point.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {point.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {point.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-700 text-black font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group"
            >
              <FileText className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
              Download Full Manifesto
            </Button>
          </div>
        </div>
      </section>

      <section id="candidates" className="py-20 sm:py-32 relative">
        <div className="container px-4 md:px-6">
          <div className="text-center mobile-spacing mb-12 sm:mb-20">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/40 via-amber-500/40 to-yellow-600/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative accenture-card bg-gradient-to-r from-yellow-900/95 via-amber-900/95 to-yellow-800/95 border-2 border-yellow-400/60 px-4 sm:px-8 py-3 sm:py-4 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                  Student Leaders
                </h3>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-6 sm:mt-8">
              <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {candidates.map((candidate, index) => (
              <div
                key={candidate.id}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 ${
                  candidate.featured ? "md:col-span-2 lg:col-span-2" : "" // Bento layout - President spans 2 columns
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-amber-500" />
                </div>

                <div className="relative p-6">
                  <div className="mb-4">
                    <div className="text-yellow-400 font-medium text-sm mb-1">VOTE FOR</div>
                    <div className="text-white font-bold text-xl">{candidate.positionAbbr}</div>
                  </div>

                  <div className="relative mb-6 flex justify-center">
                    <div
                      className={`relative ${candidate.featured ? "w-48 h-48" : "w-32 h-32"} rounded-2xl overflow-hidden border-2 border-yellow-400/30 group-hover:border-yellow-400 transition-all duration-300`}
                    >
                      <Image
                        src={candidate.image || "/placeholder.svg"}
                        alt={candidate.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                      {candidate.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{candidate.position}</p>
                  </div>

                  {candidate.featured && (
                    <div className="mb-4">
                      <p className="text-gray-300 text-sm leading-relaxed">{candidate.description}</p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {candidate.achievements.slice(0, candidate.featured ? 4 : 2).map((achievement) => (
                      <span
                        key={achievement}
                        className="bg-gray-800 text-yellow-400 text-xs px-2 py-1 rounded-full border border-gray-700"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="space-y-8 group">
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-500">
                  Let's Talk
                </h2>
                <p className="text-gray-300 text-lg group-hover:text-gray-200 transition-colors duration-500">
                  Send us your questions or suggestions through this form.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white text-lg font-medium">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-4 bg-gray-800/80 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 hover:bg-gray-800/90 hover:border-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-white text-lg font-medium">
                    Write your question here
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message"
                    required
                    className="w-full px-4 py-4 bg-gray-800/80 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 resize-none hover:bg-gray-800/90 hover:border-gray-600"
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-900/50 border border-green-500/50 rounded-lg">
                    <p className="text-green-300 font-medium">
                      ✅ Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-900/50 border border-red-500/50 rounded-lg">
                    <p className="text-red-300 font-medium">❌ Please fill in all fields correctly.</p>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-bold text-lg py-4 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit now →
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">✨</span>
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="accenture-card bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 p-8 lg:p-12 space-y-8 hover:bg-gray-800/60 transition-all duration-500 hover:scale-105 cursor-pointer group">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-sm flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-black font-bold text-sm">✉</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-300 group-hover:text-yellow-300 transition-colors duration-300">
                    SEND US A MESSAGE
                  </h3>
                </div>

                <p className="text-gray-300 leading-relaxed text-base lg:text-lg group-hover:text-gray-200 transition-colors duration-300">
                  Feel free to reach out through the contact form or find our contact information below. Your feedback,
                  questions, and suggestions are important to us as we strive to provide exceptional service to our
                  university community.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-3 group/item hover:scale-105 transition-transform duration-300">
                  <div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center mt-1 group-hover/item:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">@</span>
                  </div>
                  <div>
                    <p className="text-white font-medium group-hover/item:text-blue-300 transition-colors duration-300">
                      standtogether@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group/item hover:scale-105 transition-transform duration-300">
                  <div className="w-6 h-6 bg-red-500 rounded-sm flex items-center justify-center mt-1 group-hover/item:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">📍</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-medium group-hover/item:text-red-300 transition-colors duration-300">
                      National Institute of Technology Durgapur
                    </p>
                    <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">
                      Mahatma Gandhi Avenue,
                    </p>
                    <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">
                      Durgapur,
                    </p>
                    <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">
                      West Bengal 713209,
                    </p>
                    <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">
                      India.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-700 group-hover:border-gray-600 transition-colors duration-300">
                <div className="flex items-center space-x-4 group/logos">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/nit-durgapur-logo.png"
                      alt="NIT Durgapur"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain group-hover/logos:rotate-12 transition-transform duration-500"
                    />
                    <Image
                      src="/gymkhana-logo.png"
                      alt="Students' Gymkhana"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain group-hover/logos:-rotate-12 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 group-hover/logos:text-gray-300 transition-colors duration-300">
                      Official Student Body
                    </p>
                    <p className="text-sm text-gray-400 group-hover/logos:text-gray-300 transition-colors duration-300">
                      NIT Durgapur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/95 backdrop-blur-xl border-t border-white/10 py-8 sm:py-12 hover:bg-black/98 transition-colors duration-500">
        <div className="container px-4 md:px-6">
          <div className="text-center group">
            <p className="text-gray-400 text-base sm:text-lg group-hover:text-gray-300 transition-colors duration-300">
              © 2024 Gymkhana NITDGP. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
