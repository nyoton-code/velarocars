"use client";

// components/about/Features.tsx

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faCar,
  faHeadset,
  faPlaneArrival,
  faPlus,
  faRoad,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Feature {
  icon: IconDefinition;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: faCar,
    title: "Premium Fleet",
    description:
      "Mercedes, BMW, Porsche, Range Rover — every vehicle is meticulously maintained and presented to the highest standard.",
  },
  {
    icon: faBolt,
    title: "Instant Booking",
    description:
      "Reserve your vehicle in under two minutes. No back-and-forth, no waiting — just a seamless confirmation straight to your inbox.",
  },
  {
    icon: faShieldHalved,
    title: "No Hidden Fees",
    description:
      "Every cost is clear from the start. The price you see is the price you pay — zero surprises at checkout.",
  },
  {
    icon: faPlaneArrival,
    title: "Airport Delivery",
    description:
      "We meet you at Marrakech Menara Airport with your car ready, chilled, and waiting. White-glove handover, always.",
  },
  {
    icon: faHeadset,
    title: "24/7 Concierge",
    description:
      "Our team is available around the clock via WhatsApp, phone, or email — ready to assist no matter what time zone you're in.",
  },
  {
    icon: faRoad,
    title: "Local Expertise",
    description:
      "We know every route from the Palmeraie to the Atlas passes. Let us guide you to the roads less travelled.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function Features() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* left ambient glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-100 h-100 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 0% 50%, rgba(232,160,32,0.05) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <p className="inline-flex items-center gap-2 text-[#e8a020] text-[11px] font-semibold tracking-[0.25em] uppercase mb-4">
            <FontAwesomeIcon icon={faPlus} className="text-[10px]" />
            Why Choose Velaro
          </p>
          <h2
            className=" text-white leading-[0.95] tracking-wide mb-4"
            style={{ fontSize: "clamp(40px, 5.5vw, 68px)" }}
          >
            The Velaro <span className="text-[#e8a020]">Difference</span>
          </h2>
          <p className="text-white/40 font-light text-[15px] leading-[1.9]">
            Every detail of your experience is considered — from the moment you
            book to the moment you return the keys.
          </p>
        </motion.div>

        {/* features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group relative bg-zinc-900/60 border border-white/6 hover:border-[#e8a020]/25 rounded-2xl p-7 overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#e8a020]/5"
            >
              {/* hover fill */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background:
                    "radial-gradient(circle at 0% 100%, rgba(232,160,32,0.04) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />

              {/* icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#e8a020]/8 border border-[#e8a020]/15 group-hover:bg-[#e8a020]/15 group-hover:border-[#e8a020]/30 transition-all duration-300 mb-5">
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="text-[#e8a020] text-sm"
                />
              </div>

              {/* title */}
              <h3 className="text-white font-semibold text-base mb-3 group-hover:text-[#e8a020] transition-colors duration-300">
                {feature.title}
              </h3>

              {/* description */}
              <p className="text-white/40 font-light text-sm leading-[1.85]">
                {feature.description}
              </p>

              {/* bottom gold line on hover */}
              <div
                className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-linear-to-r from-[#e8a020] to-transparent transition-all duration-500"
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
