"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LINKS = [
  { label: "Why Join",  href: "#why" },
  { label: "Packages",  href: "#packages" },
  { label: "Our Story", href: "#story" },
  { label: "Inquire",   href: "#order" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b border-[#2a2a2a]"
      style={{
        background: scrolled ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.25)",
        boxShadow: scrolled ? "0 4px_24px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div className={`max-w-7xl mx-auto px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? "py-3" : "py-6"}`}>
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/images/hb-logo-horizontal-white-nobg.png"
            alt="Hey Brew Cafe PH"
            height={56}
            width={252}
            className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-9" : "h-14"}`}
            priority
          />
        </a>

        {/* Desktop links */}
        <div className={`hidden md:flex items-center gap-10 transition-all duration-300 ${scrolled ? "text-sm" : "text-base"}`} style={{ color: "#cccccc" }}>
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="transition-colors duration-200 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="#order"
          className={`hidden md:inline-flex items-center font-semibold active:scale-[0.95] transition-all duration-300 ${scrolled ? "px-5 py-2 text-sm" : "px-7 py-3 text-base"}`}
          style={{ background: "#dca47d", color: "#000000", borderRadius: "30px" }}
          whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(220,164,125,0.35)", transition: { duration: 0.2, ease: "easeOut" } }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#c4895f"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#dca47d"; }}
        >
          Franchise Now
        </motion.a>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className="w-6 space-y-2">
            <span className={`block h-0.5 bg-current transition-all duration-200 ${open ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-200 ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#2a2a2a] px-8 py-6 space-y-5"
          style={{ background: "rgba(0,0,0,0.85)" }}>
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block text-base transition-colors duration-200"
              style={{ color: "#999999" }}
              onClick={() => setOpen(false)}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#999999"; }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#order"
            className="inline-flex px-6 py-2.5 text-base font-semibold"
            style={{ background: "#dca47d", color: "#000000", borderRadius: "30px" }}
            onClick={() => setOpen(false)}
          >
            Franchise Now
          </a>
        </div>
      )}
    </nav>
  );
}
