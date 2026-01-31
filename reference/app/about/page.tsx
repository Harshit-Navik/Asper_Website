"use client"

import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Users, Lightbulb, Code2, MessageSquare, Rocket } from "lucide-react"
import { useRouter } from "next/navigation"

const offerings = [
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Workshops & Training",
    description: "Hands-on sessions on the latest Google technologies, from Cloud to Android and AI.",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Tech Talks",
    description: "Insightful sessions from industry experts and alumni sharing real-world experiences.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Peer Learning",
    description: "A collaborative environment where students teach, learn, and grow together.",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Project Building",
    description: "Collaborate on open-source projects and build solutions for real-world problems.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Mentorship",
    description: "Guidance from seniors and professionals to help navigate your tech career path.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Hackathons",
    description: "Intense coding competitions to test your skills and foster innovation under pressure.",
  },
]

export default function AboutPage() {
  const router = useRouter();
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white text-neutral-900">
        {/* --- Hero Section --- */}
        <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                Building the future,<br />
                <span className="text-neutral-400">one line of code at a time.</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl leading-relaxed">
                GDG SOIT RGPV is a community-driven initiative for developers interested in Google technologies. We provide a platform to learn, connect, and collaborate.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- Community Collage --- */}
        <section className="px-4 mb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px] md:h-[500px]">
            <div className="relative col-span-2 row-span-2 rounded-3xl overflow-hidden bg-neutral-100">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop"
                alt="Community gathering"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white w-full">
                <span className="font-medium">Annual DevFest</span>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden bg-neutral-100 hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
                alt="Team meeting"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden bg-neutral-100 hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop"
                alt="Coding workshop"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative col-span-2 md:col-span-2 rounded-3xl overflow-hidden bg-neutral-100">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                alt="Workshop session"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* --- Mission Section --- */}
        <section className="py-20 px-6 bg-neutral-50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Mission</span>
              <h2 className="text-4xl font-bold mb-6 text-neutral-900">Fostering Innovation at RGPV</h2>
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  Our mission is to foster a vibrant developer community at RGPV's School of Information Technology by promoting knowledge sharing, innovation, and collaboration.
                </p>
                <p>
                  We aim to empower developers with cutting-edge skills and technologies through workshops, talks, and hands-on projects, bridging the gap between academic theory and industry application.
                </p>
              </div>
            </div>
            {/* Stats */}
            <div className="flex-1 w-full">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 col-span-1">
                  <div className="text-5xl font-bold text-neutral-900 mb-2">100+</div>
                  <div className="text-neutral-500">Community Members</div>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100">
                  <div className="text-5xl font-bold text-neutral-900 mb-2">10+</div>
                  <div className="text-neutral-500">Events Hosted</div>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 col-span-2">
                  <div className="text-5xl font-bold text-neutral-900 mb-2">100%</div>
                  <div className="text-neutral-500">Passion for Code</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- What We Do (Grid) --- */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">What We Do</h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                We don't just talk about code; we ship it. Here is how we engage with our community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offerings.map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-neutral-200 hover:border-neutral-400 transition-colors duration-300">
                  <div className="w-12 h-12 bg-neutral-100 rounded-2xl flex items-center justify-center mb-6 text-neutral-900">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-neutral-900">{item.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Join CTA --- */}
        <section className="py-24 px-6 bg-black text-white rounded-t-[3rem] md:rounded-t-[5rem]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to start building?</h2>
            <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
              Everyone is welcome regardless of skill level. Join us to learn, collaborate, and shape the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => window.open("https://gdg.community.dev/gdg-on-campus-school-of-information-technology-bhopal-india/", "_blank")
              } className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-neutral-200 transition-colors">
                Join the Chapter
              </button>
              <button onClick={() => router.push("/events")} className="px-8 py-4 border border-neutral-700 text-white rounded-full font-bold text-lg hover:bg-neutral-900 transition-colors">
                View Upcoming Events
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </SmoothScroll>
  )
}