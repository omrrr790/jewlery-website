"use client";

import { useState, useEffect, useRef } from "react";
import { Heart, Eye, ShoppingBag, Star, Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useCart } from "../../context/CartContext";
import { Product } from "../../types/cart";

const products: Product[] = [
  {
    id: 1,
    name: "Sparkling Diamond Pendant",
    category: "Necklaces",
    price: 1299,
    formattedPrice: "From $1,299",
    rating: 5,
    reviews: 128,
    badge: "Bestseller",
    images: [
      "https://images.unsplash.com/photo-1546956923-f6ba9089ccde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkaWFtb25kJTIwamV3ZWxyeSUyMGdvbGQlMjByaW5nJTIwbmVja2xhY2UlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3ODIzNjkxNTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1675113495242-09e2616a4aa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxnb2xkJTIwbmVja2xhY2UlMjBicmFjZWxldCUyMGx1eHVyeSUyMGpld2VscnklMjB3b21hbiUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3ODIzNjkxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    id: 2,
    name: "18K Gold Chain Necklace",
    category: "Necklaces",
    price: 899,
    formattedPrice: "From $899",
    rating: 5,
    reviews: 94,
    badge: "New",
    images: [
      "https://images.unsplash.com/photo-1611107683227-e9060eccd846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxnb2xkJTIwbmVja2xhY2UlMjBicmFjZWxldCUyMGx1eHVyeSUyMGpld2VscnklMjB3b21hbiUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3ODIzNjkxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1569397288884-4d43d6738fbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBicmFjZWxldCUyMGx1eHVyeSUyMGpld2VscnklMjB3b21hbiUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3ODIzNjkxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    id: 3,
    name: "Diamond Solitaire Ring",
    category: "Rings",
    price: 2499,
    formattedPrice: "From $2,499",
    rating: 5,
    reviews: 215,
    badge: "Bestseller",
    images: [
      "https://images.unsplash.com/photo-1607703829739-c05b7beddf60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwZW5nYWdlbWVudCUyMHJpbmclMjBjbG9zZSUyMHVwJTIwbHV4dXJ5fGVufDF8fHx8MTc4MjM2OTE2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1589674668791-4889d2bba4c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkaWFtb25kJTIwZW5nYWdlbWVudCUyMHJpbmclMjBjbG9zZSUyMHVwJTIwbHV4dXJ5fGVufDF8fHx8MTc4MjM2OTE2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    id: 4,
    name: "Gold Tennis Bracelet",
    category: "Bracelets",
    price: 1799,
    formattedPrice: "From $1,799",
    rating: 4,
    reviews: 67,
    badge: "Limited",
    images: [
      "https://images.unsplash.com/photo-1633810542706-90e5ff7557be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxnb2xkJTIwbmVja2xhY2UlMjBicmFjZWxldCUyMGx1eHVyeSUyMGpld2VscnklMjB3b21hbiUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3ODIzNjkxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1611170947204-5ab96c3e37a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxnb2xkJTIwbmVja2xhY2UlMjBicmFjZWxldCUyMGx1eHVyeSUyMGpld2VscnklMjB3b21hbiUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3ODIzNjkxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    id: 5,
    name: "Pearl & Diamond Earrings",
    category: "Earrings",
    price: 749,
    formattedPrice: "From $749",
    rating: 5,
    reviews: 83,
    badge: "New",
    images: [
      "https://images.unsplash.com/photo-1719862057229-4dd650b5ccee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjBkaWFtb25kJTIwamV3ZWxyeSUyMGdvbGQlMjByaW5nJTIwbmVja2xhY2UlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3ODIzNjkxNTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1673131158656-84601f4d00ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxnb2xkJTIwbmVja2xhY2UlMjBicmFjZWxldCUyMGx1eHVyeSUyMGpld2VscnklMjB3b21hbiUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3ODIzNjkxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    id: 6,
    name: "Vintage Ruby Ring",
    category: "Rings",
    price: 3199,
    formattedPrice: "From $3,199",
    rating: 5,
    reviews: 42,
    badge: "Exclusive",
    images: [
      "https://images.unsplash.com/photo-1613945409199-1b5527d31fe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxkaWFtb25kJTIwZW5nYWdlbWVudCUyMHJpbmclMjBjbG9zZSUyMHVwJTIwbHV4dXJ5fGVufDF8fHx8MTc4MjM2OTE2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1613945407943-59cd755fd69e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxkaWFtb25kJTIwZW5nYWdlbWVudCUyMHJpbmclMjBjbG9zZSUyMHVwJTIwbHV4dXJ5fGVufDF8fHx8MTc4MjM2OTE2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
];

const badgeColor: Record<string, string> = {
  Bestseller: "bg-[#C9A84C] text-black",
  New: "bg-[#E8C97E] text-black",
  Limited: "bg-[#8B1A1A] text-white",
  Exclusive: "bg-[#1a1a3a] text-[#C9A84C] border border-[#C9A84C]/50",
};

function ProductCard({ product, visible }: { product: Product; visible: boolean }) {
  const [hovered, setHovered] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  
  const { addToCart } = useCart();

  useEffect(() => {
    if (!hovered) {
      setImgIndex(0);
      return;
    }
    if (product.images.length < 2) return;
    const t = setInterval(() => {
      setImgIndex((i) => (i + 1) % product.images.length);
    }, 1000);
    return () => clearInterval(t);
  }, [hovered, product.images.length]);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000); // Reset visual feedback after 2s
  };

  return (
    <div
      className={`group relative transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Container */}
      <div
        className={`relative overflow-hidden mb-4 bg-[#111111] transition-all duration-500 ${
          hovered ? "shadow-[0_20px_60px_rgba(201,168,76,0.15)]" : ""
        }`}
        style={{ aspectRatio: "3/4" }}
      >
        <ImageWithFallback
          src={product.images[imgIndex]}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            hovered ? "scale-105" : "scale-100"
          }`}
        />

        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 text-[10px] tracking-widest uppercase font-semibold ${badgeColor[product.badge] || "bg-[#C9A84C] text-black"}`}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {product.badge}
          </span>
        </div>

        {/* Hover Actions Overlay */}
        <div
          className={`absolute inset-0 bg-black/5 dark:bg-[#080808]/40 flex flex-col justify-end p-5 gap-2 transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className={`w-full text-xs tracking-widest uppercase py-3 font-semibold flex items-center justify-center gap-2 transition-colors duration-300 ${
              isAdded 
                ? "bg-green-700 text-white" 
                : "bg-[#C9A84C] text-black hover:bg-[#E8C97E]"
            }`}
            style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.15em" }}
          >
            {isAdded ? <Check size={14} /> : <ShoppingBag size={14} />}
            {isAdded ? "Added to Cart" : "Add to Cart"}
          </button>

          {/* Wishlist + Quick View */}
          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setWishlisted(!wishlisted);
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs border transition-all duration-300 ${
                wishlisted
                  ? "bg-[#C9A84C]/20 border-[#C9A84C] text-[#C9A84C]"
                  : "border-black/20 text-foreground hover:border-[#C9A84C] hover:text-[#C9A84C]"
              }`}
            >
              <Heart size={13} className={wishlisted ? "fill-[#C9A84C]" : ""} />
              <span
                className="tracking-widest uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.1em" }}
              >
                Wishlist
              </span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs border border-black/20 text-foreground hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300">
              <Eye size={13} />
              <span
                className="tracking-widest uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.1em" }}
              >
                Quick View
              </span>
            </button>
          </div>
        </div>

        {/* Thumbnail dots */}
        {product.images.length > 1 && hovered && (
          <div className="absolute top-4 right-4 flex gap-1">
            {product.images.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === imgIndex ? "bg-[#C9A84C]" : "bg-black/20 dark:bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="px-1">
        <p
          className="text-[#C9A84C]/70 text-[10px] tracking-widest uppercase mb-1"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {product.category}
        </p>
        <h3
          className="text-foreground dark:text-white mb-1 group-hover:text-[#C9A84C] transition-colors duration-300"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1rem",
            fontWeight: 400,
          }}
        >
          {product.name}
        </h3>

        {/* Stars */}
        <div className="flex items-center gap-1.5 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={11}
              className={i < product.rating ? "fill-[#C9A84C] text-[#C9A84C]" : "text-black/20 dark:text-white/20"}
            />
          ))}
          <span
            className="text-foreground/30 dark:text-white/30 text-[10px] ml-1"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            ({product.reviews})
          </span>
        </div>

        <p
          className="text-foreground/80 dark:text-white/80"
          style={{ fontFamily: "'Cinzel', serif", fontSize: "0.9rem", fontWeight: 400 }}
        >
          {product.formattedPrice}
        </p>
      </div>
    </div>
  );
}

