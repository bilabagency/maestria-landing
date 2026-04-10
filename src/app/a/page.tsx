import { variants } from "@/lib/variants";
import LandingPage from "@/components/LandingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Maestria en Gestion Pedagogica — UNR en Santa Fe | Fundacion Jerarquicos Educa",
  description:
    "El titulo que te separa de tu proximo ascenso en educacion. Maestria dictada por la UNR, presencial en Santa Fe. CONEAU. 720 horas. Puntaje docente Decreto 3029.",
};

export default function VariantA() {
  return <LandingPage variant={variants.a} />;
}
