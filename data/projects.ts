export type ProjectMedia = {
  type: "video" | "image"
  src: string
  /** Optional still frame used before a video loads and if it fails. */
  poster?: string
}

export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  demoUrl?: string
  repoUrl?: string
  media?: ProjectMedia
}

/**
 * Replace these four placeholder projects with your real work.
 * `demoUrl` and `repoUrl` are optional — the matching button hides if omitted.
 * For a video, use { type: 'video', src: '/projects/file.webm', poster: '/projects/poster.svg' }.
 */
export const projects: Project[] = [
  {
    id: "afterglow",
    title: "Afterglow",
    description:
      "A softer sleep companion that turns wind-down routines into small, gentle rituals.",
    tags: ["Product design", "React", "Figma"],
    demoUrl: "https://example.com/afterglow",
    repoUrl: "https://github.com/example/afterglow",
    media: { type: "image", src: "/projects/afterglow.svg" },
  },
  {
    id: "common-ground",
    title: "Common Ground",
    description:
      "A neighborhood sharing platform that makes borrowing a drill feel as easy as borrowing sugar.",
    tags: ["Next.js", "TypeScript", "Firebase"],
    demoUrl: "https://example.com/common-ground",
    repoUrl: "https://github.com/example/common-ground",
    media: {
      type: "video",
      src: "/projects/common-ground.webm",
      poster: "/projects/common-ground.svg",
    },
  },
  {
    id: "elsewhere",
    title: "Elsewhere",
    description:
      "A slow editorial travel journal for people who prefer to get a little lost.",
    tags: ["Editorial", "Art direction", "Web"],
    demoUrl: "https://example.com/elsewhere",
    repoUrl: "https://github.com/example/elsewhere",
    media: { type: "image", src: "/projects/elsewhere.svg" },
  },
  {
    id: "little-atlas",
    title: "Little Atlas",
    description:
      "A pocket map of tiny local discoveries, hidden corners, and favorite walks.",
    tags: ["React", "Maps", "API"],
    demoUrl: "https://example.com/little-atlas",
    repoUrl: "https://github.com/example/little-atlas",
    media: { type: "image", src: "/projects/little-atlas.svg" },
  },
]
