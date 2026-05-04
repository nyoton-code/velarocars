import { testimonialsStats } from "@/data/reviews";

export default function StatsCard() {
  const { averageRating, totalReviews, tagline, avatars } = testimonialsStats;

  return (
    <div className="relative flex flex-col justify-between bg-zinc-900 rounded-2xl p-7 border border-zinc-700 shadow-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
      {/* decorative quote */}
      <span className="absolute bottom-0 right-4 font-['Bebas_Neue'] text-[140px] leading-none text-amber-500 opacity-[0.08] pointer-events-none select-none"></span>

      {/* rating number */}
      <div>
        <p className="font-['Bebas_Neue'] text-[72px] leading-none text-white tracking-wide">
          {averageRating}
          <span className="text-[32px] text-amber-500">/5</span>
        </p>
        <p className="text-xs text-zinc-400 font-['DM_Sans'] font-light mt-1">
          Average Rating
        </p>
        <p className="text-sm text-zinc-300 font-['DM_Sans'] font-light leading-relaxed mt-4">
          {tagline}
        </p>
      </div>

      {/* footer */}
      <div className="flex items-center gap-3 mt-6">
        <div className="flex">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="reviewer"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full object-cover border-2 border-zinc-900"
              style={{ marginLeft: i === 0 ? 0 : "-8px" }}
            />
          ))}
        </div>
        <p className="text-xs text-zinc-400 font-['DM_Sans'] font-light">
          Trusted by {totalReviews} drivers
        </p>
      </div>
    </div>
  );
}
