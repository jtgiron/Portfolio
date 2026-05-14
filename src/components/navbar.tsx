"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/data/personal";

const NAV_ITEMS = [
	{ label: "About", href: "#about" },
	{ label: "Experience", href: "#experience" },
	{ label: "Projects", href: "#projects" },
	{ label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		function onScroll() {
			setScrolled(window.scrollY > 40);
		}

		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	function handleNavClick() {
		setMobileOpen(false);
	}

	return (
		<header className="fixed inset-x-0 top-0 z-50">
			<nav
				aria-label="Main navigation"
				className={`mx-auto mt-4 w-[calc(100%-1rem)] max-w-7xl border-2 bg-background/95 transition-[border-color,transform] duration-200 ${
					scrolled
						? "border-primary shadow-[10px_10px_0_0_rgba(0,0,0,0.72)]"
						: "border-border shadow-[10px_10px_0_0_rgba(0,0,0,0.52)]"
				}`}
			>
				<div className="grid min-h-20 grid-cols-[1fr_auto] md:grid-cols-[minmax(220px,280px)_1fr_210px]">
					<a
						href="#hero"
						className="flex flex-col justify-center border-b-2 border-border px-5 py-4 transition-colors duration-150 hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:ring-inset md:border-b-0 md:border-r-2"
					>
						<span className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary">
							Portfolio / Index
						</span>
						<span className="font-display text-[1.9rem] uppercase leading-none tracking-[-0.04em] text-foreground">
							{personalInfo.name}
						</span>
					</a>

					<ul className="hidden md:grid md:grid-cols-4 md:divide-x-2 md:divide-border">
						{NAV_ITEMS.map((item, index) => (
							<li key={item.href}>
								<a
									href={item.href}
									className="group flex h-full flex-col justify-center px-4 py-3 transition-colors duration-150 hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:ring-inset"
								>
									<span className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground transition-colors group-hover:text-primary-foreground/70">
										0{index + 1}
									</span>
									<span className="font-display text-xl uppercase leading-none tracking-[-0.03em]">
										{item.label}
									</span>
								</a>
							</li>
						))}
					</ul>

					<div className="hidden border-l-2 border-border px-5 py-4 md:flex md:flex-col md:justify-center">
						<span className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
							Status
						</span>
						<span className="font-display text-2xl uppercase leading-none tracking-[-0.04em] text-primary">
							Open
						</span>
					</div>

					<button
						type="button"
						aria-label={mobileOpen ? "Close menu" : "Open menu"}
						aria-expanded={mobileOpen}
						className="flex size-20 items-center justify-center border-b-2 border-l-2 border-border text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 md:hidden"
						onClick={() => setMobileOpen((prev) => !prev)}
					>
						{mobileOpen ? <X size={26} /> : <Menu size={26} />}
					</button>
				</div>

				{mobileOpen && (
					<div className="border-t-2 border-border bg-background md:hidden">
						<ul className="grid">
							{NAV_ITEMS.map((item, index) => (
								<li
									key={item.href}
									className="border-b-2 border-border last:border-b-0"
								>
									<a
										href={item.href}
										onClick={handleNavClick}
										className="flex items-center justify-between px-5 py-4 transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:ring-inset"
									>
										<span className="font-display text-2xl uppercase leading-none tracking-[-0.03em]">
											{item.label}
										</span>
										<span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
											0{index + 1}
										</span>
									</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</nav>
		</header>
	);
}
