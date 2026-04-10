"use client";

import { motion } from "framer-motion";
import { Trophy, Compass, MapTrifold } from "@phosphor-icons/react";

const pains = [
  {
    icon: Trophy,
    pain: "Perdes concursos por falta de puntaje",
    solution:
      "La maestria otorga maximo puntaje docente segun Decreto 3029 con 720 hs acreditadas.",
  },
  {
    icon: Compass,
    pain: "Gestionas por intuicion, no por formacion",
    solution:
      "Formacion interdisciplinaria en liderazgo, legislacion, planificacion estrategica y mediacion.",
  },
  {
    icon: MapTrifold,
    pain: "No podes viajar a Rosario para estudiar",
    solution:
      "Titulo de la UNR dictado en Santa Fe Capital. Incluye curso de ingles para la titulacion.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-brand-mint/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-dark mb-4">
            Te sentis identificado/a?
          </h2>
          <p className="text-brand-muted text-lg max-w-[55ch]">
            Si alguna de estas situaciones te resulta familiar, esta maestria fue
            disenada para vos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pains.map((item, i) => (
            <motion.div
              key={item.pain}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-2xl border border-slate-100 bg-white p-8 transition-all duration-300 hover:border-brand-primary/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary transition-colors duration-200 group-hover:bg-brand-primary group-hover:text-white">
                <item.icon size={24} weight="duotone" />
              </div>
              <h3 className="text-lg font-semibold text-brand-dark mb-3">
                {item.pain}
              </h3>
              <p className="text-brand-muted leading-relaxed text-[15px]">
                {item.solution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
