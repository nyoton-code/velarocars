"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <motion.section
      className="relative min-h-screen pt-24 md:pt-28 flex items-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background */}
      <div className="absolute inset-0 scale-105">
        <Image
          src="/hero.jpg"
          fill
          className="object-cover"
          alt="Luxury car"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* LEFT */}
        <div className="text-white space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
            Rental Car in <br />
            <span className="font-bold text-amber-500">Morocco</span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0">
            Experience the pinnacle of automotive luxury. We provide premium
            vehicles for your journey.
          </p>

          <a
            href="/cars"
            className="inline-flex items-center gap-3 justify-center lg:justify-start"
          >
            <span className="bg-white/10 px-6 py-3 rounded-full hover:bg-amber-500 hover:text-black transition">
              View Details
            </span>
            <span className="text-amber-500 text-xl">→</span>
          </a>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white/3 backdrop-blur-3xl p-10 rounded-4xl shadow-2xl border border-white/10 max-w-md ml-auto w-full">
          {" "}
          <h3 className="text-white text-xl font-semibold mb-8 tracking-tight">
            {" "}
            Reserve Your Ride{" "}
          </h3>{" "}
          <div className="space-y-4">
            {" "}
            <div className="relative">
              {" "}
              <input
                placeholder="Choose Car Type"
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none text-white placeholder:text-zinc-300 focus:border-amber-500/50 transition-all"
              />{" "}
            </div>{" "}
            <div className="grid grid-cols-2 gap-4">
              {" "}
              <input
                placeholder="Pick Up Location"
                className="bg-white/5 border border-white/10 p-4 rounded-xl text-white placeholder:text-zinc-300 text-sm focus:border-amber-500/50 outline-none transition-all"
              />{" "}
              <input
                placeholder="Pick Up Date"
                onFocus={(e) => (e.target.type = "date")}
                className="bg-white/5 border border-white/10 p-4 rounded-xl text-white placeholder:text-zinc-300 text-sm focus:border-amber-500/50 outline-none transition-all"
              />{" "}
              <input
                placeholder="Drop Off Location"
                className="bg-white/5 border border-white/10 p-4 rounded-xl text-white placeholder:text-zinc-300 text-sm focus:border-amber-500/50 outline-none transition-all"
              />{" "}
              <input
                placeholder="Return Date"
                onFocus={(e) => (e.target.type = "date")}
                className="bg-white/5 border border-white/10 p-4 rounded-xl text-white placeholder:text-zinc-300 text-sm focus:border-amber-500/50 outline-none transition-all"
              />{" "}
            </div>{" "}
            <Link href={"/cars"}>
              <button className="w-full bg-amber-600 text-black mt-4 py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-amber-500 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-amber-900/20">
                {" "}
                Check Availability{" "}
              </button>
            </Link>
          </div>{" "}
        </div>
      </div>
    </motion.section>
  );
}
