"use client";

import React from "react";
import { motion } from "framer-motion";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Elite Fleet",
      description: "Exotic vehicles from the world's top manufacturers.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "24/7 Concierge",
      description: "Seamless support for a worry-free journey.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
      title: "Instant Booking",
      description: "Streamlined reservation in under two minutes.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Flexible Terms",
      description: "Tailored payment options with zero deposit.",
    },
  ];

  return (
    <motion.section
      className="py-32 px-8 bg-black"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          {/* Left Side: Image with Decorative Frame */}
          <motion.div
            className="lg:col-span-5 relative group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* The "Floating Frame" */}
            <div className="absolute -inset-4 border border-amber-500/20 rounded-2xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700"></div>

            <div className="relative h-150 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{
                  backgroundImage: "url(/aboutcar.jpg)",
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-amber-600 p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-black font-bold text-4xl italic">02+</p>
              <p className="text-black/80 text-xs font-bold uppercase tracking-widest leading-tight">
                Years of
                <br />
                Excellence
              </p>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            className="lg:col-span-7 space-y-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="space-y-4">
              <span className="text-amber-500 text-sm font-bold tracking-[0.4em] uppercase">
                The Velaro Way
              </span>
              <h2 className="text-5xl md:text-6xl font-light text-white leading-[1.1]">
                Luxury Car Rental <br />
                <span className="font-extrabold text-white">in Marrakech</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl font-light pt-4">
                We don’t just rent cars; we provide the keys to an unforgettable
                Moroccan experience. Our white-glove service ensures that from
                the airport to the Atlas, your journey remains as prestigious as
                your destination.
              </p>
            </div>

            {/* Features Grid - 2 columns for better space utilization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="group space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="text-amber-500 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-white font-bold tracking-wide uppercase text-sm">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light pl-10 border-l border-zinc-800">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <button className="relative overflow-hidden group bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:pr-14 shadow-2xl">
                <span className="relative z-10">Explore Our Fleet</span>
                <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  →
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
