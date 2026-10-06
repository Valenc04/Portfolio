"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { tr, type Project } from "../data/projects";
import type { Locale } from "../i18n/config";
import Tag from "./tag";

const MAX_TAGS = 5;

export default function ProjectCard({
  project,
  lang,
  labels,
}: {
  project: Project;
  lang: Locale;
  labels: { screenshotOf: string; logoOf: string };
}) {
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mx}px ${my}px, rgba(22,101,52,0.12), transparent 70%)`;

  const extra = project.stack.length - MAX_TAGS;

  return (
    <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="h-full">
      <Link
        href={`/${lang}/proyectos/${project.slug}`}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          mx.set(e.clientX - r.left);
          my.set(e.clientY - r.top);
        }}
        className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-green-900/10 shadow-sm transition-shadow hover:shadow-xl"
      >
        <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-10" style={{ background: spotlight }} />

        {/* Thumbnail: screenshot si existe, si no el logo sobre un degradé */}
        <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-green-100 via-cream to-amber-50">
          {project.screenshot ? (
            <Image
              src={project.screenshot}
              alt={`${labels.screenshotOf} ${project.name}`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={project.logo}
                alt={`${labels.logoOf} ${project.name}`}
                width={96}
                height={96}
                className="w-20 h-20 rounded-2xl object-cover shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
              />
            </div>
          )}
        </div>

        <div className="flex flex-col flex-1 gap-3 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-green-950 leading-tight">{project.name}</h3>
              <p className="text-sm text-green-800">{tr(project.subtitle, lang)}</p>
            </div>
            <ArrowUpRight className="w-5 h-5 shrink-0 text-green-900/40 transition group-hover:text-green-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{tr(project.summary, lang)}</p>
          <div className="mt-auto pt-2 flex flex-wrap gap-1.5">
            {project.stack.slice(0, MAX_TAGS).map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
            {extra > 0 && <Tag>+{extra}</Tag>}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
