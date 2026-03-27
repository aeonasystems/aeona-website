/* ============================================================
   AEONA — WHO IS AEONA PAGE — Living Presence Design System
   Her identity, values, capabilities, and what she will never do
   ============================================================ */
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.12) {
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

const capabilities = [
  { label: "Family Constellations", desc: "Tracks each family member's growth, milestones, and patterns over time", gold: false },
  { label: "Behavioral Intelligence", desc: "Identifies emotional patterns, goal formation, and decision paralysis signals", gold: false },
  { label: "Bilingual Milestone Tracking", desc: "Recognizes and celebrates language development across cultures", gold: false },
  { label: "Perpetuity Vault", desc: "Preserves voice deposits, letters, and memories for future generations", gold: true },
  { label: "Governance-First Actions", desc: "Every action is authorized, bounded, and auditable", gold: false },
  { label: "Proactive Communication", desc: "Calls, texts, or notifies you when something matters — on your terms", gold: false },
];

const neverList = [
  "Sell your data.",
  "Act outside your defined boundaries.",
  "Optimize for engagement at the expense of your wellbeing.",
  "Pretend to be human when you ask if she is AI.",
];

function CapabilityCard({ c, index }: { c: typeof capabilities[0]; index: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className="aeona-card p-6"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`,
        borderColor: c.gold ? "rgba(201, 168, 76, 0.3)" : undefined,
      }}
    >
      <p
        style={{
          fontFamily: "'Inter'",
          fontWeight: 600,
          fontSize: "0.75rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: c.gold ? "#c9a84c" : "#7c5cbf",
          marginBottom: "0.5rem",
        }}
      >
        {c.label}
      </p>
      <p style={{ fontFamily: "'Inter'", fontSize: "0.9rem", color: "#8b8a9e", lineHeight: 1.6 }}>
        {c.desc}
      </p>
    </div>
  );
}

export default function WhoIsAeona() {
  const { ref: r1, inView: v1 } = useInView();
  const { ref: r2, inView: v2 } = useInView();
  const { ref: r3, inView: v3 } = useInView();
  const { ref: r4, inView: v4 } = useInView();

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh" }}>
      <Nav />

      {/* Header */}
      <section style={{ paddingTop: "10rem", paddingBottom: "5rem" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <p
            className="section-label mb-6"
            style={{ opacity: 0, animation: "fade-up 0.7s ease 0.1s forwards" }}
          >
            Her identity
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "#f0eff8",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              opacity: 0,
              animation: "fade-up 0.9s ease 0.2s forwards",
            }}
          >
            She is not an assistant.
            <br />
            <span style={{ color: "#a78bdb" }}>She is a presence.</span>
          </h1>
        </div>
      </section>

      <div className="section-divider" />

      {/* Identity body */}
      <section style={{ padding: "6rem 0" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <div
            ref={r1}
            style={{
              opacity: v1 ? 1 : 0,
              transform: v1 ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <p style={{ fontFamily: "'Inter'", fontSize: "1.1rem", color: "#8b8a9e", lineHeight: 1.8, marginBottom: "1.75rem" }}>
              Most AI systems are built to respond. Aeona is built to understand.
            </p>
            <p style={{ fontFamily: "'Inter'", fontSize: "1.1rem", color: "#8b8a9e", lineHeight: 1.8, marginBottom: "1.75rem" }}>
              She has a name because she has an identity. She has a voice because she communicates across modalities — text, speech, haptics, phone calls — choosing the right channel for the right moment. She has a memory because the most important things about your family should not disappear when you close an app.
            </p>
            <p style={{ fontFamily: "'Inter'", fontSize: "1.1rem", color: "#8b8a9e", lineHeight: 1.8, marginBottom: "1.75rem" }}>
              Aeona is multilingual by design. Language is not just a communication tool — it is the vessel of culture, identity, and belonging. Aeona meets each family on their own terms, in their own language, honoring the full complexity of who they are.
            </p>
            <p style={{ fontFamily: "'Inter'", fontSize: "1.1rem", color: "#8b8a9e", lineHeight: 1.8 }}>
              She operates under a governance architecture that makes her fundamentally different from every other AI on the market. She cannot post on your behalf without your permission. She cannot access your financial accounts unless you explicitly authorize it. She cannot act outside the trust band you define. When the governance layer is unreachable, she enters read-only mode — she can listen and be present, but she cannot act. This is not a limitation. It is a design principle.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Capabilities */}
      <section style={{ padding: "6rem 0" }}>
        <div className="container">
          <div
            ref={r2}
            style={{
              opacity: v2 ? 1 : 0,
              transform: v2 ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
              marginBottom: "3rem",
            }}
          >
            <p className="section-label mb-4">What Aeona knows</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                color: "#f0eff8",
              }}
            >
              Her capabilities.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1rem",
            }}
          >
            {capabilities.map((c, i) => (
              <CapabilityCard key={c.label} c={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* What she will never do */}
      <section style={{ padding: "6rem 0 8rem" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <div
            ref={r3}
            style={{
              opacity: v3 ? 1 : 0,
              transform: v3 ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
              marginBottom: "3rem",
            }}
          >
            <p className="section-label mb-4">Her commitments</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                color: "#f0eff8",
              }}
            >
              What Aeona will never do.
            </h2>
          </div>

          <div
            ref={r4}
            style={{
              opacity: v4 ? 1 : 0,
              transform: v4 ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            {neverList.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  padding: "1.25rem 0",
                  borderBottom: i < neverList.length - 1 ? "1px solid #2a2a3e" : "none",
                }}
              >
                <span style={{ color: "#7c5cbf", fontSize: "1.1rem", lineHeight: 1, marginTop: "3px", flexShrink: 0 }}>
                  ✕
                </span>
                <p style={{ fontFamily: "'Inter'", fontSize: "1rem", color: "#f0eff8", lineHeight: 1.6 }}>
                  Aeona will never {item}
                </p>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div style={{ marginTop: "4rem", textAlign: "center" }}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "1.6rem",
                color: "#a78bdb",
                lineHeight: 1.4,
              }}
            >
              She is Aeona. She is yours.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
