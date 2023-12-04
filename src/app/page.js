import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import WhatWeDoSection from "@/sections/WhatWeDoSection";

export default function Home() {
  return (
    <main className="container relative bg-[#fafafa] min-h-screen max-w-6xl">
      <Navbar />
      <HeroSection />
      <WhatWeDoSection />
    </main>
  )
}
