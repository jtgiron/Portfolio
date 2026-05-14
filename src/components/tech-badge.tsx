export function TechBadge({ name }: { name: string }) {
	return (
		<span className="inline-flex items-center border border-border bg-card px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary">
			{name}
		</span>
	);
}
