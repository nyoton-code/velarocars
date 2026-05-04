"use client";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.section
      className="py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Services content */}
    </motion.section>
  );
}
