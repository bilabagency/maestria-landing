"use client";

import { motion } from "framer-motion";
import { User } from "@phosphor-icons/react";

const faculty = [
  {
    name: "Dr. Gerardo Kahan",
    role: "Director de la Maestría",
    bio: "Doctor UNR, Categoría II en el Programa de Incentivos. Especialista en gestión educativa y políticas institucionales.",
  },
  {
    name: "Dr. Adolfo Stubrin",
    role: "Políticas educativas y gestión universitaria",
    bio: "Referente nacional en políticas de educación superior, evaluación institucional y sistemas universitarios.",
  },
  {
    name: "Dra. Carolina Tramallino",
    role: "Lectura y escritura en educación superior",
    bio: "Investigadora en prácticas de lectura y escritura académica, formación docente y didáctica universitaria.",
  },
];

export default function Faculty() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-brand-violet/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm font-semibold text-brand-primary tracking-wide uppercase mb-3 block">
            Equipo académico
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-dark">
            Docentes destacados
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {faculty.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-2xl border border-slate-100 bg-white p-7"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
                <User size={32} weight="duotone" className="text-brand-muted" />
              </div>
              <h3 className="text-lg font-semibold text-brand-dark mb-1">
                {person.name}
              </h3>
              <p className="text-sm font-medium text-brand-primary mb-3">
                {person.role}
              </p>
              <p className="text-brand-muted leading-relaxed text-[15px]">
                {person.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
