"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "sobre", label: "About me" },
  { id: "skills", label: "Skills" },
  { id: "proyectos", label: "Projects" },
  { id: "contacto", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(isHome ? "home" : "proyectos");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 10);
    setHidden(y > prev && y > 200);
  });

  // Scroll spy: marca la sección visible
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  // Menú mobile: bloquea scroll y cierra con Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setMenuOpen(false);
    if (!isHome) return; // Link navega a "/#id"
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <>
    <motion.nav
      animate={{ y: hidden && !menuOpen ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-[background-color,box-shadow,height] duration-300 ${
        scrolled
          ? "h-14 bg-cream/80 backdrop-blur-md shadow-[0_1px_0_rgba(11,31,23,0.08)]"
          : "h-16 bg-cream"
      }`}
    >
      <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        <Link
          href="/#home"
          onClick={(e) => handleClick(e, "home")}
          className="font-extrabold text-lg tracking-tight text-green-900"
        >
          VC<span className="text-green-600">.</span>
        </Link>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-1 text-sm font-medium isolate">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <Link
                href={`/#${id}`}
                onClick={(e) => handleClick(e, id)}
                aria-current={isHome && active === id ? "true" : undefined}
                className={`relative block px-3 py-1.5 rounded-full transition-colors ${
                  active === id && isHome ? "text-cream" : "text-green-900 hover:text-green-700"
                }`}
              >
                {active === id && isHome && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-forest -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden p-2 -mr-2 text-green-900"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation"
              className="fixed top-0 right-0 z-[80] h-dvh w-72 bg-forest text-cream shadow-2xl rounded-l-2xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
            >
              <div className="flex justify-end p-4">
                <button
                  className="p-2 hover:opacity-70"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  autoFocus
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <motion.ul
                className="flex flex-col items-center gap-6 mt-8 text-lg"
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
              >
                {navLinks.map(({ id, label }) => (
                  <motion.li
                    key={id}
                    variants={{ hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0 } }}
                  >
                    <Link
                      href={`/#${id}`}
                      onClick={(e) => handleClick(e, id)}
                      className={active === id && isHome ? "text-green-400 font-semibold" : "hover:text-green-300"}
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
