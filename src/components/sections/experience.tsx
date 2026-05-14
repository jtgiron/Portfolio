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
			className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
		>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute right-4 top-8 hidden font-display text-[6rem] leading-none text-white/5 lg:block xl:text-[8rem]"
			>
				LOG
			</div>
			<FadeIn>
				<div className="grid gap-6 border-b-2 border-border pb-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-end">
					<div>
						<p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-primary">
							03 / Experience
						</p>
						<div className="mt-4 inline-flex border border-border bg-card px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
							Archive / Entries / Work
						</div>
					</div>
					<div>
						<h2
							id="experience-heading"
							className="font-display text-5xl uppercase leading-none tracking-[-0.05em] text-foreground sm:text-6xl"
						>
							Record
						</h2>
						<p className="mt-4 max-w-2xl text-sm uppercase tracking-[0.2em] text-muted-foreground sm:text-[0.9rem]">
							Work history framed as systems solved, shipped, and maintained.
						</p>
					</div>
				</div>
			</FadeIn>

			<div className="mt-10">
				<StaggerChildren className="grid gap-6">
					{experience.map((job, index) => (
						<article
							key={job.id}
							className="relative grid gap-0 border-2 border-border bg-card shadow-[10px_10px_0_0_rgba(0,0,0,0.42)] lg:grid-cols-[160px_minmax(0,1fr)]"
						>
							<div
								aria-hidden="true"
								className="pointer-events-none absolute right-4 top-4 font-display text-6xl leading-none text-white/5"
							>
								0{index + 1}
							</div>
							<div className="flex flex-col justify-between border-b-2 border-border p-5 lg:border-b-0 lg:border-r-2 lg:p-6">
								<div>
									<p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
										Entry
									</p>
									<p className="mt-3 font-display text-5xl uppercase leading-none tracking-[-0.06em] text-primary">
										0{index + 1}
									</p>
								</div>
								<p className="mt-8 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground lg:mt-10">
									{formatDate(job.startDate)}
									<br />
									{job.endDate ? formatDate(job.endDate) : "Present"}
								</p>
							</div>

							<div className="p-5 lg:p-6">
								<div className="grid gap-5 border-b-2 border-border pb-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
									<div>
										<h3 className="font-display text-3xl uppercase leading-none tracking-[-0.045em] text-foreground sm:text-4xl">
											{job.role}
										</h3>
										{job.companyUrl ? (
											<a
												href={job.companyUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="mt-3 inline-flex items-center border border-border bg-background/60 px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-primary transition-[transform,background-color,color,border-color,box-shadow] duration-150 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.55)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
											>
												{job.company}
											</a>
										) : (
											<span className="mt-3 inline-flex items-center border border-border bg-background/60 px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-primary">
												{job.company}
											</span>
										)}
									</div>

									<div className="border border-border bg-background/45 px-4 py-3 sm:min-w-52">
										<p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
											Timespan
										</p>
										<p className="mt-2 font-display text-2xl uppercase leading-none tracking-[-0.04em] text-foreground">
											{job.endDate ? "Archive" : "Current"}
										</p>
									</div>
								</div>

								<p className="mt-5 max-w-3xl text-base leading-7 text-foreground/82">
									{job.description}
								</p>

								{job.techStack && job.techStack.length > 0 && (
									<div className="mt-6 flex flex-wrap gap-3">
										{job.techStack.map((tech) => (
											<TechBadge key={tech} name={tech} />
										))}
									</div>
								)}
							</div>
						</article>
					))}
				</StaggerChildren>
			</div>
		</section>
	);
}
