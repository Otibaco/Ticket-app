import Image from "next/image"

export default function Imagesection() {
  return (
    <section className="w-full">
      <div className="max-w-[2000px] mx-auto">
        {/* Simple, full-width image container with no distractions */}
        <div className="relative w-full">
          <Image
            src="/dogstar002.jpg"
            alt="DOGSTAR band members"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
            quality={100} // Maximum quality for vivid display
            sizes="100vw" // Full viewport width on all screen sizes
          />
        </div>
      </div>
    </section>
  )
}
