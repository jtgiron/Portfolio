import { SocialLink } from "@/components/social-link";
import { personalInfo } from "@/data/personal";
import { socialLinks } from "@/data/socials";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} {personalInfo.name}
        </p>
        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <SocialLink key={link.platform} link={link} />
          ))}
        </div>
      </div>
    </footer>
  );
}
