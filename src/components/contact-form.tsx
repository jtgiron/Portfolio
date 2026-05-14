"use client";

import { useEffect, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { sendContactEmail } from "@/app/actions/contact";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";

const fieldClassName =
	"w-full border-2 border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-[border-color,box-shadow,background-color] duration-150 focus:border-primary focus:bg-card focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:ring-offset-4 focus-visible:ring-offset-background disabled:opacity-50";

export function ContactForm() {
	const [errors, setErrors] = useState<
		Partial<Record<keyof ContactFormData, string>>
	>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [cooldown, setCooldown] = useState(0);

	useEffect(() => {
		if (cooldown <= 0) return;
		const interval = setInterval(() => {
			setCooldown((prev) => {
				if (prev <= 1) {
					clearInterval(interval);
					return 0;
				}
				return prev - 1;
			});
		}, 1000);
		return () => clearInterval(interval);
	}, [cooldown]);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setErrors({});

		const formData = new FormData(e.currentTarget);
		const data = {
			name: formData.get("name") as string,
			email: formData.get("email") as string,
			message: formData.get("message") as string,
			website: formData.get("website") as string,
		};

		const result = contactFormSchema.safeParse(data);
		if (!result.success) {
			const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
			for (const issue of result.error.issues) {
				const field = issue.path[0] as keyof ContactFormData;
				if (!fieldErrors[field]) {
					fieldErrors[field] = issue.message;
				}
			}
			setErrors(fieldErrors);
			return;
		}

		setIsSubmitting(true);
		try {
			const response = await sendContactEmail(result.data);
			if (response.success) {
				toast.success("Message sent! I'll get back to you soon.");
				(e.target as HTMLFormElement).reset();
				setCooldown(30);
			} else {
				toast.error(
					response.error ?? "Something went wrong. Please try again.",
				);
			}
		} catch {
			toast.error("Something went wrong. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	}

	const isDisabled = isSubmitting || cooldown > 0;

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div aria-hidden="true" style={{ display: "none" }}>
				<input type="text" name="website" tabIndex={-1} autoComplete="off" />
			</div>

			<div className="grid gap-6 sm:grid-cols-2">
				<div>
					<label
						htmlFor="name"
						className="mb-2 block font-mono text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground"
					>
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						required
						aria-required="true"
						aria-describedby={errors.name ? "name-error" : undefined}
						disabled={isDisabled}
						autoComplete="name"
						className={fieldClassName}
						placeholder="Your name"
					/>
					{errors.name && (
						<p id="name-error" className="mt-2 text-sm text-destructive">
							{errors.name}
						</p>
					)}
				</div>

				<div>
					<label
						htmlFor="email"
						className="mb-2 block font-mono text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						aria-required="true"
						aria-describedby={errors.email ? "email-error" : undefined}
						disabled={isDisabled}
						autoComplete="email"
						className={fieldClassName}
						placeholder="you@example.com"
					/>
					{errors.email && (
						<p id="email-error" className="mt-2 text-sm text-destructive">
							{errors.email}
						</p>
					)}
				</div>
			</div>

			<div>
				<label
					htmlFor="message"
					className="mb-2 block font-mono text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground"
				>
					Message
				</label>
				<textarea
					id="message"
					name="message"
					rows={7}
					required
					aria-required="true"
					aria-describedby={errors.message ? "message-error" : undefined}
					disabled={isDisabled}
					className={fieldClassName}
					placeholder="What would you like to discuss?"
				/>
				{errors.message && (
					<p id="message-error" className="mt-2 text-sm text-destructive">
						{errors.message}
					</p>
				)}
			</div>

			<div className="flex flex-col gap-4 border-t-2 border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
				<p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground">
					No spam, just real work.
				</p>
				<Button
					type="submit"
					disabled={isDisabled}
					aria-busy={isSubmitting}
					className="w-full sm:w-auto"
				>
					{isSubmitting ? (
						<>
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />
							Sending
						</>
					) : cooldown > 0 ? (
						`Wait ${cooldown}s`
					) : (
						<>
							<Send className="mr-2 h-4 w-4" />
							Send Message
						</>
					)}
				</Button>
			</div>
		</form>
	);
}
