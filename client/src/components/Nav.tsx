/* ============================================================
   AEONA NAV — Living Presence Design System
   Dark, minimal, sticky. The orb logo glows.
   ============================================================ */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/aeona", label: "Who Is Aeona" },
    { href: "/about", label: "About" },
    { href: "/privacy", label: "Privacy" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(10, 10, 15, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(42, 42, 62, 0.6)" : "none",
      }}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-8 h-8 rounded-full flex-shrink-0"
            style={{
              background: "radial-gradient(circle at 35% 35%, #c4a8f0, #7c5cbf, #3d2a6e)",
              boxShadow: "0 0 16px rgba(124, 92, 191, 0.6)",
              transition: "box-shadow 0.3s ease",
            }}
          />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "1.25rem",
              color: "#f0eff8",
              letterSpacing: "-0.01em",
            }}
          >
            Aeona
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "0.8125rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: location === href ? "#a78bdb" : "#8b8a9e",
                transition: "color 0.2s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                if (location !== href) (e.target as HTMLElement).style.color = "#f0eff8";
              }}
              onMouseLeave={(e) => {
                if (location !== href) (e.target as HTMLElement).style.color = "#8b8a9e";
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#app-store"
          className="hidden md:block aeona-btn-primary"
          style={{ padding: "0.5rem 1.25rem", fontSize: "0.75rem" }}
        >
          Download
        </a>

        {/* Mobile menu — simple */}
        <div className="md:hidden flex items-center gap-4">
          {links.slice(0, 3).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "0.7rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: location === href ? "#a78bdb" : "#8b8a9e",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
