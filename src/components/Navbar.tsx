"use client";

import { useState, useEffect } from "react";
import { useModal } from "./ModalProvider";

export default function Navbar() {
  const { open } = useModal();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://fundacionjerarquicos.org.ar/wp-content/uploads/2024/11/logo-jerarquicos-educa_menu.svg"
            alt="Fundacion Jerarquicos Educa"
            className="h-10 w-auto"
          />
          <button
            onClick={open}
            className="rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-primary-hover active:scale-[0.98]"
          >
            Descargar programa
          </button>
        </div>
      </div>
    </nav>
  );
}
