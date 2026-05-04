"use client";

import { generateContract } from "@/utils/generateContract";

export default function ContractButton() {
  const handleGenerate = () => {
    generateContract({
      clientName: "John Doe",
      phone: "+212600000000",
      carName: "Mercedes CLA",
      pickupDate: "2026-05-10",
      returnDate: "2026-05-15",
      pricePerDay: 400,
      totalPrice: 2000,
    });
  };

  return (
    <button
      onClick={handleGenerate}
      className="bg-amber-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-400 transition"
    >
      Download Contract
    </button>
  );
}
