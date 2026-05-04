import { FadeIn } from "@/components/motion/fade-in";
import { ContactForm } from "@/components/contact-form";
import { SocialLink } from "@/components/social-link";
import { socialLinks } from "@/data/socials";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <FadeIn>
        <h2
          id="contact-heading"
          className="text-3xl font-semibold text-foreground"
        >
          Contact
        </h2>
        <p className="mt-3 max-w-lg text-zinc-400">
          Have a project in mind or just want to say hello? Drop me a message
          and I&apos;ll get back to you as soon as possible.
        </p>
      </FadeIn>

      <div className="mt-10 grid gap-12 lg:grid-cols-2">
        <FadeIn delay={0.1}>
          <ContactForm />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col justify-center">
            <h3 className="mb-4 text-xl font-medium text-foreground">
              Find me online
            </h3>
            <div className="flex items-center gap-5">
              {socialLinks.map((link) => (
                <SocialLink key={link.platform} link={link} />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
