"use client";

import { motion } from "framer-motion";

export default function Order() {
  return (
    <section id="order" className="py-24 border-t border-[#1a1a1a]" style={{ background: "#000000" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#19ba97" }}>
              Take The Next Step
            </p>
            <h2
              className="font-bold mb-4 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#ffffff", letterSpacing: "-0.02em" }}
            >
              Ready to brew
              <br />
              <span style={{ color: "#dca47d" }}>your success?</span>
            </h2>
            <p className="text-sm leading-relaxed mb-8 max-w-md" style={{ color: "#666666" }}>
              Fill out the inquiry form and our franchise development team will get in touch
              with you shortly to discuss availability in your preferred location.
            </p>

            {/* Open nationwide badge */}
            <div
              className="flex items-start gap-3 p-4 mb-8"
              style={{ background: "#111111", border: "1px solid #2a2a2a", borderRadius: "16px" }}
            >
              <span className="text-xl shrink-0 mt-0.5">✅</span>
              <div>
                <h4 className="text-sm font-bold mb-0.5" style={{ color: "#ffffff" }}>Open Nationwide</h4>
                <p className="text-xs leading-relaxed" style={{ color: "#666666" }}>
                  Actively expanding across all major regions in the Philippines.
                </p>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              {[
                { label: "Phone",    value: "0967 796 3243",          href: "tel:09677963243" },
                { label: "Email",    value: "heybrewcafeph@gmail.com", href: "mailto:heybrewcafeph@gmail.com" },
                { label: "Facebook", value: "Hey Brew",                href: "https://www.facebook.com/HeyBrewPH/" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <span className="text-xs w-20 shrink-0" style={{ color: "#444444", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {c.label}
                  </span>
                  <a
                    href={c.href}
                    target={c.label === "Facebook" ? "_blank" : undefined}
                    rel={c.label === "Facebook" ? "noopener noreferrer" : undefined}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#666666" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#dca47d"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#666666"; }}
                  >
                    {c.value}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — inquiry form */}
          <motion.div
            className="p-8"
            style={{ background: "#111111", border: "1px solid #2a2a2a", borderRadius: "20px", boxShadow: "rgba(0,0,0,0.02) 0 0 0 1px, rgba(0,0,0,0.08) 0 8px 24px 0" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-base font-bold mb-6" style={{ color: "#ffffff" }}>Franchise Inquiry</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs mb-1.5" style={{ color: "#666666", letterSpacing: "0.08em", textTransform: "uppercase" }}>First Name</label>
                  <input type="text" placeholder="Juan" className="w-full bg-[#000000] border border-[#2a2a2a] rounded-[30px] px-4 py-2.5 text-sm text-white placeholder-[#333] outline-none transition-all duration-200 focus:border-[#dca47d]" />
                </div>
                <div>
                  <label className="block text-xs mb-1.5" style={{ color: "#666666", letterSpacing: "0.08em", textTransform: "uppercase" }}>Last Name</label>
                  <input type="text" placeholder="Dela Cruz" className="w-full bg-[#000000] border border-[#2a2a2a] rounded-[30px] px-4 py-2.5 text-sm text-white placeholder-[#333] outline-none transition-all duration-200 focus:border-[#dca47d]" />
                </div>
              </div>
              <div>
                <label className="block text-xs mb-1.5" style={{ color: "#666666", letterSpacing: "0.08em", textTransform: "uppercase" }}>Mobile Number</label>
                <input type="tel" placeholder="+63 900 000 0000" className="w-full bg-[#000000] border border-[#2a2a2a] rounded-[30px] px-4 py-2.5 text-sm text-white placeholder-[#333] outline-none transition-all duration-200 focus:border-[#dca47d]" />
              </div>
              <div>
                <label className="block text-xs mb-1.5" style={{ color: "#666666", letterSpacing: "0.08em", textTransform: "uppercase" }}>Email Address</label>
                <input type="email" placeholder="juan@email.com" className="w-full bg-[#000000] border border-[#2a2a2a] rounded-[30px] px-4 py-2.5 text-sm text-white placeholder-[#333] outline-none transition-all duration-200 focus:border-[#dca47d]" />
              </div>
              <div>
                <label className="block text-xs mb-1.5" style={{ color: "#666666", letterSpacing: "0.08em", textTransform: "uppercase" }}>Target Location</label>
                <input type="text" placeholder="City or Province" className="w-full bg-[#000000] border border-[#2a2a2a] rounded-[30px] px-4 py-2.5 text-sm text-white placeholder-[#333] outline-none transition-all duration-200 focus:border-[#dca47d]" />
              </div>
              <div>
                <label className="block text-xs mb-1.5" style={{ color: "#666666", letterSpacing: "0.08em", textTransform: "uppercase" }}>Available Capital</label>
                <select className="w-full bg-[#000000] border border-[#2a2a2a] rounded-[30px] px-4 py-2.5 text-sm text-white outline-none transition-all duration-200 focus:border-[#dca47d] cursor-pointer appearance-none">
                  <option value="">Select a range</option>
                  <option>Below ₱500,000</option>
                  <option>₱500,000 – ₱1,000,000</option>
                  <option>₱1,000,000 – ₱2,000,000</option>
                  <option>Above ₱2,000,000</option>
                </select>
              </div>
              <motion.button
                type="submit"
                className="w-full py-3 text-sm font-semibold active:scale-[0.97]"
                style={{ background: "#dca47d", color: "#000000", borderRadius: "30px" }}
                whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(220,164,125,0.35)", transition: { duration: 0.2, ease: "easeOut" } }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#c4895f"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#dca47d"; }}
              >
                Submit Inquiry
              </motion.button>
              <p className="text-xs text-center" style={{ color: "#444444" }}>
                By submitting, you agree to our Terms of Service &amp; Privacy Policy.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
