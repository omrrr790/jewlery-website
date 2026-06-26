"use client";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, Lock } from "lucide-react";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, subtotal, total, itemCount } = useCart();

  return (
    <main className="w-full bg-background dark:bg-[#080808] text-foreground dark:text-white selection:bg-[#C9A84C] selection:text-black overflow-x-hidden min-h-screen flex flex-col">
      <Header />

      {/* 1. PAGE HEADER */}
      <section className="w-full pt-32 pb-16 relative border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C9A84C]/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
          <span 
            className="text-[#C9A84C] tracking-[0.4em] uppercase text-[10px] font-medium block mb-4" 
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Your Selection
          </span>
          <h1 
            className="text-white leading-none mb-4" 
            style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            The Shopping Bag
          </h1>
          <p 
            className="text-white/60 text-xs tracking-widest uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {itemCount} {itemCount === 1 ? 'Masterwork' : 'Masterworks'} Secured
          </p>
        </div>
      </section>

      {/* 2. CART CONTENT */}
      <section className="w-full flex-grow py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Items */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {cartItems.length === 0 ? (
              <div className="text-center py-24 border border-white/5 bg-[#0c0c0c]">
                <p className="text-white/60 mb-6 font-serif italic">Your bag is currently empty.</p>
                <a href="/new-arrivals" className="inline-flex items-center gap-3 px-8 py-4 border border-[#C9A84C] text-[#C9A84C] tracking-[0.2em] text-xs uppercase hover:bg-[#C9A84C] hover:text-black transition-all duration-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Discover New Arrivals <ArrowRight size={14} />
                </a>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="group flex flex-col sm:flex-row gap-6 p-4 border border-white/5 bg-[#0c0c0c] relative overflow-hidden transition-colors hover:border-white/10">
                  {/* Item Image */}
                  <div className="w-full sm:w-40 aspect-[4/5] overflow-hidden bg-[#121212] flex-shrink-0">
                    <img 
                      src={item.images[0]} 
                      alt={item.name} 
                      className="w-full h-full object-cover transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex flex-col justify-between flex-grow py-2">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="text-white text-lg mb-1" style={{ fontFamily: "'Cinzel', serif" }}>
                          {item.name}
                        </h3>
                        <p className="text-white/50 text-xs tracking-wider uppercase mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          {/* Fallback to category for variant text */}
                          {item.category}
                        </p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-white/30 hover:text-red-400 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="flex justify-between items-end mt-6">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-white/20">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-3 py-2 text-white/60 hover:text-white transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span 
                          className="px-4 py-2 text-sm font-medium text-white min-w-[3rem] text-center"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-3 py-2 text-white/60 hover:text-white transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-[#C9A84C] font-medium tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          ${(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right Column: Order Summary */}
          {cartItems.length > 0 && (
            <div className="lg:col-span-4">
              <div className="sticky top-32 p-8 border border-white/5 bg-[#050505] shadow-2xl">
                <h3 className="text-white text-xl mb-6 pb-4 border-b border-white/10" style={{ fontFamily: "'Cinzel', serif" }}>
                  Order Summary
                </h3>

                <div className="space-y-4 mb-8" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.85rem" }}>
                  <div className="flex justify-between text-white/80">
                    <span className="tracking-widest uppercase text-xs">Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span className="tracking-widest uppercase text-xs">Shipping</span>
                    <span className="text-[#C9A84C] italic text-xs tracking-wider">Complimentary</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span className="tracking-widest uppercase text-xs">Taxes</span>
                    <span className="text-white/40 text-xs italic">Calculated at checkout</span>
                  </div>
                </div>

                <div className="flex justify-between items-end mb-8 pt-6 border-t border-white/10">
                  <span className="text-white tracking-[0.2em] uppercase text-sm font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Total
                  </span>
                  <span className="text-[#C9A84C] text-2xl" style={{ fontFamily: "'Cinzel', serif" }}>
                    ${total.toLocaleString()}
                  </span>
                </div>

                <button 
                  className="w-full py-4 bg-[#C9A84C] text-black tracking-[0.2em] uppercase text-[11px] font-bold hover:bg-[#E8C97E] transition-colors flex items-center justify-center gap-3 mb-6"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <Lock size={14} /> Proceed to Checkout
                </button>

                <div className="flex items-start gap-3 text-white/40">
                  <ShieldCheck size={24} className="flex-shrink-0 text-[#C9A84C]/60" />
                  <p className="text-[10px] leading-relaxed tracking-wider uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    All transactions are secure and encrypted. Complimentary worldwide shipping and returns on all masterworks.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}