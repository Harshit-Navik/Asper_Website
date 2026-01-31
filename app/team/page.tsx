"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Linkedin, Github, Twitter, Instagram } from "lucide-react";

// Dummy Data
const team = [
    {
        id: 1,
        name: "Pramanya Jayaswal",
        role: "Community Lead",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
        type: "lead",
        department: "Lead",
    },
    {
        id: 2,
        name: "Arjun Singh",
        role: "Tech Lead",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
        type: "lead",
        department: "Tech",
    },
    {
        id: 3,
        name: "Riya Sharma",
        role: "Management Lead",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
        type: "lead",
        department: "Management",
    },
    {
        id: 4,
        name: "Aditya Verma",
        role: "Design Lead",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
        type: "lead",
        department: "Graphics",
    },
    {
        id: 5,
        name: "Neha Gupta",
        role: "Content Lead",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
        type: "lead",
        department: "Content",
    },
    {
        id: 6,
        name: "Rahul Kumar",
        role: "Web Developer",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1000&auto=format&fit=crop",
        type: "volunteer",
        department: "Tech",
    },
    {
        id: 7,
        name: "Anjali Patel",
        role: "Event Manager",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
        type: "volunteer",
        department: "Management",
    },
    {
        id: 8,
        name: "Vikram Singh",
        role: "Graphic Designer",
        image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1000&auto=format&fit=crop",
        type: "volunteer",
        department: "Graphics",
    },
    {
        id: 9,
        name: "Sneha Reddy",
        role: "Sponsorship Coordinator",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop",
        type: "volunteer",
        department: "PR",
    },
];

const SocialLinks = () => (
    <div className="flex items-center gap-3 mt-3 text-gray-400 group-hover/card:text-white transition-colors">
        <a href="#" aria-label="LinkedIn" className="hover:text-neon-red transition-colors"><Linkedin size={18} /></a>
        <a href="#" aria-label="GitHub" className="hover:text-neon-red transition-colors"><Github size={18} /></a>
        <a href="#" aria-label="Twitter" className="hover:text-neon-red transition-colors"><Twitter size={18} /></a>
        <a href="#" aria-label="Instagram" className="hover:text-neon-red transition-colors"><Instagram size={18} /></a>
    </div>
);

function TeamCard({ member }: { member: any }) {
    return (
        <div className="group/card relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-neon-red/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,0,51,0.1)] cursor-pointer">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="
            object-cover 
            transition-transform duration-700 
            grayscale
            group-hover/card:grayscale-0
            group-hover/card:scale-110
          "
                />

                <div
                    className="
            absolute inset-0 
            bg-gradient-to-t from-deep-black via-transparent to-transparent 
            opacity-60
          "
                />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-deep-black/95 to-transparent">
                <h3 className="text-lg font-bold leading-tight text-white group-hover/card:text-neon-red transition-colors">{member.name}</h3>
                <p className="text-sm font-medium text-gray-400">{member.role}</p>
                <SocialLinks />
            </div>
        </div>
    );
}

export default function TeamPage() {
    const leads = team.filter((m) => m.type === "lead");
    const volunteers = team.filter((m) => m.type === "volunteer");
    const mainLead = team.find((m) => m.department === "Lead");
    const otherLeads = team.filter((m) => m.type === "lead" && m.department !== "Lead");

    return (
        <main className="min-h-screen bg-deep-black text-white selection:bg-neon-red/30">
            <Navbar />

            <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-4 font-heading tracking-tight">THE MINDS BEHIND <span className="text-neon-red">ASPER</span></h1>
                    <p className="text-lg text-gray-400">Meet the leaders and innovators driving the community.</p>
                </div>

                {/* 🌟 LEAD */}
                {mainLead && (
                    <div className="mb-20 grid place-items-center">
                        <div className="w-[85%] sm:w-[50%] lg:w-[35%]">
                            <TeamCard member={mainLead} />
                        </div>
                    </div>
                )}

                {/* 🌟 LEADS */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-white/10 flex-1"></div>
                        <h2 className="text-3xl font-bold font-heading uppercase tracking-widest text-neon-red">Core Team</h2>
                        <div className="h-px bg-white/10 flex-1"></div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {otherLeads.map((member) => (
                            <TeamCard
                                key={member.id}
                                member={member}
                            />
                        ))}
                    </div>
                </section>

                {/* 🙌 VOLUNTEERS */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-white/10 flex-1"></div>
                        <h2 className="text-3xl font-bold font-heading uppercase tracking-widest text-gray-500">Volunteers</h2>
                        <div className="h-px bg-white/10 flex-1"></div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {volunteers.map((member) => (
                            <TeamCard
                                key={member.id}
                                member={member}
                            />
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
