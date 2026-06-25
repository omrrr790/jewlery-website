"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform, 
  useMotionValue, 
  useSpring 
} from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Sparkles, 
  Gem, 
  ShieldCheck, 
  Award, 
  Star, 
  Clock, 
  Compass, 
  CheckCircle2,
  Sliders,
  Feather
} from "lucide-react";

// ==========================================
// DATA STRUCTURES (EXPANDED & ENHANCED)
// ==========================================

const slides = [
  {
    image: "https://images.unsplash.com/photo-1607703829739-c05b7beddf60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwZW5nYWdlbWVudCUyMHJpbmclMjBjbG9zZSUyMHVwJTIwbHV4dXJ5fGVufDF8fHx8MTc4MjM2OTE2Mnww&ixlib=rb-4.1.0&q=80&w=1440",
    tag: "The Autumn Collection",
    headline: "Timeless Elegance,",
    headline2: "Sculpted for Eternity",
    sub: "Discover our exquisite suite of handcrafted fine jewelry. Each singular piece hosts a narrative of rare luxury, meticulous gemstone calibration, and unparalleled heritage craftsmanship.",
    cta: "Explore Collection",
    metrics: { stat: "VVS1+", label: "Clarity Grade" }
  },
  {
    image: "https://images.unsplash.com/photo-1694062045776-f48d9b6de57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxicmlkYWwlMjB3ZWRkaW5nJTIwamV3ZWxyeSUyMHNldCUyMGdvbGQlMjBkaWFtb25kcyUyMGVsZWdhbnR8ZW58MXx8fHwxNzgyMzY5MTU3fDA&ixlib=rb-4.1.0&q=80&w=1440",
    tag: "The Bridal Masterworks",
    headline: "Crafted for Your",
    headline2: "Finest Milestones",
    sub: "From bespoke engagement solitaires to majestic heirloom bridal configurations — engineered exquisitely with conflict-free diamonds and hand-burnished 18-karat gold.",
    cta: "Commission Bespoke",
    metrics: { stat: "18K", label: "Pure Certified Gold" }
  },
  {
    image: "https://images.unsplash.com/photo-1569397288884-4d43d6738fbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBicmFjZWxldCUyMGx1eHVyeSUyMGpld2VscnklMjB3b21hbiUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3ODIzNjkxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1440",
    tag: "The Everyday Essentials",
    headline: "Wear Your Narrative,",
    headline2: "Unapologetically",
    sub: "Everyday modular luxury that fluidly moves alongside your lifestyle. Micro-pave diamond stackable rings, architectural links, and minimal minimalist statement pendants.",
    cta: "Acquire Essentials",
    metrics: { stat: "100%", label: "Traceable Sourcing" }
  },
  {
  image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1440",
  tag: "The Royal Sapphire Series",
  headline: "Rare Brilliance,",
  headline2: "Reserved for Royalty",
  sub: "An extraordinary collection showcasing ethically sourced sapphires, precision-cut diamonds, and masterfully sculpted settings inspired by centuries of regal artistry.",
  cta: "View Collection",
  metrics: { stat: "5.0 CT", label: "Premium Sapphire Stones" }
},
{
  image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1440",
  tag: "The Signature Timepieces",
  headline: "Precision Meets",
  headline2: "Timeless Luxury",
  sub: "Crafted for discerning collectors, our luxury watches combine Swiss engineering, precious metals, and iconic aesthetics designed to transcend generations.",
  cta: "Discover Timepieces",
  metrics: { stat: "Swiss", label: "Certified Movement" }
},
{
  image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1440",
  tag: "The Emerald Prestige",
  headline: "Nature's Finest,",
  headline2: "Refined by Masters",
  sub: "Experience the captivating beauty of rare emeralds paired with flawless diamonds, handcrafted into breathtaking statement pieces of enduring distinction.",
  cta: "Explore Prestige",
  metrics: { stat: "AAA", label: "Gemstone Quality" }
},
{
  image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1440",
  tag: "The Heritage Collection",
  headline: "Inspired by Legacy,",
  headline2: "Designed for Generations",
  sub: "A curated selection of heirloom-worthy masterpieces that blend classical design traditions with contemporary craftsmanship and exceptional detail.",
  cta: "Browse Heritage",
  metrics: { stat: "50+", label: "Years of Craftsmanship" }
},
{
  image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1440",
  tag: "The Platinum Exclusives",
  headline: "Pure Sophistication,",
  headline2: "Beyond Compare",
  sub: "Meticulously engineered in premium platinum, these exclusive creations embody strength, rarity, and refined luxury for the modern connoisseur.",
  cta: "Shop Exclusives",
  metrics: { stat: "950", label: "Platinum Purity" }
},
{
  image: "https://images.unsplash.com/photo-1588444650733-d53f6b3a1f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1440",
  tag: "The Diamond Legacy",
  headline: "Where Light Becomes",
  headline2: "Pure Artistry",
  sub: "An iconic assortment of flawlessly matched diamonds, designed to maximize brilliance through advanced cutting techniques and artisan finishing.",
  cta: "Experience Brilliance",
  metrics: { stat: "D", label: "Color Grade" }
}
];

