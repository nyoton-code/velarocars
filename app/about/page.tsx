import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import Stats from "@/components/about/Stats";
import Features from "@/components/about/Features";
import CTA from "@/components/about/CTA";
import WhatsapButton from "@/components/hooks/WhatsapButton";

export const metadata: Metadata = {
  title: "About Us — Velaro Luxury Car Rental Marrakech",
  description:
    "Learn about Velaro — Marrakech's premier luxury car rental service. A decade of elite vehicles, local expertise, and white-glove service.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      {/* 1. Hero */}
      <AboutHero />

      {/* thin gold separator */}
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(232,160,32,0.15), transparent)",
        }}
        aria-hidden="true"
      />

      {/* 2. Story */}
      <AboutStory />

      {/* thin separator */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          className="h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* 3. Stats */}
      <Stats />

      {/* thin separator */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          className="h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* 4. Features */}
      <Features />

      {/* 5. CTA */}
      <CTA
        backgroundImage="/images/cta-bg.jpg"
        ctaHref="/cars"
        // phone="+212681117195"
      />
      <WhatsapButton />
    </main>
  );
}
