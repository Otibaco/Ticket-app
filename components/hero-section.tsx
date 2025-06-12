"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={heroRef} className="relative h-[250vh] overflow-hidden">
      {/* Background image with parallax effect */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          backgroundImage: `url('/image004.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          willChange: "transform",
        }}
      />

      {/* Navigation menu */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-8">
        <nav className="container mx-auto px-2 sm:px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-16">
            <Link
              href="/tour"
              className="text-white hover:text-yellow-400 transition-colors font-medium tracking-wider text-base sm:text-lg"
            >
              TOUR
            </Link>
            <Link
              href="/watch"
              className="text-white hover:text-yellow-400 transition-colors font-medium tracking-wider text-base sm:text-lg"
            >
              WATCH
            </Link>
            <Link
              href="/join"
              className="text-white hover:text-yellow-400 transition-colors font-medium tracking-wider text-base sm:text-lg"
            >
              JOIN
            </Link>
            <Link
              href="/shop"
              className="text-white hover:text-yellow-400 transition-colors font-medium tracking-wider text-base sm:text-lg"
            >
              SHOP
            </Link>
          </div>
        </nav>
      </div>

      {/* Main content container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-2 sm:px-4 mt-24 sm:mt-32">
        {/* DOGSTAR Logo with parallax effect */}
        <div
          className="relative z-10 mb-16 sm:mb-24 mt-16 sm:mt-32"
          style={{
            transform: `translateY(${scrollY * -0.2}px)`,
            willChange: "transform",
            opacity: 0.7, // More transparency for the logo
          }}
        >
          <Image
            src="/logo001.png"
            alt="DOGSTAR"
            width={1200}
            height={400}
            className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl h-auto"
            priority
          />
        </div>

        {/* Album artwork with parallax effect */}
        <div
          className="relative z-10 mb-16 sm:mb-24"
          style={{
            transform: `translateY(${scrollY * -0.1}px)`,
            willChange: "transform",
          }}
        >
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl">
            <Image
              src="/image004.png"
              alt="Somewhere Between The Power Lines And Palm Trees"
              width={600}
              height={300}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Album title and content */}
        <div
          className="relative z-10 text-center max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mb-16 sm:mb-24"
          style={{
            transform: `translateY(${scrollY * -0.05}px)`,
            willChange: "transform",
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-wider text-white mb-8 sm:mb-12 leading-tight">
            SOMEWHERE BETWEEN THE POWER LINES AND PALM TREES
          </h2>

          <h3 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-8 sm:mb-12">
            AVAILABLE NOW
          </h3>

          <Button
            className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold tracking-wider px-10 sm:px-16 py-10 sm:py-12 text-xl sm:text-2xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-none"
            style={{
              backgroundImage: "linear-gradient(to right, #facc15, #f97316)",
            }}
            onMouseOver={(e: { currentTarget: HTMLElement }) => {
              (e.currentTarget as HTMLElement).style.backgroundImage =
                "none"
              ;(e.currentTarget as HTMLElement).style.backgroundColor = "#800020"
              ;(e.currentTarget as HTMLElement).style.color = "#fff"
            }}
            onMouseOut={(e: { currentTarget: HTMLElement }) => {
              (e.currentTarget as HTMLElement).style.backgroundImage =
                "linear-gradient(to right, #facc15, #f97316)"
              ;(e.currentTarget as HTMLElement).style.backgroundColor = ""
              ;(e.currentTarget as HTMLElement).style.color = "#000"
            }}
            variant={undefined}
            size={undefined}
          >
            LISTEN / DOWNLOAD
          </Button>
        </div>
      </div>

      {/* Power lines overlay with different parallax speed */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
          willChange: "transform",
        }}
      >
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    </section>
  )
}