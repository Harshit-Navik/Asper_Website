"use client"

import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"
import { motion } from "framer-motion"
import { Mail, MapPin, Instagram, Linkedin, Github, Twitter, Send } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white text-neutral-900">
        <section className="pt-32 pb-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16 max-w-3xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                Get in touch<span className="text-primary-600">.</span>
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Whether you have a question about events, want to partner with us, or just want to say hi, we'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-neutral-900">Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Rahul Sharma"
                        className="w-full px-4 py-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-neutral-400 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-neutral-900">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="rahul@example.com"
                        className="w-full px-4 py-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-neutral-400 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-neutral-900">Subject</label>
                     <input
                        type="text"
                        id="subject"
                        placeholder="Partnership inquiry..."
                        className="w-full px-4 py-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-neutral-400 transition-all"
                      />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-neutral-900">Message</label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Tell us more..."
                      className="w-full px-4 py-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-neutral-400 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-black text-white rounded-xl font-bold text-lg hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </motion.div>

              {/* Contact Info & Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-12"
              >
                {/* Info Cards */}
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100 hover:shadow-md transition-all duration-300">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                            <Mail className="w-5 h-5 text-neutral-900" />
                        </div>
                        <h3 className="font-bold text-lg mb-1">Email Us</h3>
                        <a href="gdgoncampussoit@gmail.com" className="text-neutral-600 hover:text-black transition-colors">
                        gdgoncampussoit@gmail.com
                        </a>
                    </div>
                    <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100 hover:shadow-md transition-all duration-300">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                            <MapPin className="w-5 h-5 text-neutral-900" />
                        </div>
                        <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                        <p className="text-neutral-600">
                            SOIT, RGPV<br/>Bhopal, MP
                        </p>
                    </div>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="font-bold text-xl mb-6">Follow our updates</h3>
                    <div className="flex gap-4">
                        {[
                            // { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
                            { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/gdg_soitrgpv?igsh=MWpjZmFiYWt3MWdmaw==", label: "Instagram" },
                            { icon: <Github className="w-5 h-5" />, href: "https://github.com/gdg-soit-rgpv", label: "GitHub" },
                            { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/google-developer-student-clubs-soit-rgpv/", label: "LinkedIn" },
                            { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/GDGSoit", label: "X (Twitter)" },
                        ].map((social, idx) => (
                            <a 
                                key={idx}
                                href={social.href}
                                aria-label={social.label}
                                className="w-12 h-12 bg-neutral-50 border border-neutral-200 rounded-full flex items-center justify-center text-neutral-600 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Map Image Placeholder */}
                <div className="relative w-full h-64 rounded-3xl overflow-hidden border border-neutral-200 grayscale hover:grayscale-0 transition-all duration-500 group">
                     <Image 
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                        alt="Map Location"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                     />
                     <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold shadow-sm flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-red-500" />
                            SOIT RGPV, Bhopal
                        </div>
                     </div>
                </div>

              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  )
}