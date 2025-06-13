export default function TourDatesSection() {
  return (
    <section id="tour" className="w-full relative">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg1.jpg')",
        }}
      />

      {/* Content container */}
      <div className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] w-full flex flex-col items-center justify-center px-4 py-16 md:py-24 lg:py-32">
        {/* Tour dates heading */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-500 mb-12 md:mb-16 text-center">
          TOUR DATES
        </h2>

        {/* Divider line */}
        <div className="w-full max-w-4xl h-px bg-white/20 mb-8 md:mb-12"></div>

        {/* No events message */}
        <p className="text-white text-lg md:text-xl font-light mb-16 md:mb-24">There are no upcoming events.</p>

        {/* Powered by seated */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
          <p className="text-white/70 text-sm">
            powered by <span className="font-semibold">seated</span>
          </p>
        </div>
      </div>
    </section>
  )
}
