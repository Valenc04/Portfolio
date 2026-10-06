import { Github, Linkedin, Mail } from "lucide-react";
import { links } from "../data/projects";

const socials = [
    { href: links.github, label: "GitHub", Icon: Github, external: true },
    { href: links.linkedin, label: "LinkedIn", Icon: Linkedin, external: true },
    { href: `mailto:${links.email}`, label: "Email", Icon: Mail, external: false },
];

export default function Footercpt() {
    return(
        <footer className="w-full min-w-0 flex flex-col items-center justify-center px-4 sm:px-6 py-8 bg-forest text-cream border-t border-forest-soft gap-4 box-border">
            <div className="flex flex-row gap-2 shrink-0">
                {socials.map(({ href, label, Icon, external }) => (
                    <a
                        key={label}
                        href={href}
                        aria-label={label}
                        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                        className="p-2 rounded-full transition hover:bg-cream/10 hover:-translate-y-0.5"
                    >
                        <Icon className="w-5 h-5" />
                    </a>
                ))}
            </div>
            <p className="text-xs md:text-sm text-cream/70 text-center">
                © {new Date().getFullYear()} Valentín Cabanas. All rights reserved.
            </p>
        </footer>
    )
}
