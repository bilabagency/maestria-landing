import { variants } from "@/lib/variants";
import LandingPage from "@/components/LandingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Tu próximo cargo directivo empieza acá — Maestría UNR | Fundación Jerárquicos Educa",
  description:
    "Maestría en Gestión y Asesoramiento Pedagógico. Dictada por la UNR en Santa Fe. CONEAU. 720 horas. Puntaje docente. Inicio mayo.",
};

export default function VariantB() {
  return <LandingPage variant={variants.b} />;
}
