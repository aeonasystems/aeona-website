/* ============================================================
   AEONA ABOUT PAGE — Living Presence Design System
   Editorial layout — large pull quotes, wide margins
   ============================================================ */
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";

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

export default function About() {
  const { ref: r1, inView: v1 } = useInView();
  const { ref: r2, inView: v2 } = useInView();
  const { ref: r3, inView: v3 } = useInView();

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh" }}>
      <Nav />

      {/* Page Header */}
      <section style={{ paddingTop: "10rem", paddingBottom: "5rem" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <p
            className="section-label mb-6"
            style={{ opacity: 0, animation: "fade-up 0.7s ease 0.1s forwards" }}
          >
            About Aeona Systems
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
            Built to get it right.
          </h1>
        </div>
      </section>

      <div className="section-divider" />

      {/* Body */}
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
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.1rem",
                color: "#8b8a9e",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              Aeona was built because the current generation of AI assistants has a fundamental problem: they are reactive. They answer questions. They complete tasks. They forget everything the moment the conversation ends.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.1rem",
                color: "#8b8a9e",
                lineHeight: 1.8,
                marginBottom: "3rem",
              }}
            >
              Aeona was designed from first principles to be different. She is a persistent, governance-first intelligence — meaning she remembers, she learns, and she only acts within the boundaries her user explicitly sets. She is not a product built to maximize engagement. She is a system built to maximize trust.
            </p>
          </div>

          {/* Pull quote */}
          <div
            ref={r2}
            style={{
              borderLeft: "3px solid #7c5cbf",
              paddingLeft: "2rem",
              marginBottom: "3rem",
              opacity: v2 ? 1 : 0,
              transform: v2 ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "1.6rem",
                color: "#f0eff8",
                lineHeight: 1.4,
              }}
            >
              "The most important relationship in AI is not between a user and a model — it is between a family and a system that earns the right to be present in their lives over time."
            </p>
          </div>

          <div
            ref={r3}
            style={{
              opacity: v3 ? 1 : 0,
              transform: v3 ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.1rem",
                color: "#8b8a9e",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              Aeona Systems is an AI infrastructure company founded on the belief that the most important relationship in AI is not between a user and a model — it is between a family and a system that earns the right to be present in their lives over time.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.1rem",
                color: "#8b8a9e",
                lineHeight: 1.8,
              }}
            >
              The Execution Authority Control Layer (EACL) — the governance architecture at Aeona's core — is patent pending. It represents a new category of AI infrastructure: systems that can be trusted not because they are limited, but because their authority is explicitly defined and enforced at every layer.
            </p>
          </div>
        </div>
      </section>

      {/* EACL Callout */}
      <section style={{ padding: "4rem 0 8rem" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <div
            className="aeona-card p-10"
            style={{
              background: "linear-gradient(135deg, #12121a, #1a1025)",
              borderColor: "rgba(124, 92, 191, 0.3)",
            }}
          >
            <p className="section-label mb-4">Patent Pending</p>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "1.8rem",
                color: "#f0eff8",
                marginBottom: "1rem",
              }}
            >
              The Execution Authority Control Layer
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                color: "#8b8a9e",
                lineHeight: 1.7,
              }}
            >
              EACL is a new category of AI infrastructure. It makes it architecturally impossible for Aeona to act against the user's interests — not through policy, but through structure. Every action Aeona can take is defined, bounded, and auditable at the system level.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
