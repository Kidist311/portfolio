"use client"

import type { CSSProperties } from "react"
import { motion } from "framer-motion"

export type Point = { x: number, y: number }

type ProjectStringProps = {
  start: Point
  end: Point
  index: number
}

export default function ProjectString({
  start,
  end,
  index,
}: ProjectStringProps) {
  const dx = end.x - start.x
  const dy = end.y - start.y
  const distance = Math.hypot(dx, dy)
  const isVertical = Math.abs(dx) < Math.abs(dy) * 0.55

  let firstControl: Point
  let secondControl: Point

  if (isVertical) {
    const lateralBow =
      (index % 2 === 0 ? 1 : -1) * Math.min(32, Math.max(14, distance * 0.1))
    firstControl = {
      x: start.x + dx * 0.3 + lateralBow,
      y: start.y + dy * 0.35,
    }
    secondControl = {
      x: start.x + dx * 0.7 + lateralBow * 0.85,
      y: start.y + dy * 0.65,
    }
  } else {
    const sag = Math.min(84, Math.max(26, distance * 0.15))
    firstControl = {
      x: start.x + dx * 0.32,
      y: start.y + dy * 0.32 + sag,
    }
    secondControl = {
      x: start.x + dx * 0.68,
      y: start.y + dy * 0.68 + sag * 0.82,
    }
  }

  const path = `M ${start.x} ${start.y} C ${firstControl.x} ${firstControl.y}, ${secondControl.x} ${secondControl.y}, ${end.x} ${end.y}`

  const style = {
    "--string-delay": `${0.45 + index * 0.2}s`,
    "--pin-delay": `${0.75 + index * 0.2}s`,
    "--sway-delay": `${1.6 + index * 0.25}s`,
    "--sway-duration": `${6.5 + index * 0.8}s`,
  } as CSSProperties

  return (
    <g className="project-string" style={style}>
      <motion.path
        className="project-string-path"
        d={path}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: {
            duration: 1.15,
            delay: 0.35 + index * 0.2,
            ease: [0.22, 1, 0.36, 1],
          },
          opacity: { duration: 0.25, delay: 0.35 + index * 0.2 },
        }}
        vectorEffect="non-scaling-stroke"
      />
      <motion.g
        className="project-string-pins"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.45,
          delay: 0.65 + index * 0.2,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      >
        <circle
          className="project-string-pin"
          cx={start.x}
          cy={start.y}
          r={6}
        />
        <circle
          className="project-string-pin-core"
          cx={start.x}
          cy={start.y}
          r={2.2}
        />
        <circle className="project-string-pin" cx={end.x} cy={end.y} r={6} />
        <circle
          className="project-string-pin-core"
          cx={end.x}
          cy={end.y}
          r={2.2}
        />
      </motion.g>
    </g>
  )
}
