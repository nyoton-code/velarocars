"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { reviews, type Review } from "@/data/reviews";
import ReviewCard from "./ReviewCard";
import StatsCard from "./StatsCard";
import NavButton from "./NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

type SlideContent = { type: "review"; data: Review } | { type: "stats" };

export default function TestimonialsSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  // Interleave a stats card after the 2nd review
  // Build slide content: [review, review, stats, review, review, review, ...]
  const slides: SlideContent[] = [];
  reviews.forEach((review, i) => {
    slides.push({ type: "review", data: review });
    if (i === 1) slides.push({ type: "stats" });
  });

  return (
    <section className="bg-black py-20 px-4 md:px-8">
      <div className="max-w-325 mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-amber-500 mb-4">
            <i className="fa-solid fa-plus text-[10px]" />
            Testimonials
          </p>
          <h2 className="font-['Bebas_Neue'] text-[clamp(44px,6vw,80px)] leading-none tracking-wide text-white">
            Client Driving Experiences
          </h2>
        </div>

        {/* ── Swiper ── */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay, A11y]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true, el: ".swiper-custom-pagination" }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-12!"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="h-auto!">
                {slide.type === "stats" ? (
                  <StatsCard />
                ) : (
                  <ReviewCard review={slide.data} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ── Controls row ── */}
          <div className="flex items-center justify-between mt-6">
            {/* custom pagination dots */}
            <div className="swiper-custom-pagination flex gap-2 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:bg-gray-500 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:bg-amber-500 [&_.swiper-pagination-bullet-active]:w-6" />

            {/* arrows */}
            <div className="flex gap-2 ml-auto">
              <NavButton
                direction="prev"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
              </NavButton>
              <NavButton
                direction="next"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
              </NavButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
