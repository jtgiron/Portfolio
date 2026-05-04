import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren } from "@/components/motion/stagger-children";
import { TechBadge } from "@/components/tech-badge";
import { personalInfo } from "@/data/personal";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <FadeIn>
        <h2
          id="about-heading"
          className="text-3xl font-semibold text-foreground"
        >
          About
        </h2>
      </FadeIn>

      <div className="mt-10 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              {personalInfo.bio.map((paragraph, i) => (
                <p key={i} className="text-zinc-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-2">
          <FadeIn delay={0.2}>
            <h3 className="mb-4 text-xl font-medium text-foreground">
              Tech Stack
            </h3>
          </FadeIn>
          <StaggerChildren className="flex flex-wrap gap-2">
            {personalInfo.techStack.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
