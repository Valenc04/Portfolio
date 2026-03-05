"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 flex justify-between items-center px-4 sm:px-6 bg-[#f5f1e6] border border-black/10 text-black z-50 min-w-0">

      {/* Links Desktop */}
      <div className="hidden md:flex gap-6 font-sans">
        <a href="#home" onClick={handleSmoothScroll}>Home</a>
        <a href="#sobre" onClick={handleSmoothScroll}>About me</a>
        <a href="#proyectos" onClick={handleSmoothScroll}>Projects</a>
        <a href="#contacto" onClick={handleSmoothScroll}>Contact</a>
      </div>

      {/* Botón Hamburguesa */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(true)}
      >
        ☰
      </button>

      {/* Overlay oscuro */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Panel lateral */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-[#0b1f17] text-[#f5f1e6] shadow-2xl rounded-l-2xl border-l border-green-900 transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-6">
          <button
            className="text-2xl hover:opacity-70"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col items-center gap-8 mt-8 font-sans">
          <a href="#home" onClick={handleSmoothScroll}>Home</a>
          <a href="#sobre" onClick={handleSmoothScroll}>About me</a>
          <a href="#proyectos" onClick={handleSmoothScroll}>Projects</a>
          <a href="#contacto" onClick={handleSmoothScroll}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
