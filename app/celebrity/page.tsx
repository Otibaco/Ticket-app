"use client"
import Link from "next/link"
import { ArrowLeft, LogOut } from "lucide-react"
import { celebrities } from "@/lib/celebrities"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export default function CelebrityPage() {
  const router = useRouter();

  // Handles sign out and redirects to sign-in page
  const handleSignOut = async () => {
    await signOut({
      callbackUrl: "/sign-in", // Redirects user after sign out
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-orange-400">
      {/* Header */}
      <header className="relative z-10 pt-8 pb-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Back to Home */}
            <Link
              href="/"
              className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>

            {/* Title + Sign Out */}
            <div className="flex items-center gap-4">
              <h1 className="text-2xl md:text-4xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-500">
                CELEBRITIES
              </h1>

              <button
                onClick={handleSignOut}
                className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gradient-to-b from-yellow-300 to-yellow-500 text-black font-bold hover:from-yellow-400 hover:to-orange-400 transition-all"
                title="Sign out"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline">Sign out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Celebrities Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {celebrities.map((celebrity) => (
            <Link
              key={celebrity.id}
              href={`/celebrity/${celebrity.slug}`}
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="p-6 text-center">
                <div className="w-20 h-20 overflow-hidden mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  {/* <span className="text-black font-bold text-2xl">
                    {celebrity.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span> */}
                  <Image
                    // className="w-full h-full"
                    src={celebrity.image}
                    alt={celebrity.name}
                    // fill
                    objectFit="contain"
                    width={148}
                    height={148}
                    priority
                  />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{celebrity.name}</h3>
                <p className="text-white/80 text-sm mb-4">{celebrity.roles.join(" • ")}</p>
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-4 py-2 rounded-lg">
                  View Profile
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
