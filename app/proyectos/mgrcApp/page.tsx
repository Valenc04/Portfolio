import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "MgrcApp | Valentín Cabanas",
  description: "Detalle del proyecto MgrcApp — portal de noticias.",
};

export default function MgrcAppProjectPage() {
  return (
    <>
      <main className="flex flex-col w-full min-w-0 max-w-full px-4 sm:px-6 box-border bg-[#f5f1e6] py-16">
        <div className="max-w-6xl mx-auto w-full flex flex-col gap-8">
          <div className="flex flex-row flex-wrap items-center justify-between gap-3 w-full">
            <Link
              href="/#proyectos"
              className="inline-flex items-center gap-2 text-sm font-medium text-green-800 hover:text-green-900 hover:underline font-sans min-w-0"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" aria-hidden />
              Back to projects
            </Link>
            <a
              href="https://mgrc.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0b1f17] text-[#f5f1e6] px-4 py-2.5 text-sm font-medium font-sans transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md shrink-0"
            >
              Live App
              <ExternalLink className="w-4 h-4" aria-hidden />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">
            <div className="flex flex-col gap-3 order-2 sm:order-1 text-center sm:text-left min-w-0 flex-1">
              <p className="text-sm font-semibold text-green-800/80 font-sans tracking-wide uppercase">
                February 2026 -  May 2026
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans text-green-900">
                MGRC App 
              </h1>
              <p className="text-lg sm:text-xl font-bold font-sans text-green-800">
                News Portal
              </p>
            </div>
            <div className="order-1 sm:order-2 shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-gray-100 border-2 border-green-900/10 shadow-sm">
                <Image
                  src="/images/mgrc.jpg"
                  alt="MGRC App logo"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="w-full min-w-0 px-4 sm:px-6 py-16 bg-[#f0f0f0]">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-green-900 tracking-wide">
              Overview
            </h2>
            <p className="text-base sm:text-lg text-green-800 font-sans leading-relaxed">
            MGRC is a Progressive Web App (PWA) for managing a sports club. It helps organize 
            teams (e.g. rugby and hockey), players, fixtures and tournaments, standings, and membership 
            fees. Members and visitors can browse club information, teams, and competitions; admins can 
            maintain data, manage squads, and run day-to-day club operations. The app includes user 
            authentication, a custom REST API, embedded editorial content, and push notifications for 
            important updates.
            The architecture is a React application built with Next.js (App Router). 
            The “backend” is implemented as Next.js route handlers on top of a PostgreSQL database 
            accessed through Prisma, plus a headless CMS for content and Firebase for push messaging.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-green-900 tracking-wide">
              How I built it
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-green-800 font-sans text-left leading-relaxed">
              <p>
                This project was created as part of a bigger idea that my brothers, a friend, and I came up with 
                as club members. We wanted to build a platform that connected families, players, and fans in one 
                place, where club members could interact with news, teams, match schedules, tournaments, and all the 
                latest updates about the club. The main goal was to modernize the way the club communicates with its 
                community and create a more engaging digital experience for everyone involved.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-green-900 tracking-wide text-center sm:text-left">
              Tech stack
            </h2>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md font-sans">
                Next.js
              </span>
              <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md font-sans">
                PostgreSQL
              </span>
              <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md font-sans">
                Prisma
              </span>
              <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md font-sans">
                Firebase
              </span>
              <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md font-sans">
                Tailwind CSS + shadcn/ui
              </span>
              <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md font-sans">
                Redux Toolkit + RKT Query
              </span>
              <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md font-sans">
                Clerk
              </span>
              <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md font-sans">
                Serwist
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
