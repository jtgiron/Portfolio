import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"group/button inline-flex shrink-0 items-center justify-center border-2 border-border bg-card font-mono text-[0.72rem] font-medium uppercase tracking-[0.24em] whitespace-nowrap text-foreground transition-[transform,background-color,color,border-color,box-shadow] duration-150 outline-none select-none focus-visible:border-ring focus-visible:ring-4 focus-visible:ring-ring/20 focus-visible:ring-offset-4 focus-visible:ring-offset-background active:not-aria-[haspopup]:translate-x-[3px] active:not-aria-[haspopup]:translate-y-[3px] disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
	{
		variants: {
			variant: {
				default:
					"border-primary bg-primary text-primary-foreground shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
				outline:
					"bg-transparent text-foreground shadow-[6px_6px_0_0_rgba(215,255,63,0.14)] hover:border-primary hover:bg-primary hover:text-primary-foreground hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
				secondary:
					"bg-secondary text-secondary-foreground shadow-[6px_6px_0_0_rgba(0,0,0,0.6)] hover:border-primary hover:text-primary hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
				ghost:
					"border-transparent bg-transparent text-muted-foreground hover:border-border hover:bg-card hover:text-foreground",
				destructive:
					"border-destructive bg-destructive text-black shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
				link: "border-transparent bg-transparent p-0 font-mono text-primary shadow-none hover:text-foreground",
			},
			size: {
				default:
					"min-h-10 gap-2 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
				xs: "min-h-8 gap-1.5 px-3 text-[0.68rem] [&_svg:not([class*='size-'])]:size-3",
				sm: "min-h-9 gap-1.5 px-3.5 text-[0.69rem] [&_svg:not([class*='size-'])]:size-3.5",
				lg: "min-h-12 gap-2.5 px-6 text-[0.74rem] [&_svg:not([class*='size-'])]:size-4.5",
				icon: "size-10",
				"icon-xs": "size-8 [&_svg:not([class*='size-'])]:size-3",
				"icon-sm": "size-9 [&_svg:not([class*='size-'])]:size-3.5",
				"icon-lg": "size-12 [&_svg:not([class*='size-'])]:size-4.5",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function Button({
	className,
	variant = "default",
	size = "default",
	...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
	return (
		<ButtonPrimitive
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
