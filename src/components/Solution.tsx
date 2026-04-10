"use client";

import { motion } from "framer-motion";
import { useModal } from "./ModalProvider";

export default function Solution() {
  const { open } = useModal();

  return (
    <section className="py-20 md:py-28 bg-slate-50/50 relative overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-brand-violet/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-brand-primary tracking-wide uppercase mb-3 block">
              La solución
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-dark mb-6">
              Maestría en Gestión y Asesoramiento Pedagógico de las
              Organizaciones Educativas
            </h2>
            <div className="space-y-4 text-brand-muted leading-relaxed max-w-[65ch]">
              <p>
                Un programa de posgrado con enfoque profesional, no solo teórico.
                Cada seminario está diseñado para que apliques lo aprendido
                directamente en tu institución educativa.
              </p>
              <p>
                El trabajo final es un Proyecto de Intervención: una propuesta
                real de mejora que diseñás e implementás en tu propia
                organización durante la cursada.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="rounded-2xl bg-white border border-slate-100 p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
              <dl className="space-y-5">
                {[
                  ["Título oficial", "Magíster (UNR)"],
                  ["Modalidad", "Presencial en Santa Fe Capital"],
                  ["Sede", "Fundación Jerárquicos Educa"],
                  ["Duración", "2 años — 16 seminarios — 720 hs"],
                  ["Inicio", "15 de mayo"],
                  ["Reconocimiento", "CONEAU + Decreto 3029"],
                ].map(([label, value]) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <dt className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
                      {label}
                    </dt>
                    <dd className="text-base font-medium text-brand-dark">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <button
                onClick={open}
                className="mt-8 w-full rounded-xl bg-brand-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-primary-hover active:scale-[0.98]"
              >
                Descargar programa académico
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
