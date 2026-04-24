"use client";

import { motion } from "framer-motion";

const REASONS = [
  {
    icon: "mdi-coffee",
    category: "Artisanal Coffee",
    name: "Locally Sourced Beans",
    desc: "Expertly roasted, locally sourced beans. From bold espressos to silky lattes — crafted for the modern Filipino coffee lover.",
    tag: "Core Product",
    tagColor: "#B8794B",
  },
  {
    icon: "mdi-cup-water",
    category: "Premium Milktea",
    name: "Authentic Tea Blends",
    desc: "Authentic tea bases with rich milk and creative sinkers. Capturing the youth market and afternoon rush all day long.",
    tag: "Core Product",
    tagColor: "#B8794B",
  },
  {
    icon: "mdi-trending-up",
    category: "Business Model",
    name: "Proven ROI",
    desc: "Streamlined operations, comprehensive training, and aggressive marketing support to ensure a swift return on investment.",
    tag: "Key Advantage",
    tagColor: "#EAC8A8",
  },
  {
    icon: "mdi-handshake",
    category: "Franchisee Support",
    name: "End-to-End Support",
    desc: "From setup to grand opening — full training, branding, operational guidance, and ongoing support for your branch.",
    tag: "Included",
    tagColor: "#EAC8A8",
  },
];

export default function Menu() {
  return (
    <section id="why" className="py-24" style={{ background: "#241610" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <motion.p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: "#B8794B" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Opportunity
          </motion.p>
          <motion.h2
            className="font-bold mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#EAC8A8", letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Coffee & Milktea Mastery.
          </motion.h2>
          <motion.p
            className="text-sm max-w-lg"
            style={{ color: "#a07858" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Why choose one when you can offer both? Our dual-concept menu maximizes foot traffic
            and caters to diverse taste profiles throughout the day.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REASONS.map((item, i) => (
            <motion.div
              key={item.name}
              className="relative flex flex-col p-6 group cursor-default"
              style={{
                background: "#4C2D1F",
                border: "1px solid #7A4A2E",
                borderRadius: "16px",
              }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(184,121,75,0.6)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 1px rgba(184,121,75,0.3), 0 12px 32px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#7A4A2E";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Tag */}
              <span
                className="absolute top-4 right-4 text-xs px-3 py-1 font-semibold"
                style={{ background: `${item.tagColor}18`, color: item.tagColor, borderRadius: "30px", border: `1px solid ${item.tagColor}40` }}
              >
                {item.tag}
              </span>

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center mb-5 shrink-0"
                style={{ background: "rgba(184,121,75,0.12)" }}
              >
                <span
                  className={`mdi ${item.icon}`}
                  style={{ fontSize: "1.35rem", color: "#B8794B" }}
                  aria-hidden="true"
                />
              </div>

              <p className="text-xs mb-1" style={{ color: "#a07858", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {item.category}
              </p>
              <h3 className="text-base font-bold mb-2" style={{ color: "#EAC8A8" }}>
                {item.name}
              </h3>
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "#a07858" }}>
                {item.desc}
              </p>

              <div className="flex items-center justify-between">
                <a
                  href="#order"
                  aria-label={`Learn more about ${item.name}`}
                  className="text-xs px-4 py-2 font-semibold transition-all duration-200 active:scale-[0.92] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8794B]"
                  style={{ background: "rgba(184,121,75,0.1)", color: "#B8794B", borderRadius: "30px", border: "1px solid rgba(184,121,75,0.25)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(184,121,75,0.2)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(184,121,75,0.1)"; }}
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#order"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8794B]"
            style={{ color: "#B8794B" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#EAC8A8"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#B8794B"; }}
          >
            Inquire about franchising →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
