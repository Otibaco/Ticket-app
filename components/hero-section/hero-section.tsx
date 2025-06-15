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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <section
      ref={heroRef}
      className="relative h-[120vh] sm:h-[180vh] md:h-[220vh] lg:h-[250vh] overflow-hidden"
    >
      {/* Background image with parallax effect */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          backgroundImage: `url('/bg-cover.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          willChange: "transform",
        }}
      />

      {/* Navigation menu */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-6 sm:pt-8">
        <nav className="container mx-auto px-2 sm:px-4">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-12 lg:gap-16">
            <button
              onClick={() => scrollToSection("tour")}
              className="text-white hover:text-yellow-400 transition-colors font-medium tracking-wider text-base sm:text-lg cursor-pointer"
            >
              TOUR
            </button>
            <button
              onClick={() => scrollToSection("watch")}
              className="text-white hover:text-yellow-400 transition-colors font-medium tracking-wider text-base sm:text-lg cursor-pointer"
            >
              WATCH
            </button>
            <button
              onClick={() => scrollToSection("join")}
              className="text-white hover:text-yellow-400 transition-colors font-medium tracking-wider text-base sm:text-lg cursor-pointer"
            >
              JOIN
            </button>
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
      <div className="absolute inset-0 flex flex-col items-center justify-center px-2 sm:px-4 mt-20 sm:mt-15">
        {/* DOGSTAR Logo with parallax effect */}
        <div
          className="relative z-10 mb-10 sm:mb-16 mt-10 sm:mt-20"
          style={{
            transform: `translateY(${scrollY * -0.2}px)`,
            willChange: "transform",
            opacity: 0.7,
          }}
        >
          <Image
            src="/logo001.png"
            alt="DOGSTAR"
            width={1200}
            height={400}
            className="w-full max-w-[450px] xs:max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl h-auto"
            priority
          />
        </div>

        {/* Album artwork with parallax effect */}
        <div
          className="relative z-10 mb-10 sm:mb-16"
          style={{
            transform: `translateY(${scrollY * -0.1}px)`,
            willChange: "transform",
          }}
        >
          <div className="relative w-full max-w-[320px] xs:max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl">
            <Image
              src="/image004.png"
              alt="Somewhere Between The Power Lines And Palm Trees"
              width={600}
              height={300}
              className="w-full h-auto rounded-lg shadow-2xl min-h-[160px] xs:min-h-[180px] sm:min-h-[220px] md:min-h-[260px] lg:min-h-[300px]"
            />
          </div>
        </div>

        {/* Album title and content */}
        <div
          className="relative z-10 text-center max-w-[95vw] xs:max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mb-10 sm:mb-16"
          style={{
            transform: `translateY(${scrollY * -0.05}px)`,
            willChange: "transform",
          }}
        >
          <h2 className="text-lg xs:text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-wider text-white mb-6 sm:mb-10 leading-tight">
            SOMEWHERE BETWEEN THE POWER LINES AND PALM TREES
          </h2>

          <h3 className="text-base xs:text-lg sm:text-2xl md:text-4xl lg:text-5xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-6 sm:mb-10">
            AVAILABLE NOW
          </h3>

          <Button
            className="w-80 xs:w-auto bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold tracking-wider px-8 xs:px-10 sm:px-16 py-7 xs:py-8 sm:py-10 text-base xs:text-lg sm:text-2xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-none"
            style={{
              backgroundImage: "linear-gradient(to right, #facc15, #f97316)",
            }}
            onMouseOver={(e: { currentTarget: HTMLElement }) => {
              (e.currentTarget as HTMLElement).style.backgroundImage = "none"
                ; (e.currentTarget as HTMLElement).style.backgroundColor = "#800020"
                ; (e.currentTarget as HTMLElement).style.color = "#fff"
            }}
            onMouseOut={(e: { currentTarget: HTMLElement }) => {
              (e.currentTarget as HTMLElement).style.backgroundImage =
                "linear-gradient(to right, #facc15, #f97316)"
                ; (e.currentTarget as HTMLElement).style.backgroundColor = ""
                ; (e.currentTarget as HTMLElement).style.color = "#000"
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