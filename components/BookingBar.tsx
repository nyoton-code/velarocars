export default function BookingBar() {
  return (
    <div className="bg-zinc-900/90 backdrop-blur p-4 rounded-2xl flex flex-col md:flex-row gap-3 border border-zinc-800">
      <div className="flex-1">
        <p className="text-xs text-zinc-400">Pick-up Date</p>
        <p>Select Date</p>
      </div>

      <div className="flex-1">
        <p className="text-xs text-zinc-400">Car Type</p>
        <p>Luxury</p>
      </div>

      <button className="bg-amber-500 px-6 py-3 text-black font-bold">
        Check Availability
      </button>
    </div>
  );
}
