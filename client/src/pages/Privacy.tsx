/* ============================================================
   AEONA PRIVACY POLICY PAGE — Living Presence Design System
   Required for Apple App Store submission.
   Live at: /privacy
   ============================================================ */
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Introduction",
    body: `Aeona Systems, LLC ("Aeona Systems," "we," "us," or "our") operates the Aeona mobile application (the "App"). This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your information. We take your privacy seriously. Aeona is built on a governance-first architecture — your data is yours, and we treat it that way.`,
  },
  {
    title: "Information We Collect",
    subsections: [
      {
        subtitle: "Information You Provide Directly",
        body: `When you create an account and use the App, we collect: your name, email address, and phone number (used to enable Aeona's proactive communication features, including outbound calls); family member profiles you create (names, ages, relationships); voice recordings you make within the App, including voice deposits in the Perpetuity Vault; written notes, goals, and content you create within the App; and your governance preferences and trust band settings.`,
      },
      {
        subtitle: "Information Collected Automatically",
        body: `We collect a user identifier to associate your data with your account, and product interaction data (which features you use, how often) to improve the App. We do not collect precise or coarse location data. We do not collect device identifiers. We do not collect browsing history.`,
      },
    ],
  },
  {
    title: "How We Use Your Information",
    body: `We use the information we collect solely to operate and improve the App. Specifically: to provide Aeona's core intelligence features (family constellation tracking, behavioral insights, Perpetuity Vault); to enable proactive communication features (outbound calls and notifications) that you have authorized through the governance settings; to maintain your account and authenticate your identity; and to analyze aggregate, anonymized usage patterns to improve the App.\n\nWe do not use your information for advertising. We do not sell your data to third parties. We do not use your data to train AI models without your explicit consent.`,
  },
  {
    title: "Audio Data",
    body: `Aeona processes voice input to provide her core functionality. Audio recordings are transmitted to our servers for transcription and processing. We maintain a server-side audio file tracking system with defined retention periods. Audio files are deleted on a scheduled basis after processing is complete. You may request deletion of your audio data at any time by contacting us at privacy@aeonasystems.com.`,
  },
  {
    title: "Children's Privacy",
    body: `Aeona is designed for use by adults (parents and guardians) to manage family profiles that may include information about children. We do not knowingly collect personal information directly from children under the age of 13. Family member profiles for children are created and managed by the adult account holder. If you believe we have inadvertently collected information from a child under 13 without parental consent, please contact us immediately at privacy@aeonasystems.com.`,
  },
  {
    title: "Data Retention",
    body: `We retain your personal information for as long as your account is active. You may request deletion of your account and all associated data at any time. Upon account deletion, we will delete or anonymize your personal information within 30 days, except where retention is required by law or necessary to maintain audit integrity under our governance architecture.`,
  },
  {
    title: "Your Rights",
    body: `Depending on your location, you may have the right to: access the personal information we hold about you; correct inaccurate information; request deletion of your information; object to or restrict certain processing; and data portability. To exercise any of these rights, contact us at privacy@aeonasystems.com.`,
  },
  {
    title: "Security",
    body: `We implement industry-standard security measures to protect your information, including encryption in transit and at rest, access controls, and audit logging of all data access events. Our governance architecture ensures that data access is mediated by the consent layer at all times.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. We will notify you of material changes through the App or by email. Your continued use of the App after changes are posted constitutes your acceptance of the updated policy.`,
  },
  {
    title: "Contact Us",
    body: `Aeona Systems, LLC\nprivacy@aeonasystems.com\naeona.app`,
  },
];

export default function Privacy() {
  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh" }}>
      <Nav />

      {/* Header */}
      <section style={{ paddingTop: "10rem", paddingBottom: "4rem" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <p
            className="section-label mb-6"
            style={{ opacity: 0, animation: "fade-up 0.7s ease 0.1s forwards" }}
          >
            Legal
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#f0eff8",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
              opacity: 0,
              animation: "fade-up 0.9s ease 0.2s forwards",
            }}
          >
            Privacy Policy
          </h1>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
              opacity: 0,
              animation: "fade-up 0.7s ease 0.35s forwards",
            }}
          >
            <p style={{ fontFamily: "'Inter'", fontSize: "0.85rem", color: "#8b8a9e" }}>
              <span style={{ color: "#7c5cbf", fontWeight: 600 }}>Effective Date:</span> March 26, 2026
            </p>
      <p style={{ fontFamily: "'Inter'", fontSize: "0.85rem", color: "#8b8a9e" }}>
            <span style={{ color: "#7c5cbf", fontWeight: 600 }}>Last Updated:</span> March 26, 2026
          </p>
          <p style={{ fontFamily: "'Inter'", fontSize: "0.85rem", color: "#8b8a9e", marginTop: "0.5rem" }}>
            <span style={{ color: "#7c5cbf", fontWeight: 600 }}>URL:</span> https://systems.aeona.app/privacy
          </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Policy Content */}
      <section style={{ padding: "5rem 0 8rem" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          {sections.map((section, i) => (
            <div
              key={i}
              style={{
                marginBottom: "3.5rem",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 700,
                  fontSize: "1.6rem",
                  color: "#f0eff8",
                  marginBottom: "1.25rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid #2a2a3e",
                }}
              >
                {section.title}
              </h2>

              {section.body && section.body.split("\n\n").map((para, j) => (
                <p
                  key={j}
                  style={{
                    fontFamily: "'Inter'",
                    fontSize: "0.95rem",
                    color: "#8b8a9e",
                    lineHeight: 1.8,
                    marginBottom: j < section.body!.split("\n\n").length - 1 ? "1.25rem" : 0,
                    whiteSpace: "pre-line",
                  }}
                >
                  {para}
                </p>
              ))}

              {section.subsections && section.subsections.map((sub, j) => (
                <div key={j} style={{ marginBottom: "1.5rem" }}>
                  <h3
                    style={{
                      fontFamily: "'Inter'",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#a78bdb",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {sub.subtitle}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter'",
                      fontSize: "0.95rem",
                      color: "#8b8a9e",
                      lineHeight: 1.8,
                    }}
                  >
                    {sub.body}
                  </p>
                </div>
              ))}
            </div>
          ))}

          {/* Contact callout */}
          <div
            className="aeona-card p-8"
            style={{
              background: "linear-gradient(135deg, #12121a, #1a1025)",
              borderColor: "rgba(124, 92, 191, 0.3)",
              marginTop: "2rem",
            }}
          >
            <p className="section-label mb-3">Questions about your data?</p>
            <p
              style={{
                fontFamily: "'Inter'",
                fontSize: "0.95rem",
                color: "#8b8a9e",
                lineHeight: 1.7,
                marginBottom: "1rem",
              }}
            >
              Reach us directly. We respond to all privacy inquiries within 5 business days.
            </p>
            <a
              href="mailto:privacy@aeonasystems.com"
              style={{
                fontFamily: "'Inter'",
                fontWeight: 600,
                fontSize: "0.875rem",
                color: "#a78bdb",
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#f0eff8"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#a78bdb"; }}
            >
              privacy@aeonasystems.com →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
