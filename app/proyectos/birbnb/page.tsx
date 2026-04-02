import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Birbnb | Valentín Cabanas",
  description: "Detalle del proyecto Birbnb — plataforma de reservas.",
};

export default function BirbnbProjectPage() {
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
              href="https://birbnb-2.netlify.app/app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0b1f17] text-[#f5f1e6] px-4 py-2.5 text-sm font-medium font-sans transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md shrink-0"
            >
              Live demo
              <ExternalLink className="w-4 h-4" aria-hidden />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">
            <div className="flex flex-col gap-3 order-2 sm:order-1 text-center sm:text-left min-w-0 flex-1">
              <p className="text-sm font-semibold text-green-800/80 font-sans tracking-wide uppercase">
                March 2025 - August 2025
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans text-green-900">
                Birbnb 
              </h1>
              <p className="text-lg sm:text-xl font-bold font-sans text-green-800">
                Booking Platform
              </p>
            </div>
            <div className="order-1 sm:order-2 shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-gray-100 border-2 border-green-900/10 shadow-sm">
                <Image
                  src="/images/birbnb.jpg"
                  alt="Birbnb logo"
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
              Birbnb is a web platform that allows users to search and book accommodations easily and quickly. 
              Travelers can explore properties, view photos, prices, and availability. Hosts can view reservation requests, 
              accept or deny them, and receive notifications about new bookings or updates. It connects people looking for a place 
              to stay with those who have spaces to offer. 🏡✈️
              The architecture is based on a React web app with a Node.js + express backend and MongoDB database.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-green-900 tracking-wide">
              How I built it
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-green-800 font-sans text-left leading-relaxed">
              <p>
              This project was developed as part of a university assignment, where the main goal was to learn how to build both a back-end and a front-end for the first time. We started by developing the back-end, then moved on to the front-end, and finally integrated both parts at the end.
              Since it was our first experience working on a project of this kind, we focused more on understanding the fundamentals rather than design, which is why the application does not have a strong UX/UI.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-green-900 tracking-wide text-center sm:text-left">
              Tech stack
            </h2>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md font-sans">
                Swagger
              </span>
              <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md font-sans">
                Node.js
              </span>
              <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md font-sans">
                MongoDB
              </span>
              <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md font-sans">
                React
              </span>
              <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md font-sans">
                Express
              </span>
            </div>
          </div>

          <div className="rounded-lg bg-white/80 border border-green-900/10 p-4 sm:p-6">
            <h3 className="text-sm font-bold text-green-900 uppercase tracking-wide mb-2 font-sans">
              Demo credentials
            </h3>
            <p className="text-sm text-gray-600 font-sans">
              username/password: anfitrion.demo@birbnb.local / Demo1234
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