const statistics = [
  { value: "140+", label: "Artisanal Ateliers Globally", icon: Compass },
  { value: "4.9★", label: "Client Connoisseur Rating", icon: Star },
  { value: "24k", label: "Bespoke Allocations Formed", icon: Gem },
  { value: "100%", label: "Ethical Sourcing Guarantee", icon: ShieldCheck },
];

const benefits = [
  {
    icon: Award,
    title: "Uncompromising Heritage",
    description: "Every cutting, resetting, and polishing process follows century-old European master bench jeweler guidelines, maximizing optical refraction.",
  },
  {
    icon: Sliders,
    title: "The Concierge Atelier",
    description: "Collaborate raw-sketch to final-polish with custom 3D parametric previews and live diamond selectors assigned specifically to your custom allocation.",
  },
  {
    icon: Feather,
    title: "Traceable Matrix Ecosystem",
    description: "Our pieces leverage blockchain ledgers tracking your gem's secure custody journey directly from the initial vetted structural mine site.",
  },
];

const timelineSteps = [
  { phase: "Phase I", title: "Gemological Acquisition", desc: "Our specialists source rough diamonds adhering to GIA standard parameters and stringently select the top 1% based on internal fire profiles." },
  { phase: "Phase II", title: "Parametric Design Modeling", desc: "Using hyper-precise CAD rendering, light vector equations are applied to balance weight distribution against optimal structural dispersion." },
  { phase: "Phase III", title: "Micro-Setting Construction", desc: "Master artisans microscopically place each accent pavé setting using pneumatic surgical tools under high-magnification fields." },
  { phase: "Phase IV", title: "The Sovereign Inspection", desc: "A triple-stage metallurgical certification lab verifies density, prong security, and dynamic luster before issuing secure provenance passports." },
];

const comparisons = [
  { feature: "Bespoke Micro-Pavé Calibration", luxury: "Hand-set under 40x magnification microscopes", standard: "Assembled using uniform machine casting moulds" },
  { feature: "Alloy Purity Formulation", luxury: "Proprietary high-density scratch-resistant 18K gold", standard: "Standard commercial structural gold amalgams" },
  { feature: "Provenance Assurance", luxury: "Full blockchain digital trace & certified GIA ledger", standard: "Paper invoices lacking transparent custody trails" },
  { feature: "Post-Acquisition Concierge", luxury: "Lifetime complimentary annual resetting & polishing", standard: "Limited 12-month structural warranty coverage" },
];

const testimonials = [
  {
    quote: "The custom eternity band exceeded all preconceptions of light dispersion. The level of design feedback during the CAD modeling stage rivaled a high-end architectural firm commission.",
    author: "Elena Rostova",
    role: "Collector & Fine Art Curator",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "Investing in their Traceable Matrix line provides total confidence. Knowing the exact coordinate origins of our emerald configurations matches our core principles perfectly.",
    author: "Marcus Vance",
    role: "Principal Architect, Vance Studio",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  }
];

// ==========================================
// SUB-COMPONENTS & UTILITIES
// ==========================================

