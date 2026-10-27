import type { Metadata } from "next"
import Link from "next/link"
import ProjectsBoard from "@/components/projects/ProjectsBoard"

export const metadata: Metadata = {
  title: "Projects · Kiki’s Workspace",
  description:
    "Things I’ve built, connected by curiosity — playful pinboard-style portfolio showcase.",
}

export default function ProjectsPage() {
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
          <p className="projects-kicker">Curated work</p>
          <h1 id="projects-title">Projects</h1>
          <p className="projects-subtitle">
            Things I’ve built, connected by curiosity.
          </p>
        </header>

        <section aria-labelledby="projects-title">
          <ProjectsBoard />
        </section>
      </div>
    </main>
  )
}
