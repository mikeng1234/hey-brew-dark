"use client";

import Icon from "@mdi/react";
import { mdiPhone, mdiEmailOutline } from "@mdi/js";

const LINKS = [
  { label: "Why Join",  href: "#why" },
  { label: "Packages",  href: "#packages" },
  { label: "Our Story", href: "#story" },
  { label: "Inquire",   href: "#order" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#5a3e30]" style={{ background: "#4A2F23" }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Brand */}
          <div>
            <a href="https://www.facebook.com/HeyBrewPH" target="_blank" rel="noopener noreferrer" className="text-base font-bold tracking-[0.08em] hover:opacity-80 transition-opacity duration-200" style={{ color: "#B8947B" }}>
              HEY BREW CAFE PH
            </a>
            <p className="text-xs mt-1 mb-3" style={{ color: "#9a7060" }}>
              A Modern Heritage Brew.
            </p>
            <div className="space-y-1.5">
              <a href="tel:09677963243" className="flex items-center gap-1.5 text-xs transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8947B] rounded" style={{ color: "#9a7060" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#B8947B"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#9a7060"; }}>
                <Icon path={mdiPhone} size={0.55} aria-hidden="true" />0967 796 3243
              </a>
              <a href="mailto:heybrewcafeph@gmail.com" className="flex items-center gap-1.5 text-xs transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8947B] rounded" style={{ color: "#9a7060" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#B8947B"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#9a7060"; }}>
                <Icon path={mdiEmailOutline} size={0.55} aria-hidden="true" />heybrewcafeph@gmail.com
              </a>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-6">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8947B] rounded"
                style={{ color: "#c4a890" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFF9F2"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#a07858"; }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#5a3e30] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "#9a7060" }}>
            © {new Date().getFullYear()} Hey Brew Cafe PH. A Modern Heritage Brew.
          </p>
          <p className="text-xs" style={{ color: "#9a7060" }}>
            Website by{" "}
            <a
              href="https://www.facebook.com/GenXcript"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8947B] rounded"
              style={{ color: "#9a7060" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#B8947B"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#9a7060"; }}
            >
              GenXcript
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
