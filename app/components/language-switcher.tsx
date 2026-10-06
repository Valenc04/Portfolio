"use client";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "motion/react";
import { LOCALE_COOKIE, locales, type Locale } from "../i18n/config";

function saveLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

export default function LanguageSwitcher({
  lang,
  label,
  dark = false,
}: {
  lang: Locale;
  label: string;
  dark?: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (next: Locale) => {
    if (next === lang) return;
    saveLocale(next);
    // /es/proyectos/birbnb -> /en/proyectos/birbnb, conservando el #hash
    const rest = pathname.replace(/^\/(es|en)(?=\/|$)/, "");
    router.push(`/${next}${rest}${window.location.hash}`, { scroll: false });
  };

  return (
    <div
      role="group"
      aria-label={label}
      className={`relative isolate flex items-center rounded-full p-0.5 text-xs font-semibold ${
        dark ? "bg-cream/10" : "bg-green-900/10"
      }`}
    >
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchTo(l)}
          aria-pressed={l === lang}
          lang={l}
          className={`relative px-2.5 py-1 rounded-full uppercase transition-colors ${
            l === lang ? (dark ? "text-forest" : "text-cream") : dark ? "text-cream/70 hover:text-cream" : "text-green-900/70 hover:text-green-900"
          }`}
        >
          {l === lang && (
            <motion.span
              layoutId={dark ? "lang-pill-dark" : "lang-pill"}
              className={`absolute inset-0 -z-10 rounded-full ${dark ? "bg-cream" : "bg-forest"}`}
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
            />
          )}
          {l}
        </button>
      ))}
    </div>
  );
}
