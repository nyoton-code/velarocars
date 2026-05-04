"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function WhatsapButton() {
  return (
    <a
      href="https://wa.me/212681117195"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      // className="fixed bottom-7 right-7 z-50 group flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b857] text-white font-semibold h-10 w-10  px-3 py-3 rounded-full   hover:scale-[1.05] active:scale-[0.98] transition-all duration-300"
    >
      <span>
        constact us
        <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />{" "}
      </span>
    </a>
  );
}
