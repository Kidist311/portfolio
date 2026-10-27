"use client"

import { useEffect, useRef } from "react"

export default function Cursor() {
  const cursor = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursor.current)
        cursor.current.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return <div className="cursor" ref={cursor} aria-hidden="true" />
}
