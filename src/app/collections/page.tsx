"use client";

import { useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ArrowRight, ChevronRight, Play } from "lucide-react";

// --- DUMMY DATA FOR COLLECTIONS ---
const collectionsData = [
  {
    id: "01",
    title: "The Noir Estate",
    subtitle: "Dark Rhodium & Black Diamonds",
    description: "A bold exploration of shadows and light. The Noir Estate challenges traditional metallurgy by pairing oxidized precious metals with hyper-brilliant black and white diamonds. A collection for the fearless.",
    image1: "/Elegant Ruby & Pearl Choker Set _ Sabyasachi Style Bridal Jewelry.jpg",
    image2: "/10836855347764467.jpg",
    linkText: "Explore Noir",
    reverse: false,
  },
  {
    id: "02",
    title: "Aethel Heritage",
    subtitle: "Vintage Cuts & Polished Gold",
    description: "Drawing inspiration from 1920s architecture, Aethel Heritage focuses on emerald and Asscher cuts. Meticulously handcrafted to revive the golden era of fine jewelry with a modern structural twist.",
    image1: "/104427285106522202.jpg",
    image2: "/Unique Vine Engagement Ring _ Delicate Rose Gold Moissanite Ring.jpg",
    linkText: "Discover Heritage",
    reverse: true,
  },
  {
    id: "03",
    title: "Lumina Core",
    subtitle: "Everyday Diamond Essentials",
    description: "Stripping away the excess to reveal the pure essence of the stone. Lumina Core features invisible settings and floating diamonds, designed to move with you from dawn until dusk seamlessly.",
    image1: "/Kalung Berlian Titanium Wanita Bahan Titanium Murni Berkualitas Tinggi, Tahan Karat dan Tidak Pudar_.jpg",
    image2: "/MOISSANITE DIAMOND.jpg",
    linkText: "Shop Essentials",
    reverse: false,
  }
];

// --- DUMMY DATA FOR "THE VAULT" MICRO-COLLECTION ---
const vaultItems = [
  {
    id: 1,
    name: "Crescent Motif Ring",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80",
  },
  {
    id: 2,
    name: "Tear-Drop Pearl Core",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80",
  },
  {
    id: 3,
    name: "Woven Gold Cuff",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80",
  }
];

