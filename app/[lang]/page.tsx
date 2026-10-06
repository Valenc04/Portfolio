import Image from "next/image";
import { notFound } from "next/navigation";
import { Github, Linkedin, Mail } from "lucide-react";
import Hero from "../components/hero";
import Experience from "../components/experience";
import ProjectCard from "../components/project-card";
import CopyEmail from "../components/copy-email";
import Tag from "../components/tag";
import Rich from "../components/rich";
import { Reveal, Stagger, StaggerItem } from "../components/motion";
import { links, projects, skills, tr } from "../data/projects";
import { isLocale } from "../i18n/config";
import { getDictionary } from "../i18n/get-dictionary";

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="flex flex-col items-center text-center gap-2 mb-10">
      <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-green-700">{eyebrow}</span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-green-950">{title}</h2>
    </Reveal>
  );
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <Hero t={t.hero} />

      <section id="sobre" className="w-full px-4 sm:px-6 py-20 sm:py-28 bg-mist">
        <div className="max-w-4xl mx-auto">
          <SectionTitle eyebrow={t.about.eyebrow} title={t.about.title} />
          <div className="flex flex-col md:flex-row items-center gap-10">
            <Reveal className="shrink-0">
              <div className="relative">
                <div aria-hidden className="absolute inset-0 rounded-2xl border-2 border-green-900/20 translate-x-4 translate-y-4" />
                <Image
                  className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-2xl object-cover shadow-lg"
                  src="/images/foto-personal.jpeg"
                  alt={t.about.photoAlt}
                  width={256}
                  height={320}
                />
              </div>
            </Reveal>
            <Reveal delay={0.15} className="space-y-4 text-base sm:text-lg text-green-900/80 leading-relaxed">
              {t.about.paragraphs.map((p) => (
                <p key={p}>
                  <Rich text={p} />
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section id="experiencia" className="w-full px-4 sm:px-6 py-20 sm:py-28 bg-cream">
        <div className="max-w-4xl mx-auto">
          <SectionTitle eyebrow={t.experience.eyebrow} title={t.experience.title} />
          <Experience lang={lang} currentLabel={t.experience.current} />
        </div>
      </section>

      <section id="skills" className="w-full px-4 sm:px-6 py-20 sm:py-28 bg-mist">
        <div className="max-w-5xl mx-auto">
          <SectionTitle eyebrow={t.skills.eyebrow} title={t.skills.title} />
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map(({ group, items }, i) => (
              <StaggerItem
                key={group.en}
                className={`rounded-2xl bg-white/70 border border-green-900/10 p-5 ${i === 0 ? "sm:col-span-2" : ""}`}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-green-800 mb-3">{tr(group, lang)}</h3>
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

      <section id="proyectos" className="w-full px-4 sm:px-6 py-20 sm:py-28 bg-cream">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow={t.projects.eyebrow} title={t.projects.title} />
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.12}>
            {projects.map((p) => (
              <StaggerItem key={p.slug} className="h-full">
                <ProjectCard project={p} lang={lang} labels={t.projects} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="contacto" className="w-full px-4 sm:px-6 py-20 sm:py-28 bg-mist">
        <div className="max-w-2xl mx-auto text-center">
          <SectionTitle eyebrow={t.contact.eyebrow} title={t.contact.title} />
          <Reveal className="flex flex-col items-center gap-8">
            <p className="text-base sm:text-lg text-green-900/80 leading-relaxed">{t.contact.text}</p>

            <a
              href={`mailto:${links.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-forest text-cream px-6 py-3.5 font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Mail className="w-5 h-5" />
              {t.contact.sayHello}
            </a>

            <div className="w-full max-w-md rounded-2xl bg-white/70 border border-green-900/10 divide-y divide-green-900/10 text-left">
              <div className="flex items-center gap-3 p-3 pl-4">
                <Mail className="w-5 h-5 text-green-800 shrink-0" />
                <a href={`mailto:${links.email}`} className="flex-1 min-w-0 truncate text-green-950 hover:underline">
                  {links.email}
                </a>
                <CopyEmail email={links.email} labels={t.contact} />
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
