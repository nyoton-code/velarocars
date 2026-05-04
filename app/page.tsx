import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/about";
// import CarsSection from "@/components/cars/CarsSection";
import ConnectSection from "@/components/ConnectSection";
import FeaturedFleet from "@/components/FeaturedFleet";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedFleet />
      <Testimonials />
      <ConnectSection />
    </>
  );
}