export default function CollectionsPage() {
  
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
    <main className="w-full bg-background dark:bg-[#080808] text-foreground dark:text-white selection:bg-[#C9A84C] selection:text-black overflow-hidden">
      <Header />

      {/* 1. IMMERSIVE PARALLAX HERO SECTION */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center">
        {/* Fixed background to create a parallax effect */}
        <div className="absolute inset-0 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')" }}>
          <div className="absolute inset-0 bg-[#080808]/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/40 via-transparent to-[#080808]" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-6 mt-20 scroll-animate opacity-0 translate-y-16 transition-all duration-1000 ease-out">
          <span className="text-[#C9A84C] tracking-[0.4em] uppercase text-xs font-semibold mb-6 flex items-center gap-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <div className="h-[1px] w-12 bg-[#C9A84C]" />
            Curated Masterpieces
            <div className="h-[1px] w-12 bg-[#C9A84C]" />
          </span>
          <h1 className="text-white leading-[1.1] mb-6" style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(3rem, 7vw, 6rem)" }}>
            The Collections
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto font-light leading-relaxed tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1rem" }}>
            Explore our curated series of fine jewelry. Each collection is a distinct narrative, 
            woven from precious metals and exceptional stones, designed for those who command the room.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 animate-bounce">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#C9A84C]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#C9A84C] to-transparent" />
        </div>
      </section>


      {/* 2. EDITORIAL ALTERNATING COLLECTIONS LIST */}
      <section className="py-24 sm:py-32 w-full relative z-10 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-32 sm:gap-48">
          
          {collectionsData.map((collection, index) => (
            <div 
              key={collection.id} 
              className={`flex flex-col gap-12 lg:gap-20 items-center ${collection.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} scroll-animate opacity-0 translate-y-16 transition-all duration-[1200ms] ease-out delay-[100ms]`}
            >
              
              {/* Image Collage Side */}
              <div className="w-full lg:w-1/2 relative">
                {/* Main Image Container */}
                <div className="relative z-10 w-4/5 aspect-[4/5] overflow-hidden group">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                  <img 
                    src={collection.image1} 
                    alt={collection.title} 
                    className="w-full h-full object-cover transform duration-1000 group-hover:scale-105"
                  />
                </div>
                {/* Secondary Image Overlapping */}
                <div className="absolute bottom-[-10%] right-0 w-2/5 aspect-square border-4 border-[#080808] z-20 overflow-hidden shadow-2xl group">
                  <img 
                    src={collection.image2} 
                    alt={`${collection.title} detail`} 
                    className="w-full h-full object-cover transform duration-1000 group-hover:scale-110"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-10 -left-6 w-full h-full border border-white/5 pointer-events-none z-0" />
                <span className="absolute top-[-5%] left-[-5%] text-white/5 font-serif text-[8rem] font-bold pointer-events-none select-none z-0">
                  {collection.id}
                </span>
              </div>

              {/* Text Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-white/40 text-sm font-serif italic">{collection.id}</span>
                  <div className="h-[1px] w-16 bg-white/10" />
                </div>
                
                <h2 className="text-white mb-2" style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                  {collection.title}
                </h2>
                
                <h3 className="text-[#C9A84C] uppercase text-xs tracking-[0.2em] font-medium mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {collection.subtitle}
                </h3>
                
                <p className="text-white/60 mb-10 leading-relaxed font-light text-sm sm:text-base max-w-md" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {collection.description}
                </p>
                
                <div>
                  <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white overflow-hidden transition-all duration-500 hover:border-[#C9A84C]">
                    <div className="absolute inset-0 w-0 bg-[#C9A84C] transition-all duration-[400ms] ease-out group-hover:w-full z-0" />
                    <span className="relative z-10 tracking-[0.2em] uppercase text-[10px] font-semibold group-hover:text-black transition-colors duration-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {collection.linkText}
                    </span>
                  </button>
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>


      {/* 3. CINEMATIC VIDEO / STATEMENT BANNER */}
      <section className="w-full py-24 bg-[#0c0c0c] border-y border-white/5 relative overflow-hidden flex items-center justify-center min-h-[500px]">
        {/* Background Image treating as video thumbnail */}
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80" 
            alt="Craftsmanship Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#080808]/80" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl scroll-animate opacity-0 translate-y-16 transition-all duration-1000 ease-out">
          <button className="w-20 h-20 rounded-full border border-[#C9A84C] flex items-center justify-center mx-auto mb-8 group hover:bg-[#C9A84C]/10 transition-colors">
            <Play fill="#C9A84C" size={24} className="text-[#C9A84C] ml-1 transform group-hover:scale-110 transition-transform" />
          </button>
          
          <h2 className="text-white mb-6" style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            The Architecture of Luxury
          </h2>
          
          <p className="text-white/70 text-sm tracking-widest uppercase mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Watch The Atelier Film
          </p>
        </div>
      </section>


      {/* 4. THE VAULT - HIGHLIGHT MINI GRID */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 bg-[#080808]">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-6 scroll-animate opacity-0 translate-y-16 transition-all duration-1000 ease-out">
          <div>
            <h2 className="text-white mb-2" style={{ fontFamily: "'Cinzel', serif", fontSize: "2.5rem" }}>
              The Vault
            </h2>
            <p className="text-[#C9A84C] uppercase text-[10px] tracking-[0.3em]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Archival Signatures
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-white/50 hover:text-[#C9A84C] transition-colors uppercase text-[10px] tracking-[0.2em] font-semibold pb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            View Full Archives <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {vaultItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group cursor-pointer scroll-animate opacity-0 translate-y-16 transition-all duration-1000 ease-out"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-square overflow-hidden bg-[#121212] mb-6 border border-white/5">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform duration-[1500ms] ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100 transition-all"
                />
                
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                   <div className="w-full flex justify-between items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <span className="text-[#C9A84C] uppercase text-[9px] tracking-widest font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Inspect</span>
                     <ArrowRight size={16} className="text-[#C9A84C]" />
                   </div>
                </div>
              </div>
              <h3 className="text-center text-white/90 group-hover:text-[#C9A84C] transition-colors" style={{ fontFamily: "'Cinzel', serif", fontSize: "1.1rem" }}>
                {item.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center md:hidden">
          <button className="flex items-center gap-2 text-white/50 hover:text-[#C9A84C] transition-colors uppercase text-[10px] tracking-[0.2em] font-semibold pb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            View Full Archives <ChevronRight size={14} />
          </button>
        </div>

      </section>

      <Footer />
    </main>
  );
}