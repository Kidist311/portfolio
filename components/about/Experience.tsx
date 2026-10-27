"use client"

import { motion } from "framer-motion"
import { FiArrowRight } from "react-icons/fi"

const ease = [0.22, 1, 0.36, 1] as const

const experiences = [
  {
    company: "TechAble Initiatives",
    role: "Full-Stack Engineer",
    period: "Sep 2025 — March 2026",
    location: "Remote - Nigeria",
    description: [
      "Architected and deployed the full-stack web platform for TechAble Initiatives (Remote - Nigeria), empowering persons with disabilities across Africa by delivering an enterprise-grade portal for digital skills tracks, AI literacy, and mentorship matching.",
      "Engineered an end-to-end accessible web solution adhering to strict WCAG 2.1 standards, delivering an intuitive React/TypeScript frontend paired with a high-performance Node.js/Express REST API backend.",
      "Designed a robust relational database schema using PostgreSQL and Prisma ORM to seamlessly manage cross-functional workflows, including accessibility audit requests, assistive tool configurations, and learner-mentor pairing data.",
    ],
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "REST API",
      "WCAG Accessibility",
      "Git",
    ],
  },
  {
    company: "Federal Housing Corporation (FHC)",
    role: "Full-Stack Engineer",
    period: "June 2026 — Sep 2026",
    location: "",
    description: [
      "Architected and built the full-stack infrastructure for a nationwide Document Workflow Tracking & Reporting System (DWTRS), delivering a high-performance React/TypeScript frontend and an enterprise Node.js micro-architecture handling complex multi-tiered operational hierarchies.",
      "Engineered a zero-trust authentication engine and granular Role-Based Access Control (RBAC) framework with automated, tamper-proof audit logging to safeguard sensitive public-sector documents and operational workflows.",
      "Designed scalable PostgreSQL schema with Prisma ORM and built real-time, responsive executive dashboards, multi-round state-machine routing, and an external zero-leak public case tracking system.",
    ],
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "REST API",
      "RBAC",
      "Git",
    ],
    hasDetails: true,
  },
]

