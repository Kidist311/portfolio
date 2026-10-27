"use client"
// Mobile / vertical single-column stack

// Desktop zigzag:
// Target is to the right (Card 0 -> Card 1, or Card 2 -> Card 3)

// Target is to the left (Card 1 -> Card 2)
import { useCallback, useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import ProjectCard from "./ProjectCard"
import ProjectString, { type Point } from "./ProjectString"
import { projects } from "@/data/projects"

type CardRect = {
  left: number
  top: number
  right: number
  bottom: number
  width: number
  height: number
}

type StringGeometry = {
  id: string
  start: Point
  end: Point
}

const accents = ["#c9a86a", "#c67b5a", "#9cad8f", "#c98fa2"]

function getAnchors(from: CardRect, to: CardRect, index: number) {
  const isVertical = to.top >= from.bottom - 40

  if (isVertical) {
    return {
      start: {
        x: from.left + from.width * 0.5,
        y: from.bottom - 12,
      },
      end: {
        x: to.left + to.width * 0.5,
        y: to.top + 12,
      },
    }
  }
  if (to.left >= from.right - 80) {
    return {
      start: {
        x: from.right - 14,
        y: from.top + (index === 0 ? 44 : from.height * 0.55),
      },
      end: {
        x: to.left + 14,
        y: to.top + 44,
      },
    }
  }
  if (to.right <= from.left + 80) {
    return {
      start: { x: from.left + 14, y: from.top + from.height * 0.55 },
      end: { x: to.right - 14, y: to.top + 44 },
    }
  }

  return {
    start: { x: from.left + from.width * 0.5, y: from.bottom - 12 },
    end: { x: to.left + to.width * 0.5, y: to.top + 12 },
  }
}

export default function ProjectsBoard() {
  const boardRef = useRef<HTMLDivElement>(null)
  const cardNodes = useRef(new Map<string, HTMLElement>())
  const observerRef = useRef<ResizeObserver | null>(null)
  const measureFrame = useRef<number | null>(null)
  const trackFrame = useRef<number | null>(null)
  const trackUntil = useRef(0)

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [strings, setStrings] = useState<StringGeometry[]>([])
  const [allowDrag, setAllowDrag] = useState(false)
  const inView = useInView(boardRef, { once: true, amount: 0.08 })

  const measure = useCallback(() => {
    const board = boardRef.current
    if (!board) return

    const boardRect = board.getBoundingClientRect()
    const cardRects = projects.flatMap((project) => {
      const node = cardNodes.current.get(project.id)
      if (!node) return []

      const rect = node.getBoundingClientRect()

      return [
        {
          id: project.id,
          rect: {
            left: rect.left - boardRect.left,
            top: rect.top - boardRect.top,
            right: rect.right - boardRect.left,
            bottom: rect.bottom - boardRect.top,
            width: rect.width,
            height: rect.height,
          },
        },
      ]
    })

    const nextStrings: StringGeometry[] = []

    for (let index = 0; index < cardRects.length - 1; index += 1) {
      const current = cardRects[index]
      const next = cardRects[index + 1]
      const anchors = getAnchors(current.rect, next.rect, index)

      nextStrings.push({
        id: `${current.id}-${next.id}`,
        start: anchors.start,
        end: anchors.end,
      })
    }

    setDimensions((prev) => {
      if (prev.width === boardRect.width && prev.height === boardRect.height) {
        return prev
      }
      return { width: boardRect.width, height: boardRect.height }
    })
    setStrings(nextStrings)
  }, [])

  const scheduleMeasure = useCallback(() => {
    if (measureFrame.current !== null) return

    measureFrame.current = requestAnimationFrame(() => {
      measureFrame.current = null
      measure()
    })
  }, [measure])

  const registerNode = useCallback(
    (id: string, node: HTMLElement | null) => {
      const existing = cardNodes.current.get(id)
      if (existing && existing !== node && observerRef.current) {
        observerRef.current.unobserve(existing)
      }

      if (node) {
        cardNodes.current.set(id, node)
        observerRef.current?.observe(node)
        scheduleMeasure()
      } else {
        cardNodes.current.delete(id)
      }
    },
    [scheduleMeasure],
  )

  const trackFor = useCallback(
    (duration = 500) => {
      trackUntil.current = performance.now() + duration

      if (trackFrame.current !== null) return

      const tick = () => {
        measure()

        if (performance.now() < trackUntil.current) {
          trackFrame.current = requestAnimationFrame(tick)
        } else {
          trackFrame.current = null
        }
      }

      trackFrame.current = requestAnimationFrame(tick)
    },
    [measure],
  )

  const handleSettled = useCallback(() => trackFor(280), [trackFor])

  useEffect(() => {
    measure()

    const board = boardRef.current
    const observer = new ResizeObserver(() => scheduleMeasure())
    observerRef.current = observer

    if (board) observer.observe(board)
    cardNodes.current.forEach((node) => observer.observe(node))

    const handleResize = () => scheduleMeasure()
    window.addEventListener("resize", handleResize)

    let cancelled = false
    document.fonts?.ready.then(() => {
      if (!cancelled) scheduleMeasure()
    })

    return () => {
      cancelled = true
      observer.disconnect()
      observerRef.current = null
      window.removeEventListener("resize", handleResize)

      if (measureFrame.current !== null) {
        cancelAnimationFrame(measureFrame.current)
        measureFrame.current = null
      }

      if (trackFrame.current !== null) {
        cancelAnimationFrame(trackFrame.current)
        trackFrame.current = null
      }
    }
  }, [measure, scheduleMeasure])

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)")
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () =>
      setAllowDrag(finePointer.matches && !reduceMotion.matches)

    update()
    finePointer.addEventListener("change", update)
    reduceMotion.addEventListener("change", update)

    return () => {
      finePointer.removeEventListener("change", update)
      reduceMotion.removeEventListener("change", update)
    }
  }, [])

  return (
    <div
      ref={boardRef}
      className={`projects-board${inView ? " is-drawn" : ""}`}
    >
      <svg
        className="project-strings"
        viewBox={`0 0 ${Math.max(dimensions.width, 1)} ${Math.max(dimensions.height, 1)}`}
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        aria-hidden="true"
        focusable="false"
      >
        {strings.map((string, index) => (
          <ProjectString
            key={string.id}
            start={string.start}
            end={string.end}
            index={index}
          />
        ))}
      </svg>

      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          accent={accents[index % accents.length]}
          allowDrag={allowDrag}
          registerNode={registerNode}
          onMove={scheduleMeasure}
          onTrack={trackFor}
          onSettled={handleSettled}
          onMediaLoad={scheduleMeasure}
        />
      ))}
    </div>
  )
}
