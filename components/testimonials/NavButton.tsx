import { ReactNode } from "react";

interface NavButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
  children?: ReactNode;
}

export default function NavButton({
  direction,
  onClick,
  children,
}: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous reviews" : "Next reviews"}
      className="w-11 h-11 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center text-zinc-300 hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all duration-200 shadow-sm"
    >
      {children || (
        <i
          className={`fa-solid ${
            direction === "prev" ? "fa-chevron-left" : "fa-chevron-right"
          } text-xs`}
        />
      )}
    </button>
  );
}
