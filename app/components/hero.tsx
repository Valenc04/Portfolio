"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown, ArrowRight, Github, Linkedin } from "lucide-react";
import { links } from "../data/projects";

const ease = [0.22, 1, 0.36, 1] as const;
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function Hero() {
  return (
    <main
      id="home"
      className="relative flex flex-col justify-center w-full min-h-[calc(100svh-4rem)] px-4 sm:px-6 py-16 bg-cream overflow-hidden"
    >
      {/* Manchas de color de fondo */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-green-200/40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-24 w-[24rem] h-[24rem] rounded-full bg-amber-200/40 blur-3xl" />

      <div className="relative max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <motion.div
          className="flex flex-col gap-5 text-center md:text-left items-center md:items-start max-w-xl"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-green-900/15 bg-white/60 px-3 py-1 text-xs sm:text-sm font-medium text-green-900"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
              <span className="relative w-2 h-2 rounded-full bg-green-600" />
            </span>
            Open to work
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-green-950"
          >
            Hi, I&apos;m Valentín Cabanas
          </motion.h1>

          <motion.p variants={item} className="text-lg sm:text-xl font-semibold text-green-800">
            Systems Engineering Student · Full-Stack Developer
          </motion.p>

          <motion.p variants={item} className="text-base sm:text-lg text-green-900/70 leading-relaxed">
            I build web applications end to end with React, Next.js and Node.js, from the database to
            the interface.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-2 rounded-full bg-forest text-cream px-5 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              View projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-green-900/25 px-5 py-3 text-sm font-semibold text-green-900 transition hover:bg-green-900/5 hover:-translate-y-0.5"
            >
              Contact me
            </a>
            <div className="flex items-center gap-1 ml-1">
              <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="p-2.5 rounded-full text-green-900 transition hover:bg-green-900/10">
                <Github className="w-5 h-5" />
              </a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="p-2.5 rounded-full text-green-900 transition hover:bg-green-900/10">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="shrink-0"
          initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div aria-hidden className="absolute inset-0 rounded-full bg-green-900/10 translate-x-3 translate-y-3" />
            <Image
              className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-xl"
              src="/images/chico-crema5.png"
              alt="Illustrated portrait of Valentín Cabanas"
              width={320}
              height={320}
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        aria-label="Scroll to About me"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-green-900/60 hover:text-green-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" } }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.a>
    </main>
  );
}
