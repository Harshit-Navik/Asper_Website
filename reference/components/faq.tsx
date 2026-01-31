"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is GDG SOIT RGPV?",
    answer:
      "GDG (Google Developer Groups) SOIT RGPV is a community-driven initiative organized by students and developers from RGPV's School of Information Technology. We focus on sharing knowledge about Google technologies, fostering innovation, and building a strong developer community.",
  },
  {
    question: "Who can join GDG SOIT RGPV?",
    answer:
      "Anyone interested in learning and discussing technology is welcome! Whether you're a student at RGPV or from the broader tech community, we'd love to have you. There are no prerequisites - just bring your curiosity and enthusiasm.",
  },
  {
    question: "How often do we conduct events?",
    answer:
      "We organize workshops, meetups, and talks regularly throughout the academic year. Events range from beginner-friendly introductions to advanced technical deep-dives. Check our events section for the latest schedule.",
  },
  {
    question: "What topics do we cover?",
    answer:
      "We cover a wide range of Google technologies including Android development, Cloud computing, Web technologies (Firebase, Flutter), Machine Learning, and more. We also explore general software development practices and career guidance.",
  },
  {
    question: "How can I stay updated about events?",
    answer:
      "Follow us on social media and join our community! We announce all events through our social channels and send regular updates. You can also contact us directly through our website for event details.",
  },
  {
    question: "Can I volunteer or help organize events?",
    answer:
      "We're always looking for passionate volunteers to help organize events, workshops, and community initiatives. If you're interested, reach out to our team directly.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg">Find answers to common questions about GDG SOIT RGPV</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-left font-semibold text-gray-900">{faq.question}</h3>
                <ChevronDown
                  className={`flex-shrink-0 w-5 h-5 text-gray-600 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
