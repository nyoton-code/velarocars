"use client";

import { useState } from "react";
import { generateContract } from "@/utils/generateContract";

export default function AdminPage() {
  const [form, setForm] = useState({
    clientName: "",
    phone: "",
    carName: "",
    pickupDate: "",
    returnDate: "",
    pricePerDay: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGenerate = () => {
    const days =
      (new Date(form.returnDate).getTime() -
        new Date(form.pickupDate).getTime()) /
      (1000 * 60 * 60 * 24);

    const total = Number(form.pricePerDay) * days;

    generateContract({
      clientName: form.clientName,
      phone: form.phone,
      carName: form.carName,
      pickupDate: form.pickupDate,
      returnDate: form.returnDate,
      pricePerDay: Number(form.pricePerDay),
      totalPrice: total,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="bg-zinc-900 p-8 rounded-2xl w-full max-w-xl space-y-4">
        <h1 className="text-2xl font-bold text-amber-500">Generate Contract</h1>

        {Object.keys(form).map((key) => (
          <input
            key={key}
            name={key}
            placeholder={key}
            value={(form as any)[key]}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-zinc-800"
          />
        ))}

        <button
          onClick={handleGenerate}
          className="w-full bg-amber-500 text-black py-3 rounded-full font-semibold"
        >
          Generate PDF
        </button>
      </div>
    </div>
  );
}
