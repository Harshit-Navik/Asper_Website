"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react"
import { events } from "@/app/data/events"
import { useRouter } from "next/navigation"

export default function Events() {
  const ref = useRef(null)
  const router = useRouter()
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 bg-neutral-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 tracking-tight mb-6">
            <span className="font-medium">Events</span>
          </h2>
          <p className="text-lg text-neutral-500 font-light max-w-2xl mx-auto">
            Join us at our upcoming events and be part of the developer community.
          </p>
        </motion.div>

        {/* Unified Grid: removed auto-rows-fr and col-span logic to make them identical */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              // Removed lg:col-span-2, so all cards are the same size
              className="col-span-1 h-full"
            >
              <EventCard {...event} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => router.push('/events')}
            whileHover={{ x: 5 }}
            className="group inline-flex items-center gap-2 text-neutral-900 font-medium"
          >
            View All Events
            <motion.span className="relative">
              <ArrowRight className="w-5 h-5" />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neutral-900 group-hover:w-full transition-all duration-300" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

interface EventCardProps {
  id: string
  title: string
  date: string
  location: string
  description: string
  tag: string
  image: string
  featured: boolean
}

function EventCard({ id, title, date, location, description, tag, image, featured } : EventCardProps) {
  const router = useRouter()

  const CardContent = () => (
    <div className="flex flex-col h-full relative z-10">
      {/* Header / Badges */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-2 flex-wrap">
          {/* Tag Badge */}
          <span className={`inline-block px-3 py-1 text-xs font-bold tracking-wide uppercase rounded-full shadow-sm backdrop-blur-sm 
            ${featured 
              ? "bg-indigo-600 text-white" 
              : "bg-white/90 text-neutral-900"
            }`}>
            {tag}
          </span>
          
          {/* Featured Badge (Only shown if featured) */}
          {featured && (
            <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold tracking-wide uppercase bg-amber-400/20 text-amber-700 border border-amber-500/20 rounded-full">
              <Sparkles className="w-3 h-3" />
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Title & Desc */}
      <div className="flex-grow">
        <h3 className="font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors text-xl md:text-2xl">
          {title}
        </h3>
        <p className="text-neutral-500 leading-relaxed mb-6 text-sm line-clamp-3">
          {description}
        </p>
      </div>

      {/* Footer Info */}
      <div className="space-y-3 pt-6 border-t border-neutral-200/60 mt-auto">
        <div className="flex items-center gap-2 text-sm text-neutral-500">
          <Calendar className="w-4 h-4 text-neutral-400" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-neutral-500">
          <MapPin className="w-4 h-4 text-neutral-400" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  )

  return (
    <motion.div
      onClick={() => router.push(`/events/${id}`)}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      // Standardized container classes
      className={`group relative h-full cursor-pointer rounded-3xl overflow-hidden bg-white flex flex-col
        ${featured 
          ? "shadow-2xl shadow-indigo-900/10" // Heavier shadow for featured
          : "border border-neutral-200 hover:border-neutral-300 hover:shadow-xl"
        }`}
    >
      {/* FEATURED GLOW EFFECT */}
      {featured && (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-100 p-[1.5px] z-0">
          <div className="absolute inset-0 bg-white rounded-[23px]" /> 
        </div>
      )}

      {/* Card Inner Container - Enforces standard flex-col layout */}
      <div className="relative h-full z-10 rounded-3xl overflow-hidden bg-white flex flex-col">
        
        {/* IMAGE SECTION - Fixed height for all */}
        <div className="relative overflow-hidden h-52 w-full flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
          
          {/* For non-featured cards, we put the tag on the image to save vertical space.
              For featured cards, we put tags in the content area (handled in CardContent) to highlight them. */}
          {!featured && (
             <div className="absolute top-4 left-4">
              <span className="inline-block px-3 py-1 text-xs font-bold tracking-wide uppercase bg-white/90 backdrop-blur-sm rounded-full text-neutral-900 shadow-sm">
                {tag}
              </span>
            </div>
          )}
        </div>

        {/* CONTENT SECTION - Standard padding */}
        <div className="relative flex flex-col p-6 flex-grow">
          {/* We only use the 'CardContent' structure for featured cards to show the badges at top.
              For standard cards, we can reuse it but the 'tag' will be hidden in header (logic inside CardContent).
              To keep code clean, we render CardContent and let it handle the display logic.
           */}
           <div className="flex flex-col h-full relative z-10">
              {/* Header / Badges - ONLY for Featured cards here, others have tag on image */}
              {featured && (
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-2 flex-wrap">
                    <span className="inline-block px-3 py-1 text-xs font-bold tracking-wide uppercase rounded-full shadow-sm backdrop-blur-sm bg-indigo-600 text-white">
                      {tag}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold tracking-wide uppercase bg-amber-400/20 text-amber-700 border border-amber-500/20 rounded-full">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  </div>
                </div>
              )}

              {/* Title & Desc */}
              <div className="flex-grow">
                <h3 className={`font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors 
                  ${featured ? "text-2xl" : "text-xl md:text-2xl"}`}>
                  {title}
                </h3>
                <p className="text-neutral-500 leading-relaxed mb-6 text-sm line-clamp-3">
                  {description}
                </p>
              </div>

              {/* Footer Info */}
              <div className="space-y-3 pt-6 border-t border-neutral-200/60 mt-auto">
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <Calendar className="w-4 h-4 text-neutral-400" />
                  <span>{date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <MapPin className="w-4 h-4 text-neutral-400" />
                  <span>{location}</span>
                </div>
              </div>
            </div>
        </div>

        {/* HOVER ARROW */}
        <motion.div
          className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 hidden lg:block z-20"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <div className={`p-2 rounded-full ${featured ? "bg-indigo-50" : "bg-neutral-50"}`}>
            <ArrowRight className={`w-5 h-5 ${featured ? "text-indigo-600" : "text-neutral-900"}`} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}