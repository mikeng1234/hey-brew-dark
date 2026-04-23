"use client";

import { motion } from "framer-motion";

const PACKAGES = [
  { cups: "50 Cups",  price: "₱7,000",  name: "Package 1", highlight: false },
  { cups: "100 Cups", price: "₱14,000", name: "Package 2", highlight: true  },
  { cups: "150 Cups", price: "₱21,000", name: "Package 3", highlight: false },
];

const REMINDERS = [
  "Minimum 3 flavors of your choice per booking",
  "Minimum 3 hours per event — additional ₱500 for succeeding hours",
  "50% downpayment for reservation (non-refundable). Schedule changes must be done 5 days before the event.",
];

export default function Story() {
  return (
    <section id="story" className="py-24 border-t border-[#1a1a1a]" style={{ background: "#000000" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#19ba97" }}>
              Coffee Cart Packages
            </p>
            <h2
              className="font-bold mb-6 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#ffffff", letterSpacing: "-0.02em" }}
            >
              Bring Hey Brew
              <br />
              <span style={{ color: "#dca47d" }}>to your event.</span>
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#888888" }}>
              Book our coffee cart for your next corporate event, wedding, or celebration.
              All packages include set-up, booth, and full manpower — ready to serve.
            </p>

            {/* Reminders */}
            <div className="space-y-3 mb-8">
              {REMINDERS.map((r, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#dca47d" }} />
                  <p className="text-xs leading-relaxed" style={{ color: "#888888" }}>{r}</p>
                </div>
              ))}
            </div>

            <motion.a
              href="#order"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold active:scale-[0.95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dca47d]"
              style={{ background: "#dca47d", color: "#000000", borderRadius: "30px" }}
              whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(220,164,125,0.35)", transition: { duration: 0.2, ease: "easeOut" } }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#c4895f"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#dca47d"; }}
            >
              Book a Package →
            </motion.a>
          </motion.div>

          {/* Right — package cards */}
          <div className="space-y-4" id="packages">
            {PACKAGES.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                className="flex items-center gap-4 p-5 cursor-default"
                style={{
                  background: pkg.highlight ? "rgba(220,164,125,0.08)" : "#111111",
                  border: pkg.highlight ? "1px solid rgba(220,164,125,0.3)" : "1px solid #2a2a2a",
                  borderRadius: "16px",
                }}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(220,164,125,0.5)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 1px rgba(220,164,125,0.3), 0 12px 32px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = pkg.highlight ? "rgba(220,164,125,0.3)" : "#2a2a2a";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Price badge */}
                <div
                  className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center shrink-0"
                  style={{ background: pkg.highlight ? "rgba(220,164,125,0.15)" : "rgba(220,164,125,0.06)" }}
                >
                  <span className="text-lg font-bold" style={{ color: "#dca47d" }}>{pkg.price}</span>
                  <span className="text-xs mt-0.5" style={{ color: "#888888" }}>{pkg.cups}</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-bold" style={{ color: "#ffffff" }}>{pkg.name}</h4>
                    {pkg.highlight && (
                      <span className="text-xs px-2 py-0.5 font-semibold" style={{ background: "rgba(220,164,125,0.15)", color: "#dca47d", borderRadius: "30px" }}>
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "#888888" }}>
                    3 flavors of your choice · Set-up included · Coffee booth for 3 hours · Manpower included
                  </p>
                </div>

                <a
                  href="#order"
                  className="shrink-0 text-xs px-4 py-2 font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dca47d]"
                  style={{ background: "rgba(220,164,125,0.1)", color: "#dca47d", borderRadius: "30px", border: "1px solid rgba(220,164,125,0.25)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(220,164,125,0.2)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(220,164,125,0.1)"; }}
                >
                  Book
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
