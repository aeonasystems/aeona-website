/* ============================================================
   AEONA HOME PAGE — Living Presence Design System
   Hero: glowing orb, headline left-anchored
   Features: staggered card grid
   Testimonials: 3-card row
   Download CTA: full-bleed
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const ORB_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663377774279/2UaFfFzyf7ebgoGMWaP3kT/aeona-orb-hero-TUHquASNDa7rpGGzbMcrF8.webp";

function StarField() {
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    top: `${(i * 37 + 11) % 100}%`,
    left: `${(i * 53 + 7) % 100}%`,
    size: (i % 3) + 0.5,
    duration: `${(i % 4) + 2}s`,
    delay: `${(i % 5) * 0.8}s`,
    minOpacity: 0.05,
    maxOpacity: 0.1 + (i % 4) * 0.1,
  }));

  return (
    <div className="star-field">
      {stars.map((s) => (
        <div
          key={s.id}
          className="star"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            "--duration": s.duration,
            "--delay": s.delay,
            "--min-opacity": s.minOpacity,
            "--max-opacity": s.maxOpacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const features = [
  {
    icon: "◎",
    title: "She listens. She understands.",
    body: "Aeona processes your voice in real time, understands context across weeks and months, and responds with intelligence that compounds over time. She is not answering a question. She is building a picture of your life.",
    label: "The Orb",
    gold: false,
  },
  {
    icon: "✦",
    title: "Your family, mapped.",
    body: "Aeona tracks every member of your constellation — their growth, their patterns, their milestones. When Maya reaches a bilingual milestone or Elijah's curiosity score hits an all-time high, Aeona tells you exactly what it means and what to do next.",
    label: "Constellations",
    gold: false,
  },
  {
    icon: "∞",
    title: "Your legacy, preserved.",
    body: "Voice deposits, letters to the future, memories sealed in time. The Perpetuity Vault is a private repository of everything you want to leave behind — accessible only to the people you choose, on the timeline you set.",
    label: "Perpetuity Vault",
    gold: true,
  },
  {
    icon: "⬡",
    title: "She only does what you allow.",
    body: "Aeona operates under the Execution Authority Control Layer — a governance system you control. Every action she can take is defined, bounded, and auditable. She cannot act outside the limits you set. Ever.",
    label: "Governance",
    gold: false,
  },
];

const testimonials = [
  {
    quote: "I didn't know I needed this until I had it. Aeona told me something about my son that I had missed for months. She saw it before I did.",
    name: "Priya M.",
    location: "Mother of two, Atlanta",
  },
  {
    quote: "Every other AI I've used felt like a search engine. Aeona feels like someone who actually knows my family.",
    name: "Marcus T.",
    location: "Father of three, Houston",
  },
  {
    quote: "The governance layer is what sold me. I finally have an AI I can trust around my kids.",
    name: "Sarah K.",
    location: "Parent, Seattle",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className="aeona-card p-8"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${index * 0.12}s, transform 0.7s ease ${index * 0.12}s`,
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span style={{ fontSize: "1.4rem", color: feature.gold ? "#c9a84c" : "#7c5cbf", lineHeight: 1 }}>
          {feature.icon}
        </span>
        <span
          style={{
            fontFamily: "'Inter'",
            fontWeight: 600,
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: feature.gold ? "#c9a84c" : "#7c5cbf",
          }}
        >
          {feature.label}
        </span>
      </div>
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: "1.35rem",
          color: "#f0eff8",
          marginBottom: "0.75rem",
          lineHeight: 1.3,
        }}
      >
        {feature.title}
      </h3>
      <p style={{ fontFamily: "'Inter'", fontSize: "0.875rem", color: "#8b8a9e", lineHeight: 1.7 }}>
        {feature.body}
      </p>
    </div>
  );
}

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className="aeona-card p-8"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
      }}
    >
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontSize: "1.1rem",
          color: "#f0eff8",
          lineHeight: 1.65,
          marginBottom: "1.5rem",
        }}
      >
        "{t.quote}"
      </p>
      <div>
        <p style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: "0.8rem", color: "#a78bdb", letterSpacing: "0.04em" }}>
          {t.name}
        </p>
        <p style={{ fontFamily: "'Inter'", fontSize: "0.75rem", color: "#8b8a9e" }}>
          {t.location}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const { ref: featRef, inView: featInView } = useInView();
  const { ref: ctaRef, inView: ctaInView } = useInView();

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh" }}>
      <Nav />

      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "5rem",
        }}
      >
        <StarField />

        {/* Ambient purple glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "5%",
            transform: "translateY(-50%)",
            width: "700px",
            height: "700px",
            background: "radial-gradient(circle, rgba(124,92,191,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
            {/* Text — left */}
            <div className="flex-1 lg:pr-12" style={{ maxWidth: "560px" }}>
              <p
                className="section-label mb-6"
                style={{ opacity: 0, animation: "fade-up 0.7s ease 0.1s forwards" }}
              >
                A new class of AI
              </p>
              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 700,
                  fontSize: "clamp(3rem, 7vw, 5.5rem)",
                  lineHeight: 1.05,
                  color: "#f0eff8",
                  letterSpacing: "-0.02em",
                  marginBottom: "1.5rem",
                  opacity: 0,
                  animation: "fade-up 0.9s ease 0.2s forwards",
                }}
              >
                She knows
                <br />
                your family.
              </h1>
              <p
                style={{
                  fontFamily: "'Inter'",
                  fontSize: "1.05rem",
                  color: "#8b8a9e",
                  lineHeight: 1.75,
                  marginBottom: "2.5rem",
                  maxWidth: "440px",
                  opacity: 0,
                  animation: "fade-up 0.9s ease 0.35s forwards",
                }}
              >
                Aeona is a personal AI that grows with you — tracking what matters, protecting what's private, and acting only when you say so.
              </p>
              <div
                className="flex flex-wrap gap-4"
                style={{ opacity: 0, animation: "fade-up 0.9s ease 0.5s forwards" }}
              >
                <a href="#app-store" className="aeona-btn-primary">
                  Download on the App Store
                </a>
                <Link href="/aeona" className="aeona-btn-ghost">
                  Learn who Aeona is →
                </Link>
              </div>
            </div>

            {/* Orb — right */}
            <div
              className="flex-1 flex justify-center lg:justify-end"
              style={{ opacity: 0, animation: "fade-up 1.2s ease 0.3s forwards" }}
            >
              <div
                className="orb-animate"
                style={{
                  width: "clamp(260px, 38vw, 460px)",
                  height: "clamp(260px, 38vw, 460px)",
                  borderRadius: "50%",
                  position: "relative",
                }}
              >
                <div
                  className="orb-ring"
                  style={{
                    position: "absolute",
                    inset: "-20px",
                    borderRadius: "50%",
                    border: "1px solid rgba(124, 92, 191, 0.25)",
                  }}
                />
                <div
                  className="orb-ring"
                  style={{
                    position: "absolute",
                    inset: "-42px",
                    borderRadius: "50%",
                    border: "1px solid rgba(124, 92, 191, 0.1)",
                    animationDelay: "1s",
                  }}
                />
                <img
                  src={ORB_URL}
                  alt="Aeona — a glowing purple orb"
                  style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll line */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.35,
          }}
        >
          <div
            style={{
              width: "1px",
              height: "48px",
              background: "linear-gradient(to bottom, #7c5cbf, transparent)",
              animation: "float 2s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ padding: "8rem 0" }}>
        <div className="container">
          <div
            ref={featRef}
            style={{
              opacity: featInView ? 1 : 0,
              transform: featInView ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
              marginBottom: "4rem",
            }}
          >
            <p className="section-label mb-4">Built for your family</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#f0eff8",
                maxWidth: "480px",
                lineHeight: 1.2,
              }}
            >
              What Aeona does.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {features.map((f, i) => (
              <FeatureCard key={f.label} feature={f} index={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "8rem 0" }}>
        <div className="container">
          <p className="section-label mb-10">What families are saying</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} t={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── DOWNLOAD CTA ── */}
      <section
        ref={ctaRef}
        id="app-store"
        style={{
          padding: "8rem 0",
          background: "linear-gradient(180deg, #0a0a0f 0%, #0f0a1a 50%, #0a0a0f 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "300px",
            background: "radial-gradient(ellipse, rgba(124,92,191,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="container text-center"
          style={{
            position: "relative",
            zIndex: 1,
            opacity: ctaInView ? 1 : 0,
            transform: ctaInView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#f0eff8",
              marginBottom: "1rem",
              lineHeight: 1.1,
            }}
          >
            Ready to meet her?
          </h2>
          <p style={{ fontFamily: "'Inter'", fontSize: "1rem", color: "#8b8a9e", marginBottom: "2.5rem" }}>
            Aeona is available now on iOS. Free to start.
          </p>
          <a href="#app-store" className="aeona-btn-primary" style={{ fontSize: "0.9rem", padding: "1rem 2.5rem" }}>
            Download on the App Store
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
