"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[88vh] min-h-135 flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/abouthero.png')" }}
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />

      {/* 🔥 FIX 1: Strong top overlay for navbar visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.6))]" />

      {/* Gold accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[220px] h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center -mt-16">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="w-6 h-[1px] bg-amber-500" />
          <span className="text-amber-500 text-[11px] tracking-[0.25em] uppercase">
            About Us
          </span>
          <span className="w-6 h-[1px] bg-amber-500" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-white leading-tight mb-4 font-semibold"
          style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
        >
          Driving Excellence in{" "}
          <span className="text-amber-500">Marrakech</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/60 text-sm md:text-base max-w-md"
        >
          Discover a premium car rental experience built on trust, performance,
          and attention to detail.
        </motion.p>
      </div>
    </section>
  );
}
