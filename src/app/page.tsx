import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import VideoSection from "./components/videoSection";
import ProductSection from "./components/productsSection";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <VideoSection />
      <ProductSection />
      <Testimonials />
    </main>
  );
}
