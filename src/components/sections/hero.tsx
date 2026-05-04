import { ChevronDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { SocialLink } from "@/components/social-link";
import { SceneCanvas } from "@/components/three/scene-canvas";
import { personalInfo } from "@/data/personal";
import { socialLinks } from "@/data/socials";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <SceneCanvas />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1
              id="hero-heading"
              className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl"
            >
              {personalInfo.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-zinc-400">
              {personalInfo.title}
            </p>
            <p className="mt-3 max-w-xl text-base text-zinc-400">
              {personalInfo.tagline}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className={buttonVariants({ size: "lg" })}
              >
                View Projects
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

            <div className="mt-8 flex items-center gap-5">
              {socialLinks.map((link) => (
                <SocialLink key={link.platform} link={link} />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="rounded-sm text-zinc-500 transition-colors hover:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ChevronDown size={28} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
