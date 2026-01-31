"use client"

import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"
import { team } from "@/app/data/team"

const SocialLinks = () => (
  <div className="flex items-center gap-3 mt-3 text-neutral-300 group-hover:text-white transition-colors">
    <a href="#" aria-label="LinkedIn"><FaLinkedin className="hover:text-[#0A66C2]" /></a>
    <a href="#" aria-label="GitHub"><FaGithub className="hover:text-black" /></a>
    <a href="#" aria-label="Twitter"><FaTwitter className="hover:text-[#1DA1F2]" /></a>
    <a href="#" aria-label="Instagram"><FaInstagram className="hover:text-[#E1306C]" /></a>
  </div>
)

function TeamCard({ member, onClick }: { member: any; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl bg-neutral-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="
            object-cover 
            transition-transform duration-700 
            grayscale-0                   /* Default: full color on mobile */
            md:grayscale                  /* Desktop: grayscale by default */
            md:group-hover:grayscale-0    /* Desktop hover: color */
            group-hover:scale-110
          "
        />

        <div
          className="
            absolute inset-0 
            bg-gradient-to-t from-black/90 via-black/40 to-transparent 
            opacity-80 
            md:opacity-0 md:group-hover:opacity-100 
            transition-opacity duration-300
          "
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-lg font-bold leading-tight">{member.name}</h3>
        <p className="text-sm font-medium text-neutral-300">{member.role}</p>
        <SocialLinks />
      </div>
    </div>
  )
}

export default function TeamPage() {
  const router = useRouter()
  // const departments = ["Tech", "Event Management", "PR", "Graphics", "A/V", "Social Media Management"]
  // const groupedMembers = departments.map((dept) => ({
  //   name: dept,
  //   members: team.filter((m) => m.department === dept),
  // }))
  const leads = team.filter((m) => m.type === "lead")
  const volunteers = team.filter((m) => m.type === "volunteer")
  const mainLead = team.find((m) => m.department === "Lead")

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white">
        <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">The Minds Behind GDG</h1>
            <p className="text-lg text-neutral-500">Meet the leaders and innovators of GDG</p>
          </div>

          {/* 🌟 Slightly Larger Pramanya Card */}
          {mainLead && (
            <div className="mb-20 grid place-items-center">
              <div className="w-[85%] sm:w-[50%] lg:w-[45%]">
                <TeamCard member={mainLead} onClick={() => router.push(`/team/${mainLead.id}`)} />
              </div>
            </div>
          )}

          {/* 🌟 LEADS */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Leads</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {leads.map((member) => (
                <TeamCard
                  key={member.id}
                  member={member}
                  onClick={() => router.push(`/team/${member.id}`)}
                />
              ))}
            </div>
          </section>

          {/* 🙌 VOLUNTEERS */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Volunteers</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {volunteers.map((member) => (
                <TeamCard
                  key={member.id}
                  member={member}
                  onClick={() => router.push(`/team/${member.id}`)}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  )
}
