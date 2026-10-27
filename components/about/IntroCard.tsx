"use client"

import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

export default function IntroCard() {
  return (
    <motion.article
      className="intro-card glass-card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease }}
    >
      <p className="intro-kicker">About me</p>
      <h1>
        Hola, I’m <em>Kidist Alemayehu Tsegaye.</em>
      </h1>
      <div className="intro-copy">
        <p>
          A full-stack developer who loves building things that solve real
          problems, from clean interfaces to the systems running behind them.
        </p>
        <p>
          I’m a Software Engineering student at Addis Ababa Science and
          Technology University and I also study Management at Queens College,
          so I think about both the code and the business behind it.
        </p>
      </div>
    </motion.article>
  )
}
