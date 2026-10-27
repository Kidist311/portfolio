import Link from "next/link"

const landingNav = [
  { label: "About me", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume.pdf", target: "_blank" },
  { label: "Contact me", href: "/contact" },
]

export default function Portfolio() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="landing">
          <h1 aria-label="Welcome to Kiki’s workspace">
            <span>Welcome to</span>
            <em>Kiki’s</em>
            <span>workspace.</span>
          </h1>
          <nav className="landing-nav" aria-label="Main navigation">
            {landingNav.map((item, i) => {
              const content = (
                <>
                  <span aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </>
              )
              if ((item as any).target === "_blank") {
                return (
                  <a
                    href={item.href}
                    key={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                )
              }
              return item.href.startsWith("/") ? (
                <Link href={item.href} key={item.href}>
                  {content}
                </Link>
              ) : (
                <a href={item.href} key={item.href}>
                  {content}
                </a>
              )
            })}
          </nav>
        </div>
      </section>
    </main>
  )
}
