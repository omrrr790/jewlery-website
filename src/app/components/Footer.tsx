"use client";

import Image from "next/image";
import { useState } from "react";
import { Instagram, Facebook, Youtube, Send } from "lucide-react";
import logoBlack from "../../imports/WhatsApp_Image_2026-06-25_at_11.10.11_AM.jpeg";
import logoWhite from "../../imports/logo.png";

const footerLinks = {
  "Customer Service": ["Contact Us", "Track My Order", "FAQs", "Returns & Exchanges", "Size Guide"],
  Collections: ["New Arrivals", "Bridal Collection", "Everyday Staples", "Men's Jewelry", "Limited Editions"],
  "About Us": ["Our Story", "Craftsmanship", "Sustainability", "Press & Media", "Careers"],
};

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

// Pinterest SVG icon since lucide doesn't have it
function PinterestIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-background dark:bg-[#050505] border-t border-[#C9A84C]/15">
      {/* Newsletter Banner */}
      <div className="bg-[#C9A84C]/5 border-b border-[#C9A84C]/10 py-16 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-4 mb-3">
              <div className="h-px w-10 bg-[#C9A84C]/50" />
              <span
                className="text-[#C9A84C] tracking-[0.3em] uppercase text-xs"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Stay in the Loop
              </span>
            </div>
            <h3
              className="text-foreground dark:text-white"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontWeight: 400,
              }}
            >
              Subscribe & Get 10% Off
            </h3>
            <p
              className="text-foreground/40 dark:text-white/40 mt-2 text-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Exclusive offers, new arrivals, and jewelry care tips — delivered to your inbox.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="w-full lg:w-auto lg:min-w-[420px]">
            {subscribed ? (
              <div className="flex items-center gap-3 bg-[#C9A84C]/10 border border-[#C9A84C]/30 px-6 py-4">
                <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
                <p
                  className="text-[#C9A84C] text-sm"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Thank you for subscribing! Check your inbox for your discount code.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 bg-white dark:bg-[#111111] border border-[#C9A84C]/20 border-r-0 text-foreground dark:text-white placeholder-black/25 dark:placeholder-white/25 px-5 py-4 text-sm outline-none focus:border-[#C9A84C]/50 transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
                <button
                  type="submit"
                  className="bg-[#C9A84C] text-black px-6 py-4 flex items-center gap-2 hover:bg-[#E8C97E] transition-colors duration-300 text-xs tracking-widest uppercase font-semibold whitespace-nowrap"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <Send size={14} />
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Image src={logoWhite} alt="Elegance by Rimsha" className="w-20 h-20 object-contain mb-6" />
            <p
              className="text-foreground/40 dark:text-white/40 leading-relaxed text-sm max-w-xs mb-8"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Handcrafted fine jewelry for the woman who knows her worth. Every piece is made with
              the finest materials and meticulous attention to detail.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 border border-[#C9A84C]/20 flex items-center justify-center text-foreground/40 dark:text-white/40 hover:text-[#C9A84C] hover:border-[#C9A84C]/60 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
              <a
                href="#"
                aria-label="Pinterest"
                className="w-10 h-10 border border-[#C9A84C]/20 flex items-center justify-center text-foreground/40 dark:text-white/40 hover:text-[#C9A84C] hover:border-[#C9A84C]/60 transition-all duration-300"
              >
                <PinterestIcon />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="text-foreground dark:text-white mb-6 tracking-widest uppercase text-xs"
                style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.2em" }}
              >
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-foreground/35 dark:text-white/35 hover:text-[#C9A84C] transition-colors duration-300 text-sm"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#C9A84C]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-foreground/25 dark:text-white/25 text-xs text-center"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            © 2026 Elegance by Rimsha. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-foreground/25 dark:text-white/25 hover:text-[#C9A84C]/70 transition-colors duration-300 text-xs"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Payment methods */}
          <div className="flex items-center gap-2 opacity-40">
            {["VISA", "MC", "AMEX", "PayPal"].map((method) => (
              <span
                key={method}
                className="border border-black/20 dark:border-white/20 px-2 py-0.5 text-foreground dark:text-white text-[9px] tracking-wider"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
