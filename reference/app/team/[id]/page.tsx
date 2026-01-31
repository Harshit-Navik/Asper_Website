import Image from "next/image"
import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"
import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, ArrowLeft, Mail } from "lucide-react"
import { team } from "@/app/data/team"


export default async function MemberPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const member = team.find((m) => m.id === id)
  console.log(id, member)

  if (!member) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-3xl font-semibold mb-4 text-neutral-900">Member not found</h1>
        <Link href="/team" className="text-primary-600 hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Go back
        </Link>
      </main>
    )
  }

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white">
        <div className="pt-32 pb-20 px-6 md:px-8 max-w-5xl mx-auto">
          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/team"
              className="inline-flex items-center text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Team
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Image Column */}
            <div className="flex-shrink-0 w-full md:w-auto flex flex-col items-center md:items-start">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl bg-neutral-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Info Column */}
            <div className="flex-1 text-center md:text-left pt-2">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">{member.name}</h1>
              <div className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 font-medium text-sm mb-4">
                {member.role}
              </div>

              {/* Email Section */}
              {member.email && (
                <div className="flex items-center justify-center md:justify-start gap-2 mb-6 text-neutral-600 hover:text-primary-700 transition-colors">
                  <Mail className="w-5 h-5" />
                  <a href={`mailto:${member.email}`} className="underline hover:no-underline">
                    {member.email}
                  </a>
                </div>
              )}

              <p className="text-neutral-600 leading-relaxed text-lg mb-8 max-w-2xl mx-auto md:mx-0">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="border-t border-neutral-100 pt-8 mt-4">
                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">
                  Connect
                </h3>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  {member.linkedin && (
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      className="p-3 rounded-full bg-neutral-50 text-neutral-600 hover:bg-[#0077b5] hover:text-white transition-all duration-300"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  )}
                  {member.instagram && (
                    <Link
                      href={member.instagram}
                      target="_blank"
                      className="p-3 rounded-full bg-neutral-50 text-neutral-600 hover:bg-[#333] hover:text-white transition-all duration-300"
                      aria-label="Instagram Profile"
                    >
                      <Instagram className="w-5 h-5" />
                    </Link>
                  )}
                  {member.twitter && (
                    <Link
                      href={member.twitter}
                      target="_blank"
                      className="p-3 rounded-full bg-neutral-50 text-neutral-600 hover:bg-black hover:text-white transition-all duration-300"
                      aria-label="X (Twitter) Profile"
                    >
                      <Twitter className="w-5 h-5" />
                    </Link>
                  )}
                  {member.github && (
                    <Link
                      href={member.github}
                      target="_blank"
                      className="p-3 rounded-full bg-neutral-50 text-neutral-600 hover:bg-black hover:text-white transition-all duration-300"
                      aria-label="Github Profile"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  )
}