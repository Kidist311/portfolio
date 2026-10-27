"use client"

import type { CSSProperties } from "react"
import { motion } from "framer-motion"
import { techStack } from "@/data/techStack"

const ease = [0.22, 1, 0.36, 1] as const

export default function TechStack() {
  const count = techStack.length

  return (
    <section className="tech-section" aria-labelledby="tech-stack-heading">
      <motion.header
        className="tech-head"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease }}
      >
        <p className="tech-kicker">Toolkit</p>
        <h2 id="tech-stack-heading">Tech stack</h2>
        <p>A little solar system of the tools I use every day.</p>
      </motion.header>

      <motion.div
        className="orbit"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease }}
      >
        <div className="orbit-guides" aria-hidden="true">
          <span className="orbit-guide orbit-guide--outer" />
          <span className="orbit-guide orbit-guide--inner" />
        </div>

        <ul className="orbit-ring" aria-label="Technologies I work with">
          {techStack.map(({ name, icon: Icon, color }, index) => {
            const angle = (360 / count) * index

            return (
              <li
                className="orbit-item"
                key={name}
                style={
                  {
                    "--angle": `${angle}deg`,
                    "--brand": color,
                  } as CSSProperties
                }
              >
                <span className="orbit-chip">
                  <Icon aria-hidden="true" focusable="false" />
                  <span className="orbit-name">{name}</span>
                </span>
              </li>
            )
          })}
        </ul>

        <div className="orbit-center" aria-hidden="true">
          <span className="orbit-star">✦</span>
          <span className="orbit-mark">
            K<span>.</span>
          </span>
          <span className="orbit-caption">{count} tools in orbit</span>
        </div>
      </motion.div>
    </section>
  )
}
