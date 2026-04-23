"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Update this when branch count changes — last verified Apr 2026
const BRANCH_COUNT = "50+";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#000000" }}>
      {/* Hero image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hb-hero.png"
          alt="Hey Brew Cafe PH"
          fill
          className="object-cover object-center"
          priority
          quality={90}
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0"; }}
        />
        {/* Dark scrim */}
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-40 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
            style={{ color: "#19ba97" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Open for Franchise
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="font-bold leading-none mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "#ffffff", letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hey Brew{" "}
            <span style={{ color: "#dca47d" }}>Cafe PH.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            className="text-base leading-relaxed mb-4 max-w-xl"
            style={{ color: "#ffffff", fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 600 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            A Modern Heritage Brew.
          </motion.p>

          <motion.p
            className="text-base leading-relaxed mb-10 max-w-xl"
            style={{ color: "#999999", textShadow: "0 1px 12px rgba(0,0,0,0.8), 0 2px 24px rgba(0,0,0,0.6)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Combining artisanal coffee and premium milktea under one proven brand.
            A business model built for the Philippine market — now open nationwide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <motion.a
              href="#order"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold active:scale-[0.95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dca47d]"
              style={{ background: "#dca47d", color: "#000000", borderRadius: "30px" }}
              whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(220,164,125,0.35)", transition: { duration: 0.2, ease: "easeOut" } }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#c4895f"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#dca47d"; }}
            >
              Start Your Journey
            </motion.a>
            <motion.a
              href="#packages"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold active:scale-[0.95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dca47d]"
              style={{ border: "1px solid #2a2a2a", color: "#999999", borderRadius: "30px" }}
              whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.4)", transition: { duration: 0.2, ease: "easeOut" } }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#dca47d";
                el.style.color = "#dca47d";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#2a2a2a";
                el.style.color = "#999999";
              }}
            >
              View Packages
            </motion.a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="mt-20 flex flex-wrap gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          {[
            { value: "Dual",       label: "Coffee & Milktea Concept" },
            { value: BRANCH_COUNT, label: "Active Branches" },
            { value: "Nationwide", label: "Franchise Coverage" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold" style={{ color: "#dca47d" }}>{s.value}</p>
              <p className="text-xs mt-0.5" style={{ color: "#888888" }}>{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{ background: "linear-gradient(to bottom, transparent, #000000)" }} />
    </section>
  );
}
