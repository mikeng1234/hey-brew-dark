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
      className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b border-[#7A4A2E]"
      style={{
        background: scrolled ? "rgba(36,22,16,0.6)" : "rgba(36,22,16,0.25)",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div className={`max-w-7xl mx-auto px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? "py-3" : "py-6"}`}>
        {/* Logo */}
        <a href="https://www.facebook.com/HeyBrewPH" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <Image
            src="/images/hb-logo-horizontal-white-nobg.png"
            alt="Hey Brew Cafe PH"
            height={56}
            width={252}
            className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-9" : "h-14"}`}
            priority
            onError={(e) => {
              const el = e.currentTarget as HTMLImageElement;
              el.style.display = "none";
              const fallback = el.parentElement;
              if (fallback) fallback.textContent = "HEY BREW CAFE PH";
            }}
          />
        </a>

        {/* Desktop links */}
        <div className={`hidden md:flex items-center gap-10 transition-all duration-300 ${scrolled ? "text-sm" : "text-base"}`} style={{ color: "#b08868" }}>
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8794B] rounded"
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#EAC8A8"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#b08868"; }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="#order"
          className={`hidden md:inline-flex items-center font-semibold active:scale-[0.95] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8794B] ${scrolled ? "px-5 py-2 text-sm" : "px-7 py-3 text-base"}`}
          style={{ background: "#B8794B", color: "#241610", borderRadius: "30px" }}
          whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(184,121,75,0.35)", transition: { duration: 0.2, ease: "easeOut" } }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#9e6038"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#B8794B"; }}
        >
          Franchise Now
        </motion.a>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8794B] rounded"
          style={{ color: "#EAC8A8" }}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <div className="w-6 space-y-2">
            <span className={`block h-0.5 bg-current transition-all duration-200 ${open ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-200 ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* Outside-click overlay */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setOpen(false)} />
      )}

      {/* Mobile menu */}
      {open && (
        <nav id="mobile-nav" aria-label="Mobile navigation" className="md:hidden relative z-50 border-t border-[#7A4A2E] px-8 py-6 space-y-5"
          style={{ background: "rgba(36,22,16,0.98)" }}>
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block text-base transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8794B] rounded"
              style={{ color: "#a07858" }}
              onClick={() => setOpen(false)}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#EAC8A8"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#a07858"; }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#order"
            className="inline-flex px-6 py-2.5 text-base font-semibold active:scale-[0.95] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8794B]"
            style={{ background: "#B8794B", color: "#241610", borderRadius: "30px" }}
            onClick={() => setOpen(false)}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#9e6038"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#B8794B"; }}
          >
            Franchise Now
          </a>
        </nav>
      )}
    </nav>
  );
}
