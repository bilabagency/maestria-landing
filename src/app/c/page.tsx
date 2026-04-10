import { variants } from "@/lib/variants";
import LandingPage from "@/components/LandingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Competi con respaldo — Maestria en Gestion Pedagogica UNR | Fundacion Jerarquicos Educa",
  description:
    "Lidera con fundamentos. Maestria en Gestion y Asesoramiento Pedagogico de la UNR, presencial en Santa Fe. CONEAU. 720 horas. Decreto 3029.",
};

export default function VariantC() {
  return <LandingPage variant={variants.c} />;
}
