import type { IconType } from "react-icons"
import {
  SiCss,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"
import { TbApi, TbBrandVscode } from "react-icons/tb"

export type TechItem = {
  name: string
  icon: IconType
  color: string
}

/**
 * Add, remove, or reorder logos here.
 * The orbit recalculates its spacing automatically.
 */
export const techStack: TechItem[] = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "CSS", icon: SiCss, color: "#663399" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "REST APIs", icon: TbApi, color: "#F7F1E3" },
  { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
]
