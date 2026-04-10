"use client";

import { motion } from "framer-motion";
import { useModal } from "./ModalProvider";
import type { HeroVariant } from "@/lib/variants";
import {
  GraduationCap,
  MapPin,
  Certificate,
  Scroll,
} from "@phosphor-icons/react";

const badges = [
  { label: "UNR", icon: GraduationCap },
  { label: "CONEAU", icon: Certificate },
  { label: "Presencial en Santa Fe", icon: MapPin },
  { label: "Decreto 3029", icon: Scroll },
];

export default function Hero({ variant }: { variant: HeroVariant }) {
  const { open } = useModal();

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-blob absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-brand-violet/20 blur-3xl" />
        <div className="animate-blob-delayed absolute top-1/2 -left-48 h-[400px] w-[400px] rounded-full bg-brand-mint/25 blur-3xl" />
        <div className="animate-blob-slow absolute -bottom-24 right-1/4 h-[350px] w-[350px] rounded-full bg-brand-violet-deep/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Text — takes 3/5 on desktop */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-1.5 text-sm font-medium text-brand-primary">
              <GraduationCap size={18} weight="bold" />
              Inicio 15 de mayo
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tighter leading-none text-brand-dark mb-6 text-balance">
              {variant.title}
            </h1>

            <p className="text-lg md:text-xl text-brand-muted leading-relaxed max-w-[55ch] mb-8">
              {variant.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={open}
                className="rounded-xl bg-brand-primary px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-brand-primary-hover active:scale-[0.98] active:-translate-y-[1px]"
              >
                Descargar programa academico
              </button>
              <a
                href="#formulario"
                className="rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-base font-semibold text-brand-dark transition-all duration-200 hover:border-brand-primary hover:text-brand-primary active:scale-[0.98] text-center"
              >
                Conocer la carrera
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white/80 border border-slate-100 px-3 py-1.5 text-sm text-brand-muted shadow-sm"
                >
                  <badge.icon size={16} weight="duotone" />
                  {badge.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Visual — takes 2/5 on desktop */}
          <motion.div
            className="hidden lg:flex lg:col-span-2 items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="relative w-full aspect-square max-w-[400px]">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand-violet/30 via-brand-mint/20 to-brand-primary/10 backdrop-blur-sm border border-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)]" />
              <div className="absolute inset-6 rounded-[2rem] bg-white/60 backdrop-blur-md border border-white/50 flex flex-col items-center justify-center p-8 gap-4">
                <GraduationCap
                  size={64}
                  weight="duotone"
                  className="text-brand-primary"
                />
                <p className="text-center text-sm font-semibold text-brand-dark leading-snug">
                  Maestria en Gestion
                  <br />y Asesoramiento Pedagogico
                </p>
                <span className="text-xs text-brand-muted font-medium tracking-wide uppercase">
                  Universidad Nacional de Rosario
                </span>
                <div className="flex gap-2 mt-2">
                  <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-medium text-brand-primary">
                    720 hs
                  </span>
                  <span className="rounded-full bg-brand-violet/20 px-3 py-1 text-xs font-medium text-brand-violet-deep">
                    2 anios
                  </span>
                  <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-xs font-medium text-emerald-700">
                    16 seminarios
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
