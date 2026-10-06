"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Screenshot } from "../data/projects";
import type { Locale } from "../i18n/config";
import type { Dictionary } from "../i18n/dictionaries/en";

function Thumb({
  img,
  alt,
  openLabel,
  onClick,
  style,
  priority,
}: {
  img: Screenshot;
  alt: string;
  openLabel: string;
  onClick: () => void;
  style?: React.CSSProperties;
  priority?: boolean;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -4 }}
      style={style}
      className="group relative w-full sm:w-auto min-w-0 overflow-hidden rounded-2xl border border-green-900/10 bg-white shadow-sm hover:shadow-xl transition-shadow"
      aria-label={`${openLabel}: ${alt}`}
    >
      <Image
        src={img.src}
        alt={alt}
        fill
        sizes={priority ? "(max-width: 1024px) 100vw, 1024px" : "(max-width: 640px) 100vw, 600px"}
        className="object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]"
        priority={priority}
      />
    </motion.button>
  );
}

export default function Gallery({
  images,
  lang,
  t,
}: {
  images: Screenshot[];
  lang: Locale;
  t: Dictionary["gallery"];
}) {
  const [open, setOpen] = useState<number | null>(null);
  const go = (d: number) => setOpen((i) => (i === null ? i : (i + d + images.length) % images.length));

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const featured = images.length !== 2;
  const offset = featured ? 1 : 0;
  const row = images.slice(offset);

  return (
    <>
      <div className="flex flex-col gap-4">
        {/* Con 3+ capturas la primera va destacada a todo el ancho; con 2 van juntas en una fila */}
        {featured && (
          <Thumb
            img={images[0]}
            alt={images[0].alt[lang]}
            openLabel={t.open}
            onClick={() => setOpen(0)}
            style={{ aspectRatio: `${images[0].width} / ${images[0].height}` }}
            priority
          />
        )}
        {/* Fila justificada: cada imagen crece según su proporción, así todas quedan a la misma altura */}
        {row.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4">
            {row.map((img, i) => (
              <Thumb
                key={img.src}
                img={img}
                alt={img.alt[lang]}
                openLabel={t.open}
                onClick={() => setOpen(i + offset)}
                style={{ flex: `${img.width / img.height} 1 0%`, aspectRatio: `${img.width} / ${img.height}` }}
                priority={!featured && i === 0}
              />
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={images[open].alt[lang]}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-10"
            onClick={() => setOpen(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              key={open}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
            >
              <Image
                src={images[open].src}
                alt={images[open].alt[lang]}
                width={images[open].width}
                height={images[open].height}
                sizes="100vw"
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              />
              <p className="mt-3 text-center text-sm text-white/80">
                {images[open].alt[lang]} · {open + 1}/{images.length}
              </p>
            </motion.div>

            <button aria-label={t.close} onClick={() => setOpen(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-white hover:bg-white/10">
              <X className="w-6 h-6" />
            </button>
            {images.length > 1 && (
              <>
                <button aria-label={t.previous} onClick={(e) => { e.stopPropagation(); go(-1); }}
                  className="absolute left-2 sm:left-4 p-2 rounded-full text-white bg-black/40 hover:bg-white/10">
                  <ChevronLeft className="w-7 h-7" />
                </button>
                <button aria-label={t.next} onClick={(e) => { e.stopPropagation(); go(1); }}
                  className="absolute right-2 sm:right-4 p-2 rounded-full text-white bg-black/40 hover:bg-white/10">
                  <ChevronRight className="w-7 h-7" />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
