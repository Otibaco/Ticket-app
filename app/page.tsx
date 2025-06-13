import ImageSection from "@/components/image-section/image-section";
import HeroSection from "../components/hero-section/hero-section";
import TourDatesSection from "@/components/tour-dates-section/tour-dates-section";
import JoinSection from "@/components/join-section/join-section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <ImageSection />
        <TourDatesSection />
        < JoinSection/>
        {/* <VideoSection /> */}
JoinSection      </main>
      {/* <Footer /> */}
    </div>
  )
}
