import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "stockflow",
    title: "StockFlow",
    description:
      "A full-stack stock management application for inventory tracking and control. Features a TypeScript client with a Node.js backend, deployed as a monorepo on Vercel.",
    image: "/projects/stockflow.svg",
    techStack: ["TypeScript", "React", "Node.js", "Vercel"],
    liveUrl: "https://stockflow-kioscopato.vercel.app",
    repoUrl: "https://github.com/jtgiron/StockFlow",
    featured: true,
  },
];
