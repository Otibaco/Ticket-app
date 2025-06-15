export default function VideoSection() {
  const videos = [
    {
      title: "Dogstar - Glimmer (Official Lyric Video)",
      embedId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: "/images/video-background.jpeg",
    },
    {
      title: "Dogstar - Everything Turns Around (Official Video)",
      embedId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: "/placeholder.svg?height=315&width=560",
    },
    {
      title: "Dogstar - Breach (Official Video)",
      embedId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: "/placeholder.svg?height=315&width=560",
    },
  ]

  return (
    <section id="watch" className="w-full relative">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg2.jpg')",
           // Dimmed to ensure video embeds are visible
        }}
      />

      {/* Content container */}
      <div className="relative min-h-[80vh] w-full flex flex-col items-center justify-start px-4 py-16 md:py-24 lg:py-32">
        {/* WATCH heading */}
        {/* <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-500 mb-12 md:mb-16 text-center">
          WATCH
        </h2> */}

        {/* Videos grid */}
        <div className="w-full max-w-7xl mx-auto grid gap-8 md:gap-12">
          {videos.map((video, index) => (
            <div key={index} className="w-full bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-video relative">
                <iframe
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-white text-lg md:text-xl font-medium">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
