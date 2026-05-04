import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren } from "@/components/motion/stagger-children";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export function Projects() {
  const sorted = [
    ...projects.filter((p) => p.featured),
    ...projects.filter((p) => !p.featured),
  ];

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <FadeIn>
        <h2
          id="projects-heading"
          className="text-3xl font-semibold text-foreground"
        >
          Projects
        </h2>
      </FadeIn>

      <div className="mt-10">
        <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
