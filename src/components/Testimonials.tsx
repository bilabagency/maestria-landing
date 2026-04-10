"use client";

import { motion } from "framer-motion";
import { Quotes, User } from "@phosphor-icons/react";

const testimonials = [
  {
    quote: "Proximamente",
    name: "Nombre del egresado/a",
    role: "Cargo / Institucion",
  },
  {
    quote: "Proximamente",
    name: "Nombre del egresado/a",
    role: "Cargo / Institucion",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm font-semibold text-brand-primary tracking-wide uppercase mb-3 block">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-dark">
            Lo que dicen quienes cursaron
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-2xl border border-slate-100 bg-white p-8"
            >
              <Quotes
                size={32}
                weight="fill"
                className="text-brand-primary/20 mb-4"
              />
              <p className="text-brand-dark text-lg italic leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                  <User
                    size={24}
                    weight="duotone"
                    className="text-brand-muted"
                  />
                </div>
                <div>
                  <p className="font-semibold text-brand-dark text-sm">
                    {t.name}
                  </p>
                  <p className="text-brand-muted text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
