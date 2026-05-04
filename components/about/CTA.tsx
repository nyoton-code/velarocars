"use client";

// components/about/CTA.tsx

import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faCircleCheck,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

interface CTAProps {
  backgroundImage?: string;
  ctaHref?: string;
  numb?: string;
}

export default function CTA({
  backgroundImage = "/images/cta-bg.jpg",
  ctaHref = "/cars",
  numb = "+212 681-117195",
}: CTAProps) {
  return (
    <section className="relative w-full min-h-135 md:min-h-150 flex items-center overflow-hidden">
      {/* ── Background image ── */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
        initial={{ scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 7, ease: "easeOut" }}
        aria-hidden="true"
      />

      {/* ── Gradient overlay — heavier left ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.80) 40%, rgba(10,10,10,0.35) 72%, rgba(10,10,10,0.12) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Gold top accent ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(232,160,32,0.25) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20">
        {/* label pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 bg-[#e8a020]/10 border border-[#e8a020]/25 text-[#e8a020] text-[11px] font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-7"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#e8a020] animate-pulse" />
          Book Now
        </motion.div>

        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="text-white leading-[0.93] tracking-wide mb-6"
          style={{ fontSize: "clamp(48px, 7vw, 96px)" }}
        >
          Ready to Drive
          <br />
          <span
            style={{ WebkitTextStroke: "1.5px #e8a020", color: "transparent" }}
          >
            in Marrakech?
          </span>
        </motion.h2>

        {/* subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="text-white/45 font-light text-base md:text-lg leading-relaxed max-w-120 mb-10"
        >
          Choose your vehicle, set your dates, and well handle everything else —
          including delivering it right to your door or the airport gate.
        </motion.p>

        {/* feature bullets */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10"
        >
          {[
            "Instant confirmation",
            "Free cancellation (48h)",
            "Zero deposit required",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2.5">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-[#e8a020] text-sm"
              />
              <span className="text-white/60 font-light text-sm">{item}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.36 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
        >
          {/* primary button */}
          <Link
            href={ctaHref}
            className="group relative inline-flex items-center gap-3 bg-[#e8a020] hover:bg-[#f5b942] text-[#0a0a0a] font-semibold text-sm px-7 py-4 rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-[#e8a020]/20 overflow-hidden"
          >
            {/* shimmer */}
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
              }}
              aria-hidden="true"
            />
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0a0a0a]/15">
              <FontAwesomeIcon icon={faCar} className="text-xs" />
            </span>
            Book Your Car
          </Link>

          {/* phone */}
          <a
            href={`tel:${numb.replace(/\s/g, "")}`}
            className="group inline-flex items-center gap-4"
          >
            <span className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white/50 group-hover:border-[#e8a020]/50 group-hover:text-[#e8a020] transition-all duration-300">
              <FontAwesomeIcon icon={faPhone} className="text-sm" />
            </span>
            <div>
              <p className="text-white/30 font-light text-[11px] tracking-widest uppercase mb-0.5">
                24/7 Support
              </p>
              <p className="text-white font-semibold text-base group-hover:text-[#e8a020] transition-colors duration-300">
                {numb}
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/212681117195"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden md:inline-flex items-center gap-2.5 border border-white/10 hover:border-[#e8a020]/30 text-white/40 hover:text-[#e8a020] font-light text-sm px-5 py-3 rounded-full transition-all duration-300"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-base" />
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
