"use client";

import { useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const stats = [
  { value: "15+", label: "Years of Craftsmanship" },
  { value: "10K+", label: "Happy Clients" },
  { value: "500+", label: "Unique Designs" },
];

export function OurStory() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-background dark:bg-[#080808] py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent mb-24" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
            }`}
          >
            <div className="relative">
              {/* Decorative gold frame offset */}
              <div className="absolute -top-4 -left-4 w-3/4 h-3/4 border border-[#C9A84C]/20 z-0" />

              {/* Main image */}
              <div className="relative z-10 aspect-[4/5] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1624588057318-5f1b2eb81012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxqZXdlbHJ5JTIwYXJ0aXNhbiUyMGNyYWZ0c21hbiUyMHdvcmtzaG9wJTIwbWFraW5nJTIwZmluZSUyMGpld2Vscnl8ZW58MXx8fHwxNzgyMzY5MTYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Jewelry artisan at work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/40 to-transparent" />
              </div>

              {/* Accent frame corner */}
              <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border border-[#C9A84C]/20 z-0" />

              {/* Years badge */}
              <div className="absolute bottom-8 -right-6 z-20 bg-[#C9A84C] text-black w-28 h-28 flex flex-col items-center justify-center shadow-2xl">
                <span
                  className="text-3xl font-bold leading-none"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  15
                </span>
                <span
                  className="text-[10px] tracking-widest uppercase mt-1 text-center leading-tight"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Years of
                  <br />
                  Excellence
                </span>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
          >
            {/* Label */}
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#C9A84C]" />
              <span
                className="text-[#C9A84C] tracking-[0.3em] uppercase text-xs"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Our Heritage
              </span>
            </div>

            <h2
              className="text-foreground dark:text-white mb-6"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              A Story Written
              <br />
              <span className="text-[#C9A84C]">in Gold & Diamonds</span>
            </h2>

            <p
              className="text-foreground/50 dark:text-white/50 mb-6 leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.9rem" }}
            >
              Born from a passion for perfection, Elegance by Rimsha was founded on the belief that
              every woman deserves to wear her most authentic self — adorned in pieces that are as
              unique and extraordinary as she is.
            </p>
            <p
              className="text-foreground/50 dark:text-white/50 mb-10 leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.9rem" }}
            >
              Our master jewelers combine centuries-old techniques with modern design sensibilities,
              sourcing only the finest ethically mined gemstones and recycled precious metals. Each
              piece passes through 47 quality checkpoints before reaching you — because perfection
              is not optional.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 py-8 border-t border-b border-[#C9A84C]/15">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="text-[#C9A84C] mb-1"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "1.8rem",
                      fontWeight: 400,
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-foreground/40 dark:text-white/40 text-[10px] tracking-widest uppercase leading-tight"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              className="group inline-flex items-center gap-4 text-[#C9A84C] text-xs tracking-widest uppercase hover:gap-6 transition-all duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.2em" }}
            >
              <span>Discover Our Craftsmanship</span>
              <div className="h-px w-12 bg-[#C9A84C] group-hover:w-20 transition-all duration-300" />
            </button>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent mt-24" />
      </div>
    </section>
  );
}
