"use client";

import { motion } from "framer-motion";
import FormFields from "./FormFields";

export default function ContactForm() {
  return (
    <section id="formulario" className="py-20 md:py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-brand-violet/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-brand-mint/15 blur-3xl" />

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
              Contacto
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-dark mb-4">
              Da el primer paso. Solicita informacion.
            </h2>
            <p className="text-brand-muted leading-relaxed max-w-[40ch]">
              Completa el formulario y recibiras el programa academico completo
              en tu email.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-brand-muted text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                Respuesta en menos de 24 hs
              </div>
              <div className="flex items-center gap-3 text-brand-muted text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                Tus datos estan protegidos
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-2xl border border-slate-100 bg-white p-6 md:p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
              <FormFields submitLabel="Enviar consulta" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
