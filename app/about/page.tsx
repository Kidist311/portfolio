import type { Metadata } from "next"
import Link from "next/link"
import IntroCard from "@/components/about/IntroCard"
import TechStack from "@/components/about/TechStack"
import Experience from "@/components/about/Experience"

export const metadata: Metadata = {
  title: "About · Kiki’s Workspace",
  description:
    "Meet Kidist Alemayehu Tsegaye — a full-stack developer and Software Engineering student — and explore the tools she works with.",
}

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="about-shell">
        <header className="about-bar">
          <Link
            href="/"
            className="about-brand"
            aria-label="Back to Kiki’s workspace home"
          >
            K<span aria-hidden="true">.</span>
          </Link>
          <nav aria-label="Page navigation">
            <Link href="/" className="about-back">
              <span aria-hidden="true">←</span> Back to workspace
            </Link>
          </nav>
        </header>

        <IntroCard />
        <TechStack />
        <Experience />
      </div>
    </main>
  )
}
