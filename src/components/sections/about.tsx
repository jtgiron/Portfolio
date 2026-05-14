import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren } from "@/components/motion/stagger-children";
import { TechBadge } from "@/components/tech-badge";
import { personalInfo } from "@/data/personal";

export function About() {
	return (
		<section
			id="about"
			aria-labelledby="about-heading"
			className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
		>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute right-4 top-8 hidden font-display text-[6rem] leading-none text-white/5 lg:block xl:text-[8rem]"
			>
				PROFILE
			</div>
			<FadeIn>
				<div className="grid gap-6 border-b-2 border-border pb-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-end">
					<div>
						<p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-primary">
							02 / About
						</p>
						<div className="mt-4 inline-flex border border-border bg-card px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
							Context / Intent / Method
						</div>
					</div>
					<div>
						<h2
							id="about-heading"
							className="font-display text-5xl uppercase leading-none tracking-[-0.05em] text-foreground sm:text-6xl"
						>
							Approach
						</h2>
						<p className="mt-4 max-w-2xl text-sm uppercase tracking-[0.2em] text-muted-foreground sm:text-[0.9rem]">
							Fundamentals first, systems thinking, and execution that ships.
						</p>
					</div>
				</div>
			</FadeIn>

			<div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.85fr)]">
				<FadeIn delay={0.1}>
					<div className="relative border-2 border-border bg-card p-6 shadow-[10px_10px_0_0_rgba(0,0,0,0.42)] sm:p-8">
						<div className="mb-6 flex items-center justify-between gap-4 border-b-2 border-border pb-4">
							<p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
								Profile
							</p>
							<p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-primary">
								Full-stack / Product / DX
							</p>
						</div>

						<div className="space-y-5 text-base leading-8 text-foreground/84 sm:text-lg">
							{personalInfo.bio.map((paragraph, i) => (
								<p key={i}>{paragraph}</p>
							))}
						</div>
					</div>
				</FadeIn>

				<div className="grid gap-8">
					<FadeIn delay={0.18}>
						<div className="border-2 border-border bg-card p-6 shadow-[10px_10px_0_0_rgba(0,0,0,0.36)]">
							<p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
								Working Mode
							</p>
							<div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
								<div className="border border-border bg-background/45 p-4">
									<p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
										Principle
									</p>
									<p className="mt-3 font-display text-2xl uppercase leading-none tracking-[-0.04em] text-foreground">
										Depth
									</p>
								</div>
								<div className="border border-border bg-background/45 p-4">
									<p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
										Process
									</p>
									<p className="mt-3 font-display text-2xl uppercase leading-none tracking-[-0.04em] text-primary">
										Build
									</p>
								</div>
								<div className="border border-border bg-background/45 p-4">
									<p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
										Outcome
									</p>
									<p className="mt-3 font-display text-2xl uppercase leading-none tracking-[-0.04em] text-foreground">
										Ship
									</p>
								</div>
							</div>
						</div>
					</FadeIn>

					<FadeIn delay={0.24}>
						<div className="border-2 border-border bg-card p-6 shadow-[10px_10px_0_0_rgba(0,0,0,0.36)]">
							<div className="mb-5 flex items-center justify-between gap-4 border-b-2 border-border pb-4">
								<h3 className="font-display text-3xl uppercase leading-none tracking-[-0.04em] text-foreground">
									Tech Stack
								</h3>
								<span className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
									Selected Tools
								</span>
							</div>
							<StaggerChildren className="flex flex-wrap gap-3">
								{personalInfo.techStack.map((tech) => (
									<TechBadge key={tech} name={tech} />
								))}
							</StaggerChildren>
						</div>
					</FadeIn>
				</div>
			</div>
		</section>
	);
}
