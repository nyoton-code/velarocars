"use client";

import { useState } from "react";
import { generateWhatsAppLink } from "@/utils/whatsapp";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CarBookingForm({ car }: any) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickupDate: "",
    returnDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const msg = `
 NEW BOOKING REQUEST

Car: ${car.name}
Price: DH ${car.price}/day

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📅 Pickup: ${form.pickupDate}
📅 Return: ${form.returnDate}
📝 Message: ${form.message || "No message"}
`;

    const link = generateWhatsAppLink(msg);
    window.open(link, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        placeholder="Full Name"
        className="w-full p-3 rounded-xl bg-zinc-800 text-white"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Phone"
        className="w-full p-3 rounded-xl bg-zinc-800 text-white"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <div className="grid grid-cols-2 gap-3">
        <input
          type="date"
          className="p-3 rounded-xl bg-zinc-800 text-white"
          onChange={(e) => setForm({ ...form, pickupDate: e.target.value })}
        />
        <input
          type="date"
          className="p-3 rounded-xl bg-zinc-800 text-white"
          onChange={(e) => setForm({ ...form, returnDate: e.target.value })}
        />
      </div>

      <textarea
        placeholder="Message (optional)"
        className="w-full p-3 rounded-xl bg-zinc-800 text-white"
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <button
        type="submit"
        className="w-full bg-[#e8a020] text-black py-3 rounded-full font-semibold hover:bg-[#f5b942] transition"
      >
        Confirm Booking
      </button>
    </form>
  );
}
