"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Certificate,
  Clock,
  MapPin,
  Scroll,
} from "@phosphor-icons/react";

const credentials = [
  { icon: GraduationCap, label: "UNR" },
  { icon: Certificate, label: "CONEAU" },
  { icon: Clock, label: "720 hs" },
  { icon: MapPin, label: "Presencial" },
  { icon: Scroll, label: "Decreto 3029" },
];

export default function CredentialBar() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {credentials.map((cred) => (
            <div
              key={cred.label}
              className="flex items-center gap-2 text-brand-muted"
            >
              <cred.icon size={22} weight="duotone" className="text-brand-primary" />
              <span className="text-sm font-medium">{cred.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
