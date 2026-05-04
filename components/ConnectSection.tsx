"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface ConnectSectionProps {
  backgroundImage?: string;
  phone?: string;
  ctaHref?: string;
}

export default function ConnectSection({
  backgroundImage = "/connect.png",
  phone = "+212 681-117195",
  ctaHref = "/booking",
}: ConnectSectionProps) {
  return (
    <section className="bg-primary py-20 px-4 md:px-8">
      <div className="max-w-325 mx-auto">
        {/* ── Card Container ── */}
        <div className="relative w-full min-h-140 md:min-h-160 rounded-3xl overflow-hidden  shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          {/* ── Background Image ── */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          />

          {/* ── Gradient Overlay ── */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 45%, rgba(10,10,10,0.25) 75%, rgba(10,10,10,0.10) 100%)",
            }}
          />

          {/* ── Content Wrapper ── */}
          <div className="relative z-10 w-full px-6 md:px-12 py-16 md:py-24">
            {/* Optional inner glass effect */}
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-10 max-w-175">
              {/* Label */}
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[11px] font-semibold tracking-[0.18em] uppercase px-4 py-2 rounded-full mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                Contact Today
              </div>

              {/* Title */}
              <h2
                className="text-white leading-[0.95] mb-6 font-bold"
                style={{
                  fontSize: "clamp(44px, 6.5vw, 88px)",
                  letterSpacing: "0.02em",
                }}
              >
                Connect with us for
                <br />
                <span className="text-amber-500">rental support</span> today!
              </h2>

              {/* Description */}
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-130 mb-8">
                Our friendly and professional team is ready to help you find the
                perfect vehicle for your needs — whether you have questions,
                need assistance with booking, or want a premium pickup in
                Marrakech.
              </p>

              {/* Features */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10">
                {[
                  "See Vehicle Quality and Comfort",
                  "Learn About Easy Booking Steps",
                ].map((label) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <span className="text-amber-500">✔</span>
                    <span className="text-white text-sm">{label}</span>
                  </div>
                ))}
              </div>

              {/* CTA Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                {/* Button */}
                <Link
                  href={ctaHref}
                  className="group inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm px-7 py-4 rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black/20">
                    →
                  </span>
                  Get Started Today
                </Link>

                {/* Phone */}
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="group inline-flex items-center gap-4"
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-full border border-white/30 text-white group-hover:border-amber-500 group-hover:text-amber-500 transition">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <div>
                    <p className="text-zinc-400 text-xs uppercase tracking-widest mb-0.5">
                      24/7 Support
                    </p>
                    <p className="text-white font-semibold text-base group-hover:text-amber-500 transition">
                      <FontAwesomeIcon icon={faPhone} /> +212 681-117195
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* ── Bottom Accent Line ── */}
          <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-linear-to-r from-amber-500 to-transparent" />
        </div>
      </div>
    </section>
  );
}
