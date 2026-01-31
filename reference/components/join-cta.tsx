"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function JoinCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const router = useRouter();

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <MeshBackground />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-6xl font-light text-neutral-900 tracking-tight mb-8 text-balance">
            Be part of something <span className="font-medium">bigger</span>
          </h2>
          <p className="text-xl text-neutral-500 font-light mb-12 max-w-2xl mx-auto">
            GDG SRGPV is where innovation meets collaboration. Join thousands of developers building the future
            together.
          </p>

          <motion.div
            onClick={() => router.push("https://gdg.community.dev/gdg-on-campus-school-of-information-technology-bhopal-india/")}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <NeutralPulseButton>Join the Community</NeutralPulseButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function NeutralPulseButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="relative group px-10 py-5 rounded-full font-medium text-lg text-white overflow-hidden bg-neutral-900 hover:bg-neutral-800 transition-colors"
    >
      {/* Animated pulse border - neutral color */}
      <motion.span
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: ["0 0 0 0 rgba(0, 0, 0, 0.2)", "0 0 0 20px rgba(0, 0, 0, 0)", "0 0 0 0 rgba(0, 0, 0, 0)"],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* Shimmer effect */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

function MeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: 600,
      })
    }
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || dimensions.width === 0) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    const colors = ["#e5e5e5", "#d4d4d4", "#f5f5f5", "#e5e5e5"]
    const blobs = colors.map((color, i) => ({
      x: (dimensions.width / 4) * (i + 0.5),
      y: dimensions.height / 2,
      radius: 150 + Math.random() * 100,
      color,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }))

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      blobs.forEach((blob) => {
        blob.x += blob.vx
        blob.y += blob.vy

        if (blob.x < blob.radius || blob.x > dimensions.width - blob.radius) blob.vx *= -1
        if (blob.y < blob.radius || blob.y > dimensions.height - blob.radius) blob.vy *= -1

        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius)
        gradient.addColorStop(0, blob.color + "80")
        gradient.addColorStop(1, blob.color + "00")

        ctx.beginPath()
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationId)
  }, [dimensions])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ filter: "blur(60px)" }} />
}
