"use client";

import { useState, useEffect } from "react";
import { GraduationCap } from "@phosphor-icons/react";
import { useModal } from "./ModalProvider";
import type { HeroVariant } from "@/lib/variants";

export default function Navbar({ variant }: { variant?: HeroVariant }) {
  const { open } = useModal();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-[background-color,box-shadow] duration-300 ${
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
            alt="Fundación Jerárquicos Educa"
            className="h-10 w-auto"
          />
          <div className="flex items-center gap-3">
            {variant?.navbarBadge && (
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-brand-primary/10 px-3 py-1.5 text-xs font-medium text-brand-primary">
                <GraduationCap size={14} weight="bold" />
                {variant.navbarBadge}
              </span>
            )}
            <button
              onClick={open}
              className="rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-brand-primary-hover active:scale-[0.98]"
            >
              Descargar programa
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
