import { FadeIn } from "@/components/motion/fade-in";
import { ContactForm } from "@/components/contact-form";
import { SocialLink } from "@/components/social-link";
import { personalInfo } from "@/data/personal";
import { socialLinks } from "@/data/socials";

export function Contact() {
	return (
		<section
			id="contact"
			aria-labelledby="contact-heading"
			className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
		>
			<FadeIn>
				<div className="grid gap-6 border-b-2 border-border pb-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-end">
					<div>
						<p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-primary">
							05 / Contact
						</p>
					</div>
					<div>
						<h2
							id="contact-heading"
							className="font-display text-5xl uppercase leading-none tracking-[-0.05em] text-foreground sm:text-6xl"
						>
							Start Something
						</h2>
						<p className="mt-4 max-w-2xl text-sm uppercase tracking-[0.2em] text-muted-foreground sm:text-[0.9rem]">
							Have a project in mind, need a builder, or want to open a serious
							conversation.
						</p>
					</div>
				</div>
			</FadeIn>

			<div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.8fr)] lg:items-start">
				<FadeIn delay={0.08}>
					<div className="border-2 border-border bg-card p-6 sm:p-8">
						<div className="mb-6 flex items-center justify-between gap-4 border-b-2 border-border pb-4">
							<p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
								Message Intake
							</p>
							<p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-primary">
								Reply Via Email
							</p>
						</div>
						<ContactForm />
					</div>
				</FadeIn>

				<FadeIn delay={0.16}>
					<div className="grid gap-6">
						<div className="border-2 border-border bg-card p-6 sm:p-8">
							<p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
								Direct Line
							</p>
							<a
								href={`mailto:${personalInfo.email}`}
								className="mt-4 inline-flex break-words font-mono text-lg leading-7 tracking-[0.06em] text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:text-xl"
							>
								{personalInfo.email}
							</a>
						</div>

						<div className="border-2 border-border bg-card p-6 sm:p-8">
							<div className="mb-5 flex items-center justify-between gap-4 border-b-2 border-border pb-4">
								<h3 className="font-display text-3xl uppercase leading-none tracking-[-0.04em] text-foreground">
									Online
								</h3>
								<span className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
									Profiles
								</span>
							</div>
							<div className="flex flex-wrap gap-3">
								{socialLinks.map((link) => (
									<SocialLink key={link.platform} link={link} />
								))}
							</div>
						</div>
					</div>
				</FadeIn>
			</div>
		</section>
	);
}
