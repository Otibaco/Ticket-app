import ImageSection from "@/components/image-section/image-section";
import HeroSection from "../components/hero-section/hero-section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <ImageSection />
        {/* <BandPhotoSection />
        <TourDatesSection />
        <VideoSection />
        <JoinSection /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}
