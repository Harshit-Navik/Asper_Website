"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Linkedin, Github, Twitter, Send } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-deep-black text-white selection:bg-neon-red/30">
            <Navbar />

            <section className="pt-32 pb-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 max-w-3xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 font-heading">
                            GET IN <span className="text-neon-red">TOUCH</span>.
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
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
                                        <label htmlFor="name" className="text-sm font-semibold text-gray-300">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Your Name"
                                            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-red/50 focus:border-neon-red transition-all text-white placeholder:text-gray-600"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-gray-300">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="your@email.com"
                                            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-red/50 focus:border-neon-red transition-all text-white placeholder:text-gray-600"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-semibold text-gray-300">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        placeholder="Partnership inquiry..."
                                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-red/50 focus:border-neon-red transition-all text-white placeholder:text-gray-600"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-gray-300">Message</label>
                                    <textarea
                                        id="message"
                                        rows={6}
                                        placeholder="Tell us more..."
                                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-red/50 focus:border-neon-red transition-all resize-none text-white placeholder:text-gray-600"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-neon-red text-white rounded-xl font-bold text-lg hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,0,51,0.4)] transition-all flex items-center justify-center gap-2 group"
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
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-neon-red/50 transition-all duration-300 group">
                                    <div className="w-10 h-10 bg-deep-black rounded-full flex items-center justify-center shadow-lg mb-4 border border-white/10 group-hover:border-neon-red/50 transition-colors">
                                        <Mail className="w-5 h-5 text-neon-red" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-1 text-white">Email Us</h3>
                                    <a href="mailto:asper.club@uitrgpv.ac.in" className="text-gray-400 hover:text-white transition-colors text-sm">
                                        asper.club@uitrgpv.ac.in
                                    </a>
                                </div>
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-neon-red/50 transition-all duration-300 group">
                                    <div className="w-10 h-10 bg-deep-black rounded-full flex items-center justify-center shadow-lg mb-4 border border-white/10 group-hover:border-neon-red/50 transition-colors">
                                        <MapPin className="w-5 h-5 text-neon-red" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-1 text-white">Visit Us</h3>
                                    <p className="text-gray-400 text-sm">
                                        pool, UIT RGPV<br />Bhopal, MP
                                    </p>
                                </div>
                            </div>

                            {/* Socials */}
                            <div>
                                <h3 className="font-bold text-xl mb-6 text-white">Follow our updates</h3>
                                <div className="flex gap-4">
                                    {[
                                        { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
                                        { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
                                        { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
                                        { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
                                    ].map((social, idx) => (
                                        <a
                                            key={idx}
                                            href={social.href}
                                            aria-label={social.label}
                                            className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-neon-red hover:text-white hover:border-neon-red transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,51,0.4)]"
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Map Image Placeholder */}
                            <div className="relative w-full h-64 rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 group">
                                <Image
                                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                                    alt="Map Location"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none">
                                    <div className="bg-black/80 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2 border border-white/10 text-white">
                                        <MapPin className="w-4 h-4 text-neon-red" />
                                        UIT RGPV, Bhopal
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
