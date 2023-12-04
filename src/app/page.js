import Navbar from "@/components/Navbar";
import AboutUsSection from "@/sections/AboutUsSection";
import HeroSection from "@/sections/HeroSection";
import WhatWeDoSection from "@/sections/WhatWeDoSection";

export default function Home() {
  return (
    <main className="container relative max-w-6xl overflow-x-auto overflow-y-hidden">
      <Navbar />
      <HeroSection />
      <WhatWeDoSection />
      <AboutUsSection />
    </main>
  )
}
