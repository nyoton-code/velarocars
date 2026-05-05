"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cars } from "@/data/cars";
import { motion } from "framer-motion";

// ✅ Categories aligned with your data
const categories = [
  { label: "All", value: "all" },
  { label: "SUV", value: "suv" },
  { label: "Luxury", value: "luxury" },
  { label: "Sport", value: "sport" },
  { label: "Economy", value: "economy" },
];

export default function CarsPreview() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? cars : cars.filter((car) => car.type === active);

  // ✅ Sort (premium first)
  const sortedCars = [...filtered].sort((a, b) => b.price - a.price);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-24 bg-[#0a0a0a] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Vehicle Fleet
          </h2>

          <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
            Choose from a selection of premium vehicles designed for comfort,
            performance, and unforgettable driving experiences in Marrakech.
          </p>
        </div>

        {/* ───── FILTERS ───── */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                active === cat.value
                  ? "bg-[#e8a020] text-black"
                  : "bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ───── GRID ───── */}
        {/* ───── GRID ───── */}
        <div className="space-y-5">
          {/* FIRST ROW (3 BIG) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {sortedCars.slice(0, 3).map((car, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: i * 0.1,
                }}
                viewport={{ once: true }}
                key={car.id}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={car.images[0]}
                  alt={car.name}
                  width={600}
                  height={400}
                  className="w-full h-[220px] md:h-[260px] object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-base font-semibold">{car.name}</h3>
                  <p className="text-sm text-[#e8a020] font-medium">
                    DH {car.price} / day
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SECOND ROW (4 SMALL) */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {sortedCars.slice(3, 7).map((car) => (
              <div
                key={car.id}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={car.images[0]}
                  alt={car.name}
                  width={400}
                  height={300}
                  className="w-full h-[150px] md:h-[170px] object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-sm font-semibold">{car.name}</h3>
                  <p className="text-xs text-[#e8a020]">DH {car.price}/day</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        {/* ───── CTA ───── */}
        <div className="flex justify-center mt-14">
          <Link
            href="/cars"
            className="group flex items-center gap-2 border border-white/10 px-6 py-3 rounded-full text-sm hover:bg-[#e8a020] hover:text-black transition-all duration-300"
          >
            View All Cars
            <span className="group-hover:translate-x-1 transition">→</span>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
