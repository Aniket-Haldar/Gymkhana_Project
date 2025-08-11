"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Vote,
  Users,
  FileText,
  MessageSquare,
  ExternalLink,
  Star,
  Heart,
  Zap,
  GraduationCap,
  Coffee,
  Music,
  Trophy,
} from "lucide-react"
import Link from "next/link"
import { CandidateCard } from "./components/candidate-card"
import { Hero3D } from "./components/hero-3d"
import { FloatingElements } from "./components/floating-elements"
import { ParticleBackground } from "./components/particle-background"

export default function GymkhanaPage() {
  const candidates = [
    {
      id: 1,
      name: "Arjun Sharma",
      position: "President",
      party: "Unity Alliance",
      image: "/candidate-sarah.png",
      description:
        "Final year Computer Science student with extensive student leadership experience. Led successful campaigns for better hostel facilities, improved campus Wi-Fi, and extended library hours. Former head of the Technical Society with a track record of organizing major tech fests and hackathons.",
      achievements: ["Tech Fest Organizer", "Hostel Welfare Champion", "Digital Innovation Leader"],
      color: "from-teal-500 to-cyan-500",
      keyPolicies: ["Better Campus Facilities", "Student Welfare", "Tech Innovation"],
    },
    {
      id: 2,
      name: "Priya Patel",
      position: "Vice President",
      party: "Unity Alliance",
      image: "/candidate-michael.png",
      description:
        "Business Administration student and former Cultural Secretary. Successfully organized inter-college festivals and improved student engagement significantly. Passionate about mental health awareness and creating inclusive campus environments for all students.",
      achievements: ["Cultural Event Leader", "Mental Health Advocate", "Inclusion Champion"],
      color: "from-emerald-500 to-teal-500",
      keyPolicies: ["Cultural Activities", "Mental Health", "Inclusive Campus"],
    },
    {
      id: 3,
      name: "Rahul Verma",
      position: "Sports Secretary",
      party: "Unity Alliance",
      image: "/candidate-emily.png",
      description:
        "Physical Education student and captain of the university cricket team. Led the sports committee to win multiple inter-university championships. Advocate for better sports infrastructure and equal opportunities for all students in athletics.",
      achievements: ["Sports Champion", "Infrastructure Advocate", "Team Leadership"],
      color: "from-blue-500 to-teal-500",
      keyPolicies: ["Sports Infrastructure", "Athletic Programs", "Fitness Facilities"],
    },
    {
      id: 4,
      name: "Sneha Gupta",
      position: "Cultural Secretary",
      party: "Unity Alliance",
      image: "/candidate-james.png",
      description:
        "Fine Arts student and accomplished dancer. Organized numerous cultural events and established partnerships with local artists. Champion of creative expression and arts education, working to make cultural activities accessible to all students.",
      achievements: ["Arts Advocate", "Event Organizer", "Creative Leader"],
      color: "from-purple-500 to-blue-500",
      keyPolicies: ["Arts Programs", "Cultural Events", "Creative Spaces"],
    },
    {
      id: 5,
      name: "Vikash Kumar",
      position: "General Secretary",
      party: "Unity Alliance",
      image: "/candidate-maria.png",
      description:
        "Social Work student with extensive experience in student welfare and community service. Led initiatives that improved campus sustainability and established student support systems. Passionate about academic excellence and student rights.",
      achievements: ["Student Welfare Expert", "Sustainability Leader", "Academic Advocate"],
      color: "from-cyan-500 to-teal-500",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-teal-950 to-cyan-950 text-white relative overflow-hidden">
      <ParticleBackground />
      <FloatingElements />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 shadow-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Gymkhana 2025
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#candidates"
              className="text-sm font-medium hover:text-teal-400 transition-all duration-300 hover:scale-105"
            >
              Candidates
            </Link>
            <Link
              href="#manifesto"
              className="text-sm font-medium hover:text-cyan-400 transition-all duration-300 hover:scale-105"
            >
              Manifesto
            </Link>
            <Link
              href="#feedback"
              className="text-sm font-medium hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              Feedback
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-emerald-400 transition-all duration-300 hover:scale-105"
            >
              About
            </Link>
          </nav>
          <div className="w-32"></div> {/* Spacer to maintain layout balance */}
        </div>
      </header>

      {/* Hero Section with Enhanced 3D */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <Hero3D />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-12 max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 via-cyan-500/30 to-blue-500/30 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-r from-teal-900/90 via-cyan-900/90 to-blue-900/90 backdrop-blur-xl border border-teal-400/50 rounded-2xl px-8 py-6 shadow-2xl">
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 shadow-lg">
                    <GraduationCap className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent animate-pulse">
                    Gymkhana Elections 2025
                  </h2>
                  <div className="hidden md:block h-8 w-px bg-gradient-to-b from-transparent via-teal-400 to-transparent"></div>
                  <p className="hidden md:block text-lg font-medium text-teal-200">Your Voice Matters</p>
                </div>
                <div className="md:hidden mt-2 text-center">
                  <p className="text-base font-medium text-teal-200">Your Voice Matters</p>
                </div>
              </div>
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                Stronger
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">Together</span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-[900px] mx-auto leading-relaxed">
              Join us in building a better campus experience. Meet our student leaders, explore our vision for campus
              life, and make your voice heard in shaping our university's future.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 text-lg px-8 py-4"
              >
                <Vote className="mr-3 h-5 w-5" />
                Vote Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg px-8 py-4"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Candidates Section with Enhanced 3D */}
      <section id="candidates" className="py-32 relative">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8 mb-20">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/40 via-blue-500/40 to-teal-500/40 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-r from-cyan-900/95 via-blue-900/95 to-teal-900/95 backdrop-blur-xl border-2 border-cyan-400/60 rounded-2xl px-8 py-4 shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 bg-clip-text text-transparent">
                  Student Leaders
                </h3>
              </div>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-[900px] mx-auto leading-relaxed">
              Dedicated students committed to improving campus life, academic excellence, and student welfare.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {candidates.map((candidate) => (
              <CandidateCard key={candidate.id} candidate={candidate} />
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section
        id="manifesto"
        className="py-32 bg-gradient-to-r from-slate-900/50 via-teal-900/50 to-cyan-900/50 backdrop-blur-xl"
      >
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8 mb-20">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/40 via-teal-500/40 to-cyan-500/40 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-r from-emerald-900/95 via-teal-900/95 to-cyan-900/95 backdrop-blur-xl border-2 border-emerald-400/60 rounded-2xl px-8 py-4 shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                  Campus Vision
                </h3>
              </div>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Our Commitment
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-[900px] mx-auto leading-relaxed">
              Our comprehensive plan to enhance campus life, improve student services, and create a thriving university
              community.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {manifestoPoints.map((point, index) => (
              <Card
                key={index}
                className="bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 group hover:scale-105 hover:shadow-2xl"
              >
                <CardHeader>
                  <div
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                  >
                    {point.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{point.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {point.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-400 leading-relaxed">{point.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-700 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 text-lg px-8 py-4"
            >
              <FileText className="mr-3 h-5 w-5" />
              Download Full Manifesto
            </Button>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/40 via-amber-500/40 to-yellow-500/40 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-r from-orange-900/95 via-amber-900/95 to-yellow-900/95 backdrop-blur-xl border-2 border-orange-400/60 rounded-2xl px-8 py-4 shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-300 via-amber-300 to-yellow-300 bg-clip-text text-transparent">
                  Share Your Voice
                </h3>
              </div>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Student Feedback
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-[700px] mx-auto leading-relaxed">
              We want to hear from you! Share your thoughts, concerns, and ideas to help us better serve our student
              community.
            </p>

            <div className="grid gap-8 md:grid-cols-2 mt-16">
              <Card className="bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <CardHeader>
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-600 flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <MessageSquare className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-white text-center text-xl">General Feedback</CardTitle>
                  <CardDescription className="text-gray-300 text-center text-base leading-relaxed">
                    Share your thoughts on our policies, candidates, or campaign
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    onClick={() => window.open("https://forms.google.com/feedback-general", "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Open Feedback Form
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <CardHeader>
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <Users className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-white text-center text-xl">Campus Issues</CardTitle>
                  <CardDescription className="text-gray-300 text-center text-base leading-relaxed">
                    Report campus issues or suggest improvements to student life
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    onClick={() => window.open("https://forms.google.com/campus-issues", "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Report Issues
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-12 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <h3 className="text-3xl font-bold text-white mb-6">Student Survey</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Take our 2-minute survey to help us understand what matters most to you as a student
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-700 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 text-lg px-8 py-4"
                onClick={() => window.open("https://forms.google.com/student-survey", "_blank")}
              >
                <Star className="mr-3 h-5 w-5" />
                Take Survey
                <ExternalLink className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950/90 backdrop-blur-xl border-t border-white/10 py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 shadow-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Gymkhana 2025
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Building a stronger campus community through student leadership and collaborative progress.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Quick Links</h3>
              <div className="space-y-3">
                <Link
                  href="#candidates"
                  className="block text-gray-400 hover:text-white transition-colors hover:translate-x-2 duration-300"
                >
                  Meet Candidates
                </Link>
                <Link
                  href="#manifesto"
                  className="block text-gray-400 hover:text-white transition-colors hover:translate-x-2 duration-300"
                >
                  Our Manifesto
                </Link>
                <Link
                  href="#feedback"
                  className="block text-gray-400 hover:text-white transition-colors hover:translate-x-2 duration-300"
                >
                  Give Feedback
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Get Involved</h3>
              <div className="space-y-3">
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors hover:translate-x-2 duration-300"
                >
                  Volunteer
                </Link>
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors hover:translate-x-2 duration-300"
                >
                  Join Campaign
                </Link>
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors hover:translate-x-2 duration-300"
                >
                  Events
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Contact</h3>
              <div className="space-y-3">
                <p className="text-gray-400">gymkhana@university.edu</p>
                <p className="text-gray-400">(555) 123-4567</p>
                <p className="text-gray-400">Student Union Building, Campus</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-16 pt-12 text-center">
            <p className="text-gray-400 text-lg">
              © {new Date().getFullYear()} Gymkhana Elections 2025. Authorized by Unity Alliance Student Campaign.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
