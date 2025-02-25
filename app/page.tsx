import ClientWrapper from "../app/components/client-wrapper"
import Countdown from "../app/components/countdown"
import HeroSection from "../app/components/hero-section"
import LoveLetter from "../app/components/love-letter"
import PhotoGallery from "../app/components/photo-gallery"

export default function Page() {
  // Set your special date here
  const specialDate = new Date("2024-11-23")

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200">
      <ClientWrapper />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20">
        <HeroSection />
        <Countdown specialDate={specialDate} />
        <LoveLetter />
        <PhotoGallery />
      </main>
    </div>
  )
}

