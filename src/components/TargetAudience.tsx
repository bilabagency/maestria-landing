"use client";

import { motion } from "framer-motion";
import { ChalkboardTeacher, UserCircleGear } from "@phosphor-icons/react";

const profiles = [
  {
    icon: ChalkboardTeacher,
    title: "Docente en transicion",
    age: "30-42 anios",
    experience: "5-12 anios de experiencia",
    description:
      "Frente a aula, busca ascender a cargos de conduccion. Necesita puntaje docente y formacion en gestion para dar el salto.",
    color: "brand-primary",
    bg: "bg-brand-primary/10",
  },
  {
    icon: UserCircleGear,
    title: "Directivo novel",
    age: "40-55 anios",
    experience: "+15 anios en educacion",
    description:
      "Ya ocupa un cargo de gestion pero necesita profesionalizar su practica con herramientas y marco teorico solido.",
    color: "brand-violet-deep",
    bg: "bg-brand-violet/20",
  },
];

export default function TargetAudience() {
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
            Perfiles
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-dark mb-4">
            A quien esta dirigida?
          </h2>
          <p className="text-brand-muted text-lg max-w-[55ch]">
            La maestria esta pensada para profesionales de la educacion que
            quieren dar un paso adelante en su carrera.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profiles.map((profile, i) => (
            <motion.div
              key={profile.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-2xl border border-slate-100 bg-white p-8 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)]"
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${profile.bg}`}
              >
                <profile.icon
                  size={28}
                  weight="duotone"
                  className={`text-${profile.color}`}
                />
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">
                {profile.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-brand-muted">
                  {profile.age}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-brand-muted">
                  {profile.experience}
                </span>
              </div>
              <p className="text-brand-muted leading-relaxed">
                {profile.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
