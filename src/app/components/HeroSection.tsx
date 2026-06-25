"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1607703829739-c05b7beddf60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwZW5nYWdlbWVudCUyMHJpbmclMjBjbG9zZSUyMHVwJTIwbHV4dXJ5fGVufDF8fHx8MTc4MjM2OTE2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    tag: "New Collection",
    headline: "Timeless Elegance,",
    headline2: "Just for You",
    sub: "Discover our exquisite collection of handcrafted fine jewelry, where each piece tells a story of love and luxury.",
    cta: "Shop Now",
  },
  {
    image: "https://images.unsplash.com/photo-1694062045776-f48d9b6de57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxicmlkYWwlMjB3ZWRkaW5nJTIwamV3ZWxyeSUyMHNldCUyMGdvbGQlMjBkaWFtb25kcyUyMGVsZWdhbnR8ZW58MXx8fHwxNzgyMzY5MTU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tag: "Bridal Collection",
    headline: "Crafted for Your",
    headline2: "Finest Moments",
    sub: "From engagement rings to bridal sets — each piece is a masterwork of artisanal craftsmanship and enduring beauty.",
    cta: "Explore Bridal",
  },
  {
    image: "https://images.unsplash.com/photo-1569397288884-4d43d6738fbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBicmFjZWxldCUyMGx1eHVyeSUyMGpld2VscnklMjB3b21hbiUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3ODIzNjkxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tag: "Everyday Staples",
    headline: "Wear Your Story,",
    headline2: "Every Day",
    sub: "Everyday luxury that moves with you. Delicate chains, stackable rings, and effortless pendants for the modern woman.",
    cta: "View Collection",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const goTo = useCallback(
    (index: number, dir: "next" | "prev" = "next") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 600);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, "next");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, "prev");
  }, [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-background dark:bg-[#080808]">
      {/* Background Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${animating ? "opacity-0" : "opacity-100"}`}
      >
        <ImageWithFallback
          src={slide.image}
          alt={slide.headline}
          className="w-full h-full object-cover"
        />
        {/* Theme-aware gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 dark:from-[#080808]/90 via-transparent dark:via-[#080808]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 dark:from-[#080808]/80 via-transparent to-transparent dark:to-[#080808]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div
            className={`max-w-2xl transition-all duration-700 ${
              animating
                ? direction === "next"
                  ? "-translate-x-12 opacity-0"
                  : "translate-x-12 opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#C9A84C]" />
              <span
                className="text-[#C9A84C] tracking-[0.3em] uppercase text-xs"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {slide.tag}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-foreground dark:text-white mb-2 leading-tight"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              {slide.headline}
            </h1>
            <h1
              className="mb-6 leading-tight"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                color: "#C9A84C",
              }}
            >
              {slide.headline2}
            </h1>

            {/* Subtitle */}
            <p
              className="text-foreground/60 dark:text-white/60 mb-10 max-w-lg leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.95rem" }}
            >
              {slide.sub}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-6">
              <button
                className="relative overflow-hidden group px-10 py-4 bg-[#C9A84C] text-black tracking-widest uppercase text-xs font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
                style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.2em" }}
              >
                <span className="relative z-10">{slide.cta}</span>
                <div className="absolute inset-0 bg-[#E8C97E] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>

              <button
                className="text-foreground/60 dark:text-white/60 hover:text-[#C9A84C] transition-colors duration-300 tracking-widest uppercase text-xs underline underline-offset-4"
                style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.2em" }}
              >
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-white/10 hover:border-[#C9A84C] text-white/80 hover:text-[#C9A84C] flex items-center justify-center transition-all duration-300 backdrop-blur-sm bg-black/20 hover:bg-black/30"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-white/10 hover:border-[#C9A84C] text-white/80 hover:text-[#C9A84C] flex items-center justify-center transition-all duration-300 backdrop-blur-sm bg-black/20 hover:bg-black/30"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
            className={`transition-all duration-500 ${
              i === current
                ? "w-10 h-0.5 bg-[#C9A84C]"
                : "w-4 h-0.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div
        className="absolute bottom-10 right-8 z-20 text-foreground/30 dark:text-white/30 text-xs tracking-widest"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
    </section>
  );
}
