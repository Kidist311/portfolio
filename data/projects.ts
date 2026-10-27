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
    title: "Federal Housing Corporation DWTRS",
    description:
      "An enterprise document workflow, tracking, and reporting platform digitizing internal routing, approvals, multi-tier organizational hierarchies, and zero-leak public case tracking.",
    tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "RBAC"],
    demoUrl: "https://dwtrs-frontend.vercel.app/",
    repoUrl: "https://github.com/FHC-dwtrs",
    media: { type: "image", src: "/projects/dwtrs-fhc.png" },
  },
  {
    id: "common-ground",
    title: "Pharmacy Management System",
    description:
      "An end-to-end pharmacy platform automating inventory lifecycle, multi-unit batch tracking, controlled substance logs, split POS billing, and real-time margin analytics.",
    tags: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS", "React Query"],
    demoUrl: "https://frontend-nine-kohl-98.vercel.app/login",
    repoUrl: "https://github.com/dose-pharmacy",
    media: { type: "image", src: "/projects/pharmacy.png" },
    //{
    //  type: "video",
      //src: "/projects/common-ground.webm",
      //poster: "/projects/common-ground.svg",
    //},
  },
  {
    id: "elsewhere",
    title: "Wubit — Women Entrepreneurship Platform",
    description:
      "A digital marketplace and Telegram bot empowering women entrepreneurs in traditional and modern markets to showcase authentic products, connect with customers, and scale their businesses.",
    tags: ["React",
    "TypeScript",
    "Tailwind CSS",
    "Telegram Bot API",
    "REST API Integration",
    "I18n / Localization",
    "UI/UX Design"],
    demoUrl: "https://wub-it.vercel.app/",
    repoUrl: "https://github.com/Kidist311/wub-it",
    media: { type: "image", src: "/projects/wubit.png" },
  },
  {
    id: "little-atlas",
    title: "Food Reservation & Ordering System",
    description:
      "A full-featured food reservation and online ordering platform featuring interactive menu browsing, table bookings, multi-category cart management, and seamless food delivery app integrations.",
    tags: ["React",
    "Tailwind CSS",
    "Zustand",
    "Cart State Management",
    "REST API Integration",
    "Form Validation"],
    demoUrl: "https://dine-reserve-silk.vercel.app/#reservation",
    repoUrl: "https://github.com/Kidist311/Dine-Reserve",
    media: { type: "image", src: "/projects/food.png" },
  },
]
