"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiArrowRight, FiChevronDown } from "react-icons/fi"

const ease = [0.22, 1, 0.36, 1] as const

function getInitials(name: string) {
  const parts = name.split(/\s+/).filter(Boolean)
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}

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
    tags: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "REST API", "WCAG Accessibility", "Git"],
    details: [
      "Led the design system implementation ensuring full keyboard navigation and screen reader compatibility.",
      "Built automated reporting for mentorship metrics and learner progression tracking.",
      "Optimized API response times through query optimization and caching strategies.",
    ],
  },
  {
    company: "Federal Housing Corporation (FHC)",
    role: "Full-Stack Engineer",
    period: "June 2026 — Sep 2026",
    location: "Abuja, Nigeria",
    description: [
      "Architected and built the full-stack infrastructure for a nationwide Document Workflow Tracking & Reporting System (DWTRS), delivering a high-performance React/TypeScript frontend and an enterprise Node.js micro-architecture handling complex multi-tiered operational hierarchies.",
      "Engineered a zero-trust authentication engine and granular Role-Based Access Control (RBAC) framework with automated, tamper-proof audit logging to safeguard sensitive public-sector documents and operational workflows.",
      "Designed scalable PostgreSQL schema with Prisma ORM and built real-time, responsive executive dashboards, multi-round state-machine routing, and an external zero-leak public case tracking system.",
    ],
    tags: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "REST API", "RBAC", "Git"],
    details: [
      "Implemented multi-round state-machine routing for complex document approval workflows across departments.",
      "Created tamper-proof audit trails with cryptographic hashing for compliance requirements.",
      "Developed zero-leak public tracking portal with encrypted case references and rate limiting.",
    ],
  },
]

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section className="tech-section" aria-labelledby="experience-heading" style={{ marginTop: "clamp(80px, 14vw, 160px)" }}>
      <motion.header
        className="tech-head"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease }}
      >
        <p className="tech-kicker">Work Experience</p>
        <h2 id="experience-heading">Experience</h2>
        <p>Building scalable systems and shipping robust web applications</p>
      </motion.header>

      <div
        style={{
          position: "relative",
          marginTop: "clamp(56px, 10vw, 88px)",
          maxWidth: "1140px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          className="timeline-line"
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "2px",
            transform: "translateX(-50%)",
            background: "linear-gradient(to bottom, rgba(201, 168, 106, 0.9) 0%, rgba(201, 168, 106, 0.5) 40%, rgba(201, 168, 106, 0.25) 100%)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(56px, 10vw, 80px)", position: "relative", zIndex: 1 }}>
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0
            const isExpanded = expanded === index

            return (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] as const }}
                style={{
                  position: "relative",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "clamp(24px, 6vw, 60px)",
                  alignItems: "start",
                }}
                className="timeline-item"
              >
                <div style={{ justifySelf: isLeft ? "end" : "start", gridColumn: isLeft ? "1" : "2" }}>
                  <motion.div
                    className="glass-card"
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 260, damping: 24 }}
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      width: "100%",
                      maxWidth: "480px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "radial-gradient(120% 120% at 90% 0%, rgba(201, 168, 106, 0.14), transparent 60%)",
                        pointerEvents: "none",
                      }}
                    />

                    <div style={{ position: "relative", zIndex: 1, padding: "clamp(24px, 3.6vw, 34px)", display: "flex", flexDirection: "column", gap: "18px" }}>
                      <header style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                        <div
                          style={{
                            width: "52px",
                            height: "52px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "radial-gradient(circle, rgba(233, 214, 168, 0.9) 0%, var(--gold) 100%)",
                            color: "var(--ink)",
                            fontFamily: "var(--display)",
                            fontWeight: 700,
                            fontSize: "16px",
                            letterSpacing: "0.08em",
                            flexShrink: 0,
                            boxShadow: "0 12px 40px rgba(201, 168, 106, 0.25)",
                          }}
                        >
                          {getInitials(exp.company)}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "10px", marginBottom: "6px" }}>
                            <h3
                              style={{
                                margin: 0,
                                fontFamily: "var(--display)",
                                fontSize: "clamp(22px, 2.6vw, 28px)",
                                fontWeight: 600,
                                letterSpacing: "-0.03em",
                                color: "var(--paper)",
                              }}
                            >
                              {exp.company}
                            </h3>
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                padding: "6px 12px",
                                borderRadius: "99px",
                                background: "rgba(201, 168, 106, 0.18)",
                                border: "1px solid rgba(201, 168, 106, 0.5)",
                                color: "var(--gold-bright)",
                                fontSize: "11px",
                                fontWeight: 700,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {exp.period}
                            </span>
                          </div>
                          <p style={{ margin: 0, fontSize: "15px", color: "rgba(247, 241, 227, 0.78)", fontWeight: 600 }}>
                            {exp.role}
                          </p>
                          {exp.location && (
                            <p style={{ margin: "4px 0 0", fontSize: "13px", color: "rgba(247, 241, 227, 0.52)" }}>
                              {exp.location}
                            </p>
                          )}
                        </div>
                      </header>

                      <ul
                        style={{
                          margin: 0,
                          padding: 0,
                          listStyle: "none",
                          display: "flex",
                          flexDirection: "column",
                          gap: "12px",
                        }}
                      >
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            style={{
                              display: "flex",
                              gap: "12px",
                              fontSize: "14px",
                              lineHeight: 1.8,
                              color: "rgba(247, 241, 227, 0.8)",
                            }}
                          >
                            <span style={{ color: "var(--gold)", marginTop: "2px", flexShrink: 0 }}>▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              padding: "6px 12px",
                              borderRadius: "99px",
                              fontSize: "11px",
                              fontWeight: 600,
                              background: "rgba(247, 241, 227, 0.06)",
                              border: "1px solid rgba(247, 241, 227, 0.16)",
                              color: "rgba(247, 241, 227, 0.9)",
                              letterSpacing: "0.02em",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div style={{ borderTop: "1px solid rgba(247, 241, 227, 0.1)", paddingTop: "16px" }}>
                        <button
                          type="button"
                          onClick={() => setExpanded(isExpanded ? null : index)}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "0",
                            background: "transparent",
                            border: "none",
                            color: "var(--gold)",
                            fontSize: "14px",
                            fontWeight: 600,
                            cursor: "pointer",
                            fontFamily: "var(--body)",
                            letterSpacing: "0.02em",
                          }}
                        >
                          View Details
                          <motion.span
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                            style={{ display: "flex" }}
                          >
                            <FiChevronDown size={16} />
                          </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isExpanded && exp.details && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease }}
                              style={{ overflow: "hidden" }}
                            >
                              <ul
                                style={{
                                  margin: "16px 0 0",
                                  padding: 0,
                                  listStyle: "none",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "10px",
                                }}
                              >
                                {exp.details.map((detail, i) => (
                                  <li
                                    key={i}
                                    style={{
                                      display: "flex",
                                      gap: "10px",
                                      fontSize: "13px",
                                      lineHeight: 1.8,
                                      color: "rgba(247, 241, 227, 0.72)",
                                    }}
                                  >
                                    <span style={{ color: "var(--gold)" }}>•</span>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: index * 0.18 + 0.25, type: "spring", stiffness: 420, damping: 26 }}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "clamp(24px, 4vw, 38px)",
                    transform: "translateX(-50%)",
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, var(--gold-bright) 0%, var(--gold) 100%)",
                    boxShadow: "0 0 0 10px rgba(201, 168, 106, 0.16), 0 0 38px rgba(201, 168, 106, 0.55)",
                    zIndex: 2,
                  }}
                  className="timeline-node"
                />
              </motion.article>
            )
          })}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 920px) {
          .timeline-line {
            left: 28px !important;
            transform: none !important;
          }
          .timeline-item {
            grid-template-columns: 56px 1fr !important;
            gap: 20px !important;
          }
          .timeline-item > div:first-child {
            grid-column: 2 !important;
            justify-self: start !important;
          }
          .timeline-node {
            left: 28px !important;
            transform: translateX(-50%) !important;
          }
        }
      `}</style>
    </section>
  )
}
