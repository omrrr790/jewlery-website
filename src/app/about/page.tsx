"use client";

import { useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ArrowRight, Diamond, ShieldCheck, Award } from "lucide-react";

// --- DUMMY DATA FOR CORE VALUES ---
const coreValues = [
  {
    id: "01",
    icon: <Diamond size={28} strokeWidth={1.5} />,
    title: "Exceptional Clarity",
    description: "We source only the top 1% of the world's most brilliant gemstones, ensuring every piece possesses an unparalleled inner fire."
  },
  {
    id: "02",
    icon: <Award size={28} strokeWidth={1.5} />,
    title: "Master Metallurgy",
    description: "Our artisans employ centuries-old techniques blended with modern precision to sculpt architectural forms that last generations."
  },
  {
    id: "03",
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    title: "Ethical Provenance",
    description: "Every stone is meticulously tracked from mine to atelier, guaranteeing a conflict-free and environmentally conscious legacy."
  }
];

export default function AboutPage() {
  
  // Intersection Observer for Scroll Animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-16");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-full bg-[#080808] text-white selection:bg-[#C9A84C] selection:text-black overflow-hidden">
      <Header />

      {/* 1. EDITORIAL SPLIT-SCREEN HERO */}
      <section className="relative w-full min-h-[85vh] flex flex-col md:flex-row bg-[#080808]">
        
        {/* Left: Content Column */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-8 sm:px-16 lg:px-24 py-16 md:py-0">
          <div className="max-w-lg space-y-8 scroll-animate opacity-0 translate-y-16 transition-all duration-1000 ease-out">
            <span className="text-[#C9A84C] tracking-[0.4em] uppercase text-[10px] font-semibold flex items-center gap-4">
              <div className="h-[1px] w-8 bg-[#C9A84C]" />
              The Maison
            </span>
            
            <h1 className="text-white leading-[1.1]" style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(3rem, 6vw, 5rem)" }}>
              Our Legacy
            </h1>
            
            <p className="text-white/70 font-light leading-relaxed tracking-wide text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Born from a devotion to structural beauty and raw elemental power. We do not just create jewelry; we architect modern heirlooms for those who define their own eras.
            </p>

            <button className="text-[#C9A84C] border border-[#C9A84C] px-8 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-[#C9A84C] hover:text-black transition-all duration-500">
              Discover Our Story
            </button>
          </div>
        </div>

        {/* Right: Editorial Image Column */}
        <div className="w-full md:w-1/2 relative overflow-hidden h-[45vh] md:h-auto md:min-h-[85vh]">
          <div className="absolute inset-0 bg-[#080808]/20 z-10" /> 
          <img 
            src="/104427285106522202.jpg" 
            alt="Luxury Atelier" 
            className="w-full h-full object-cover grayscale-[20%] transition-transform duration-[3000ms] hover:scale-105"
          />
        </div>
      </section>

      {/* 2. THE VISION / ASYMMETRIC STORYTELLING */}
      <section className="w-full py-24 sm:py-32 relative z-10 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Text Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center scroll-animate opacity-0 translate-y-16 transition-all duration-[1200ms] ease-out">
            <span className="text-[#C9A84C] tracking-[0.25em] text-xs font-semibold uppercase mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Our Philosophy
            </span>
            <h2 className="text-white mb-8 leading-tight" style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>
              Redefining <br className="hidden lg:block"/> True Luxury.
            </h2>
            <div className="space-y-6 text-white/60 font-light text-sm leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <p>
                True luxury is silent, yet unmistakable. It is felt in the weight of solid gold, seen in the absolute precision of a bezel setting, and known by the uncompromising standards held by the hands that forged it.
              </p>
              <p>
                Established by master jewelers, our atelier bridges the gap between historical opulence and minimalist modernity. Every line, every curve, and every facet is an intentional design choice aimed at enhancing the natural brilliance of the stone.
              </p>
            </div>
            
            <div className="mt-10">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Signature_of_John_Hancock.svg/1200px-Signature_of_John_Hancock.svg.png" 
                alt="Founder Signature" 
                className="h-12 opacity-40 invert filter"
              />
              <span className="text-white/40 text-[10px] tracking-widest uppercase mt-4 block" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Founder & Creative Director
              </span>
            </div>
          </div>

          {/* Staggered Image Grid */}
          <div className="lg:col-span-7 relative h-[450px] sm:h-[550px] md:h-[600px] scroll-animate opacity-0 translate-y-16 transition-all duration-[1200ms] ease-out delay-[200ms]">
            <div className="absolute top-0 right-0 w-[80%] h-[75%] border border-white/10 bg-[#0c0c0c] overflow-hidden group">
              <img 
                src="/Golden Blossom Bridal Jewelry Set.jpg" 
                alt="Jewelry Design" 
                className="w-full h-full object-cover transform duration-[2000ms] group-hover:scale-105 opacity-80"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[55%] h-[60%] border-4 border-[#080808] overflow-hidden shadow-2xl group z-10">
              <img 
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80" 
                alt="Jewelry Details" 
                className="w-full h-full object-cover transform duration-[2000ms] group-hover:scale-110"
              />
            </div>
            {/* Minimalist Accent Boxes */}
            <div className="absolute top-[10%] left-[5%] w-20 h-20 border-t border-l border-[#C9A84C]/50 z-20 pointer-events-none" />
            <div className="absolute bottom-[10%] right-0 lg:right-[-5%] w-20 h-20 border-b border-r border-[#C9A84C]/50 z-20 pointer-events-none" />
          </div>
        </div>
      </section>


      {/* 3. CORE VALUES / PILLARS */}
      <section className="w-full py-24 bg-[#0c0c0c] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-20 scroll-animate opacity-0 translate-y-16 transition-all duration-1000 ease-out">
            <h2 className="text-white mb-6" style={{ fontFamily: "'Cinzel', serif", fontSize: "2.5rem" }}>
              The Three Pillars
            </h2>
            <div className="h-px w-16 bg-[#C9A84C] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {coreValues.map((value, index) => (
              <div 
                key={value.id} 
                className="flex flex-col items-center text-center group scroll-animate opacity-0 translate-y-16 transition-all duration-[1000ms] ease-out"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 mb-8 rounded-full border border-white/10 flex items-center justify-center text-[#C9A84C] group-hover:border-[#C9A84C] group-hover:bg-[#C9A84C]/5 transition-all duration-500">
                  {value.icon}
                </div>
                <h3 className="text-white text-xl mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 4. THE ATELIER / EDITORIAL SHOWCASE */}
      <section className="w-full py-32 relative overflow-hidden bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          
          <div className="relative w-full min-h-[480px] sm:min-h-[400px] md:min-h-0 md:aspect-[21/9] overflow-hidden group scroll-animate opacity-0 translate-y-16 transition-all duration-1000 ease-out">
            <img 
              src="/Golden Blossom Pendant Necklace.jpg" 
              alt="Inside the Atelier" 
              className="w-full h-full object-cover transform duration-[3000ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/95 via-black/70 md:via-black/40 to-black/30 md:to-transparent" />
            
            <div className="absolute inset-0 p-6 sm:p-16 flex flex-col justify-center max-w-xl z-10">
              <span className="text-[#C9A84C] tracking-[0.3em] uppercase text-[10px] font-semibold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Behind the Curtains
              </span>
              <h2 className="text-white mb-6 leading-tight" style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Inside The Atelier
              </h2>
              <p className="text-white/80 font-light text-sm mb-8 leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Over eighty hours of rigorous handcrafting go into a single bespoke commission. Our atelier is a sanctuary where raw elements are disciplined into flawless geometry.
              </p>
              <div>
                <button className="group relative inline-flex items-center gap-4 pb-2 border-b border-[#C9A84C]/40 hover:border-[#C9A84C] transition-colors">
                  <span className="text-white tracking-[0.2em] uppercase text-[10px] font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Discover Our Process
                  </span>
                  <ArrowRight size={14} className="text-[#C9A84C] transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}