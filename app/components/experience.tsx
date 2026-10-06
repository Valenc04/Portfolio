import Image from "next/image";
import { Briefcase, CalendarDays, ExternalLink } from "lucide-react";
import { experience, tr } from "../data/projects";
import type { Locale } from "../i18n/config";
import { Stagger, StaggerItem } from "./motion";
import Tag from "./tag";

export default function Experience({ lang, currentLabel }: { lang: Locale; currentLabel: string }) {
  return (
    <Stagger className="relative flex flex-col gap-8" stagger={0.15}>
      {/* Línea vertical del timeline */}
      <div aria-hidden className="absolute left-6 top-6 bottom-6 w-px bg-green-900/15 hidden sm:block" />

      {experience.map((job) => (
        <StaggerItem key={job.company + job.period.en} className="relative sm:pl-20">
          {/* Logo / ícono sobre la línea */}
          <div className="hidden sm:flex absolute left-0 top-6 w-12 h-12 items-center justify-center rounded-2xl bg-white border border-green-900/10 shadow-sm">
            {job.logo ? (
              <Image src={job.logo} alt={`${job.company} logo`} width={48} height={48} className="w-9 h-9 object-contain" />
            ) : (
              <Briefcase className="w-5 h-5 text-green-800" aria-hidden />
            )}
            {job.current && (
              <span className="absolute -top-1 -right-1 flex w-3 h-3">
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
                <span className="relative w-3 h-3 rounded-full bg-green-600 border-2 border-white" />
              </span>
            )}
          </div>

          <article className="rounded-2xl bg-white/80 border border-green-900/10 p-5 sm:p-7 shadow-sm transition-shadow hover:shadow-lg">
            <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                {job.logo && (
                  <Image src={job.logo} alt="" width={40} height={40} className="sm:hidden w-10 h-10 rounded-xl object-contain" />
                )}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-green-950 leading-tight">{tr(job.role, lang)}</h3>
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-green-700 hover:text-green-900 hover:underline"
                    >
                      {job.company}
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                    </a>
                  ) : (
                    <p className="font-semibold text-green-700">{job.company}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="inline-flex items-center gap-1.5 text-sm text-green-900/70">
                  <CalendarDays className="w-4 h-4" aria-hidden />
                  {tr(job.period, lang)}
                </span>
                {job.current && (
                  <span className="rounded-full bg-green-600/10 text-green-700 border border-green-600/20 px-2.5 py-0.5 text-xs font-semibold">
                    {currentLabel}
                  </span>
                )}
              </div>
            </header>

            <ul className="space-y-2 mb-5 text-green-900/80 leading-relaxed">
              {job.tasks.map((task) => (
                <li key={task.en} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 w-1.5 h-1.5 rounded-full bg-green-600 shrink-0" />
                  <span>{tr(task, lang)}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {job.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </article>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
