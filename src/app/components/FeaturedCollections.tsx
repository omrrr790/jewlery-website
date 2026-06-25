"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const collections = [
  {
    id: 1,
    name: "Bridal Collection",
    tagline: "For your most precious moments",
    pieces: "48 Pieces",
    image:
      "https://images.unsplash.com/photo-1743264385411-57c883bdc0ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxicmlkYWwlMjB3ZWRkaW5nJTIwamV3ZWxyeSUyMHNldCUyMGdvbGQlMjBkaWFtb25kcyUyMGVsZWdhbnR8ZW58MXx8fHwxNzgyMzY5MTU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    name: "Everyday Staples",
    tagline: "Effortless luxury, every day",
    pieces: "64 Pieces",
    image:
      "https://images.unsplash.com/photo-1633810542706-90e5ff7557be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxnb2xkJTIwbmVja2xhY2UlMjBicmFjZWxldCUyMGx1eHVyeSUyMGpld2VscnklMjB3b21hbiUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3ODIzNjkxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "Men's Jewelry",
    tagline: "Bold, refined, powerful",
    pieces: "32 Pieces",
    image:
      "https://images.unsplash.com/photo-1676496220303-3d98c6077710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBkaWFtb25kJTIwamV3ZWxyeSUyMGdvbGQlMjByaW5nJTIwbmVja2xhY2UlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3ODIzNjkxNTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

function CollectionCard({ collection }: { collection: (typeof collections)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden cursor-pointer group"
      style={{ aspectRatio: "3/4" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <ImageWithFallback
        src={collection.image}
        alt={collection.name}
        className={`w-full h-full object-cover transition-transform duration-700 ${
          hovered ? "scale-110" : "scale-100"
        }`}
      />

      {/* Base overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

      {/* Hover tint overlay */}
      <div
        className={`absolute inset-0 bg-[#C9A84C]/10 transition-opacity duration-500 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Gold border frame on hover */}
      <div
        className={`absolute inset-4 border border-[#C9A84C]/60 transition-all duration-500 ${
          hovered ? "opacity-100 inset-4" : "opacity-0 inset-8"
        }`}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
        <p
          className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-2"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {collection.pieces}
        </p>
        <h3
          className="text-foreground dark:text-white mb-1"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
            fontWeight: 400,
          }}
        >
          {collection.name}
        </h3>
        <p
          className="text-foreground/50 dark:text-white/50 text-sm mb-6"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {collection.tagline}
        </p>

        {/* CTA */}
        <div
          className={`flex items-center gap-3 transition-all duration-500 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            className="flex items-center gap-2 bg-[#C9A84C] text-black px-6 py-3 text-xs tracking-widest uppercase font-semibold hover:bg-[#E8C97E] transition-colors duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.2em" }}
          >
            View Collection
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function FeaturedCollections() {
  return (
    <section className="bg-background dark:bg-[#080808] py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#C9A84C]/50" />
            <span
              className="text-[#C9A84C] tracking-[0.3em] uppercase text-xs"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Curated for You
            </span>
            <div className="h-px w-16 bg-[#C9A84C]/50" />
          </div>
          <h2
            className="text-foreground dark:text-white mb-4"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Our Collections
          </h2>
          <p
            className="text-foreground/40 dark:text-white/40 max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.9rem" }}
          >
            Each collection is thoughtfully crafted to celebrate the unique beauty of every woman
            — from the grandeur of bridal to the simplicity of everyday luxury.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {collections.map((col) => (
            <CollectionCard key={col.id} collection={col} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <button
            className="inline-flex items-center gap-3 border border-[#C9A84C]/40 text-[#C9A84C] px-10 py-4 text-xs tracking-widest uppercase hover:bg-[#C9A84C]/10 transition-all duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.2em" }}
          >
            View All Collections
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
