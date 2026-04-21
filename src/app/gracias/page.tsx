import type { Metadata } from "next";
import GraciasContent from "./GraciasContent";

export const metadata: Metadata = {
  title:
    "Programa académico · Maestría en Gestión y Asesoramiento Pedagógico — UNR",
  description:
    "Plan de estudios completo: 16 seminarios, 3 áreas de formación, equipo de 17 docentes y requisitos de ingreso. Título UNR reconocido por CONEAU.",
  robots: { index: false, follow: true },
};

export default function GraciasPage() {
  return <GraciasContent />;
}
