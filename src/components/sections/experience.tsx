import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren } from "@/components/motion/stagger-children";
import { TechBadge } from "@/components/tech-badge";
import { experience } from "@/data/experience";

function formatDate(date: string): string {
  const [year, month] = date.split("-");
  const d = new Date(Number(year), Number(month) - 1);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <FadeIn>
        <h2
          id="experience-heading"
          className="text-3xl font-semibold text-foreground"
        >
          Experience
        </h2>
      </FadeIn>

      <div className="mt-10">
        <StaggerChildren className="relative space-y-0">
          {experience.map((job, i) => (
            <div key={job.id} className="relative flex gap-6 pb-10 last:pb-0">
              {/* Timeline line */}
              {i < experience.length - 1 && (
                <div className="absolute left-[7px] top-3 h-full w-px bg-zinc-800" />
              )}

              {/* Dot */}
              <div className="relative z-10 mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-emerald-400 bg-background" />

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {job.role}
                    </h3>
                    {job.companyUrl ? (
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-emerald-400 hover:underline"
                      >
                        {job.company}
                      </a>
                    ) : (
                      <span className="text-sm text-emerald-400">
                        {job.company}
                      </span>
                    )}
                  </div>
                  <span className="shrink-0 text-sm text-zinc-500">
                    {formatDate(job.startDate)} —{" "}
                    {job.endDate ? formatDate(job.endDate) : "Present"}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {job.description}
                </p>

                {job.techStack && job.techStack.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {job.techStack.map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
