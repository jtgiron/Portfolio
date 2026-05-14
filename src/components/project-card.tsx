import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TechBadge } from "@/components/tech-badge";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
	return (
		<Card className="group h-full border-border bg-card shadow-[8px_8px_0_0_rgba(0,0,0,0.45)] transition-[transform,border-color,box-shadow] duration-150 hover:-translate-y-1 hover:border-primary hover:shadow-[12px_12px_0_0_rgba(0,0,0,0.7)]">
			<div className="relative aspect-[4/3] overflow-hidden border-b-2 border-border bg-background">
				<div className="absolute left-4 top-4 z-10 border border-border bg-background/90 px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
					{project.featured ? "Featured" : "Project"}
				</div>
				<Image
					src={project.image}
					alt={project.title}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
					className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
				/>
			</div>

			<CardContent className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
				<div className="flex items-start justify-between gap-4 border-b-2 border-border pb-4">
					<div>
						<p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
							Selected Work
						</p>
						<h3 className="mt-3 font-display text-3xl uppercase leading-none tracking-[-0.045em] text-foreground">
							{project.title}
						</h3>
					</div>
					<span className="shrink-0 border border-border px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-primary">
						{project.techStack.length} Tools
					</span>
				</div>

				<p className="text-base leading-7 text-foreground/82">
					{project.description}
				</p>

				<div className="mt-auto flex flex-wrap gap-3 pt-2">
					{project.techStack.map((tech) => (
						<TechBadge key={tech} name={tech} />
					))}
				</div>
			</CardContent>

			<CardFooter className="flex flex-wrap gap-3 border-t-2 border-border px-5 py-4 sm:px-6">
				{project.liveUrl && (
					<a
						href={project.liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex min-h-11 items-center gap-2 border border-border px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-foreground transition-[transform,background-color,color,border-color,box-shadow] duration-150 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.55)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
					>
						<ExternalLink size={14} />
						Live Demo
					</a>
				)}
				{project.repoUrl && (
					<a
						href={project.repoUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex min-h-11 items-center gap-2 border border-border px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-foreground transition-[transform,background-color,color,border-color,box-shadow] duration-150 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.55)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
					>
						<svg
							width={14}
							height={14}
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
						</svg>
						Source Code
					</a>
				)}
			</CardFooter>
		</Card>
	);
}
