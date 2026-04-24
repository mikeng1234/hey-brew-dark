"use client";

import { motion } from "framer-motion";

const PACKAGES = [
  {
    name: "Package 1",
    price: "₱7,000",
    cups: "50 Cups",
    tagline: "Perfect for intimate gatherings.",
    features: [
      "50 cups served",
      "3 flavors of your choice",
      "Coffee booth setup included",
      "Full manpower included",
      "3-hour event coverage",
    ],
    highlight: false,
    badge: null,
    cta: "Book Package 1",
  },
  {
    name: "Package 2",
    price: "₱14,000",
    cups: "100 Cups",
    tagline: "Ideal for mid-size events & debuts.",
    features: [
      "100 cups served",
      "3 flavors of your choice",
      "Coffee booth setup included",
      "Full manpower included",
      "3-hour event coverage",
    ],
    highlight: true,
    badge: "MOST POPULAR",
    cta: "Book Package 2",
  },
  {
    name: "Package 3",
    price: "₱21,000",
    cups: "150 Cups",
    tagline: "Best for large events & full-day bookings.",
    features: [
      "150 cups served",
      "3 flavors of your choice",
      "Coffee booth setup included",
      "Full manpower included",
      "3-hour event coverage",
    ],
    highlight: false,
    badge: null,
    cta: "Book Package 3",
  },
];

const REMINDERS = [
  "Minimum 3 flavors of your choice per booking",
  "Minimum 3 hours per event — additional ₱500 for succeeding hours",
  "50% downpayment for reservation (non-refundable). Schedule changes must be done 5 days before the event.",
];

export default function Story() {
  return (
    <section id="story" className="py-24 border-t border-[#321a10]" style={{ background: "#241610" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#B8794B" }}>
              Coffee Cart Packages
            </p>
            <h2
              className="font-bold mb-6 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#EAC8A8", letterSpacing: "-0.02em" }}
            >
              Bring Hey Brew
              <br />
              <span style={{ color: "#B8794B" }}>to your event.</span>
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#a07858" }}>
              Book our coffee cart for your next corporate event, wedding, or celebration.
              All packages include set-up, booth, and full manpower — ready to serve.
            </p>

            {/* Reminders */}
            <div className="space-y-3 mb-8">
              {REMINDERS.map((r, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#B8794B" }} />
                  <p className="text-xs leading-relaxed" style={{ color: "#a07858" }}>{r}</p>
                </div>
              ))}
            </div>

            <motion.a
              href="#order"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold active:scale-[0.95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8794B]"
              style={{ background: "#B8794B", color: "#241610", borderRadius: "30px" }}
              whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(184,121,75,0.35)", transition: { duration: 0.2, ease: "easeOut" } }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#9e6038"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#B8794B"; }}
            >
              Book a Package →
            </motion.a>
          </motion.div>

          {/* Right — package cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" id="packages">
            {PACKAGES.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                className="relative flex flex-col rounded-xl p-5"
                style={{
                  background: pkg.highlight ? "rgba(184,121,75,0.1)" : "#4C2D1F",
                  border: pkg.highlight ? "1px solid rgba(184,121,75,0.4)" : "1px solid #7A4A2E",
                }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.04, transition: { duration: 0.1, ease: "easeOut" } }}
              >
                {/* Top badge */}
                {pkg.badge && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap"
                    style={{ background: "#B8794B", color: "#241610", letterSpacing: "0.05em" }}
                  >
                    {pkg.badge}
                  </div>
                )}

                {/* Package name */}
                <p
                  className="text-xs font-semibold mb-4 uppercase tracking-widest"
                  style={{ color: pkg.highlight ? "#B8794B" : "#a07858" }}
                >
                  {pkg.name}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-3xl font-bold" style={{ color: "#EAC8A8" }}>{pkg.price}</span>
                </div>

                {/* Cup count pill */}
                <div
                  className="flex items-center gap-2 mb-4 px-3 py-1.5 rounded-lg w-fit"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <span className="text-sm font-semibold" style={{ color: pkg.highlight ? "#B8794B" : "#a07858" }}>
                    {pkg.cups}
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-xs mb-4" style={{ color: "#8a6040" }}>{pkg.tagline}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <svg viewBox="0 0 24 24" fill="none" stroke={pkg.highlight ? "#B8794B" : "#7A4A2E"} strokeWidth="2" className="w-3.5 h-3.5 mt-0.5 shrink-0" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span className="text-xs" style={{ color: "#a07858" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#order"
                  className="mt-auto block text-xs py-2.5 px-4 rounded-lg font-semibold text-center transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8794B]"
                  style={
                    pkg.highlight
                      ? { background: "#B8794B", color: "#241610" }
                      : { background: "rgba(255,255,255,0.04)", color: "#a07858", border: "1px solid #7A4A2E" }
                  }
                  onMouseEnter={(e) => {
                    if (pkg.highlight) { (e.currentTarget as HTMLAnchorElement).style.background = "#9e6038"; }
                    else { (e.currentTarget as HTMLAnchorElement).style.color = "#EAC8A8"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#B8794B"; }
                  }}
                  onMouseLeave={(e) => {
                    if (pkg.highlight) { (e.currentTarget as HTMLAnchorElement).style.background = "#B8794B"; }
                    else { (e.currentTarget as HTMLAnchorElement).style.color = "#a07858"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#7A4A2E"; }
                  }}
                >
                  {pkg.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
