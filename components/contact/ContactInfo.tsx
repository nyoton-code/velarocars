"use client";

import { icon } from "@fortawesome/fontawesome-svg-core";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faEnvelope,
  faLocation,
  faPhone,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// components/contact/ContactInfo.tsx

import { motion, Variants } from "framer-motion";

const INFO_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faPhone} />,
    label: "Phone",
    value: "+212 681-117195",
    href: "tel:+212600123456",
  },
  {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    label: "Email",
    value: "contact@velaro.ma",
    href: "mailto:contact@velaro.ma",
  },
  {
    icon: <FontAwesomeIcon icon={faLocation} />,
    label: "Location",
    value: "Gueliz, Marrakech, Morocco",
    href: "https://maps.google.com/?q=Gueliz+Marrakech",
  },
  {
    icon: <FontAwesomeIcon icon={faClock} />,
    label: "Hours",
    value: "Open 24 hours, 7 days a week",
    href: null,
  },
];

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut", delay } as const,
  },
});

export default function ContactInfo() {
  return (
    <motion.div
      className="flex flex-col gap-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* heading */}
      <motion.div variants={fadeUp(0)}>
        <p className="inline-flex items-center gap-2 text-[#e8a020] text-[11px]  font-semibold tracking-[0.22em] uppercase mb-4">
          <i className="fa-solid fa-plus text-[10px]" />
          Reach Out
        </p>
        <h2
          className="text-white leading-none tracking-wide mb-4"
          style={{ fontSize: "clamp(38px, 5vw, 60px)" }}
        >
          Were Here
          <br />
          <span className="text-[#e8a020]">To Help</span>
        </h2>
        <p className="text-white/45 font-light text-sm leading-[1.9] max-w-sm">
          Whether you need a vehicle for a day or a month, our team is always
          ready to craft the perfect rental experience for you in Marrakech and
          beyond.
        </p>
      </motion.div>

      {/* contact items */}
      <motion.ul className="flex flex-col gap-5" variants={fadeUp(0.08)}>
        {INFO_ITEMS.map((item) => (
          <li key={item.label}>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <i> {item.icon} </i>
                <InfoText label={item.label} value={item.value} hoverable />
              </a>
            ) : (
              <div className="flex items-center gap-4">
                {/* <InfoIcon icon={item.icon} /> */}
                <InfoText label={item.label} value={item.value} />
              </div>
            )}
          </li>
        ))}
      </motion.ul>

      {/* divider */}
      <motion.div
        variants={fadeUp(0.14)}
        className="h-px bg-linear-to-r from-white/10 via-[#e8a020]/30 to-transparent"
      />

      {/* WhatsApp quick CTA */}
      <motion.div variants={fadeUp(0.22)}>
        <a
          href="https://wa.me/212681117195"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-[#e8a020]/8 hover:bg-[#e8a020]/15 border border-[#e8a020]/20 hover:border-[#e8a020]/50 text-[#e8a020]  font-medium text-sm px-6 py-3.5 rounded-full transition-all duration-300"
        >
          <i className="fa-brands fa-whatsapp text-base" />
          <FontAwesomeIcon icon={faWhatsapp} />
          Quick chat on WhatsApp
          <i className="fa-solid fa-arrow-right text-[10px] -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
        </a>
      </motion.div>
    </motion.div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function InfoIcon({ icon }: { icon: string }) {
  return (
    <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-[#e8a020]/8 border border-[#e8a020]/15">
      <i className={`${icon} text-[#e8a020] text-sm`} />
    </div>
  );
}

function InfoText({
  label,
  value,
  hoverable,
}: {
  label: string;
  value: string;
  hoverable?: boolean;
}) {
  return (
    <div>
      <p className="text-white/30 font-light text-[11px] tracking-widest uppercase mb-0.5">
        {label}
      </p>
      <p
        className={`font-light text-sm ${
          hoverable
            ? "text-white/70 group-hover:text-[#e8a020] transition-colors duration-300"
            : "text-white/70"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
