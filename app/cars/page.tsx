import CarsSection from "@/components/cars/CarsSection";
import HeroCars from "@/components/cars/HeroCars";

export default function CarsPage() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="min-h-screen bg-black">
        <HeroCars />
        <CarsSection />
      </main>
    </>
  );
}
