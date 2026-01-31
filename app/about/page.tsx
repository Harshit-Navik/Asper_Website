"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Users, Lightbulb, Code2, MessageSquare, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";

const offerings = [
    {
        icon: <Calendar className="w-6 h-6" />,
        title: "Workshops & Training",
        description: "Hands-on sessions on the latest technologies, from Cloud to Web Dev and AI.",
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
];

export default function AboutPage() {
    const router = useRouter();

    return (
        <main className="min-h-screen bg-deep-black text-white selection:bg-neon-red/30">
            <Navbar />

            {/* --- Hero Section --- */}
            <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24 border-b border-white/5">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 font-heading">
                            BUILDING THE <span className="text-neon-red">FUTURE</span>,<br />
                            <span className="text-gray-500">ONE LINE AT A TIME.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
                            ASPER is the official technical club of the IT Department at UIT RGPV. We are a community-driven initiative providing a platform to learn, connect, and collaborate.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- Community Collage --- */}
            <section className="px-4 py-24 overflow-hidden relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-red/5 blur-[120px] -z-10" />

                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px] md:h-[500px]">
                    <div className="relative col-span-2 row-span-2 rounded-3xl overflow-hidden bg-white/5 border border-white/10 group">
                        <Image
                            src="/assets/about_asper/asper_hackathon.png"
                            alt="Community gathering"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white w-full">
                            <span className="font-bold font-heading tracking-wider">ANNUAL TECH FEST</span>
                        </div>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hidden md:block group">
                        <Image
                            src="/assets/web_dev_cinematics.png"
                            alt="Web Dev"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                        />
                    </div>
                    <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hidden md:block group">
                        <Image
                            src="/assets/ml_ds_cinematics.png"
                            alt="ML Workshop"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                        />
                    </div>
                    <div className="relative col-span-2 md:col-span-2 rounded-3xl overflow-hidden bg-white/5 border border-white/10 group">
                        <Image
                            src="/assets/about_asper/asper_team.png"
                            alt="Team Session"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* --- Mission Section --- */}
            <section className="py-20 px-6 bg-white/5 border-y border-white/5">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                    <div className="flex-1">
                        <span className="text-neon-red font-bold tracking-widest uppercase text-sm mb-2 block">Our Mission</span>
                        <h2 className="text-4xl font-black mb-6 text-white font-heading">FOSTERING INNOVATION AT <span className="text-gray-500">RGPV</span></h2>
                        <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
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
                            <div className="bg-deep-black p-8 rounded-3xl shadow-lg border border-white/10 col-span-1 hover:border-neon-red/30 transition-colors">
                                <div className="text-5xl font-black text-white mb-2 font-heading">100+</div>
                                <div className="text-gray-500 font-medium">Community Members</div>
                            </div>
                            <div className="bg-deep-black p-8 rounded-3xl shadow-lg border border-white/10 hover:border-neon-red/30 transition-colors">
                                <div className="text-5xl font-black text-white mb-2 font-heading">10+</div>
                                <div className="text-gray-500 font-medium">Events Hosted</div>
                            </div>
                            <div className="bg-deep-black p-8 rounded-3xl shadow-lg border border-white/10 col-span-2 hover:border-neon-red/30 transition-colors">
                                <div className="text-5xl font-black text-white mb-2 font-heading">100%</div>
                                <div className="text-gray-500 font-medium">Passion for Code</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- What We Do (Grid) --- */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 font-heading text-white">WHAT WE <span className="text-neon-red">DO</span></h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            We don't just talk about code; we ship it. Here is how we engage with our community.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offerings.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-neon-red/50 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-deep-black rounded-2xl flex items-center justify-center mb-6 text-neon-red group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,0,51,0.2)]">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-red transition-colors">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Join CTA --- */}
            <section className="py-24 px-6 bg-gradient-to-b from-deep-black to-black text-white border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 font-heading">READY TO START <span className="text-neon-red">BUILDING?</span></h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Everyone is welcome regardless of skill level. Join us to learn, collaborate, and shape the future of technology.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-neon-red text-white rounded-lg font-bold text-lg hover:shadow-[0_0_30px_rgba(255,0,51,0.5)] hover:scale-105 transition-all">
                            Join the Chapter
                        </button>
                        <button className="px-8 py-4 border border-white/20 text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-all">
                            View Upcoming Events
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
