"use client";

import { cars } from "@/data/cars";
import CarCard from "./CarCard";
import FeaturedCar from "./FeaturedCar";
import { motion } from "framer-motion";

export default function CarsSection() {
  const featured = cars[0];
  const rest = cars.slice(1);

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      {/* Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-white">Our Luxury Fleet</h2>
        <p className="text-zinc-400 mt-4">
          Choose from our premium selection of vehicles
        </p>
      </motion.div>

      {/* Featured */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <FeaturedCar car={featured} />
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {rest.map((car, index) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <CarCard car={car} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
