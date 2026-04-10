"use client";

import { motion } from "framer-motion";
import { useModal } from "./ModalProvider";
import { Tag, Handshake } from "@phosphor-icons/react";

export default function Investment() {
  const { open } = useModal();

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/3 h-[400px] w-[400px] rounded-full bg-brand-mint/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm font-semibold text-brand-primary tracking-wide uppercase mb-3 block">
            Inversión
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-dark mb-4">
            Planificá tu inversión
          </h2>
          <p className="text-brand-muted text-lg max-w-[55ch]">
            Opciones accesibles con beneficios exclusivos para socios de Mutual
            Jerárquicos y becas por referidos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Matrícula */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-100 bg-white p-8"
          >
            <Tag
              size={24}
              weight="duotone"
              className="text-brand-primary mb-4"
            />
            <p className="text-sm font-semibold text-brand-muted uppercase tracking-wider mb-2">
              Matrícula
            </p>
            <p className="text-4xl font-bold text-brand-dark tracking-tighter font-mono">
              $45.000
            </p>
            <p className="text-brand-muted text-sm mt-2">Pago único de inscripción</p>
          </motion.div>

          {/* No socio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-2xl border border-slate-100 bg-white p-8"
          >
            <p className="text-sm font-semibold text-brand-muted uppercase tracking-wider mb-2">
              Cuota no socio
            </p>
            <p className="text-4xl font-bold text-brand-dark tracking-tighter font-mono">
              $110.000
              <span className="text-lg font-normal text-brand-muted">/mes</span>
            </p>
            <p className="text-brand-muted text-sm mt-2">24 cuotas mensuales</p>
          </motion.div>

          {/* Socio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="rounded-2xl border-2 border-brand-primary/20 bg-brand-primary/5 p-8 relative"
          >
            <span className="absolute top-4 right-4 rounded-full bg-brand-primary px-3 py-1 text-xs font-semibold text-white">
              Mejor precio
            </span>
            <Handshake
              size={24}
              weight="duotone"
              className="text-brand-primary mb-4"
            />
            <p className="text-sm font-semibold text-brand-muted uppercase tracking-wider mb-2">
              Cuota socio Mutual Jerárquicos
            </p>
            <p className="text-4xl font-bold text-brand-dark tracking-tighter font-mono">
              $99.000
              <span className="text-lg font-normal text-brand-muted">/mes</span>
            </p>
            <p className="text-brand-muted text-sm mt-2">24 cuotas mensuales</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 rounded-2xl border border-brand-mint-deep/20 bg-brand-mint/10 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-mint-deep/20 text-emerald-700">
            <Handshake size={22} weight="duotone" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-brand-dark">
              Beca 25% por referidos
            </p>
            <p className="text-brand-muted text-sm">
              Por cada colega que referís y cursa regularmente, obtenés un 25% de
              descuento en tu cuota.
            </p>
          </div>
          <button
            onClick={open}
            className="shrink-0 rounded-xl bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-primary-hover active:scale-[0.98]"
          >
            Descargar programa académico
          </button>
        </motion.div>
      </div>
    </section>
  );
}
