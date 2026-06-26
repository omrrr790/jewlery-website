"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Heart, ArrowRight, Sparkles, Layers, Eye } from "lucide-react";
import { useCart } from "../../context/CartContext";

// --- DUMMY DATA FOR THE AUTOMATIC HERO SCROLLER ---
const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    tag: "Summer Edition",
    title: "The New Dawn",
    desc: "A breathtaking revelation of high artistry and luminous gemstones, meticulously crafted for modern refinement."
  },
  {
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    tag: "Exclusive Debut",
    title: "Liquid Gold & Ice",
    desc: "Fluid structural silhouettes meet hyper-brilliant diamonds. Experience luxury that feels like a second skin."
  },
  {
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    tag: "Artisanal Focus",
    title: "Sculpted Elegance",
    desc: "Honoring ancient techniques through contemporary geometry. Discover our latest statement masterpieces."
  }
];

// --- PRODUCT DATA WITH DUAL-IMAGE VIEW SUPPORT ---
const newArrivals = [
  { id: 1, name: "Lumina Diamond Pendant", price: 1250, image: "/409264684909214650.jpg", altImage: "/10836855347764467.jpg", tag: "Just Added", category: "Pendants" },
  { id: 2, name: "Aurelia Gold Hoops", price: 850, image: "/Gold Hoop Earrings Minimal Style.jpg", altImage: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=600", tag: "Bestseller", category: "Earrings" },
  { id: 3, name: "Eternity Sapphire Ring", price: 3400, image: "/Unique Vine Engagement Ring _ Delicate Rose Gold Moissanite Ring.jpg", altImage: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=600", tag: "Limited Edition", category: "Rings" },
  { id: 4, name: "Solstice Tennis Bracelet", price: 5200, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600", altImage: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=600", tag: null, category: "Bracelets" },
  { id: 5, name: "Celeste Pearl Drop Earrings", price: 620, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600", altImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600", tag: null, category: "Earrings" },
  { id: 6, name: "Imperial Emerald Choker", price: 8900, image: "/Elegant Ruby & Pearl Choker Set _ Sabyasachi Style Bridal Jewelry.jpg", altImage: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=600", tag: "Exclusive", category: "Necklaces" },
  { id: 7, name: "Nova Stackable Rings", price: 1100, image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=600", altImage: "/Rose Gold Twisted Diamond Ring.jpg", tag: "Just Added", category: "Rings" },
  { id: 8, name: "Rose Gold Vow Band", price: 950, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600", altImage: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=600", tag: null, category: "Rings" },
  { id: 9, name: "Serenity Amethyst Studs", price: 450, image: "/Water Lily series 2_5 CT Light Purple Moissanite Teardrop Earrings, S925 Silver, Gift Boxed.jpg", altImage: "/Sterling Silver Amethyst Purple Oval Cz Stud Earrings.jpg", tag: "New", category: "Earrings" },
  { id: 10, name: "Midnight Onyx Cuff", price: 2100, image: "/Schwarzer Onyx Sterling Silber Manschette Armband, Minimalistischer Breiter Band Armreif.jpg", altImage: "/Black Onyx Bracelet in 18kt Gold Over Sterling_ 7_.jpg", tag: "Limited Edition", category: "Bracelets" }
];

// --- STORY SHOWCASE TRENDS DATA ---
const dynamicTrends = [
  {
    title: "The Fine Ear Stack",
    concept: "Curated Layers",
    image: "/3518505955215341.jpg",
    action: "Explore Curated Stacks"
  },
  {
    title: "Chained Minimalism",
    concept: "Effortless Pendants",
    image: "/Instagram.jpg",
    action: "View Delicate Layers"
  }
];

export default function NewArrivalsPage() {
  const router = useRouter();
  const { addToCart } = useCart(); 
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [heroIndex, setHeroIndex] = useState(0);
  
  // Tracks which specific product was just added to show a custom success notification
  const [addedProductId, setAddedProductId] = useState<number | null>(null);

  // Auto-scroll loop for Hero Section (every 5.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handleAcquireItem = (product: any) => {
    // Transform incoming structural data format to match your context expectation
    const cartProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      images: [product.image, product.altImage],
      category: product.category,
      quantity: 1
    };

    // Add to context without routing away
    addToCart(cartProduct as any); 

    // Show visual confirmation on the button for 2 seconds
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 2000);
  };

  return (
    <main className="w-full bg-background dark:bg-[#080808] text-foreground dark:text-white selection:bg-[#C9A84C] selection:text-black overflow-x-hidden">
      <Header />

      {/* 1. ANIMATED HERO SECTION (AUTO-SCROLL / CROSSFADE) */}
      <section className="relative w-full h-[75vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === heroIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover object-center transition-transform duration-[5500ms] ease-out ${
                index === heroIndex ? "scale-105" : "scale-100"
              }`}
            />
            {/* Ambient Shadow Gradients */}
            <div className="absolute inset-0 bg-[#080808]/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/40 via-transparent to-transparent" />
          </div>
        ))}

        {/* Floating Content Element Connected to Active Slide Index */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto pt-16">
          <div className="inline-flex items-center gap-3 mb-4 justify-center">
            <div className="h-px w-8 bg-[#C9A84C]" />
            <span 
              className="text-[#C9A84C] tracking-[0.4em] uppercase text-[11px] font-medium" 
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {heroSlides[heroIndex].tag}
            </span>
            <div className="h-px w-8 bg-[#C9A84C]" />
          </div>
          
          <h1 
            className="text-white mb-6 leading-none transition-all duration-700 select-none" 
            style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
          >
            {heroSlides[heroIndex].title}
          </h1>
          
          <p 
            className="text-white/80 max-w-xl mx-auto leading-relaxed mb-8 tracking-wide font-light transition-all duration-700" 
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.95rem" }}
          >
            {heroSlides[heroIndex].desc}
          </p>

          {/* Interactive Slide Progress Dash Indicators */}
          <div className="flex justify-center gap-3 mt-4">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroIndex(i)}
                className={`h-[3px] transition-all duration-500 rounded-full ${
                  i === heroIndex ? "w-12 bg-[#C9A84C]" : "w-3 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Elegant Bottom Splitter */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent z-20" />
      </section>

      {/* 2. EDITORIAL BRAND NARRATIVE SECTION */}
      <section className="w-full bg-[#0c0c0c] border-b border-white/5 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C9A84C]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[#C9A84C] tracking-[0.25em] text-xs font-semibold uppercase mb-3 flex items-center gap-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <Sparkles size={14} /> Avant-Garde Craft
            </span>
            <h2 className="text-white mb-6" style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "1.2" }}>
              Uncompromising <br/>Artistry.
            </h2>
            <p className="text-white/60 mb-6 leading-relaxed text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Every structural silhouette added to our new arrival roster undergoes over eighty hours of expert hand-setting and complex gem selection. We combine heritage metallurgy with hyper-precise proportions.
            </p>
            <p className="text-[#C9A84C] font-serif italic text-base mb-8">
              "Luxury is not simply bought; it is inherited through design storytelling."
            </p>
            <div>
              <a href="#grid-section" className="inline-flex items-center gap-3 text-white tracking-[0.2em] text-xs uppercase group border-b border-[#C9A84C]/40 pb-2 hover:border-[#C9A84C] transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                View Masterworks <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Asymmetric Overlapping Images Frame Layout */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4 relative">
            <div className="col-span-7 overflow-hidden border border-white/10 aspect-[3/4] group">
              <img 
                src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700&q=80" 
                alt="Workshop Process" 
                className="w-full h-full object-cover transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="col-span-5 pt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent z-10 pointer-events-none" />
              <div className="overflow-hidden border border-[#C9A84C]/20 aspect-[4/5] group">
                <img 
                  src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80" 
                  alt="Fine Diamond Detail" 
                  className="w-full h-full object-cover transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE PRODUCT GRID */}
      <section id="grid-section" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24">
        {/* Custom Header Layout */}
        <div className="flex flex-col sm:flex-row justify-between items-baseline mb-16 pb-6 border-b border-white/10" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          <div>
            <span className="text-[#C9A84C] text-[11px] font-medium uppercase tracking-[0.3em] block mb-2">The Collection Lineup</span>
            <p className="text-white/60 text-xs tracking-widest uppercase">Showing {newArrivals.length} Rare Pieces</p>
          </div>
          <div className="flex gap-8 text-xs tracking-widest uppercase mt-4 sm:mt-0 font-medium">
            <button className="text-white hover:text-[#C9A84C] transition-colors pb-1 border-b border-transparent hover:border-[#C9A84C]">Filter Matrix</button>
            <button className="text-white hover:text-[#C9A84C] transition-colors pb-1 border-b border-transparent hover:border-[#C9A84C]">Sort Sequence</button>
          </div>
        </div>

        {/* Unique Luxury Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
          {newArrivals.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer flex flex-col relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Unique Structural Outline Border Frame */}
              <div className="absolute -inset-3 border border-transparent group-hover:border-[#C9A84C]/15 transition-all duration-500 pointer-events-none z-0" />

              {/* Image Container with Dynamic Multi-Angle Frame Shift */}
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-[#121212] border border-white/5 z-10">
                {product.tag && (
                  <span 
                    className="absolute top-4 left-4 z-20 bg-[#C9A84C] text-black text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 font-bold shadow-md" 
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {product.tag}
                  </span>
                )}
                
                {/* Heart / Wishlist Toggle */}
                <button className="absolute top-4 right-4 z-20 text-white/40 hover:text-[#C9A84C] transform hover:scale-110 transition-all">
                  <Heart size={18} className={hoveredProduct === product.id ? "fill-[#C9A84C] text-[#C9A84C]" : "opacity-100 transition-opacity"} />
                </button>

                {/* Alternating Image Switcher View */}
                <div className="w-full h-full relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover absolute inset-0 transition-transform duration-1000 group-hover:scale-105 ${
                      hoveredProduct === product.id ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <img
                    src={product.altImage}
                    alt={`${product.name} Alternate View`}
                    className={`w-full h-full object-cover absolute inset-0 transition-all duration-1000 ${
                      hoveredProduct === product.id ? "opacity-100 scale-105" : "opacity-0"
                    }`}
                  />
                </div>

                {/* Fine Luxury Interactive Quick Action Tray */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex gap-2">
                  <button 
                    onClick={() => handleAcquireItem(product)}
                    disabled={addedProductId === product.id}
                    className={`flex-1 py-2.5 tracking-[0.15em] uppercase text-[10px] font-bold transition-all duration-300 ${
                      addedProductId === product.id 
                        ? "bg-[#1C1C1C] text-[#C9A84C] border border-[#C9A84C]/40 cursor-default" 
                        : "bg-[#C9A84C] text-black hover:bg-[#E8C97E]"
                    }`}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {addedProductId === product.id ? "Added to Cart ✓" : "Add to Cart"}
                  </button>
                  <button className="px-3 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-colors flex items-center justify-center" aria-label="Quick View Details">
                    <Eye size={14} />
                  </button>
                </div>
              </div>

              {/* Minimalist Symmetric Product Info Block */}
              <div className="text-center z-10 mt-2 flex-grow flex flex-col justify-between">
                <div>
                  <h3 
                    className="text-white/90 mb-1.5 transition-colors group-hover:text-[#C9A84C]" 
                    style={{ fontFamily: "'Cinzel', serif", fontSize: "1.05rem", letterSpacing: "0.02em" }}
                  >
                    {product.name}
                  </h3>
                  <div className="w-6 h-[1px] bg-white/10 mx-auto my-2 group-hover:w-16 group-hover:bg-[#C9A84C]/50 transition-all duration-500" />
                </div>
                <p className="text-[#C9A84C] font-medium tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.9rem" }}>
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button Container */}
        <div className="mt-24 flex justify-center">
          <button className="group flex items-center gap-4 px-8 py-4 border border-white/10 hover:border-[#C9A84C] transition-all duration-300 text-white tracking-[0.25em] uppercase text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <span>Reveal Subsequent Work</span>
            <ArrowRight size={14} className="transform group-hover:translate-x-1.5 transition-transform text-[#C9A84C]" />
          </button>
        </div>
      </section>

      {/* 4. CURATED TRENDS SECTION */}
      <section className="w-full bg-[#050505] border-t border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[#C9A84C] uppercase text-[10px] tracking-[0.3em] font-semibold block mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>Styling Architecture</span>
            <h2 className="text-white" style={{ fontFamily: "'Cinzel', serif", fontSize: "2.2rem" }}>Curated Combinations</h2>
            <div className="h-px w-12 bg-[#C9A84C] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dynamicTrends.map((trend, index) => (
              <div key={index} className="relative w-full h-[380px] overflow-hidden group border border-white/5">
                <img 
                  src={trend.image} 
                  alt={trend.title} 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                />
                {/* Visual Cover Shields */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-500 group-hover:opacity-95" />

                {/* Absolute Inner Content Overlay */}
                <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end items-start z-10">
                  <span className="text-[#C9A84C] text-[10px] font-semibold tracking-widest uppercase mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {trend.concept}
                  </span>
                  <h3 className="text-white text-2xl mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
                    {trend.title}
                  </h3>
                  <button className="flex items-center gap-2 text-white/70 group-hover:text-[#C9A84C] transition-colors text-xs font-semibold tracking-wider uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {trend.action} <Layers size={12} className="ml-1 text-[#C9A84C]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}