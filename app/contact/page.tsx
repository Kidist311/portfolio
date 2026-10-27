// app/contact/page.tsx
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

// Metadata works here because there is NO "use client" directive in this file
export const metadata: Metadata = {
  title: "Contact · Kiki’s Workspace",
  description:
    "Have an idea, a project, or just want to connect? Let's build something great.",
};

export default function ContactPage() {
  return <ContactForm />;
}