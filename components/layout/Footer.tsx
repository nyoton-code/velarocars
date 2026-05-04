"use client";

import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion, easeOut } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Fleet", href: "/cars" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SERVICES = [
  { label: "Luxury Car Rental", icon: "fa-solid fa-car" },
  { label: "Airport Pickup", icon: "fa-solid fa-plane-arrival" },
  { label: "Chauffeur Service", icon: "fa-solid fa-user-tie" },
  { label: "24/7 Concierge", icon: "fa-solid fa-headset" },
  { label: "Atlas Day Trips", icon: "fa-solid fa-mountain-sun" },
  { label: "Wedding Transfers", icon: "fa-solid fa-ring" },
];

const CONTACT = [
  { icon: "fa-solid fa-location-dot", text: "Gueliz, Marrakech, Morocco" },
  {
    icon: "fa-solid fa-phone",
    text: "+212 681-117195",
    href: "tel:+212 681-117195",
  },
  {
    icon: "fa-solid fa-envelope",
    text: "contact@velaro.ma",
    href: "mailto:contact@velaro.ma",
  },
  { icon: "fa-solid fa-clock", text: "Open 24 hours / 7 days" },
];

const SOCIALS = [
  {
    icon: <FontAwesomeIcon icon={faInstagram} />,
    href: "https://www.instagram.com/velarocar/",
    label: "Instagram",
  },
  { icon: <FontAwesomeIcon icon={faFacebook} />, href: "#", label: "Facebook" },
  {
    icon: <FontAwesomeIcon icon={faWhatsapp} />,
    href: "https://wa.me/+212681117195?text",
    label: "WhatsApp",
  },
  {
    icon: <FontAwesomeIcon icon={faLocationDot} />,
    href: "https://www.google.com/maps?q=31.595951080322266,-8.028441429138184&z=17&hl=en",
    label: "maps",
  },
];

// ── Fade-up variant ───────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut, delay },
  },
});

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.07] relative overflow-hidden">
      {/* ── subtle gold glow top-left ── */}
      <div
        className="absolute top-0 left-0 w-125 h-125 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 0% 0%, rgba(232,160,32,0.07) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* ═══════════════════════════════════════════
            TOP STRIP — brand tagline + socials
        ═══════════════════════════════════════════ */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-10 border-b border-white/[0.07]"
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* logo */}
          <div>
            <span
              className=" text-white tracking-widest"
              style={{ fontSize: "clamp(28px, 3vw, 36px)" }}
            >
              VE<span className="text-[#e8a020]">LARO</span>
            </span>
            <p className="text-white/35 text-xs  font-light tracking-[0.2em] uppercase mt-0.5">
              Luxury Car Rental · Marrakech
            </p>
          </div>

          {/* social icons */}
          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="group w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:border-[#e8a020]/60 hover:text-[#e8a020] hover:bg-[#e8a020]/8 transition-all duration-300"
              >
                <i> {s.icon}</i>
              </a>
            ))}
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            MAIN GRID
        ═══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 py-14">
          {/* ── Col 1: About ── */}
          <motion.div
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-1"
          >
            <h3 className="text-white  font-semibold text-sm tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#e8a020] rounded-full" />
              About
            </h3>
            <p className="text-white/45 font-light text-sm leading-[1.85] mb-6">
              We don&apos;t just rent cars — we provide the keys to an
              unforgettable Moroccan experience. From the airport to the Atlas,
              your journey remains as prestigious as your destination.
            </p>

            {/* mini stat badges */}
            <div className="flex gap-3">
              {[
                { value: "2+", label: "Years" },
                { value: "50+", label: "Vehicles" },
                { value: "4.8★", label: "Rating" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 bg-white/4 border border-white/[0.07] rounded-xl px-3 py-3 text-center"
                >
                  <p className="text-[#e8a020]  text-lg leading-none tracking-wide">
                    {stat.value}
                  </p>
                  <p className="text-white/35 text-[10px] font-light tracking-widest uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Col 2: Navigation ── */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-white  font-semibold text-sm tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#e8a020] rounded-full" />
              Navigation
            </h3>
            <ul className="space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2.5 text-white/45 hover:text-[#e8a020]  font-light text-sm transition-colors duration-300"
                  >
                    <i className="fa-solid fa-chevron-right text-[9px] text-[#e8a020]/0 group-hover:text-[#e8a020] transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Col 3: Services ── */}
          <motion.div
            variants={fadeUp(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-white  font-semibold text-sm tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#e8a020] rounded-full" />
              Services
            </h3>
            <ul className="space-y-3.5">
              {SERVICES.map((s) => (
                <li
                  key={s.label}
                  className="flex items-center gap-3 text-white/45 font-light text-sm"
                >
                  <i
                    className={`${s.icon} text-[#e8a020]/60 text-xs w-4 text-center shrink-0`}
                  />
                  {s.label}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Col 4: Contact ── */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-white  font-semibold text-sm tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#e8a020] rounded-full" />
              Contact
            </h3>
            <ul className="space-y-4 mb-8">
              {CONTACT.map((c) => (
                <li key={c.text}>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="group flex items-start gap-3 text-white/45 hover:text-[#e8a020] font-light text-sm transition-colors duration-300"
                    >
                      <i
                        className={`${c.icon} text-[#e8a020]/60 text-xs mt-0.5 w-4 text-center shrink-0`}
                      />
                      {c.text}
                    </a>
                  ) : (
                    <span className="flex items-start gap-3 text-white/45 font-light text-sm">
                      <i
                        className={`${c.icon} text-[#e8a020]/60 text-xs mt-0.5 w-4 text-center shrink-0`}
                      />
                      {c.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/212681117195"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#e8a020]/10 hover:bg-[#e8a020]/20 border border-[#e8a020]/25 hover:border-[#e8a020]/50 text-[#e8a020] font-medium text-sm px-5 py-3 rounded-full transition-all duration-300 group"
            >
              <i className="fa-brands fa-whatsapp text-base" />
              Chat on WhatsApp
              <i className="fa-solid fa-arrow-right text-[10px] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════
            BOTTOM BAR
        ═══════════════════════════════════════════ */}
        <motion.div
          className="border-t border-white/[0.07] py-7 flex flex-col sm:flex-row items-center justify-between gap-4"
          variants={fadeUp(0.25)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="text-white/25 font-light text-xs tracking-wide text-center sm:text-left">
            © {new Date().getFullYear()} Velaro. All rights reserved. ·
            Marrakech, Morocco
          </p>

          <div className="flex items-center gap-1">
            {[
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Use", href: "#" },
              { label: "Cookie Policy", href: "#" },
            ].map((link, i, arr) => (
              <span key={link.label} className="flex items-center">
                <Link
                  href={link.href}
                  className="text-white/25 hover:text-[#e8a020]  font-light text-xs transition-colors duration-300 px-2"
                >
                  {link.label}
                </Link>
                {i < arr.length - 1 && (
                  <span className="text-white/15 text-xs">·</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
