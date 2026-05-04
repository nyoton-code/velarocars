"use client";

// ──────────────────────────────────────────────────────────────────────────

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// ← YOUR NUMBER HERE
const WHATSAPP_NUMBER = "212681117195";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const SUBJECTS = [
  "General Enquiry",
  "Vehicle Availability",
  "Airport Pickup",
  "Long-Term Rental",
  "Chauffeur Service",
  "Other",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0 },
  },
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  }

  function validate(): boolean {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!form.email.trim()) newErrors.email = "Email address is required.";
    if (!form.message.trim()) newErrors.message = "Please write a message.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    // ── Build the WhatsApp message ──────────────────────────────
    const lines = [
      `🚗 *New Velaro Enquiry*`,
      ``,
      `👤 *Name:* ${form.name}`,
      `📧 *Email:* ${form.email}`,
      form.phone ? `📞 *Phone:* ${form.phone}` : null,
      form.subject ? `📌 *Subject:* ${form.subject}` : null,
      ``,
      `💬 *Message:*`,
      form.message,
      ``,
      `_Sent via velaro.ma contact form_`,
    ]
      .filter((l) => l !== null)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;

    setTimeout(() => {
      setStatus("sent");
      window.open(url, "_blank", "noopener,noreferrer");
    }, 800);
  }

  function handleReset() {
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setErrors({});
    setStatus("idle");
  }

  return (
    <motion.div
      className="relative bg-zinc-900 rounded-2xl p-8 md:p-10 border border-white/[0.06] shadow-2xl overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {/* gold corner glow */}
      <div
        className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 100% 0%, rgba(232,160,32,0.08) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* header */}
      <motion.div className="mb-8" variants={fadeUp}>
        <p className="text-[#e8a020] text-[11px] font-['DM_Sans'] font-semibold tracking-[0.22em] uppercase mb-2">
          Send a Message
        </p>
        <h3 className="font-['Bebas_Neue'] text-white text-3xl md:text-4xl tracking-wide leading-none mb-3">
          Book Your Luxury Ride
        </h3>
        <div className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-[11px] font-['DM_Sans'] font-medium px-3 py-1.5 rounded-full">
          <i className="fa-brands fa-whatsapp text-sm" />
          Message delivered via WhatsApp
        </div>
      </motion.div>

      {status === "sent" ? (
        <SuccessState onReset={handleReset} />
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-4">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={fadeUp}
            >
              <Field
                label="Full Name"
                name="name"
                type="text"
                placeholder="Hassan El Fassi"
                value={form.name}
                onChange={handleChange}
                icon="fa-solid fa-user"
                error={errors.name}
              />
              <Field
                label="Email Address"
                name="email"
                type="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={handleChange}
                icon="fa-solid fa-envelope"
                error={errors.email}
              />
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={fadeUp}
            >
              <Field
                label="Phone (optional)"
                name="phone"
                type="tel"
                placeholder="+212 600-123456"
                value={form.phone}
                onChange={handleChange}
                icon="fa-solid fa-phone"
              />
              <SelectField
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                options={SUBJECTS}
                icon="fa-solid fa-tag"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className="block text-white/40 font-['DM_Sans'] font-light text-xs tracking-widest uppercase mb-2">
                Message
              </label>
              <div className="relative">
                <i className="fa-solid fa-comment-dots absolute top-4 left-4 text-white/20 text-sm pointer-events-none" />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your rental needs, dates, preferred vehicle…"
                  className={`w-full bg-zinc-800 text-white/80 font-['DM_Sans'] font-light text-sm placeholder:text-white/20 rounded-xl pl-11 pr-4 py-4 border outline-none resize-none transition-all duration-300 ${
                    errors.message
                      ? "border-red-500/50 focus:border-red-500/70 focus:ring-2 focus:ring-red-500/10"
                      : "border-white/[0.06] focus:border-[#e8a020]/50 focus:ring-2 focus:ring-[#e8a020]/15"
                  }`}
                />
              </div>
              {errors.message && <ErrorText text={errors.message} />}
            </motion.div>

            <motion.div variants={fadeUp}>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative w-full bg-[#e8a020] hover:bg-[#f5b942] disabled:opacity-60 text-[#0a0a0a] font-['DM_Sans'] font-semibold text-sm tracking-wide py-4 rounded-full transition-all duration-300 hover:scale-[1.015] active:scale-[0.99] shadow-lg shadow-[#e8a020]/15 overflow-hidden mt-2"
              >
                <span
                  className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
                  }}
                  aria-hidden="true"
                />
                {status === "sending" ? (
                  <span className="flex items-center justify-center gap-2">
                    <i className="fa-solid fa-circle-notch animate-spin text-sm" />
                    Opening WhatsApp…
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <i className="fa-brands fa-whatsapp text-base" />
                    Send via WhatsApp
                  </span>
                )}
              </button>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-center text-white/20 font-['DM_Sans'] font-light text-xs"
            >
              <i className="fa-solid fa-circle-info mr-1.5" />
              WhatsApp will open with your message pre-filled — just press send.
            </motion.p>
          </div>
        </form>
      )}
    </motion.div>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────

