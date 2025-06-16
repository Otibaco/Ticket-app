"use client"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { celebrities } from "@/lib/celebrities"
import { Button } from "@/components/ui/button"

interface PageProps {
  params: {
    slug: string
  }
}

export default function CelebrityProfilePage({ params }: PageProps) {
  const celebrity = celebrities.find((c) => c.slug === params.slug)

  if (!celebrity) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Celebrity Not Found</h1>
          <Link href="/celebrity" className="text-purple-600 hover:underline">
            Back to Celebrities
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">
      {/* Header */}
      <header className="bg-white/50 backdrop-blur-sm py-4">
        <div className="container mx-auto px-4">
          <Link
            href="/celebrity"
            className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Celebrities</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Celebrity Profile Card */}
        <div className="bg-white rounded-lg shadow-xl mb-8 overflow-hidden">
          <div className="p-8 text-center">
            {/* Profile Image */}
            <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center border-4 border-cyan-400 relative">
              <span className="text-white font-bold text-3xl">
                {celebrity.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>

            {/* Celebrity Badge */}
            <div className="bg-cyan-400 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
              {celebrity.name.split(" ")[0]} {celebrity.name.split(" ")[1]?.[0]}.
            </div>

            {/* Name */}
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{celebrity.name}</h2>

            {/* Contact Info */}
            <p className="text-gray-600 mb-4">{celebrity.contactInfo}</p>

            {/* Roles */}
            <p className="text-gray-700 text-sm mb-4">{celebrity.roles.join(" • ")}</p>

            {/* Social Handle */}
            <p className="text-purple-600 font-medium mb-6">{celebrity.socialHandle}</p>

            {/* Status Indicators */}
            <div className="flex justify-center space-x-2 mb-6">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Booking Agent
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Manager
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Publicist
              </span>
            </div>

            {/* Buy Ticket Button */}
            <Link href={`/celebrity/${celebrity.slug}/tickets`}>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg text-lg" variant={undefined} size={undefined}>
                🎫 Click To Buy Ticket
              </Button>
            </Link>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h3 className="text-2xl font-bold text-purple-600 mb-6">About {celebrity.name}</h3>
          <div className="text-gray-700 leading-relaxed space-y-4">
            {celebrity.about.split(". ").map((sentence, index) => (
              <p key={index}>
                {sentence.trim()}
                {sentence.includes(".") ? "" : "."}
              </p>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