export function BestSellers() {
  const [visible, setVisible] = useState<boolean[]>(new Array(products.length).fill(false));
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisible((v) => {
                const n = [...v];
                n[i] = true;
                return n;
              });
            }, i * 100);
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="bg-background dark:bg-[#080808] py-24 px-6 sm:px-10 lg:px-16">
      {/* Decorative top divider */}
      <div className="max-w-7xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent mb-24" />

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#C9A84C]/50" />
            <span
              className="text-[#C9A84C] tracking-[0.3em] uppercase text-xs"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Most Loved
            </span>
            <div className="h-px w-16 bg-[#C9A84C]/50" />
          </div>
          <h2
            className="text-foreground dark:text-white mb-4"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 400,
            }}
          >
            Best Sellers
          </h2>
          <p
            className="text-foreground/40 dark:text-white/40 max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.9rem" }}
          >
            Our most coveted pieces — chosen by thousands of women who believe that beauty is worth
            investing in.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {products.map((product, i) => (
            <div key={product.id} ref={(el) => { refs.current[i] = el; }}>
              <ProductCard product={product} visible={visible[i]} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            className="inline-flex items-center gap-3 bg-transparent border border-[#C9A84C]/40 text-[#C9A84C] px-12 py-4 text-xs tracking-widest uppercase hover:bg-[#C9A84C] hover:text-black transition-all duration-500"
            style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.2em" }}
          >
            Shop All Jewelry
          </button>
        </div>
      </div>
    </section>
  );
}