function ImageWithFallback({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [error, setError] = useState(false);
  return (
    <img
      src={error ? "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000" : src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      loading="eager"
    />
  );
}

// Custom Magnetic Button Element for Luxury feel
function MagneticButton({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const { currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    mouseX.set(x * 0.35);
    mouseY.set(y * 0.35);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  return (
    <motion.button
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  );
}

// ==========================================
// MAIN COMPONENT REDESIGN
// ==========================================

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Parallax Hooks for luxury layer depth
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.5], ["0%", "25%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const goTo = useCallback(
    (index: number, dir: "next" | "prev" = "next") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setCurrent(index);
      setTimeout(() => setAnimating(false), 800);
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
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div ref={containerRef} className="relative w-full overflow-x-hidden bg-[#060607] text-white selection:bg-[#C9A84C] selection:text-black font-sans">
      
      {/* Dynamic Background Mesh Effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0 opacity-40">
        <div className="absolute top-[-10%] left-[-20%] w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(201,168,76,0.08)_0%,transparent_70%)] animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_60%)] animate-pulse" style={{ animationDuration: '18s' }} />
      </div>

      {/* ==================== 1. BRAND HERO CANVAS ==================== */}
      <section className="relative w-full h-screen min-h-[750px] overflow-hidden flex items-center justify-center">
        <motion.div style={{ y: heroY, opacity: opacityHero }} className="absolute inset-0 w-full h-full">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={current}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <ImageWithFallback
                src={slides[current].image}
                alt={slides[current].headline}
                className="w-full h-full object-cover object-center transform scale-105"
              />
              {/* Premium Multi-layered Shadow Occlusion Gradients */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#060607] via-[#060607]/60 to-transparent w-full md:w-[70%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060607] via-transparent to-[#060607]/40" />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Hero Interactive Elements Layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full h-full flex flex-col justify-center pt-20">
          <div className="max-w-3xl">
            
            {/* Animated Dynamic Badge Tag */}
            <div className="overflow-hidden mb-6">
              <motion.div
                key={slides[current].tag}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-3 backdrop-blur-md bg-white/[0.03] border border-white/10 px-4 py-2 rounded-full shadow-2xl"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C9A84C] animate-pulse" />
                <span className="text-[#C9A84C] tracking-[0.25em] uppercase text-[10px] font-semibold tracking-wider">
                  {slides[current].tag}
                </span>
              </motion.div>
            </div>

            {/* Split Text Reveal Headlines */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                key={`h1-${current}`}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="text-white font-light font-serif tracking-tight leading-[1.05]"
                style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)" }}
              >
                {slides[current].headline}
              </motion.h1>
            </div>
            
            <div className="overflow-hidden mb-6">
              <motion.h1
                key={`h2-${current}`}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="font-normal font-serif tracking-tight leading-[1.05] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C9A84C] bg-clip-text text-transparent"
                style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)" }}
              >
                {slides[current].headline2}
              </motion.h1>
            </div>

            {/* Descriptive Copy Frame */}
            <motion.p
              key={`sub-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/60 text-sm sm:text-base mb-10 max-w-xl font-light leading-relaxed tracking-wide"
            >
              {slides[current].sub}
            </motion.p>

            {/* Action Matrix Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6"
            >
              <MagneticButton 
                onClick={next}
                className="relative overflow-hidden group px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#E8C97E] text-black tracking-[0.15em] uppercase text-xs font-bold transition-all duration-300 rounded-sm shadow-[0_4px_30px_rgba(201,168,76,0.25)] hover:shadow-[0_4px_40px_rgba(201,168,76,0.45)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {slides[current].cta} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left opacity-20" />
              </MagneticButton>

              <button className="group text-white/70 hover:text-[#C9A84C] transition-colors duration-300 tracking-[0.15em] uppercase text-xs font-semibold flex items-center gap-2 py-2 border-b border-white/10 hover:border-[#C9A84C]/50">
                Arrange Consultation
                <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </motion.div>

            {/* Dynamic Embedded Stat Slider Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-14 inline-flex items-center gap-4 px-5 py-3 border border-white/[0.06] bg-black/30 backdrop-blur-md rounded-sm"
            >
              <span className="font-serif text-xl font-medium text-[#C9A84C] tracking-wide">{slides[current].metrics.stat}</span>
              <div className="h-4 w-px bg-white/20" />
              <span className="text-[11px] text-white/50 uppercase tracking-widest">{slides[current].metrics.label}</span>
            </motion.div>

          </div>
        </div>

        {/* Carousel Micro Controls Layout */}
        <div className="absolute right-6 sm:right-12 bottom-12 z-20 flex items-center gap-4">
          <button
            onClick={prev}
            className="w-11 h-11 border border-white/10 hover:border-[#C9A84C] rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md bg-white/[0.02] hover:bg-white/[0.08]"
          >
            <ChevronLeft size={16} className="text-white/80 hover:text-[#C9A84C]" />
          </button>
          
          {/* Micro Progress Bars indicators */}
          <div className="flex gap-2 px-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? "next" : "prev")}
                className="relative h-1 py-2 flex items-center group focus:outline-none"
              >
                <div className={`h-[2px] transition-all duration-500 rounded-full ${i === current ? "w-8 bg-[#C9A84C]" : "w-3 bg-white/20 group-hover:bg-white/40"}`} />
              </button>
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 border border-white/10 hover:border-[#C9A84C] rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md bg-white/[0.02] hover:bg-white/[0.08]"
          >
            <ChevronRight size={16} className="text-white/80 hover:text-[#C9A84C]" />
          </button>
        </div>

        {/* Left Side Slide Numerics Overlay */}
        <div className="absolute left-6 sm:left-12 bottom-12 z-20 hidden sm:block">
          <span className="font-serif text-sm tracking-widest font-light text-white/40">
            <span className="text-[#C9A84C] font-normal">{String(current + 1).padStart(2, "0")}</span> / {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        {/* Ambient Subtle Scroll Prompt */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none opacity-60">
          <span className="text-[9px] uppercase tracking-[0.3em] font-light text-white/40">Scroll to Explore</span>
          <motion.div 
            animate={{ y: [0, 6, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} 
            className="w-1 h-1.5 bg-[#C9A84C] rounded-full" 
          />
        </div>
      </section>

      {/* ==================== 2. TRUST / HIGHER VALUE METRICS ==================== */}
      <section className="relative z-10 border-y border-white/[0.07] bg-[#0A0A0C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {statistics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-4 group"
              >
                <div className="mb-3 p-2 bg-white/[0.02] group-hover:bg-[#C9A84C]/5 rounded-md transition-colors border border-white/[0.04]">
                  <item.icon className="w-4 h-4 text-[#C9A84C]/80" />
                </div>
                <span className="text-2xl sm:text-3xl font-serif text-white tracking-tight mb-1 font-light">
                  {item.value}
                </span>
                <span className="text-[11px] text-white/40 uppercase tracking-widest font-light max-w-[150px]">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 3. ASYMMETRICAL CURATED ARCHIVE GRID ==================== */}
      <section className="relative z-10 py-24 lg:py-32 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header Framework */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] font-semibold">The Core Pillars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-white tracking-tight leading-tight">
              Curated Collections of <br /><span className="italic text-white/60 font-normal">Sovereign Perfection</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-md font-light text-sm leading-relaxed">
            Every allocation within our active architectural portfolio represents hundreds of combined execution hours across master cutting workshops globally.
          </p>
        </div>

        {/* Advanced Asymmetric Alternating Grid Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Card Module 1 (Left Major Segment) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 group relative flex flex-col justify-between overflow-hidden bg-[#0F0F12] border border-white/[0.08] p-8 min-h-[480px] rounded-sm"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800" 
                alt="Fine diamonds close up" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F12] via-[#0F0F12]/50 to-transparent" />
            </div>

            <div className="relative z-10 self-start bg-white/[0.05] border border-white/10 px-3 py-1 rounded-sm text-[9px] uppercase tracking-widest text-[#C9A84C]">
              Signature Tier
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-2xl font-serif font-light text-white mb-2 tracking-wide">The High-Jewelry Portfolio</h3>
              <p className="text-white/50 text-xs max-w-md mb-6 leading-relaxed font-light">
                Rare investment-grade solitaires, customized hand-set drop necklaces, and red-carpet certified configurations built exclusively on demand.
              </p>
              <button className="flex items-center gap-2 text-xs uppercase text-[#C9A84C] tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                View Gallery <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Card Module 2 (Right Minor Upper Segment) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-5 group relative flex flex-col justify-between overflow-hidden bg-[#0F0F12] border border-white/[0.08] p-8 min-h-[480px] rounded-sm"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800" 
                alt="Luxury gold jewelry" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F12] via-[#0F0F12]/60 to-transparent" />
            </div>

            <div className="relative z-10 self-start bg-white/[0.05] border border-white/10 px-3 py-1 rounded-sm text-[9px] uppercase tracking-widest text-white/70">
              Prêt-à-Porter
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-2xl font-serif font-light text-white mb-2 tracking-wide">Bespoke Structural Bands</h3>
              <p className="text-white/50 text-xs mb-6 leading-relaxed font-light">
                Architectural silhouettes engineered elegantly for tactile versatility. Platinum, rose gold, and multi-faceted stone layouts.
              </p>
              <button className="flex items-center gap-2 text-xs uppercase text-[#C9A84C] tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                Aquire Ready Piece <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ==================== 4. BRAND VALUE PROP SECTION (GLASSMORPHISM) ==================== */}
      

      {/* ==================== 5. CRAFTSMANSHIP TIMELINE WORKFLOW ==================== */}
     

      {/* ==================== 6. COMPARISON MATRIX SUITE ==================== */}
      

      {/* ==================== 7. CONNOISSEUR SOCIAL PROOF / TESTIMONIALS ==================== */}
      

      {/* ==================== 8. IMMERSIVE ACQUISITION CALL TO ACTION ==================== */}
    

    </div>
  );
}