export default function Experience() {
  return (
    <section className="tech-section" aria-labelledby="experience-heading" style={{ marginTop: "clamp(72px, 12vw, 140px)" }}>
      <motion.header
        className="tech-head"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease }}
      >
        <p className="tech-kicker">Career Path</p>
        <h2 id="experience-heading">Experience</h2>
        <p>Building scalable systems and shipping robust web applications</p>
      </motion.header>

      <div
        style={{
          position: "relative",
          marginTop: "clamp(48px, 8vw, 72px)",
          maxWidth: "1100px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <svg
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            transform: "translateX(-50%)",
            width: "4px",
            height: "100%",
            overflow: "visible",
            display: "block",
          }}
          aria-hidden="true"
        >
          <line x1="2" y1="0" x2="2" y2="100%" stroke="url(#timeline-gradient)" strokeWidth="4" strokeLinecap="round" />
          <defs>
            <linearGradient id="timeline-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.8" />
              <stop offset="50%" stopColor="var(--gold)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        <div style={{ display: "flex", flexDirection: "column", gap: "60px", position: "relative", zIndex: 1 }}>
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, delay: index * 0.2, ease }}
              style={{
                position: "relative",
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr",
                gap: "clamp(20px, 4vw, 40px)",
                alignItems: "center",
              }}
            >
              <div style={{ justifySelf: index % 2 === 0 ? "end" : "start" }}>
                {index % 2 === 0 && (
                  <motion.div
                    className="glass-card"
                    whileHover={{ scale: 1.02, y: -6, rotate: -0.5 }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                    style={{
                      padding: "clamp(28px, 4vw, 40px)",
                      position: "relative",
                      overflow: "hidden",
                      maxWidth: "460px",
                      cursor: "default",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "-40%",
                        right: "-20%",
                        width: "180px",
                        height: "180px",
                        background: "radial-gradient(circle, rgba(201, 168, 106, 0.15), transparent 70%)",
                        pointerEvents: "none",
                      }}
                    />
                    <div style={{ position: "relative", zIndex: 1 }}>
                      <div style={{ marginBottom: "18px" }}>
                        <h3
                          style={{
                            margin: "0 0 8px",
                            fontFamily: "var(--display)",
                            fontSize: "clamp(24px, 3.2vw, 32px)",
                            fontWeight: 600,
                            color: "var(--paper)",
                            letterSpacing: "-0.03em",
                          }}
                        >
                          {exp.company}
                        </h3>
                        <p style={{ margin: "0 0 6px", fontSize: "16px", color: "var(--gold)", fontWeight: 600 }}>
                          {exp.role}
                        </p>
                        <p style={{ margin: 0, fontSize: "13px", color: "rgba(247, 241, 227, 0.6)" }}>
                          {exp.period}
                          {exp.location ? ` • ${exp.location}` : ""}
                        </p>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
                        {exp.description.slice(0, 2).map((item, i) => (
                          <p key={i} style={{ margin: 0, fontSize: "14px", lineHeight: 1.75, color: "rgba(247, 241, 227, 0.75)" }}>
                            {item}
                          </p>
                        ))}
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {exp.tags.slice(0, 6).map((tag) => (
                          <span
                            key={tag}
                            style={{
                              padding: "5px 12px",
                              borderRadius: "99px",
                              fontSize: "11px",
                              fontWeight: 600,
                              background: "rgba(247, 241, 227, 0.06)",
                              border: "1px solid rgba(247, 241, 227, 0.12)",
                              color: "rgba(247, 241, 227, 0.88)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3, type: "spring", stiffness: 400 }}
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, var(--gold-bright) 0%, var(--gold) 100%)",
                    boxShadow: "0 0 0 12px rgba(201, 168, 106, 0.12), 0 0 40px rgba(201, 168, 106, 0.6)",
                    position: "relative",
                    zIndex: 3,
                  }}
                />
              </div>

              <div style={{ justifySelf: index % 2 === 1 ? "start" : "end" }}>
                {index % 2 === 1 && (
                  <motion.div
                    className="glass-card"
                    whileHover={{ scale: 1.02, y: -6, rotate: 0.5 }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                    style={{
                      padding: "clamp(28px, 4vw, 40px)",
                      position: "relative",
                      overflow: "hidden",
                      maxWidth: "460px",
                      cursor: "default",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "-40%",
                        left: "-20%",
                        width: "180px",
                        height: "180px",
                        background: "radial-gradient(circle, rgba(201, 168, 106, 0.15), transparent 70%)",
                        pointerEvents: "none",
                      }}
                    />
                    <div style={{ position: "relative", zIndex: 1 }}>
                      <div style={{ marginBottom: "18px" }}>
                        <h3
                          style={{
                            margin: "0 0 8px",
                            fontFamily: "var(--display)",
                            fontSize: "clamp(24px, 3.2vw, 32px)",
                            fontWeight: 600,
                            color: "var(--paper)",
                            letterSpacing: "-0.03em",
                          }}
                        >
                          {exp.company}
                        </h3>
                        <p style={{ margin: "0 0 6px", fontSize: "16px", color: "var(--gold)", fontWeight: 600 }}>
                          {exp.role}
                        </p>
                        <p style={{ margin: 0, fontSize: "13px", color: "rgba(247, 241, 227, 0.6)" }}>
                          {exp.period}
                          {exp.location ? ` • ${exp.location}` : ""}
                        </p>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
                        {exp.description.slice(0, 2).map((item, i) => (
                          <p key={i} style={{ margin: 0, fontSize: "14px", lineHeight: 1.75, color: "rgba(247, 241, 227, 0.75)" }}>
                            {item}
                          </p>
                        ))}
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: exp.hasDetails ? "16px" : 0 }}>
                        {exp.tags.slice(0, 6).map((tag) => (
                          <span
                            key={tag}
                            style={{
                              padding: "5px 12px",
                              borderRadius: "99px",
                              fontSize: "11px",
                              fontWeight: 600,
                              background: "rgba(247, 241, 227, 0.06)",
                              border: "1px solid rgba(247, 241, 227, 0.12)",
                              color: "rgba(247, 241, 227, 0.88)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {exp.hasDetails && (
                        <motion.button
                          type="button"
                          whileHover={{ x: 4 }}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "0",
                            background: "transparent",
                            border: "none",
                            color: "var(--gold)",
                            fontSize: "13px",
                            fontWeight: 600,
                            cursor: "pointer",
                            fontFamily: "var(--body)",
                          }}
                        >
                          [View Details]
                          <FiArrowRight size={14} />
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
