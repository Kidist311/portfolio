"use client";
import type { Metadata } from "next"
import Link from "next/link"
import { FiGithub, FiLinkedin, FiTwitter, FiSend, FiMail } from "react-icons/fi"

export const metadata: Metadata = {
  title: "Contact · Kiki’s Workspace",
  description:
    "Have an idea, a project, or just want to connect? Let's build something great.",
}

const contactLinks = [
  { label: "GitHub", href: "https://github.com/Kidist311/", icon: FiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kidist-alemayehu-59a491329/", icon: FiLinkedin },
  { label: "Twitter", href: "https://x.com/KidistAlem66030", icon: FiTwitter },
  { label: "Telegram", href: "https://t.me/Jehova_Raan", icon: FiSend },
  { label: "Email", href:"mailto:alemayehukidiist09@gmail.com", icon: FiMail },
]

export default function ContactPage() {
  return (
    <main className="projects-page">
      <div className="projects-shell">
        <header className="projects-bar">
          <Link
            href="/"
            className="projects-brand"
            aria-label="Back to Kiki’s workspace home"
          >
            K<span aria-hidden="true">.</span>
          </Link>
          <nav aria-label="Page navigation">
            <Link href="/" className="projects-back">
              <span aria-hidden="true">←</span> Back home
            </Link>
          </nav>
        </header>

        <header className="projects-head">
          <p className="projects-kicker">Get In Touch</p>
          <h1>Let&apos;s Build Something Great</h1>
          <p className="projects-subtitle">
            Have an idea, a project, or just want to connect? I&apos;m always open to discussing new opportunities and ambitious ideas.
          </p>
        </header>

        <section style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              margin: "0 0 32px",
              fontFamily: "var(--display)",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 500,
              color: "var(--gold)",
              letterSpacing: "-0.03em",
            }}
          >
            Find Me On
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            {contactLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                  padding: "32px 24px",
                  textDecoration: "none",
                  color: "var(--paper)",
                  transition: "border-color 0.3s, background 0.3s, box-shadow 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold)"
                  e.currentTarget.style.background = "rgba(201, 168, 106, 0.08)"
                  e.currentTarget.style.boxShadow =
                    "0 20px 60px rgba(0, 0, 0, 0.5), 0 0 24px rgba(201, 168, 106, 0.25)"
                  e.currentTarget.style.transform = "translateY(-6px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(247, 241, 227, 0.1)"
                  e.currentTarget.style.background = "rgba(247, 241, 227, 0.05)"
                  e.currentTarget.style.boxShadow =
                    "0 26px 80px rgba(0, 0, 0, 0.38), inset 0 1px 0 rgba(255, 255, 255, 0.07)"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <link.icon size={32} style={{ color: "var(--gold)" }} />
                <span style={{ fontSize: "16px", fontWeight: 600 }}>{link.label}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
