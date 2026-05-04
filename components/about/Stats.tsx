"use client";

// components/about/Stats.tsx

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faCarSide,
  faHeadset,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: IconDefinition;
  description: string;
}

const STATS: Stat[] = [
  {
    value: 50,
    suffix: "+",
    label: "Happy Clients",
    icon: faUsers,
    description: "Travellers who trusted Velaro",
  },
  {
    value: 50,
    suffix: "+",
    label: "Luxury Cars",
    icon: faCarSide,
    description: "Curated elite fleet available now",
  },
  {
    value: 2,
    suffix: "+",
    label: "Years Experience",
    icon: faAward,
    description: "Serving Marrakech since 2014",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Support",
    icon: faHeadset,
    description: "Always on, always there for you",
  },
];

// ── Animated counter hook ────────────────────────────────────────────────────
function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const steps = 50;
    const step = target / steps;
    const interval = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [target, duration, start]);
  return count;
}

// ── Single stat card ─────────────────────────────────────────────────────────
function StatCard({
  stat,
  index,
  animate,
}: {
  stat: Stat;
  index: number;
  animate: boolean;
}) {
  const count = useCounter(stat.value, 1600, animate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.1 }}
      className="group relative bg-zinc-900 border border-white/6 hover:border-[#e8a020]/30 rounded-2xl p-8 text-center overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#e8a020]/5"
    >
      {/* hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(232,160,32,0.06) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      gold top accent line
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-16 h-0.5 bg-[#e8a020] transition-all duration-500 rounded-full"
        aria-hidden="true"
      />
      {/* icon */}
      <div className="w-12 h-12 mx-auto mb-5 flex items-center justify-center rounded-xl bg-[#e8a020]/8 border border-[#e8a020]/15 group-hover:bg-[#e8a020]/15 transition-colors duration-300">
        <FontAwesomeIcon
          icon={stat.icon}
          className="text-[#e8a020] text-base"
        />
      </div>
      {/* number */}
      <p
        className="text-white leading-none tracking-wide mb-1"
        style={{ fontSize: "clamp(44px, 5vw, 60px)" }}
      >
        {count}
        <span className="text-[#e8a020]">{stat.suffix}</span>
      </p>
      {/* label */}
      <p className="text-white font-semibold text-sm mb-2 tracking-wide">
        {stat.label}
      </p>
      {/* description */}
      <p className="text-white/30 font-light text-xs leading-relaxed">
        {stat.description}
      </p>
    </motion.div>
  );
}

// ── Section ──────────────────────────────────────────────────────────────────
export default function Stats() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTriggered(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden" ref={ref}>
      {/* background grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        {/* section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="inline-flex items-center gap-2 text-[#e8a020] text-[11px] font-semibold tracking-[0.25em] uppercase mb-4">
            <span className="w-6 h-px bg-[#e8a020]" />
            By The Numbers
            <span className="w-6 h-px bg-[#e8a020]" />
          </p>
          <h2
            className="text-white leading-none tracking-wide"
            style={{ fontSize: "clamp(38px, 5vw, 58px)" }}
          >
            Trusted by Hundreds,{" "}
            <span className="text-[#e8a020]">Driven by Excellence</span>
          </h2>
        </motion.div>

        {/* stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={i}
              animate={triggered}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
