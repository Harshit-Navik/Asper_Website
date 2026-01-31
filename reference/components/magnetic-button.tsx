"use client"

import type React from "react"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface MagneticButtonProps {
  children: ReactNode
  variant?: "primary" | "outline"
}

export default function MagneticButton({ children, variant = "primary" }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.3)
    y.set((e.clientY - centerY) * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const isPrimary = variant === "primary"

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative group px-8 py-4 rounded-full font-medium text-base
        transition-all duration-300 overflow-hidden
        ${
          isPrimary
            ? "bg-neutral-900 text-white shadow-lg shadow-neutral-900/25 hover:bg-neutral-800"
            : "bg-transparent border-2 border-neutral-300 text-neutral-700 hover:border-neutral-900 hover:text-neutral-900"
        }
      `}
    >
      {isPrimary && (
        <motion.span
          className="absolute inset-0 bg-neutral-900 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
          style={{ transform: "translateZ(-1px)" }}
        />
      )}

      {!isPrimary && (
        <motion.span
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
          animate={{
            boxShadow: ["0 0 0 0 rgba(0, 0, 0, 0)", "0 0 20px 2px rgba(0, 0, 0, 0.1)", "0 0 0 0 rgba(0, 0, 0, 0)"],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
      )}

      {/* Ripple effect */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="absolute w-0 h-0 rounded-full bg-white/20 group-hover:w-full group-hover:h-full transition-all duration-500 ease-out" />
      </span>

      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
