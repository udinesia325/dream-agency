import Navbar from "@/components/Navbar";
import AboutUsSection from "@/sections/AboutUsSection";
import FooterSection from "@/sections/FooterSection";
import HeroSection from "@/sections/HeroSection";
import TestimonialSection from "@/sections/TestimonialSection";
import WhatWeDoSection from "@/sections/WhatWeDoSection";

export default function Home() {
  return (
    <main className="container relative max-w-6xl overflow-x-hidden overflow-y-hidden">
      <Navbar />
      <HeroSection />
      <WhatWeDoSection />
      <AboutUsSection />
      <TestimonialSection />
      <FooterSection />
    </main>
  )
}
