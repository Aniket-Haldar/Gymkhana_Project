"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Vote,
  Users,
  FileText,
  MessageSquare,
  ExternalLink,
  Star,
  Heart,
  Zap,
  Shield,
  Target,
  Globe,
} from "lucide-react"
import Link from "next/link"
import { CandidateCard } from "./components/candidate-card"
import { Hero3D } from "./components/hero-3d"
import { FloatingElements } from "./components/floating-elements"
import { ParticleBackground } from "./components/particle-background"

export default function ElectionPage() {
  const candidates = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "President",
      party: "Progressive Alliance",
      image: "/candidate-sarah.png",
      description:
        "Experienced leader with 15 years in public service. Focuses on healthcare reform, education funding, and environmental protection. Former mayor with proven track record of reducing city debt by 40% while improving public services. Led successful initiatives in affordable housing and renewable energy adoption.",
      achievements: ["Healthcare Reform Advocate", "Environmental Champion", "Education Supporter"],
      color: "from-blue-500 to-cyan-500",
      experience: "15 years",
      keyPolicies: ["Universal Healthcare", "Green New Deal", "Education Reform"],
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Vice President",
      party: "Progressive Alliance",
      image: "/candidate-michael.png",
      description:
        "Tech entrepreneur turned public servant. Specializes in digital infrastructure, economic development, and innovation policy. Successfully launched 3 startups and created over 500 jobs in the tech sector. Advocates for digital literacy programs and smart city initiatives.",
      achievements: ["Tech Innovation Leader", "Job Creator", "Digital Infrastructure Expert"],
      color: "from-green-500 to-emerald-500",
      experience: "12 years",
      keyPolicies: ["Digital Infrastructure", "Innovation Economy", "Smart Cities"],
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      position: "Secretary of Health",
      party: "Progressive Alliance",
      image: "/candidate-emily.png",
      description:
        "Renowned physician and public health expert. Led pandemic response efforts and healthcare accessibility initiatives. Published researcher with 50+ papers on public health policy and community medicine. Champion of mental health awareness and preventive care programs.",
      achievements: ["Public Health Expert", "Pandemic Response Leader", "Healthcare Accessibility Advocate"],
      color: "from-purple-500 to-pink-500",
      experience: "20 years",
      keyPolicies: ["Public Health", "Mental Health", "Preventive Care"],
    },
    {
      id: 4,
      name: "James Thompson",
      position: "Secretary of Education",
      party: "Progressive Alliance",
      image: "/candidate-james.png",
      description:
        "Former university dean and education policy researcher. Champion of affordable education and student debt relief. Implemented innovative programs that increased graduation rates by 35% in his district. Advocate for STEM education and vocational training programs.",
      achievements: ["Education Policy Expert", "Student Debt Relief Advocate", "Innovation in Learning"],
      color: "from-orange-500 to-red-500",
      experience: "18 years",
      keyPolicies: ["Free Education", "STEM Programs", "Vocational Training"],
    },
    {
      id: 5,
      name: "Maria Santos",
      position: "Secretary of Environment",
      party: "Progressive Alliance",
      image: "/candidate-maria.png",
      description:
        "Environmental scientist and climate policy expert with 20 years of experience. Led major conservation projects and renewable energy initiatives. Former EPA advisor who helped draft landmark environmental legislation. Passionate about sustainable development and green job creation.",
      achievements: ["Climate Policy Expert", "Conservation Leader", "Renewable Energy Advocate"],
      color: "from-teal-500 to-blue-500",
      experience: "20 years",
      keyPolicies: ["Climate Action", "Conservation", "Green Jobs"],
    },
  ]

  const manifestoPoints = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Universal Healthcare",
      description: "Comprehensive healthcare coverage for all citizens, reducing costs and improving outcomes.",
      details: "Implement a single-payer system that covers medical, dental, and mental health services.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Clean Energy Transition",
      description: "100% renewable energy by 2035 with massive job creation in green industries.",
      details: "Invest $2 trillion in renewable infrastructure and create 10 million green jobs.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Education for All",
      description: "Free public education from pre-K through college, with student debt forgiveness.",
      details: "Cancel existing student debt and make public colleges tuition-free nationwide.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Social Justice Reform",
      description: "Criminal justice reform, police accountability, and equal rights protection.",
      details: "End mass incarceration, reform policing, and strengthen civil rights enforcement.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Economic Equality",
      description: "Living wages, worker rights, and progressive taxation for fair economic growth.",
      details: "Raise minimum wage to $20/hour and strengthen collective bargaining rights.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Climate Action",
      description: "Aggressive climate action to meet Paris Agreement goals and protect our planet.",
      details: "Rejoin international climate accords and lead global environmental initiatives.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 text-white relative overflow-hidden">
      <ParticleBackground />
      <FloatingElements />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg">
              <Vote className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Election 2024
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#candidates"
              className="text-sm font-medium hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              Candidates
            </Link>
            <Link
              href="#manifesto"
              className="text-sm font-medium hover:text-purple-400 transition-all duration-300 hover:scale-105"
            >
              Manifesto
            </Link>
            <Link
              href="#feedback"
              className="text-sm font-medium hover:text-pink-400 transition-all duration-300 hover:scale-105"
            >
              Feedback
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-cyan-400 transition-all duration-300 hover:scale-105"
            >
              About
            </Link>
          </nav>

          <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Register to Vote
          </Button>
        </div>
      </header>

      {/* Hero Section with Enhanced 3D */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <Hero3D />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-12 max-w-5xl mx-auto">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30 backdrop-blur-xl px-6 py-2 text-lg"
            >
              🗳️ Election 2024 - Your Voice Matters
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Building Tomorrow
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">Together</span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-[900px] mx-auto leading-relaxed">
              Join us in shaping a brighter future. Meet our candidates, explore our vision, and make your voice heard
              in the most important election of our generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 text-lg px-8 py-4"
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
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 backdrop-blur-xl px-6 py-2 text-lg"
            >
              Meet the Team
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Our Candidates
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-[900px] mx-auto leading-relaxed">
              Experienced leaders committed to progress, equality, and a better future for all.
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
        className="py-32 bg-gradient-to-r from-slate-900/50 via-blue-900/50 to-purple-900/50 backdrop-blur-xl"
      >
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8 mb-20">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 border border-green-500/30 backdrop-blur-xl px-6 py-2 text-lg"
            >
              Our Vision
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Policy Manifesto
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-[900px] mx-auto leading-relaxed">
              Our comprehensive plan to address the challenges facing our nation and build a more equitable society.
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
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
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
              className="bg-gradient-to-r from-green-500 via-blue-500 to-cyan-600 hover:from-green-600 hover:via-blue-600 hover:to-cyan-700 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 text-lg px-8 py-4"
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
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border border-orange-500/30 backdrop-blur-xl px-6 py-2 text-lg"
            >
              Your Voice Matters
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Share Your Feedback
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-[700px] mx-auto leading-relaxed">
              We want to hear from you! Share your thoughts, concerns, and ideas to help us better serve our community.
            </p>

            <div className="grid gap-8 md:grid-cols-2 mt-16">
              <Card className="bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <CardHeader>
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <MessageSquare className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-white text-center text-xl">General Feedback</CardTitle>
                  <CardDescription className="text-gray-300 text-center text-base leading-relaxed">
                    Share your thoughts on our policies, candidates, or campaign
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    onClick={() => window.open("https://forms.google.com/feedback-general", "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Open Feedback Form
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <CardHeader>
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <Users className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-white text-center text-xl">Community Issues</CardTitle>
                  <CardDescription className="text-gray-300 text-center text-base leading-relaxed">
                    Report local issues or suggest community improvements
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    onClick={() => window.open("https://forms.google.com/community-issues", "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Report Issues
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-12 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <h3 className="text-3xl font-bold text-white mb-6">Quick Survey</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Take our 2-minute survey to help us understand what matters most to you
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 hover:from-blue-600 hover:via-purple-600 hover:to-pink-700 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 text-lg px-8 py-4"
                onClick={() => window.open("https://forms.google.com/quick-survey", "_blank")}
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
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg">
                  <Vote className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Election 2024
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Building a better tomorrow through progressive leadership and community engagement.
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
                  Donate
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
                <p className="text-gray-400">campaign@election2024.com</p>
                <p className="text-gray-400">(555) 123-4567</p>
                <p className="text-gray-400">123 Democracy St, Capitol City</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-16 pt-12 text-center">
            <p className="text-gray-400 text-lg">
              © {new Date().getFullYear()} Election 2024 Campaign. Paid for by Citizens for Progress.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
