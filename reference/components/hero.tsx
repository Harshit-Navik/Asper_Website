"use client";
import { BackgroundRipple } from "@/components/ui/background-ripple";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <BackgroundRipple />

      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        {/* GDG Logo/Badge */}
        <div className="mb-6 flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-900/80">
          <div
            className="-my-3 -ml-1 overflow-hidden rounded-md"
            style={{ mixBlendMode: "multiply" }}
          >
            <Image
              src="/gdg-gif.gif"
              alt="GDG Logo"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
              unoptimized
            />
          </div>
          <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
            Google Developer Groups
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-balance text-center text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl lg:text-7xl dark:text-white">
          GDG on Campus
          <span className="mt-2 block bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC04] bg-clip-text text-transparent">
            SOIT RGPV
          </span>
        </h1>

        {/* Tagline */}
        <p className="mt-6 max-w-2xl text-pretty text-center text-lg text-neutral-600 md:text-xl dark:text-neutral-400">
          Where curiosity meets code. Learn, build, and grow with a community of
          passionate developers shaping tomorrow&apos;s technology today.
        </p>

        <div className="group relative mt-10">
          {/* Animated gradient border */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC04] to-[#34A853] opacity-70 blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:blur-md" />
          <div
            className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC04] to-[#34A853] opacity-0 transition-opacity duration-500 group-hover:animate-spin-slow group-hover:opacity-40"
            style={{ animationDuration: "3s" }}
          />

          <button
            onClick={() =>
              window.open(
                "https://gdg.community.dev/gdg-on-campus-school-of-information-technology-bhopal-india/",
                "_blank"
              )
            }
            className="group relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            {/* The Moving Gradient "Lightning" */}
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#3b82f6_50%,#171717_100%)]" />

            {/* The Button Content Mask */}
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-900 px-8 py-4 text-lg font-semibold text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-neutral-800">
              <span className="mr-2">Join Now</span>
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Stats/Social Proof */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center">
          <div>
            <p className="text-2xl font-bold text-neutral-900 dark:text-white">
              300+
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Members
            </p>
          </div>
          <div className="h-8 w-px bg-neutral-200 dark:bg-neutral-700" />
          <div>
            <p className="text-2xl font-bold text-neutral-900 dark:text-white">
              10+
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Events
            </p>
          </div>
          <div className="h-8 w-px bg-neutral-200 dark:bg-neutral-700" />
          <div>
            <p className="text-2xl font-bold text-neutral-900 dark:text-white">
              5+
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Workshops
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}