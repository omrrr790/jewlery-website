"use client";

import { useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
  
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

      {/* 1. CINEMATIC HERO */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643477874-c5a8e0344d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#080808]/80" />
        </div>
        
        <div className="relative z-10 text-center px-6 scroll-animate opacity-0 translate-y-16 transition-all duration-1000 ease-out">
          <span className="text-[#C9A84C] tracking-[0.4em] uppercase text-[10px] font-semibold mb-4 block" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Reach Out
          </span>
          <h1 className="text-white leading-[1.1]" style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            Connect With The Atelier
          </h1>
        </div>
      </section>

      {/* 2. CONTACT GRID */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Form Side */}
          <div className="scroll-animate opacity-0 translate-y-16 transition-all duration-1000 ease-out">
            <h2 className="text-white mb-8" style={{ fontFamily: "'Cinzel', serif", fontSize: "2rem" }}>
              Inquire
            </h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="NAME" 
                  className="bg-transparent border-b border-white/20 py-3 text-sm tracking-widest focus:border-[#C9A84C] outline-none transition-colors placeholder:text-white/30"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
                <input 
                  type="email" 
                  placeholder="EMAIL" 
                  className="bg-transparent border-b border-white/20 py-3 text-sm tracking-widest focus:border-[#C9A84C] outline-none transition-colors placeholder:text-white/30"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
              </div>
              <input 
                type="text" 
                placeholder="SUBJECT" 
                className="w-full bg-transparent border-b border-white/20 py-3 text-sm tracking-widest focus:border-[#C9A84C] outline-none transition-colors placeholder:text-white/30"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              />
              <textarea 
                placeholder="YOUR MESSAGE" 
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-3 text-sm tracking-widest focus:border-[#C9A84C] outline-none transition-colors placeholder:text-white/30 resize-none"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              />
              <button className="inline-flex items-center gap-3 bg-white text-black px-8 py-3 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-[#C9A84C] transition-colors duration-500" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Send Inquiry <ArrowRight size={14} />
              </button>
            </form>
          </div>

          {/* Details Side */}
          <div className="space-y-12 scroll-animate opacity-0 translate-y-16 transition-all duration-1000 ease-out delay-[200ms]">
            <h2 className="text-white mb-8" style={{ fontFamily: "'Cinzel', serif", fontSize: "2rem" }}>
              Atelier Details
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <MapPin className="text-[#C9A84C] shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Address</h4>
                  <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    124 Artisan Row, Gemstone District<br/>
                    London, EC1V 2NX<br/>
                    United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <Mail className="text-[#C9A84C] shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Email</h4>
                  <p className="text-white/60 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    studio@atelier.com
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <Phone className="text-[#C9A84C] shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Direct Line</h4>
                  <p className="text-white/60 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    +44 (0) 20 7946 0123
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <Clock className="text-[#C9A84C] shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Hours</h4>
                  <p className="text-white/60 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Mon - Fri: 10am - 6pm<br/>
                    Sat - Sun: By Appointment Only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAP/LOCATION PLACEHOLDER (OPTIONAL AESTHETIC BLOCK) */}
      <section className="py-12 px-6">
        <div className="w-full h-[300px] bg-[#121212] flex items-center justify-center border border-white/5 scroll-animate opacity-0 translate-y-16 transition-all duration-1000 ease-out">
            <span className="text-white/20 tracking-[0.5em] uppercase text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Atelier Location Map Placeholder
            </span>
        </div>
      </section>

      <Footer />
    </main>
  );
}