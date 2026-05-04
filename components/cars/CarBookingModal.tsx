"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CarBookingForm from "./CarForm";

export default function CarBookingModal({
  open,
  onClose,
  car,
}: {
  open: boolean;
  onClose: () => void;
  car: any;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            transition={{ duration: 0.25 }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0a] border border-white/10 rounded-3xl w-full max-w-4xl overflow-hidden grid md:grid-cols-2"
            >
              {/* LEFT - IMAGE */}
              <div className="relative h-[250px] md:h-full">
                <Image
                  src={car.images[0]}
                  alt={car.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* RIGHT - FORM */}
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl text-white font-semibold">
                      {car.name}
                    </h2>
                    <p className="text-[#e8a020] font-bold">
                      DH {car.price} / day
                    </p>
                  </div>

                  <button
                    onClick={onClose}
                    className="text-white/40 hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <CarBookingForm car={car} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
