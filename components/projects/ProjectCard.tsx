"use client"

import { memo, useCallback, useRef, useState } from "react"
import type { CSSProperties } from "react"
import { motion, type MotionStyle } from "framer-motion"
import { FiExternalLink, FiGithub } from "react-icons/fi"
import type { Project } from "@/data/projects"

type ProjectCardProps = {
  project: Project
  index: number
  accent: string
  allowDrag: boolean
  registerNode: (id: string, node: HTMLElement | null) => void
  onMove: () => void
  onTrack: (duration?: number) => void
  onSettled: () => void
  onMediaLoad: () => void
}

const rotations = [-2.2, 2.4, -1.6, 2.1]
const ease = [0.22, 1, 0.36, 1] as const

function getInitials(title: string) {
  const words = title.split(/\s+/).filter(Boolean)
  if (words.length > 1) {
    return words
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase()
  }

  return title.slice(0, 2).toUpperCase()
}

function ProjectCard({
  project,
  index,
  accent,
  allowDrag,
  registerNode,
  onMove,
  onTrack,
  onSettled,
  onMediaLoad,
}: ProjectCardProps) {
  const [videoFailed, setVideoFailed] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const rotation = rotations[index % rotations.length]
  const video = project.media?.type === "video" ? project.media : null
  const image = project.media?.type === "image" ? project.media : null
  const fallbackImage = video?.poster ?? image?.src
  const showVideo = Boolean(video) && !videoFailed
  const titleId = `${project.id}-title`

  const setCardNode = useCallback(
    (node: HTMLElement | null) => {
      registerNode(project.id, node)
    },
    [project.id, registerNode],
  )

  const cardStyle = {
    rotate: rotation,
    "--project-accent": accent,
  } as MotionStyle

  return (
    <motion.div
      className={`project-slot project-slot--${index}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.68, delay: index * 0.09, ease }}
      onAnimationComplete={onSettled}
    >
      <motion.div
        className="project-drag"
        drag={allowDrag}
        dragConstraints={{ left: -22, right: 22, top: -18, bottom: 18 }}
        dragElastic={0.15}
        dragMomentum={false}
        dragSnapToOrigin
        dragTransition={{ bounceStiffness: 280, bounceDamping: 24 }}
        onDragStart={() => onTrack(1100)}
        onDrag={onMove}
        onDragEnd={() => onTrack(900)}
      >
        <div
          className="project-bob"
          style={{ "--bob-delay": `${index * -1.35}s` } as CSSProperties}
        >
          <motion.article
            ref={setCardNode}
            className="project-card glass-card"
            style={cardStyle}
            aria-labelledby={titleId}
            whileHover={{ rotate: 0, y: -10, scale: 1.03 }}
            onHoverStart={() => {
              onTrack(540)
              videoRef.current?.play().catch(() => {})
            }}
            onHoverEnd={() => onTrack(540)}
            transition={{ type: "spring", stiffness: 250, damping: 22 }}
          >
            <div className="project-media">
              {showVideo && video ? (
                <video
                  ref={videoRef}
                  className="project-media-el"
                  src={video.src}
                  poster={video.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`${project.title} demo preview`}
                  onLoadedMetadata={onMediaLoad}
                  onError={() => {
                    setVideoFailed(true)
                    onMediaLoad()
                  }}
                />
              ) : fallbackImage ? (
                <img
                  className="project-media-el"
                  src={fallbackImage}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  onLoad={onMediaLoad}
                />
              ) : (
                <div className="project-media-placeholder" aria-hidden="true">
                  <span>{getInitials(project.title)}</span>
                </div>
              )}

              <span className="project-badge" aria-hidden="true">
                {video ? "LIVE" : "DEMO"}
              </span>
            </div>

            <div className="project-body">
              <h2 className="project-title" id={titleId}>
                {project.title}
              </h2>
              <p className="project-description">{project.description}</p>

              {project.tags.length > 0 ? (
                <ul
                  className="project-tags"
                  aria-label={`${project.title} technologies`}
                >
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              ) : null}

              {project.demoUrl || project.repoUrl ? (
                <div className="project-actions">
                  {project.demoUrl ? (
                    <a
                      className="project-action project-action--primary"
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live demo in a new tab`}
                    >
                      Demo
                      <FiExternalLink aria-hidden="true" focusable="false" />
                    </a>
                  ) : null}

                  {project.repoUrl ? (
                    <a
                      className="project-action project-action--secondary"
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} code on GitHub in a new tab`}
                    >
                      View Code
                      <FiGithub aria-hidden="true" focusable="false" />
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </motion.article>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default memo(ProjectCard)