interface FieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: string;
  error?: string;
}
function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  icon,
  error,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-white/40 font-['DM_Sans'] font-light text-xs tracking-widest uppercase mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <i
          className={`${icon} absolute top-1/2 -translate-y-1/2 left-4 text-white/20 text-sm pointer-events-none`}
        />
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full bg-zinc-800 text-white/80 font-['DM_Sans'] font-light text-sm placeholder:text-white/20 rounded-xl pl-11 pr-4 py-4 border outline-none transition-all duration-300 ${
            error
              ? "border-red-500/50 focus:border-red-500/70 focus:ring-2 focus:ring-red-500/10"
              : "border-white/[0.06] focus:border-[#e8a020]/50 focus:ring-2 focus:ring-[#e8a020]/15"
          }`}
        />
      </div>
      {error && <ErrorText text={error} />}
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  icon: string;
}
function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  icon,
}: SelectFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-white/40 font-['DM_Sans'] font-light text-xs tracking-widest uppercase mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <i
          className={`${icon} absolute top-1/2 -translate-y-1/2 left-4 text-white/20 text-sm pointer-events-none`}
        />
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full bg-zinc-800 text-white/80 font-['DM_Sans'] font-light text-sm rounded-xl pl-11 pr-8 py-4 border border-white/[0.06] focus:border-[#e8a020]/50 focus:ring-2 focus:ring-[#e8a020]/15 outline-none transition-all duration-300 appearance-none cursor-pointer"
        >
          <option value="" disabled className="bg-zinc-800">
            Select a subject
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-zinc-800 text-white">
              {opt}
            </option>
          ))}
        </select>
        <i className="fa-solid fa-chevron-down absolute top-1/2 -translate-y-1/2 right-4 text-white/20 text-xs pointer-events-none" />
      </div>
    </div>
  );
}

function ErrorText({ text }: { text: string }) {
  return (
    <p className="mt-1.5 text-red-400 font-['DM_Sans'] font-light text-xs flex items-center gap-1.5">
      <i className="fa-solid fa-triangle-exclamation text-[10px]" />
      {text}
    </p>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center py-12 gap-5"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45 }}
    >
      <div className="w-16 h-16 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center">
        <i className="fa-brands fa-whatsapp text-[#25D366] text-2xl" />
      </div>
      <div>
        <h4 className="font-['Bebas_Neue'] text-white text-3xl tracking-wide mb-2">
          WhatsApp Opened!
        </h4>
        <p className="text-white/40 font-['DM_Sans'] font-light text-sm leading-relaxed max-w-xs">
          Your message is pre-filled and ready. Just press{" "}
          <span className="text-[#25D366] font-medium">Send</span> in WhatsApp
          to reach us instantly.
        </p>
      </div>
      <button
        onClick={onReset}
        className="mt-2 text-white/25 hover:text-white/50 font-['DM_Sans'] font-light text-xs tracking-widest uppercase transition-colors duration-300"
      >
        Send another message
      </button>
    </motion.div>
  );
}
