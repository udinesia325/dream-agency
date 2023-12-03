import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";

export default function Home() {
  return (
    <main className="container relative bg-[#fafafa] min-h-screen">
      <Navbar />
      <HeroSection />
      <h1>Hello world</h1>
    </main>
  )
}
