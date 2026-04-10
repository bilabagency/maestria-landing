"use client";

import { motion } from "framer-motion";
import {
  Buildings,
  Briefcase,
  UsersThree,
  Translate,
} from "@phosphor-icons/react";

const items = [
  {
    icon: Buildings,
    title: "UNR en Santa Fe",
    description:
      "El prestigio de una universidad pública nacional con la comodidad de cursar en tu ciudad.",
  },
  {
    icon: Briefcase,
    title: "Maestría profesional",
    description:
      "Tu trabajo final es un proyecto real de mejora que aplicás en tu propia escuela o institución.",
  },
  {
    icon: UsersThree,
    title: "Becas 25% por referidos",
    description:
      "Por cada colega que referís y cursa regularmente, obtenés un 25% de descuento en tu cuota.",
  },
  {
    icon: Translate,
    title: "Curso de inglés incluido",
    description:
      "Preparación para el requisito de idioma integrada al programa, sin costos adicionales.",
  },
];

export default function Differentials() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 right-0 h-[350px] w-[350px] rounded-full bg-brand-mint/15 blur-3xl -translate-y-1/2" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm font-semibold text-brand-primary tracking-wide uppercase mb-3 block">
            Por qué esta maestría
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-dark">
            Lo que nos diferencia
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex gap-5 rounded-2xl border border-slate-100 bg-white p-7 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] hover:border-brand-primary/15"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                <item.icon size={24} weight="duotone" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-brand-dark mb-1.5">
                  {item.title}
                </h3>
                <p className="text-brand-muted leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
