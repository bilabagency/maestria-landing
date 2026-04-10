"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";

const axes = [
  {
    title: "Gestion y Administracion de Organizaciones",
    description:
      "Herramientas de liderazgo, planificacion estrategica y administracion de instituciones educativas. Presupuesto, normativa y toma de decisiones.",
  },
  {
    title: "Asesoramiento y Analisis Institucional",
    description:
      "Diagnostico organizacional, mediacion de conflictos, construccion de equipos de trabajo y acompaniamiento a directivos.",
  },
  {
    title: "Politicas y Sistemas Educativos",
    description:
      "Marco normativo nacional y provincial, politicas publicas en educacion, evaluacion institucional y regulacion del sistema.",
  },
  {
    title: "Practicas Profesionales y Proyectos",
    description:
      "Trabajo de campo en instituciones reales. Diseno e implementacion del Proyecto de Intervencion como trabajo final.",
  },
  {
    title: "Formacion Teorico-Metodologica",
    description:
      "Metodologia de la investigacion educativa, epistemologia, estadistica aplicada y produccion academica.",
  },
  {
    title: "Innovacion y Tematicas Electivas",
    description:
      "Seminarios optativos sobre tendencias actuales: tecnologia educativa, inclusion, ESI, educacion ambiental.",
  },
];

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: (typeof axes)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 px-1 text-left transition-colors duration-200 hover:text-brand-primary"
      >
        <span className="flex items-center gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-sm font-semibold text-brand-primary font-mono">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-base font-semibold text-brand-dark">
            {item.title}
          </span>
        </span>
        <CaretDown
          size={20}
          weight="bold"
          className={`shrink-0 text-brand-muted transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pl-13 pr-4 text-brand-muted leading-relaxed text-[15px] ml-12">
              {item.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function StudyPlan() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-brand-primary tracking-wide uppercase mb-3 block">
              Plan de estudios
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-dark mb-4">
              6 ejes de formacion
            </h2>
            <p className="text-brand-muted leading-relaxed max-w-[45ch]">
              16 seminarios organizados en ejes que combinan teoria, practica y
              aplicacion directa en tu contexto profesional.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-2xl bg-white border border-slate-100 p-6 md:p-8">
              {axes.map((item, i) => (
                <AccordionItem
                  key={item.title}
                  item={item}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
