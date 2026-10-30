"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const landingNav = [
  { label: "About me", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "https://drive.google.com/file/d/1o50hMD_RcTWii_79OhJBcHlL8mrCKLoh/view?usp=sharing", target: "_blank" },
  { label: "Contact me", href: "/contact" },
]

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main>
      <section className="hero" id="top">
        <div className="landing">
          <h1 aria-label="Step inside Kidist’s digital showcase">
            <span>Step inside</span>
            <em>Kidist’s</em>
            <span>digital showcase</span>
          </h1>

          <div
            style={{
              marginTop: "clamp(48px, 8vh, 72px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "28px",
            }}
          >
            <motion.button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 32px",
                border: "1px solid rgba(201, 168, 106, 0.6)",
                borderRadius: "99px",
                background: isOpen ? "var(--gold)" : "transparent",
                color: isOpen ? "var(--ink)" : "var(--gold-bright)",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontFamily: "var(--body)",
              }}
              aria-expanded={isOpen}
              aria-controls="landing-menu"
            >
              <span aria-hidden="true">✦</span>
              {isOpen ? "Close" : "Enter"}
              <span aria-hidden="true">✦</span>
            </motion.button>

            <AnimatePresence>
              {isOpen && (
                <motion.nav
                  id="landing-menu"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: "10px",
                    width: "min(90vw, 340px)",
                  }}
                  aria-label="Main navigation"
                >
                  {landingNav.map((item, i) => {
                    const content = (
                      <>
                        <span aria-hidden="true" style={{ fontFamily: "var(--display)", fontSize: "11px", color: "var(--gold)" }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{item.label}</span>
                      </>
                    )

                    const baseStyle = {
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "9px",
                      padding: "14px 16px",
                      border: "1px solid rgba(201, 168, 106, 0.42)",
                      borderRadius: "99px",
                      background: "transparent",
                      color: "var(--gold-bright)",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "background 0.25s, color 0.25s, border-color 0.25s, transform 0.25s",
                      fontFamily: "var(--body)",
                    }

                    if ((item as any).target === "_blank") {
                      return (
                        <motion.a
                          href={item.href}
                          key={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.06, duration: 0.25 }}
                          style={baseStyle}
                          whileHover={{ background: "var(--gold)", borderColor: "var(--gold)", color: "var(--ink)", y: -2 }}
                        >
                          {content}
                        </motion.a>
                      )
                    }
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.06, duration: 0.25 }}
                      >
                        <Link href={item.href} style={{ ...baseStyle, display: "inline-flex" }}>
                          {content}
                        </Link>
                      </motion.div>
                    )
                  })}
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  )
}
