"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "@mdi/react";
import { mdiCheckDecagram, mdiCheckCircle } from "@mdi/js";

type Status = "idle" | "submitting" | "success" | "error";

const INPUT_CLASS =
  "w-full bg-[#000000] border border-[#2a2a2a] rounded-[30px] px-4 py-2.5 text-sm text-white placeholder-[#444] outline-none transition-all duration-200 focus:border-[#dca47d]";

const LABEL_STYLE = {
  color: "#888888",
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
};

export default function Order() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // TODO: replace with real API route or Formspree endpoint
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  }

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
            <p className="text-sm leading-relaxed mb-8 max-w-md" style={{ color: "#888888" }}>
              Fill out the inquiry form and our franchise development team will get in touch
              with you shortly to discuss availability in your preferred location.
            </p>

            {/* Open nationwide badge */}
            <div
              className="flex items-start gap-3 p-4 mb-8"
              style={{ background: "#111111", border: "1px solid #2a2a2a", borderRadius: "16px" }}
            >
              <Icon path={mdiCheckDecagram} size={1} color="#dca47d" className="shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h4 className="text-sm font-bold mb-0.5" style={{ color: "#ffffff" }}>Open Nationwide</h4>
                <p className="text-xs leading-relaxed" style={{ color: "#888888" }}>
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
                  <span className="text-xs w-20 shrink-0" style={{ color: "#555555", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {c.label}
                  </span>
                  <a
                    href={c.href}
                    target={c.label === "Facebook" ? "_blank" : undefined}
                    rel={c.label === "Facebook" ? "noopener noreferrer" : undefined}
                    className="text-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dca47d] rounded"
                    style={{ color: "#888888" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#dca47d"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#888888"; }}
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

            <div aria-live="polite" aria-atomic="true">
            {/* Success state */}
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <Icon path={mdiCheckCircle} size={2.5} color="#dca47d" aria-hidden="true" />
                <h4 className="text-base font-bold" style={{ color: "#ffffff" }}>Inquiry Received!</h4>
                <p className="text-sm" style={{ color: "#888888" }}>
                  Our team will reach out to you within 1–2 business days.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-xs underline transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dca47d] rounded"
                  style={{ color: "#888888" }}
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs mb-1.5" style={LABEL_STYLE}>
                      First Name <span style={{ color: "#dca47d" }}>*</span>
                    </label>
                    <input id="firstName" name="firstName" type="text" required placeholder="Juan" className={INPUT_CLASS} />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs mb-1.5" style={LABEL_STYLE}>
                      Last Name <span style={{ color: "#dca47d" }}>*</span>
                    </label>
                    <input id="lastName" name="lastName" type="text" required placeholder="Dela Cruz" className={INPUT_CLASS} />
                  </div>
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-xs mb-1.5" style={LABEL_STYLE}>
                    Mobile Number <span style={{ color: "#dca47d" }}>*</span>
                  </label>
                  <input
                    id="mobile" name="mobile" type="tel" required
                    placeholder="+63 900 000 0000"
                    pattern="^(\+?63|0)9\d{9}$"
                    className={INPUT_CLASS}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs mb-1.5" style={LABEL_STYLE}>
                    Email Address <span style={{ color: "#dca47d" }}>*</span>
                  </label>
                  <input id="email" name="email" type="email" required placeholder="juan@email.com" className={INPUT_CLASS} />
                </div>
                <div>
                  <label htmlFor="location" className="block text-xs mb-1.5" style={LABEL_STYLE}>
                    Target Location <span style={{ color: "#dca47d" }}>*</span>
                  </label>
                  <input id="location" name="location" type="text" required placeholder="City or Province" className={INPUT_CLASS} />
                </div>
                <div>
                  <label htmlFor="capital" className="block text-xs mb-1.5" style={LABEL_STYLE}>
                    Available Capital <span style={{ color: "#dca47d" }}>*</span>
                  </label>
                  <div className="relative">
                    <select id="capital" name="capital" required className={`${INPUT_CLASS} cursor-pointer appearance-none pr-8`}>
                      <option value="">Select a range</option>
                      <option value="below_500k">Below ₱500,000</option>
                      <option value="500k_1m">₱500,000 – ₱1,000,000</option>
                      <option value="1m_2m">₱1,000,000 – ₱2,000,000</option>
                      <option value="above_2m">Above ₱2,000,000</option>
                    </select>
                    <svg
                      className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                      width="14" height="14" viewBox="0 0 24 24"
                      fill="none" stroke="#888888" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>

                {/* Error state */}
                {status === "error" && (
                  <p className="text-xs text-center" style={{ color: "#ff6b6b" }}>
                    Something went wrong. Please try again or contact us directly.
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3 text-sm font-semibold active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dca47d]"
                  style={{ background: "#dca47d", color: "#000000", borderRadius: "30px" }}
                  whileHover={status !== "submitting" ? { y: -4, boxShadow: "0 8px 24px rgba(220,164,125,0.35)", transition: { duration: 0.2, ease: "easeOut" } } : {}}
                  onMouseEnter={(e) => { if (status !== "submitting") (e.currentTarget as HTMLButtonElement).style.background = "#c4895f"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#dca47d"; }}
                >
                  {status === "submitting" ? "Sending…" : "Submit Inquiry"}
                </motion.button>

                <p className="text-xs text-center" style={{ color: "#555555" }}>
                  By submitting, you agree to our Terms of Service &amp; Privacy Policy.
                </p>
              </form>
            )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
