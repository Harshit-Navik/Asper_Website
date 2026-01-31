"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, Code2, Users, Rocket } from "lucide-react"

const values = [
  {
    icon: BookOpen,
    title: "Learn",
    description: "Access world-class resources and workshops from Google experts.",
    color: "#4285F4",
  },
  {
    icon: Code2,
    title: "Build",
    description: "Create innovative projects using cutting-edge technologies.",
    color: "#EA4335",
  },
  {
    icon: Users,
    title: "Connect",
    description: "Network with passionate developers from around the globe.",
    color: "#FBBC05",
  },
  {
    icon: Rocket,
    title: "Grow",
    description: "Advance your career and make an impact in the tech community.",
    color: "#34A853",
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
        <div className="absolute top-1/4 right-[-20%] w-[60%] h-[60%] rounded-full bg-neutral-100 opacity-[0.5] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 tracking-tight mb-6">
            About <span className="font-medium">GDG</span>
          </h2>
          <p className="text-lg text-neutral-500 font-light max-w-2xl mx-auto leading-relaxed">
            We're a community of developers, designers, and tech enthusiasts united by a shared passion for Google
            technologies and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ValueCard {...value} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface ValueCardProps {
  icon: typeof BookOpen
  title: string
  description: string
  color: string
}

function ValueCard({ icon: Icon, title, description, color }: ValueCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative p-8 rounded-3xl bg-white border border-neutral-100 shadow-sm hover:shadow-xl transition-shadow duration-500"
    >
      <div className="relative">
        {/* Icon - keeping Google colors only for the icon as subtle accent */}
        <motion.div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
          style={{ backgroundColor: `${color}15` }}
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-7 h-7" style={{ color }} />
        </motion.div>

        <h3 className="text-xl font-medium text-neutral-900 mb-3">{title}</h3>
        <p className="text-neutral-500 font-light leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
