"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import LogoIcon from "./logoicon"

const links = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
]

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/gdg_soitrgpv?igsh=MWpjZmFiYWt3MWdmaw==", icon: Instagram },
  { label: "Github", href: "https://github.com/gdg-soit-rgpv", icon: Github },
  { label: "Linkedin", href: "https://www.linkedin.com/company/google-developer-student-clubs-soit-rgpv/", icon: Linkedin },
  { label: "Twitter", href: "https://x.com/GDGSoit", icon: Twitter }
]

export default function Footer() {
  return (
    <footer className="relative py-16 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <LogoIcon />
            <span className="text-lg font-medium text-neutral-900">GDG SOIT RGPV</span>
          </motion.div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-8">
            {links.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-neutral-500 hover:text-neutral-900 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-900 group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-neutral-400 hover:text-neutral-900 transition-colors p-2"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-neutral-100 text-center"
        >
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} GDG SOIT RGPV. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

function GDGLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
      {/* Accurate GDG "G" logo with 4 segments */}
      {/* Blue - top segment */}
      <path d="M24 4C35 4 44 13 44 24H36C36 17.4 30.6 12 24 12V4Z" fill="#4285F4" />
      {/* Green - right segment */}
      <path d="M44 24C44 35 35 44 24 44V36C30.6 36 36 30.6 36 24H44Z" fill="#34A853" />
      {/* Yellow - bottom segment */}
      <path d="M24 44C13 44 4 35 4 24H12C12 30.6 17.4 36 24 36V44Z" fill="#FBBC05" />
      {/* Red - left segment */}
      <path d="M4 24C4 13 13 4 24 4V12C17.4 12 12 17.4 12 24H4Z" fill="#EA4335" />
      {/* Center bar */}
      <rect x="24" y="20" width="12" height="8" fill="#4285F4" />
    </svg>
  )
}