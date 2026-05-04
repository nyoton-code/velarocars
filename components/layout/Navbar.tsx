"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Cars", href: "/cars" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-lg border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
          {/* LOGO */}
          <Link
            href="/"
            className="text-white text-xl font-semibold tracking-wider"
          >
            VE<span className="text-amber-500">LARO</span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm transition ${
                    active ? "text-amber-500" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}

                  {active && (
                    <motion.span
                      layoutId="nav-line"
                      className="absolute left-0 -bottom-1 w-full h-0.5 bg-amber-500"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-3">
            {/* 🔥 WhatsApp Button (Premium style) */}
            <a
              href="https://wa.me/212681117195"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full 
                      bg-white/5 backdrop-blur-md 
                        border   border-[#25d36548]
                        text-white/80 
                        hover:bg-[#25D366] hover:text-white hover:border-[#25D366] 
                        transition-all duration-300"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
            </a>

            {/* CTA */}
            <Link
              href="/cars"
              className="bg-amber-500 text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-amber-400 transition"
            >
              Book Now
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed top-0 right-0 w-[80%] h-full bg-black z-50 p-6 flex flex-col gap-6 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-lg"
              >
                {link.label}
              </Link>
            ))}

            {/* WhatsApp inside mobile */}
            <a
              href="https://wa.me/212681117195"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-white/10 text-white py-3 rounded-full hover:border-amber-500 hover:text-amber-500 transition"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              Contact Us
            </a>

            {/* CTA */}
            <Link
              href="/cars"
              className="bg-amber-500 text-black text-center py-3 rounded-full font-medium"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
