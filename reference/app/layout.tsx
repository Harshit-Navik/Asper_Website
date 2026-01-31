import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
})

export const metadata: Metadata = {
  title: "GDG SOIT RGPV | Empowering Developers. Building the Future.",
  description:
    "Join GDG SOIT RGPV - a vibrant community of developers, designers, and tech enthusiasts at RGPV united by a shared passion for Google technologies and innovation.",
  keywords: ["GDG", "Google Developer Groups", "developers", "community", "technology", "events", "RGPV", "SOIT"],
  openGraph: {
    title: "GDG SOIT RGPV",
    description: "Where innovation meets collaboration",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased"><Navbar />{children}</body>
    </html>
  )
}
