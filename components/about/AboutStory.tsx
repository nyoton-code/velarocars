"use client";
// components/about/AboutStory.tsx

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPlus } from "@fortawesome/free-solid-svg-icons";

const BULLETS = [
  {
    icon: faCircleCheck,
    text: "Wide selection of luxury vehicles",
  },
  {
    icon: faCircleCheck,
    text: "Flexible daily, weekly & monthly plans",
  },
  { icon: faCircleCheck, text: "24/7 concierge support" },
  { icon: faCircleCheck, text: "Free airport delivery & pickup" },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
      delay,
    },
  },
});

export default function AboutStory() {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-12 overflow-hidden">
      {/* ambient glow */}
      <div
        className="absolute top-0 right-0 w-150 h-150 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 100% 0%, rgba(232,160,32,0.05) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-28 items-center">
          {/* ── LEFT: Image ── */}
          <motion.div
            className="relative"
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {/* main image */}
            <div className="relative rounded-2xl overflow-hidden aspect-4/5">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/aboutstory.png')" }}
              />
              {/* inner dark overlay at bottom */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.7) 100%)",
                }}
              />
            </div>

            {/* floating experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="absolute -bottom-6 -right-4 md:-right-8 bg-[#e8a020] rounded-2xl px-7 py-5 shadow-2xl shadow-[#e8a020]/20"
            >
              <p className="text-[#0a0a0a] text-5xl leading-none tracking-wide">
                02+
              </p>
              <p className="text-[#0a0a0a]/70 font-medium text-xs tracking-widest uppercase mt-1">
                Years of Excellence
              </p>
            </motion.div>

            {/* decorative gold corner frame */}
            <div
              className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#e8a020]/40 rounded-tl-xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#e8a020]/40 rounded-br-xl pointer-events-none"
              aria-hidden="true"
            />
          </motion.div>

          {/* ── RIGHT: Content ── */}
          <motion.div
            className="flex flex-col gap-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* section label */}
            <motion.p
              variants={fadeUp(0)}
              className="inline-flex items-center gap-2 text-[#e8a020] text-[11px] font-semibold tracking-[0.25em] uppercase"
            >
              <FontAwesomeIcon icon={faPlus} className="text-[10px]" />
              Our Story
            </motion.p>

            {/* heading */}
            <motion.h2
              variants={fadeUp(0.06)}
              className="text-white leading-[0.95] tracking-wide"
              style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
            >
              Who <span className="text-[#e8a020]">We Are</span>
            </motion.h2>

            {/* paragraphs */}
            <motion.div variants={fadeUp(0.1)} className="flex flex-col gap-5">
              <p className="text-white/50 font-light text-[15px] leading-[1.95]">
                Velaro was born from a simple belief: that how you travel says
                as much as where you go. Since 2024, we&apos;ve been crafting
                premium car rental experiences in Marrakech — pairing the
                world&apos;s finest vehicles with service that anticipates every
                need before you even ask.
              </p>
              <p className="text-white/50 font-light text-[15px] leading-[1.95]">
                We know Marrakech intimately — every route, every hidden road
                through the Atlas, every airport protocol. That local expertise,
                combined with an elite fleet, means your journey is never just
                transportation — it&apos;s part of the experience.
              </p>
              <p className="text-white/50 font-light text-[15px] leading-[1.95]">
                Our clients are discerning travellers, corporate executives, and
                honeymooners who refuse to compromise. We exist to exceed their
                expectations, every single time.
              </p>
            </motion.div>

            {/* divider */}
            <motion.div
              variants={fadeUp(0.14)}
              className="h-px bg-linear-to-r from-[#e8a020]/20 via-white/5 to-transparent"
            />

            {/* bullets */}
            <motion.ul
              variants={fadeUp(0.16)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {BULLETS.map((b) => (
                <li key={b.text} className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={b.icon}
                    className="text-[#e8a020] text-sm shrink-0"
                  />
                  <span className="text-white/65 font-light text-sm">
                    {b.text}
                  </span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
