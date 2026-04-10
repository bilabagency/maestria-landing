"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";

const faqs = [
  {
    question: "Cual es la frecuencia de clases y donde se dictan?",
    answer:
      "Las clases se dictan en modalidad presencial intensiva, generalmente en formato quincenal o mensual (segun el seminario), en la sede de Fundacion Jerarquicos Educa en Santa Fe Capital. Los encuentros se concentran en viernes y sabados para facilitar la asistencia de profesionales en actividad.",
  },
  {
    question: "Es 100% presencial o hay instancias virtuales?",
    answer:
      "El programa es de modalidad presencial, lo que garantiza la interaccion directa con docentes y colegas. Algunas actividades complementarias o de seguimiento pueden realizarse de forma virtual, pero el nucleo formativo es presencial.",
  },
  {
    question: "Que pasa si mi titulo es de menos de 4 anios?",
    answer:
      "Si tu titulo de grado tiene menos de 4 anios de duracion, podrias acceder con un postitulo o cursando una nivelacion. Te recomendamos completar el formulario de consulta para que evaluemos tu caso particular.",
  },
  {
    question: "Como es el examen de idioma y cuando se rinde?",
    answer:
      "El requisito de idioma extranjero se cumple a traves de un examen de comprension lectora en ingles. La maestria incluye un curso de preparacion sin costo adicional. El examen se rinde antes de la defensa del trabajo final.",
  },
  {
    question: "Cual es el valor de la matricula y cuantas cuotas son?",
    answer:
      "La matricula es de $45.000 (pago unico). Luego se abona en 24 cuotas mensuales: $110.000 para no socios o $99.000 para socios de Mutual Jerarquicos. Ademas, por cada colega que referis y cursa regularmente, obtenes un 25% de beca.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
              Preguntas frecuentes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-dark mb-4">
              Dudas comunes
            </h2>
            <p className="text-brand-muted leading-relaxed max-w-[40ch]">
              Si tu pregunta no esta aca, completa el formulario y te respondemos
              a la brevedad.
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
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border-b border-slate-100 last:border-b-0"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === i ? null : i)
                    }
                    className="flex w-full items-start justify-between py-5 px-1 text-left transition-colors duration-200 hover:text-brand-primary gap-4"
                  >
                    <span className="text-base font-semibold text-brand-dark leading-snug">
                      {faq.question}
                    </span>
                    <CaretDown
                      size={20}
                      weight="bold"
                      className={`shrink-0 mt-0.5 text-brand-muted transition-transform duration-300 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-8 text-brand-muted leading-relaxed text-[15px]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
