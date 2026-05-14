import { SocialLink } from "@/components/social-link";
import { personalInfo } from "@/data/personal";
import { socialLinks } from "@/data/socials";

export function Footer() {
	return (
		<footer className="border-t-2 border-border bg-background/90">
			<div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:px-8">
				<div className="grid gap-3 sm:grid-cols-[auto_1fr] sm:items-end sm:gap-6">
					<div>
						<p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
							End / Transmission
						</p>
						<p className="mt-2 font-display text-3xl uppercase leading-none tracking-[-0.05em] text-foreground">
							{personalInfo.name}
						</p>
					</div>
					<p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground">
						&copy; {new Date().getFullYear()} Built for fast interfaces and
						clear systems.
					</p>
				</div>

				<div className="flex flex-wrap gap-3">
					{socialLinks.map((link) => (
						<SocialLink key={link.platform} link={link} />
					))}
				</div>
			</div>
		</footer>
	);
}
