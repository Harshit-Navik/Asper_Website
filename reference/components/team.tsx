"use client"

import { motion } from "framer-motion"
import { memo, useMemo, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { team } from "@/app/data/team"

type Member = { name: string; role: string; image: string }

// The "Main Main" Leaders of the chapter
const baseTeam: Member[] = team;

// Duplicate enough times to fill widely on large screens
const REPEATS = 4 

// --- Simple Team Card ---
const TeamCard = memo(function TeamCard({ name, role, image }: Member) {
  return (
    <div className="group relative w-56 flex-shrink-0 rounded-2xl border border-neutral-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
      <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-neutral-50 shadow-inner">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          draggable={false}
        />
      </div>
      <h3 className="text-lg font-bold text-neutral-900">{name}</h3>
      <p className="text-xs font-semibold uppercase tracking-wider text-primary-600 mt-1">{role}</p>
    </div>
  )
})

// --- Single-line Marquee (smooth + flicker-free) ---
function SingleLineMarquee({
  items,
  pxPerSecond = 30, // Slightly slower for better readability
  gapPx = 24,
  onCardClick,
}: {
  items: Member[]
  pxPerSecond?: number
  gapPx?: number
  onCardClick: (m: Member) => void
}) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const animRef = useRef<number | null>(null)
  const startRef = useRef<number>(0)
  const halfWidthRef = useRef<number>(0)

  // Double the list to create the "seamless" effect
  const trackItems = useMemo(() => [...items, ...items], [items])

  useEffect(() => {
    const wrapper = wrapperRef.current
    const track = trackRef.current
    if (!wrapper || !track) return

    const measure = () => {
      const children = Array.from(track.children) as HTMLElement[]
      let firstHalfWidth = 0
      const half = Math.floor(children.length / 2)
      
      // Calculate width of the first set of items + gaps
      for (let i = 0; i < half; i++) {
        firstHalfWidth += children[i].offsetWidth
        if (i < half - 1) firstHalfWidth += gapPx
      }
      // Add one final gap at the end of the set
      firstHalfWidth += gapPx
      
      halfWidthRef.current = firstHalfWidth
    }

    // Initial measure
    measure()
    
    // Re-measure on resize
    const ro = new ResizeObserver(() => measure())
    ro.observe(track)
    ro.observe(wrapper)

    const tick = (t: number) => {
      if (!startRef.current) startRef.current = t
      const elapsed = (t - startRef.current) / 1000
      const delta = elapsed * pxPerSecond
      
      const half = halfWidthRef.current || 1
      
      // The math: Move left (-delta). Modulo by half width to snap back instantly.
      // This creates the illusion of infinite scrolling.
      const x = -1 * (delta % half)
      
      track.style.transform = `translate3d(${x}px, 0, 0)`
      animRef.current = requestAnimationFrame(tick)
    }

    animRef.current = requestAnimationFrame(tick)

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
      ro.disconnect()
      startRef.current = 0
    }
  }, [gapPx, pxPerSecond])

  return (
    <div ref={wrapperRef} className="relative w-full overflow-hidden py-4">
      <div
        ref={trackRef}
        className="flex flex-nowrap items-center will-change-transform"
        style={{ gap: `${gapPx}px`, backfaceVisibility: "hidden" }}
      >
        {trackItems.map((member, idx) => (
          <div
            key={`${member.name}-${idx}`}
            onClick={() => onCardClick(member)}
          >
            <TeamCard {...member} />
          </div>
        ))}
      </div>

      {/* Fade Edges for depth */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to right, white 0%, transparent 10%, transparent 90%, white 100%)",
        }}
      />
    </div>
  )
}

export default function TeamSection() {
  const router = useRouter()
  
  // Flatten a repeated array of the base team
  const longTeam = useMemo(
    () => Array.from({ length: REPEATS }).flatMap(() => baseTeam),
    []
  )

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
            Meet our <span className="text-primary-600">Team</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600">
            The passionate individuals driving the GDG SOIT RGPV community forward.
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
            <SingleLineMarquee
              items={longTeam}
              pxPerSecond={35} 
              gapPx={32}
              onCardClick={() => router.push("/team")}
            />
        </div>
        
        <div className="mt-10 text-center">
            <button 
                onClick={() => router.push("/team")}
                className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-8 py-3 text-sm font-medium text-neutral-900 shadow-sm transition-all hover:bg-neutral-50 hover:shadow-md hover:-translate-y-0.5"
            >
                View Full Team
            </button>
        </div>
      </div>
    </section>
  )
}