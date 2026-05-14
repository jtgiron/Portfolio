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
			className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
		>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute right-4 top-8 hidden font-display text-[6rem] leading-none text-white/5 lg:block xl:text-[8rem]"
			>
				WORK
			</div>
			<FadeIn>
				<div className="grid gap-6 border-b-2 border-border pb-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-end">
					<div>
						<p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-primary">
							04 / Projects
						</p>
						<div className="mt-4 inline-flex border border-border bg-card px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
							Index / Output / Shipping
						</div>
					</div>
					<div>
						<h2
							id="projects-heading"
							className="font-display text-5xl uppercase leading-none tracking-[-0.05em] text-foreground sm:text-6xl"
						>
							Output
						</h2>
						<p className="mt-4 max-w-2xl text-sm uppercase tracking-[0.2em] text-muted-foreground sm:text-[0.9rem]">
							Product-minded builds with a strong bias toward clarity, speed,
							and utility.
						</p>
					</div>
				</div>
			</FadeIn>

			<div className="mt-10">
				<StaggerChildren className="grid gap-6 xl:grid-cols-2">
					{sorted.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</StaggerChildren>
			</div>
		</section>
	);
}
