import type { Review } from "@/data/reviews";
import Stars from "./Stars";
import Image from "next/image";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="relative flex flex-col gap-5 bg-zinc-800 rounded-2xl p-7 border border-zinc-700 shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
      {/* decorative quote */}
      <span className="absolute bottom-0 right-4 font-['Bebas_Neue'] text-[140px] leading-none text-amber-500 opacity-[0.06] pointer-events-none select-none"></span>

      {/* reviewer */}
      <div className="flex items-center gap-3">
        <img
          src={review.avatar}
          alt={review.name}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-500/20 shrink-0"
        />
        <div>
          <p className="text-sm font-semibold text-white font-['DM_Sans']">
            {review.name}
          </p>
          <p className="text-xs text-zinc-400 font-['DM_Sans'] font-light">
            {review.vehicle}
          </p>
        </div>
      </div>

      {/* stars */}
      <Stars rating={review.rating} />

      {/* text */}
      <p className="text-sm text-zinc-300 leading-relaxed font-['DM_Sans'] font-light flex-1">
        {review.text}
      </p>
    </div>
  );
}
