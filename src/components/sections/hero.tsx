import { ArrowDownRight, ChevronDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SocialLink } from "@/components/social-link";
import { personalInfo } from "@/data/personal";
import { socialLinks } from "@/data/socials";

export function Hero() {
	const [firstName, ...rest] = personalInfo.name.split(" ");
	const lastName = rest.join(" ");
	const primaryStack = personalInfo.techStack.slice(0, 4);

	return (
		<section
			id="hero"
			aria-labelledby="hero-heading"
			className="relative overflow-hidden border-b-2 border-border"
		>
			<div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,transparent_55%,rgba(215,255,63,0.06)_55%,rgba(215,255,63,0.06)_100%)]" />
			<div className="absolute inset-x-0 top-28 h-px bg-border" />
			<div className="absolute inset-y-0 left-[6%] hidden w-px bg-border/70 lg:block" />
			<div
				aria-hidden="true"
				className="absolute left-4 top-32 z-10 hidden border-y border-border bg-card px-2 py-3 font-mono text-[0.62rem] uppercase tracking-[0.34em] text-primary [writing-mode:vertical-rl] rotate-180 lg:block"
			>
				Systems / Interfaces / Shipping
			</div>
			<div
				aria-hidden="true"
				className="absolute right-4 top-28 hidden font-display text-[10rem] leading-none text-white/6 lg:block xl:text-[13rem]"
			>
				01
			</div>
			<div
				aria-hidden="true"
				className="absolute inset-x-0 bottom-20 hidden border-y border-border bg-background/92 py-2 lg:block"
			>
				<div className="mx-auto flex max-w-7xl items-center gap-6 overflow-hidden px-4 font-mono text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground sm:px-6 lg:px-8">
					<span className="text-primary">Signal</span>
					<span>{primaryStack.join(" / ")}</span>
					<span>{personalInfo.title}</span>
					<span>{personalInfo.email}</span>
				</div>
			</div>

			<div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-7xl items-center px-4 pb-16 pt-36 sm:px-6 lg:px-8 lg:pb-20 lg:pt-40">
				<div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.8fr)] lg:items-end">
					<div>
						<div className="flex flex-wrap gap-3">
							<span className="border border-border bg-card px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
								Selected Work / Portfolio
							</span>
							<span className="border border-primary/60 bg-primary/10 px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-primary">
								{primaryStack.join(" / ")}
							</span>
						</div>

						<div className="mt-8">
							<p className="mb-4 font-mono text-[0.72rem] uppercase tracking-[0.32em] text-muted-foreground">
								{personalInfo.title}
							</p>
							<h1
								id="hero-heading"
								className="font-display text-[4.6rem] uppercase leading-[0.88] tracking-[-0.06em] text-foreground sm:text-[6.5rem] lg:text-[8.5rem] xl:text-[10rem]"
							>
								<span className="block">{firstName}</span>
								<span className="block text-primary">{lastName}</span>
							</h1>
						</div>

						<div className="mt-8 max-w-3xl border-l-4 border-primary pl-5">
							<p className="font-display text-2xl uppercase leading-none tracking-[-0.04em] text-foreground sm:text-4xl">
								{personalInfo.title}
							</p>
							<p className="mt-4 text-base leading-7 text-foreground/82 sm:text-lg">
								{personalInfo.tagline}
							</p>
						</div>

						<div className="mt-10 flex flex-col gap-4 sm:flex-row">
							<a href="#projects" className={buttonVariants({ size: "lg" })}>
								View Projects
								<ArrowDownRight />
							</a>
							<a
								href={personalInfo.cvUrl}
								target="_blank"
								rel="noopener noreferrer"
								className={buttonVariants({ variant: "outline", size: "lg" })}
							>
								Download CV
							</a>
						</div>

						<div className="mt-8 flex flex-wrap gap-3">
							{socialLinks.map((link) => (
								<SocialLink key={link.platform} link={link} />
							))}
						</div>
					</div>

					<aside className="grid gap-4">
						<div className="relative border-2 border-border bg-card p-5">
							<span
								aria-hidden="true"
								className="absolute right-4 top-4 font-mono text-[0.62rem] uppercase tracking-[0.32em] text-primary"
							>
								DOSSIER
							</span>
							<p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
								Brief
							</p>
							<p className="mt-4 pr-16 text-sm leading-7 text-foreground/78">
								{personalInfo.bio[0]}
							</p>
						</div>

						<div className="grid gap-0 border-2 border-border bg-card sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
							<div className="border-b-2 border-border p-5 sm:border-b-0 sm:border-r-2 lg:border-b-2 lg:border-r-0 xl:border-b-0 xl:border-r-2">
								<p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
									Role
								</p>
								<p className="mt-3 font-display text-3xl uppercase leading-none tracking-[-0.05em] text-foreground">
									Full-stack
								</p>
							</div>
							<div className="border-b-2 border-border p-5 sm:border-b-0 sm:border-r-2 lg:border-b-2 lg:border-r-0 xl:border-b-0 xl:border-r-2">
								<p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
									Focus
								</p>
								<p className="mt-3 font-display text-3xl uppercase leading-none tracking-[-0.05em] text-primary">
									{personalInfo.techStack.slice(0, 2).join(" / ")}
								</p>
							</div>
							<div className="p-5">
								<p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
									Contact
								</p>
								<p className="mt-3 break-all font-mono text-xs uppercase tracking-[0.16em] text-foreground/80">
									{personalInfo.email}
								</p>
							</div>
						</div>

						<div className="relative border-2 border-border bg-card p-5">
							<span
								aria-hidden="true"
								className="absolute bottom-4 right-4 font-display text-5xl leading-none text-white/8"
							>
								X
							</span>
							<p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
								Core Stack
							</p>
							<div className="mt-4 flex flex-wrap gap-2.5 pr-10">
								{primaryStack.map((item) => (
									<span
										key={item}
										className="border border-border px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-foreground/82"
									>
										{item}
									</span>
								))}
							</div>
						</div>
					</aside>
				</div>
			</div>

			<div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between gap-6 border-t-2 border-border px-4 py-5 sm:px-6 lg:px-8">
				<p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
					{personalInfo.techStack.slice(0, 3).join(" / ")}
				</p>
				<a
					href="#about"
					aria-label="Scroll to About section"
					className="inline-flex items-center gap-2 border border-border bg-card px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-foreground transition-[transform,background-color,color,border-color,box-shadow] duration-150 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.55)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
				>
					Scroll
					<ChevronDown size={16} />
				</a>
			</div>
		</section>
	);
}
