interface StarsProps {
  rating: number;
}

export default function Stars({ rating }: StarsProps) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <i
          key={i}
          className={`fa-star text-xs ${
            i < rating ? "fa-solid text-amber-500" : "fa-regular text-zinc-600"
          }`}
        />
      ))}
    </div>
  );
}
