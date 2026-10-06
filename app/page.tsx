import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import Hero from "./components/hero";
import ProjectCard from "./components/project-card";
import CopyEmail from "./components/copy-email";
import Tag from "./components/tag";
import { Reveal, Stagger, StaggerItem } from "./components/motion";
import { links, projects, skills } from "./data/projects";

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="flex flex-col items-center text-center gap-2 mb-10">
      <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-green-700">{eyebrow}</span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-green-950">{title}</h2>
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <section id="sobre" className="w-full px-4 sm:px-6 py-20 sm:py-28 bg-mist">
        <div className="max-w-4xl mx-auto">
          <SectionTitle eyebrow="Who I am" title="About me" />
          <div className="flex flex-col md:flex-row items-center gap-10">
            <Reveal className="shrink-0">
              <div className="relative">
                <div aria-hidden className="absolute inset-0 rounded-2xl border-2 border-green-900/20 translate-x-4 translate-y-4" />
                <Image
                  className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-2xl object-cover shadow-lg"
                  src="/images/foto-personal.jpeg"
                  alt="Photo of Valentín Cabanas"
                  width={256}
                  height={320}
                />
              </div>
            </Reveal>
            <Reveal delay={0.15} className="space-y-4 text-base sm:text-lg text-green-900/80 leading-relaxed">
              <p>
                I&apos;m Valentín, a <strong className="text-green-950">Systems Engineering student</strong> at
                Universidad Tecnológica Nacional (UTN-FRBA).
              </p>
              <p>
                Throughout my academic journey, I have worked on several projects that allowed me to develop strong
                technical and problem-solving skills, from university assignments to real apps used by my
                sports club.
              </p>
              <p>
                I am currently seeking my first professional experience as a{" "}
                <strong className="text-green-950">Software Developer</strong>, where I can keep growing, improve my
                abilities, and gain hands-on experience in the field.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="skills" className="w-full px-4 sm:px-6 py-20 sm:py-28 bg-cream">
        <div className="max-w-5xl mx-auto">
          <SectionTitle eyebrow="What I work with" title="Skills" />
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map(({ group, items }) => (
              <StaggerItem key={group} className="rounded-2xl bg-white/70 border border-green-900/10 p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-green-800 mb-3">{group}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="proyectos" className="w-full px-4 sm:px-6 py-20 sm:py-28 bg-mist">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="What I've built" title="Projects" />
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.12}>
            {projects.map((p) => (
              <StaggerItem key={p.slug} className="h-full">
                <ProjectCard project={p} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="contacto" className="w-full px-4 sm:px-6 py-20 sm:py-28 bg-cream">
        <div className="max-w-2xl mx-auto text-center">
          <SectionTitle eyebrow="Contact" title="Let's get in touch" />
          <Reveal className="flex flex-col items-center gap-8">
            <p className="text-base sm:text-lg text-green-900/80 leading-relaxed">
              I&apos;m always looking for new opportunities to work on interesting projects. If you have any
              questions or want to discuss a potential collaboration, feel free to reach out.
            </p>

            <a
              href={`mailto:${links.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-forest text-cream px-6 py-3.5 font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Say hello
            </a>

            <div className="w-full max-w-md rounded-2xl bg-white/70 border border-green-900/10 divide-y divide-green-900/10 text-left">
              <div className="flex items-center gap-3 p-3 pl-4">
                <Mail className="w-5 h-5 text-green-800 shrink-0" />
                <a href={`mailto:${links.email}`} className="flex-1 min-w-0 truncate text-green-950 hover:underline">
                  {links.email}
                </a>
                <CopyEmail email={links.email} />
              </div>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 text-green-950 hover:bg-green-900/5 transition-colors">
                <Linkedin className="w-5 h-5 text-green-800" /> LinkedIn
              </a>
              <a href={links.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 text-green-950 hover:bg-green-900/5 transition-colors rounded-b-2xl">
                <Github className="w-5 h-5 text-green-800" /> GitHub
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
