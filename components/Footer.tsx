"use client";

const LINKS = [
  { label: "Why Join",  href: "#why" },
  { label: "Packages",  href: "#packages" },
  { label: "Our Story", href: "#story" },
  { label: "Inquire",   href: "#order" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a]" style={{ background: "#000000" }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Brand */}
          <div>
            <p className="text-base font-bold tracking-[0.08em]" style={{ color: "#dca47d" }}>
              HEY BREW CAFE PH
            </p>
            <p className="text-xs mt-1 mb-3" style={{ color: "#444444" }}>
              A Modern Heritage Brew.
            </p>
            <div className="space-y-1.5">
              <a href="tel:09677963243" className="block text-xs transition-colors duration-200" style={{ color: "#444444" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#dca47d"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#444444"; }}>
                📞 0967 796 3243
              </a>
              <a href="mailto:heybrewcafeph@gmail.com" className="block text-xs transition-colors duration-200" style={{ color: "#444444" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#dca47d"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#444444"; }}>
                ✉️ heybrewcafeph@gmail.com
              </a>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-6">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs transition-colors duration-200"
                style={{ color: "#666666" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#666666"; }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "#333333" }}>
            © {new Date().getFullYear()} Hey Brew Cafe PH. A Modern Heritage Brew.
          </p>
          <p className="text-xs" style={{ color: "#333333" }}>
            Website by{" "}
            <a
              href="https://www.facebook.com/GenXcript"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors duration-200"
              style={{ color: "#444444" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#dca47d"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#444444"; }}
            >
              GenXcript
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
