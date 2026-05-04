import type { Metadata } from "next";
import { motion } from "framer-motion";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
  title: "Contact — Velaro Luxury Car Rental Marrakech",
  description:
    "Get in touch with Velaro. Book your luxury vehicle, ask about availability, or arrange airport pickup in Marrakech.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <ContactHero />

      {/* ══════════════════════════════════════════
          2. MAIN CONTENT — Info + Form
      ══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden">
        {/* background texture glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,160,32,0.04) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto">
          {/* ── 2-column layout ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. GOOGLE MAPS EMBED
      ══════════════════════════════════════════ */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-[#e8a020]" />
            <p className="text-[#e8a020] text-[11px]  font-semibold tracking-[0.22em] uppercase">
              Find Us
            </p>
          </div>

          {/* map wrapper */}
          <div className="relative rounded-2xl overflow-hidden border border-white/6 shadow-2xl">
            {/* gold top border accent */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 z-10"
              style={{
                background:
                  "linear-gradient(90deg, #e8a020 0%, rgba(232,160,32,0.3) 50%, transparent 100%)",
              }}
              aria-hidden="true"
            />

            <iframe
              title="Velaro Marrakech Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.8746285283374!2d-7.9939!3d31.6295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sGueliz%2C%20Marrakech!5e0!3m2!1sen!2sma!4v1714000000000"
              width="100%"
              height="420"
              style={{
                border: 0,
                filter:
                  "invert(90%) hue-rotate(180deg) saturate(0.6) brightness(0.85)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* address strip below map */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-5 px-1">
            <p className="text-white/30 font-['DM_Sans'] font-light text-sm flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-[#e8a020]/60 text-xs" />
              Gueliz, Marrakech 40000, Morocco
            </p>
            <a
              href="https://maps.google.com/?q=Gueliz+Marrakech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#e8a020] font-['DM_Sans'] font-light text-xs tracking-wide hover:underline underline-offset-4 transition-all"
            >
              Open in Google Maps
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
