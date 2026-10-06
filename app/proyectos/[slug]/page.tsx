import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, KeyRound } from "lucide-react";
import { projects } from "../../data/projects";
import { Reveal } from "../../components/motion";
import Tag from "../../components/tag";
import Gallery from "../../components/gallery";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} | Valentín Cabanas`,
    description: `${project.name} — ${project.summary}`,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <main className="w-full px-4 sm:px-6 py-12 sm:py-16 bg-cream">
        <div className="max-w-5xl mx-auto w-full flex flex-col gap-10">
          <Reveal className="flex flex-row flex-wrap items-center justify-between gap-3">
            <Link
              href="/#proyectos"
              className="group inline-flex items-center gap-2 text-sm font-medium text-green-800 hover:text-green-950"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" aria-hidden />
              Back to projects
            </Link>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-forest text-cream px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              {project.demoLabel ?? "Live demo"}
              <ExternalLink className="w-4 h-4" aria-hidden />
            </a>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col sm:flex-row items-center sm:items-end gap-6 text-center sm:text-left">
            <Image
              src={project.logo}
              alt={`${project.name} logo`}
              width={112}
              height={112}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border border-green-900/10 shadow-md"
              priority
            />
            <div className="flex flex-col gap-2">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-green-700">{project.date}</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-green-950">
                {project.name}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-green-800">{project.subtitle}</p>
            </div>
          </Reveal>

          {project.gallery ? (
            <Reveal delay={0.2}>
              <Gallery images={project.gallery} />
            </Reveal>
          ) : project.screenshot && (
            <Reveal delay={0.2}>
              <Image
                src={project.screenshot}
                alt={`${project.name} screenshot`}
                width={1600}
                height={900}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="w-full h-auto rounded-2xl border border-green-900/10 shadow-xl"
                priority
              />
            </Reveal>
          )}
        </div>
      </main>

      <section className="w-full px-4 sm:px-6 py-16 sm:py-20 bg-mist">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
          <div className="flex flex-col gap-12 min-w-0">
            <Reveal className="flex flex-col gap-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-green-950">Overview</h2>
              <p className="text-base sm:text-lg text-green-900/80 leading-relaxed">{project.overview}</p>
            </Reveal>
            <Reveal className="flex flex-col gap-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-green-950">How I built it</h2>
              <p className="text-base sm:text-lg text-green-900/80 leading-relaxed">{project.howIBuilt}</p>
            </Reveal>
          </div>

          <aside className="flex flex-col gap-6 lg:sticky lg:top-24 self-start w-full">
            <Reveal className="rounded-2xl bg-white/80 border border-green-900/10 p-5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-green-800 mb-3">Tech stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Reveal>
            {project.credentials && (
              <Reveal className="rounded-2xl bg-white/80 border border-green-900/10 p-5">
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-green-800 mb-2">
                  <KeyRound className="w-4 h-4" aria-hidden /> Demo credentials
                </h3>
                <p className="text-sm text-gray-700 font-mono break-all">{project.credentials}</p>
              </Reveal>
            )}
          </aside>
        </div>
      </section>

      <section className="w-full px-4 sm:px-6 py-12 bg-cream">
        <Link
          href={`/proyectos/${next.slug}`}
          className="group max-w-5xl mx-auto flex items-center justify-between gap-4 rounded-2xl border border-green-900/10 bg-white/60 p-5 sm:p-6 transition hover:bg-white hover:shadow-lg"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">Next project</p>
            <p className="text-xl sm:text-2xl font-bold text-green-950">{next.name}</p>
          </div>
          <ArrowRight className="w-6 h-6 text-green-900 transition-transform group-hover:translate-x-1.5" />
        </Link>
      </section>
    </>
  );
}
