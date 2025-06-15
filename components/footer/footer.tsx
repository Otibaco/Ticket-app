import Link from "next/link"
import { Instagram, Facebook, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full relative">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg1.jpg')",
        }}
      />

      {/* Content container */}
      <div className="relative w-full px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* DOGSTAR Logo */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-500">
              DOGSTAR
            </h2>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 md:space-x-6 mb-8 md:mb-12">
            <Link
              href="#"
              className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-b from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 rounded-lg flex items-center justify-center transition-colors"
            >
              <Instagram className="w-6 h-6 md:w-7 md:h-7 text-black" />
            </Link>
            <Link
              href="#"
              className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-b from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 rounded-lg flex items-center justify-center transition-colors"
            >
              <Facebook className="w-6 h-6 md:w-7 md:h-7 text-black" />
            </Link>
            <Link
              href="#"
              className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-b from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 rounded-lg flex items-center justify-center transition-colors"
            >
              <Youtube className="w-6 h-6 md:w-7 md:h-7 text-black" />
            </Link>
            <Link
              href="#"
              className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-b from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 rounded-lg flex items-center justify-center transition-colors"
            >
              <div className="w-6 h-6 md:w-7 md:h-7 bg-black rounded-full flex items-center justify-center">
                <span className="text-yellow-400 text-xs md:text-sm font-bold">T</span>
              </div>
            </Link>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 md:mb-8 text-white">
            <p className="text-sm md:text-base">© DOGSTAR 2024</p>
            <Link href="#" className="text-sm md:text-base hover:text-yellow-400 transition-colors">
              CONTACT
            </Link>
            <Link href="#" className="text-sm md:text-base hover:text-yellow-400 transition-colors">
              TERMS
            </Link>
            <Link href="#" className="text-sm md:text-base hover:text-yellow-400 transition-colors">
              PRIVACY POLICY
            </Link>
          </div>

          {/* Site by FADE */}
          <p className="text-white/70 text-sm md:text-base">SITE BY FADE</p>
        </div>
      </div>
    </footer>
  )
}
