"use client";

import { generateWhatsAppLink } from "@/utils/whatsapp";
import Image from "next/image";

interface FeaturedCarProps {
  car: {
    images: string[];
    name: string;
    price: number;
  };
}

export default function FeaturedCar({ car }: FeaturedCarProps) {
  return (
    <div className="relative h-112.5 rounded-3xl overflow-hidden mb-16">
      <Image
        src={car.images[0]}
        className="w-full h-full object-cover"
        alt={car.name}
        width={200}
        height={200}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex items-end">
        <div className="p-10">
          <h3 className="text-4xl text-white font-bold mb-2">{car.name}</h3>

          <p className="text-amber-500 text-2xl font-semibold mb-4">
            DH{car.price} / day
          </p>

          <a
            href={generateWhatsAppLink(car.name)}
            target="_blank"
            className="bg-amber-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition"
          >
            Book This Car
          </a>
        </div>
      </div>
    </div>
  );
}
