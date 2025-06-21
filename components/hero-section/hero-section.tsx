"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import TicketDropdown from "../ticket-dropdown/ticket-dropdown"

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
      className="relative min-h-screen overflow-hidden"
      style={{
        minHeight: "100vh",
      }}
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
      <div className="absolute top-0 left-0 right-0 z-20 pt-4 sm:pt-6 md:pt-8">
        <nav className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
            <button
              onClick={() => scrollToSection("tour")}
              className="text-white hover:text-yellow-400 transition-colors font-bold tracking-wider text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer whitespace-nowrap"
            >
              TOUR
            </button>
            <button
              onClick={() => scrollToSection("watch")}
              className="text-white hover:text-yellow-400 transition-colors font-bold tracking-wider text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer whitespace-nowrap"
            >
              WATCH
            </button>
            <button
              onClick={() => scrollToSection("join")}
              className="text-white hover:text-yellow-400 transition-colors font-bold tracking-wider text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer whitespace-nowrap"
            >
              JOIN
            </button>
            <div className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl">
              <TicketDropdown />
            </div>
          </div>
        </nav>
      </div>

      {/* Main content container with proper spacing */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40">
        {/* DOGSTAR Logo with parallax effect */}
        <div
          className="mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24"
          style={{
            transform: `translateY(${scrollY * -0.2}px)`,
            willChange: "transform",
            opacity: 0.9,
          }}
        >
          <Image
            src="/logo001.png"
            alt="DOGSTAR"
            width={1200}
            height={400}
            className="w-full max-w-[300px] xs:max-w-[350px] sm:max-w-[450px] md:max-w-[650px] lg:max-w-[850px] xl:max-w-[1100px] 2xl:max-w-[1300px] h-auto"
            priority
          />
        </div>

        {/* Album artwork with parallax effect */}
        <div
          className="mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24"
          style={{
            transform: `translateY(${scrollY * -0.1}px)`,
            willChange: "transform",
          }}
        >
          <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[580px] xl:max-w-[650px]">
            <Image
              src="/image004.png"
              alt="Somewhere Between The Power Lines And Palm Trees"
              width={600}
              height={300}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Text content and button */}
        <div
          className="text-center max-w-5xl mx-auto"
          style={{
            transform: `translateY(${scrollY * -0.05}px)`,
            willChange: "transform",
          }}
        >
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black tracking-wider text-white mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 leading-tight px-2">
            SOMEWHERE BETWEEN THE POWER LINES AND PALM TREES
          </h2>

          <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black tracking-wider bg-clip-text text-yellow-400 mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
            AVAILABLE NOW
          </h3>

          <Button
            className="w-full max-w-[280px] xs:max-w-[300px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[460px] bg-yellow-400 text-black font-bold tracking-wider px-6 xs:px-7 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-4 xs:py-5 sm:py-6 md:py-7 lg:py-8 xl:py-9 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-none"
            style={{
              backgroundImage: "linear-gradient(to right, #facc15, #f97316)",
            }}
            onMouseOver={(e: { currentTarget: HTMLElement} ) => {
              ; (e.currentTarget as HTMLElement).style.backgroundImage = "none"; (e.currentTarget as HTMLElement).style.backgroundColor = "#800020"; (e.currentTarget as HTMLElement).style.color = "#fff"
            } }
            onMouseOut={(e: { currentTarget: HTMLElement} ) => {
              ; (e.currentTarget as HTMLElement).style.backgroundImage = "linear-gradient(to right, #facc15, #f97316)"; (e.currentTarget as HTMLElement).style.backgroundColor = ""; (e.currentTarget as HTMLElement).style.color = "#000"
            } } variant={undefined} size={undefined}          >
            LISTEN / DOWNLOAD
          </Button>
        </div>
      </div>

      {/* Power lines overlay with different parallax speed */}
      <div
        className="absolute inset-0 opacity-70 pointer-events-none"
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
