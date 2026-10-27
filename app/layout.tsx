import type { Metadata } from "next"
import Cursor from "@/components/Cursor"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kiki’s Workspace",
  description:
    "Welcome to Kiki’s workspace — a personal journey through design and delightful digital worlds.",
  icons: { icon: "/favicon.svg" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Nunito:wght@200..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  )
}
