import { variants } from "@/lib/variants";
import LandingPage from "@/components/LandingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Competí con respaldo — Maestría en Gestión Pedagógica UNR | Fundación Jerárquicos Educa",
  description:
    "Liderá con fundamentos. Maestría en Gestión y Asesoramiento Pedagógico de la UNR, presencial en Santa Fe. CONEAU. 720 horas. Decreto 3029.",
};

export default function VariantC() {
  return <LandingPage variant={variants.c} />;
}
