import { variants } from "@/lib/variants";
import LandingPage from "@/components/LandingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Tu proximo cargo directivo empieza aca — Maestria UNR | Fundacion Jerarquicos Educa",
  description:
    "Maestria en Gestion y Asesoramiento Pedagogico. Dictada por la UNR en Santa Fe. CONEAU. 720 horas. Puntaje docente. Inicio mayo.",
};

export default function VariantB() {
  return <LandingPage variant={variants.b} />;
}
