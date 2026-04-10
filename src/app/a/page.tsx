import { variants } from "@/lib/variants";
import LandingPage from "@/components/LandingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Maestría en Gestión Pedagógica — UNR en Santa Fe | Fundación Jerárquicos Educa",
  description:
    "El título que te separa de tu próximo ascenso en educación. Maestría dictada por la UNR, presencial en Santa Fe. CONEAU. 720 horas. Puntaje docente Decreto 3029.",
};

export default function VariantA() {
  return <LandingPage variant={variants.a} />;
}
