"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Image from "next/image";
import CarBookingModal from "./CarBookingModal";
interface Car {
  // image: string;
  name: string;
  price: number;
  transmission: string;
  fuel: string;
  images: string[];
}

export default function CarCard({ car }: { car: Car }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:scale-[1.02] transition duration-300">
        {/* Image */}
        <div className="relative">
          <Swiper spaceBetween={0} slidesPerView={1} className="h-56">
            {car.images.map((e, index) => (
              <SwiperSlide key={index} className="relative">
                <Image
                  src={e}
                  fill
                  className="object-cover"
                  alt={`${car.name} ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl text-white">{car.name}</h3>

          <p className="text-amber-500 font-bold text-lg">
            DH {car.price} / day
          </p>

          <div className="flex gap-2 text-xs text-zinc-400">
            <span>{car.transmission}</span>
            <span>•</span>
            <span>{car.fuel}</span>
          </div>

          {/* CTA */}
          <button
            onClick={() => setOpen(true)}
            className="block w-full text-center border border-amber-500 text-amber-500 py-2 rounded-full hover:bg-amber-500 hover:text-black transition"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* 👇 OUTSIDE CARD */}
      <CarBookingModal open={open} onClose={() => setOpen(false)} car={car} />
    </>
  );
}
