/* ============================================================
   AEONA FOOTER — Living Presence Design System
   ============================================================ */
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0a0a0f",
        borderTop: "1px solid #2a2a3e",
        padding: "3rem 0 2rem",
      }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <div
                className="w-6 h-6 rounded-full"
                style={{
                  background: "radial-gradient(circle at 35% 35%, #c4a8f0, #7c5cbf, #3d2a6e)",
                  boxShadow: "0 0 10px rgba(124, 92, 191, 0.5)",
                }}
              />
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#f0eff8",
                }}
              >
                Aeona
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                color: "#8b8a9e",
                letterSpacing: "0.04em",
              }}
            >
              Intelligence that grows with your family.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/aeona", label: "Who Is Aeona" },
              { href: "/privacy", label: "Privacy Policy" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#8b8a9e",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#a78bdb"; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#8b8a9e"; }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="section-divider mt-8 mb-6" />

        <p
          className="text-center"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.75rem",
            color: "#8b8a9e",
          }}
        >
          © 2026 Aeona Systems, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
